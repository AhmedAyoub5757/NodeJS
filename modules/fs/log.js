const fs = require("fs");

// Step 1: Get current timestamp
const logEntry = `Log entry at: ${new Date().toLocaleString()}\n`;

// Step 2: Append log entry to activity.log
fs.appendFile("activity.log", logEntry, (err) => {
  if (err) {
    console.error("Error writing log:", err);
    return;
  }

  console.log("Log entry added.");

  // Step 3: Read all logs
  fs.readFile("activity.log", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading log:", err);
      return;
    }

    // Step 4: Display logs
    console.log("All past logs:\n", data);
  });
});
