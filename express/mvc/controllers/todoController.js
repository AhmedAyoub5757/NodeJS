const todos = [
    { id: 1, title: 'Learn Node.js', completed: true },
    { id: 2, title: 'Build a REST API', completed: false },
    { id: 3, title: 'Write Unit Tests', completed: false }
     
];

export const getTodos = (req, res) => {
    res.json(todos);
}

export const addTodo = (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
}