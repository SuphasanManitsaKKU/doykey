const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

// Start the server
const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
