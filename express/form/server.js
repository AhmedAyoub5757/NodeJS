import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res)=>{
//     res.send(`<h1>Form Handling</h1>`);
// }) 

const publicPath = path.join(path.resolve(), 'public');
app.use(express.static(publicPath));


app.use(express.urlencoded({extended: true}));

app.post('/submit', (req, res)=> {
    console.log('Form submitted: \n', req.body);
    res.send(`<!DOCTYPE html>
  <html>
    <head>
      <title>Form Submitted</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <h1 class="success">Form Submitted</h1>
      <p class="newname">Name: ${req.body.name}</p>
      <p class="newemail">Email: ${req.body.email}</p>
      <a href="/" class="newanchor">Go Back</a>
    </body>
  </html>
    `);
    // res.redirect('/');
})



app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});