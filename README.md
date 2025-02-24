# Node.js & Axios API Integration

## Описание
Тази задача има за цел да ви запознае с използването на **axios** за изпращане на HTTP заявки в Node.js и Express.Ще изградите малък уеб сървър, който комуникира с външно API, за да получава безполезни факти.

## Какво е Axios?
### Какво представлява Axios?
Axios е **популярен HTTP клиент за JavaScript**, който позволява лесно изпращане на HTTP заявки. Той поддържа **Promise API** и работи както в браузъра, така и в Node.js.

### Основни предимства на Axios:
- Поддържа асинхронно програмиране с `async/await`
- Позволява изпращане на **GET, POST, PUT, DELETE** заявки
- Автоматично преобразува JSON отговори
- Поддържа прихващане (interceptors) за обработка на заявки и отговори

### Инсталация на Axios:
За да използвате Axios в Node.js, трябва първо да го инсталирате:
```bash
npm install axios
```

### Изпращане на GET заявка с Axios:
```javascript
const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        console.log(response.data.text); // Извежда получения факт
    } catch (error) {
        console.error('Грешка при извличане на данни:', error);
    }
}

fetchData();
```

### Обработка на грешки с Axios
Axios позволява лесно прихващане на грешки чрез `try...catch`:
```javascript
async function fetchData() {
    try {
        const response = await axios.get('https://some-invalid-url.com');
        console.log(response.data);
    } catch (error) {
        console.error('Възникна грешка:', error.response ? error.response.status : error.message);
    }
}
```

## Изисквания
- Node.js (инсталирайте от [официалния сайт](https://nodejs.org/))
- Основни познания по JavaScript и асинхронно програмиране
- Инсталиране на **Express** и **Axios**

## Инсталация
1. Клонирайте или изтеглете този проект.
2. Отворете терминал в папката на проекта и изпълнете:
   ```bash
   npm install
   ```
   Това ще инсталира всички необходими зависимости.

## Стартиране на сървъра
Изпълнете следната команда, за да стартирате сървъра:
```bash
node index.js
```

Сървърът ще бъде достъпен на **http://localhost:3000**.

## API Ендпойнти

### 1. Получаване на случаен факт
**GET** `/random-fact`
- Връща случаен безполезен факт.

### 2. Получаване на днешния факт (задача за учениците)
**GET** `/todays-fact`
- TODO: Учениците трябва да напишат тази функционалност, като използват **axios**.

## Подсказки
- Използвайте `axios.get()` за да изпращате заявки към API-то.
- API базовият URL е: `https://uselessfacts.jsph.pl/api/v2/facts`.
- При грешки в заявките, обработете ги чрез `try...catch`.
- Можете да използвате `console.log()` за дебъгване.

## Полезни ресурси
- [Express.js документация](https://expressjs.com/)
- [Axios документация](https://axios-http.com/docs/intro)
- [Useless Facts API](https://uselessfacts.jsph.pl/)
