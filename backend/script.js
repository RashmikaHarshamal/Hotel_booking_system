import { PrismaClient } from '@prisma/client';
import express from "express";

const prisma = new PrismaClient();

const app = express();

app.use(express.json()); // Middleware to parse JSON

// Test route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Get all comments
app.get("/comment", async (req, res) => {
    try {
        const comments = await prisma.comment.findMany();
        res.json(comments);
    } catch (error) {
        console.error("Error fetching comments:", error); // Log detailed error
        res.status(500).json({ error: error.message });
    }
});


app.delete("/comment/:id", async (req, res) => {
    const { id } = req.params;
    const commentId = parseInt(id); 

    if (isNaN(commentId)) {
        return res.status(400).json({ error: "Invalid comment ID" });
    }

    try {
        // Check if the comment exists first
        const comment = await prisma.comment.findFirst({
            where: { id: commentId },
        });

        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        // If comment exists, proceed with deletion
        const deletedComment = await prisma.comment.delete({
            where: { id: commentId },
        });

        res.json({ message: "Comment deleted successfully", deletedComment });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/comment", async (req, res) => {
    const commentStr = req.body.comment;
    const comment = await prisma.comment.create({
        data: { comment: commentStr },
    });
    res.json(comment);
})

app.put("/comment/:id", async (req, res) => {
    const { id } = req.params;
    const commentStr = req.body.comment;

    try {
        const comment = await prisma.comment.update({
            data: { comment: commentStr },
            where: { id: parseInt(id) },
        });
        res.json(comment);
    } catch (e) {
        res.status(404).json({ error: "Comment not found"});
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
