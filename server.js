const express = require("express");

const app = express();

const PORT = 3000;

const foods = [
    {
        id: 1,
        food: "Adobo",
        price: 75
    },
    {
        id: 2,
        food: "Fried Chicken",
        price: 50
    },
    {
        id: 3,
        food: "Yum Burger",
        price: 70
    }
];

// Retrieve all foods
app.get("/api/foods", (req, res) => {
    res.json(foods);
});

// Retrieve one food through id
app.get("/api/foods/:id", (req, res) => {
    const id = Number(req.params.id);
    const food = foods.find(food =>
        food.id == id
    );

    if (!food) {
        return res.status(404).json({
            message: "Food not found"
        });
    }

    res.json(food);
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});