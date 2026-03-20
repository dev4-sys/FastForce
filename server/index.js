const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('✅ FastForce Backend is officially Working!');
});

app.get('/api/jobs', (req, res) => {
    const jobs = [
        { id: 1, title: "Forklift Driver", location: "Auckland" },
        { id: 2, title: "Civil Labourer", location: "Christchurch" }
    ];
    res.json(jobs);
});

app.listen(5000, () => {
    console.log('🚀 Server is running on http://localhost:5000');
});