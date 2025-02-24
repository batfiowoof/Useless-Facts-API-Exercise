const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Базов URL за API
const API_BASE_URL = "https://uselessfacts.jsph.pl/api/v2/facts";

// Middleware за JSON
app.use(express.json());

// Асинхронна функция за извличане на случаен факт
async function fetchRandomFact() {
  try {
    const response = await axios.get(`${API_BASE_URL}/random`);
    return response.data.text;
  } catch (error) {
    console.error("Грешка при извличане на случайния факт:", error);
    throw new Error("Неуспешно извличане на данните");
  }
}

// Асинхронна функция за извличане на днешния факт
async function fetchTodaysFact() {
  try {
    const response = await axios.get(`${API_BASE_URL}/today`);
    return response.data.text;
  } catch (error) {
    console.error("Грешка при извличане на днешния факт:", error);
    throw new Error("Неуспешно извличане на данните");
  }
}

// Ендпойнт за получаване на случаен факт
app.get("/random-fact", async (req, res) => {
  try {
    const fact = await fetchRandomFact();
    res.json({ fact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ендпойнт за получаване на днешния факт
app.get("/todays-fact", async (req, res) => {
  try {
    const fact = await fetchTodaysFact();
    res.json({ fact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Старт на сървъра
app.listen(PORT, () => {
  console.log(`Сървърът работи на http://localhost:${PORT}`);
});
