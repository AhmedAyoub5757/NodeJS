import express from 'express';
import { MongoClient } from 'mongodb';


const app = express();


const port = 3000;

app.use(express.json());

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'todoApp';

async function  main() {

    await client.connect();
    console.log('Connected successfully to MongoDB server');

    const db = client.db(dbName);
    const todosCollection = db.collection('todos');

    app.post('/todos', async (req, res)=> {
        const {title} = req.body;
        if(!title) {
            return res.status(400).send({error: 'Title is required'});
        }
        const newTodo = {title, completed: false};
        const result = await todosCollection.insertOne(newTodo);
        res.status(201).json(result);
    })

    app.get('/todos', async (req, res) => {
        const todos = await todosCollection.find({}).toArray();
        res.json(todos);
    }); 

    app.get('/', (req, res)=> {
        res.send("Hello, Express with MongoDB!");
    })

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    }); 
}

main().catch(console.error);
