# Click_Store
## Прототип
https://www.figma.com/design/AUUa5sEzqjAYKb6DahAwvZ/%D0%9A%D0%A0%D0%9F%D0%9E?node-id=0-1&t=X2kwuBieZUsIU8OY-1
## User Flow
https://www.figma.com/board/IlRcjwTgFPnzAID1MRnhkR/Untitled?node-id=0-1&p=f&t=qSMyd3zTJWDjMZ5v-0
## Ссылка на канбан доску
https://tracker.yandex.ru/agile/board/1
## Ссылка на ADL
https://tracker.yandex.ru/agile/board/3


# Запуск кода
## Предварительные действия
1. Скачайте код с ветки
2. Убедитесь что на вашем компьютере установлены Node.js 18 или выше, PostgreSQL 14 или выше

## Для запуска Frotnend  
1. **Предварительные действия**
2. Запустить код в vs code
3. Ввести в терминал 
4. Открыть в терминале папку фронтенда через команду 'cd FullStack(v0.1)/Frontend(v0.4)/Click_Store-Frontend/Frontend'
5. Убедиться, что установлены пакеты данных. Ввести "npm install", и "npm install vite@3.0.6"
6. Запустить фронтенд командой "npm run dev". (Убедитесь, что в терминале у вас открыта папка Frontend)
7. Посмотреть сайт вы сможете перейдя по появившейся ссылке в терминале 

## Для запуска Backend
1. **Предварительные действия**
2. **Запуск фронтенд**
3. Открыть в терминале папку фронтенда через команду 'cd FullStack(v0.1)/shop-backend(v1.2)'
4. Убедиться, что установлены пакеты данных. Ввести "npm install"
5. Создать файл .env и вставить в него следующий текст без слешей.**Важно**: вместо "твой_пароль" напиши свой реальный пароль от PostgreSQL.
//
env
PORT=3001
DB_USER=postgres
DB_PASSWORD=твой_пароль
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=название_вашей_БД
//
6. Открыть package.json и убедиться в наличии скриптов показанных далее, если их нет добавить (без слешей)
//
json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "build": "echo 'Build step: no compilation needed for Node.js'",
  "test": "vitest run"
}
//
7.Запустить бекенд командой "npm run dev". (Убедитесь, что в терминале у вас открыта папка shop-backend(v1.2))
8. Проверить работу API. Открыть браузер и перейди по адресам:
"http://localhost:3001/api/products" Список всех товаров
"http://localhost:3001/api/products/1" Товар с id = 1
"http://localhost:3001/health" Проверка, что сервер жив
Если на этих адресах отображаются данные — бэкенд работает.
