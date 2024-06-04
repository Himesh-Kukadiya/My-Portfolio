import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';


const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });


// Define schema and model
const { Schema } = mongoose;
const formSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});
const Form = mongoose.model('Form', formSchema);

// Initialize express
const app = express();

// Apply middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(compression());

// Define POST /submit endpoint
app.post('/submit', async (req, res) => {
    try {
        const form = new Form(req.body);
        await form.save();
        res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Failed to save form data:', error);
        res.status(500).json({ message: 'Failed to save form data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
