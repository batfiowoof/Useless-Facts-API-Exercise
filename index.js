const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Базов URL за API
const API_BASE_URL = "https://uselessfacts.jsph.pl/api/v2/facts";

// Middleware за JSON
app.use(express.json());

// Пример: Асинхронна функция за извличане на случаен факт
async function fetchRandomFact() {
  try {
    const response = await axios.get(`${API_BASE_URL}/random`);
    return response.data.text;
  } catch (error) {
    console.error("Грешка при извличане на случайния факт:", error);
    throw new Error("Неуспешно извличане на данните");
  }
}

// Пример: Ендпойнт за получаване на случаен факт
app.get("/random-fact", async (req, res) => {
  try {
    const fact = await fetchRandomFact();
    res.json({ fact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// TODO: Напишете асинхронна функция, която ще извлича днешния факт от API
async function fetchTodaysFact() {
  // Използвайте axios.get() за извличане на данни от `${API_BASE_URL}/today`
}

// TODO: Създайте ендпойнт '/todays-fact', който връща днешния факт
app.get("/todays-fact", async (req, res) => {
  // Извикайте fetchTodaysFact() и върнете резултата като JSON
});

// Старт на сървъра
app.listen(PORT, () => {
  console.log(`Сървърът работи на http://localhost:${PORT}`);
});
