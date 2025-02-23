import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.get("/comment", async (req, res) => {
  const comments = await prisma.comment.findMany();
  res.json(comments);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
