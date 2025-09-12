import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/users', async (req, res)=> {
    const { username, password, role } = req.body;

    try{
        const newUser = new User({username, password, role});
        await newUser.save();
        res.status(201).json({message: 'User created successfully', user: newUser});
    }catch(err){
        res.status(400).json({message: 'Error creating user', error: err.message});
    }

});

router.get('/users', async (req, res)=> {
    try {
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.status(500).json({message: 'Error fetching users', error: err.message});
    }
})

export default router;

