const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuaWtraXNhaTczNzlAZ21haWwuY29tIiwiZXhwIjoxNzc4MDU3NDE4LCJpYXQiOjE3NzgwNTY1MTgsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5MGI3ODk4ZC0wZjg1LTQ3YmMtOTlkNi1lZTE4NjkyMmJiMTUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzYWlfbmlraGlsYSIsInN1YiI6ImEzMGY1ZDJjLWFiMmUtNGFkMy1iYTNlLTJiYjBiMjczZjNkMSJ9LCJlbWFpbCI6Im5pa2tpc2FpNzM3OUBnbWFpbC5jb20iLCJuYW1lIjoic2FpX25pa2hpbGEiLCJyb2xsTm8iOiJhdi5zYy51NGNzZTIzMTE5IiwiYWNjZXNzQ29kZSI6IlBUQk1tUSIsImNsaWVudElEIjoiYTMwZjVkMmMtYWIyZS00YWQzLWJhM2UtMmJiMGIyNzNmM2QxIiwiY2xpZW50U2VjcmV0IjoiQlNTdXdDakhhYnhIYmN0cyJ9.xrZrtDBYTpfNu6qTBDLtdFzOGypWUTJJDws1nnJXJeE";

async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log created:", response.data);
  } catch (error) {
    console.log(
      "Logging failed:",
      error.response?.data || error.message
    );
  }
}

module.exports = Log;