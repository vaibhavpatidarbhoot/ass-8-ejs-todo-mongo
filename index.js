const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// Task schema & model
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    priority: { type: String, enum: ["high", "medium", "low"], required: true },
    done: { type: Boolean, default: false }
});
const Task = mongoose.model("Task", taskSchema);

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", async (req, res) => {
    const filter = req.query.priority || "all";
    let tasks;

    if (filter === "all") {
        tasks = await Task.find();
    } else {
        tasks = await Task.find({ priority: filter });
    }

    res.render("index", { tasks, currentFilter: filter });
});

app.post("/add", async (req, res) => {
    const { title, priority } = req.body;
    if (title.trim() !== "") {
        await Task.create({ title, priority });
    }
    res.redirect("/");
});

app.post("/delete", async (req, res) => {
    const { id } = req.body;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
});

app.post("/toggle", async (req, res) => {
    const { id } = req.body;
    const task = await Task.findById(id);
    if (task) {
        task.done = !task.done;
        await task.save();
    }
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
