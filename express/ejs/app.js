import express from 'express'

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
// app.set('views', './views'); by default it looks for views folder if other set here

const posts = [
  { title: "First Post", content: "This is my very first blog post." },
  { title: "Second Post", content: "Learning EJS with Express is fun!" },
  { title: "Third Post", content: "Partials make templates reusable." }
];

app.get('/', (req, res)=> {
    res.render("pages/home.ejs", { posts });
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});

