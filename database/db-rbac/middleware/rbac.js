import { getSessionUser } from "./auth.js";

// rolesPermissions table
const rolesPermissions = {
  viewer: ["read:blogs"],
  editor: ["read:blogs", "create:blogs", "edit:own:blogs", "delete:own:blogs"],
  moderator: ["read:blogs", "delete:any:comments"], // later we'll add comments
  admin: ["*"] // wildcard: everything
};

export const requirePermission = (action) => {
  return (req, res, next) => {
    const { username } = req.body;
    const sessionUser = getSessionUser(username);

    if (!sessionUser) {
      return res.status(401).json({ error: "Not logged in" });
    }

    const role = sessionUser.role;
    const permissions = rolesPermissions[role] || [];

    if (permissions.includes("*") || permissions.includes(action)) {
      req.user = sessionUser; // attach for later (like ownership checks)
      return next();
    }

    return res.status(403).json({ error: "Forbidden: insufficient role" });
  };
};
