"use strict";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();

// Apply CORS middleware
app.use(
  cors({
    origin: "https://nex-bank.pages.dev", // Allow only your frontend
    methods: ["GET", "OPTIONS", "POST"],
    allowedHeaders: ["Content-Type", "X-Authentication-Token"],
  })
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get("/", (req: Request, res: Response) => {
  console.log("GET /");
  res.send("OK");
});

app.get("/api/transactions", (req: Request, res: Response) => {
  console.log(`GET /api/transactions?page=${req.query.page}`);
  const pageRequested = parseInt(req.query.page as string) || 1;
  let filePath: string;

  if (pageRequested === 2) {
    filePath = path.join(__dirname, "data", "transactions_page2.json");
  } else if (pageRequested === 3) {
    filePath = path.join(__dirname, "data", "transactions_page3.json");
  } else {
    filePath = path.join(__dirname, "data", "transactions.json");
  }

  console.log(`Reading file: ${filePath}`);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    res.send(data);
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err);
    res.status(500).send("Error loading transactions");
  }
});

// Error handling
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(`Error on ${req.method} ${req.url}:`, err.stack);
  res.status(500).send("Internal Server Error");
});

// Export for Vercel
module.exports = app;
