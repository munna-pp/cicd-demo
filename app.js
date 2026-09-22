const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('CI/CD Demo Application - Version 2');
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});