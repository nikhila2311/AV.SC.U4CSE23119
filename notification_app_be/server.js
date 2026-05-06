const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuaWtraXNhaTczNzlAZ21haWwuY29tIiwiZXhwIjoxNzc4MDYxMDMzLCJpYXQiOjE3NzgwNjAxMzMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5OTdiZDIyZi05ZjM1LTQzNmMtOGFhNS1iMWZmZjVkZjhhNzQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzYWlfbmlraGlsYSIsInN1YiI6ImEzMGY1ZDJjLWFiMmUtNGFkMy1iYTNlLTJiYjBiMjczZjNkMSJ9LCJlbWFpbCI6Im5pa2tpc2FpNzM3OUBnbWFpbC5jb20iLCJuYW1lIjoic2FpX25pa2hpbGEiLCJyb2xsTm8iOiJhdi5zYy51NGNzZTIzMTE5IiwiYWNjZXNzQ29kZSI6IlBUQk1tUSIsImNsaWVudElEIjoiYTMwZjVkMmMtYWIyZS00YWQzLWJhM2UtMmJiMGIyNzNmM2QxIiwiY2xpZW50U2VjcmV0IjoiQlNTdXdDakhhYnhIYmN0cyJ9.e7OczvV8_8d0nJOL-R1BmJo4IdvERtz3laT7q796gLs";

app.get("/notifications", async (req, res) => {
  try {
    const response = await axios.get(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    res.json(response.data);

  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      error: "Failed to fetch notifications"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});