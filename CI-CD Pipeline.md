# CI/CD Pipeline

## Общая схема пайплайна
1. `Push` (`main`, `test`, `backend`) или Pull Request (`main`)
2. Запуск `CI`: Запуск тестов и линтера
3. Если `CI` прошёл успешно и текущая ветка - это `main`, тогда запускается `CD`
4. Запуск `CD`: Автоматический деплой бэкенда и фронтенда на сервер
5. Итог: Код проверен (линтер, тесты) → Залит на сервер → Приложение обновлено

## Триггеры
|Событие|Ветки|Действие|
|-|-|-|
|Push|`main`, `test`, `backend`|Запуск CI (линтер, тесты)|
|Pull Request|`main`|Запуск CI|
|успешный CI + push|`main`|Запуск CD (деплой на сервер)|

## Перечень шагов CI
1. Checkout code – получение кода из репозитория
1. Setup Node.js – установка Node.js 20 и кэширование npm
1. Install dependencies – npm ci (чистая установка по lock-файлу)
1. Fix permissions – права на запуск ESLint
1. Run linter – npm run lint
1. Run unit tests – npm test

## Перечень шагов CD
Выполняется только для ветки main после успешного CI.
### Backend
**Сервер**: удалённая VM (Ubuntu)
**IP / UR**L: http://<VM_IP> (порт 3000 или через PM2)
**Действия**:
1. cd ~/Click_Store/FullStack(v0.1)/shop-backend(v1.2)
1. git pull
1. npm ci --production
1. перезапуск pm2 restart shop-backend или старт pm2 start server.js --name shop-backend

### Frontend
**Сервер**: та же VM
**IP / UR**L: http://<VM_IP> (статический сервер, например Nginx)
**Действия**:
1. cd ~/Click_Store/FullStack(v0.1)/Frontend(v0.4)/Click_Store-Frontend/Frontend
1. git pull
1. npm ci
1. npm run build
1. копирование сборки в /var/www/html/

## Как посмотреть логи сборки
1. Перейти на GitHub → ваш репозиторий
1. Вкладка Actions
1. Выбрать нужный workflow (CI/CD Pipeline)
1. Нажать на конкретный запуск
1. Выбрать job (CI или CD)
1. Раскрыть каждый шаг – виден stdout/stderr

### Логи на сервере (CD)
- pm2 logs shop-backend
- journalctl -u nginx (если используется Nginx)
- tail -f /var/log/nginx/access.log

## Как добавить новый шаг
### Добавление шага в CI (например, проверка безопасности)
Отредактируйте файл .github/workflows/ci-cd.yml в разделе jobs.ci.steps:
``` yaml
- name: Security audit
  run: npm audit
```
### Добавление шага в CD (например, уведомление в Telegram)
Под шагом деплоя добавьте:
``` yaml
- name: Notify Telegram
  run: |
    curl -X POST -H "Content-Type: application/json" \
    -d '{"text":"✅ Deployed to production"}' \
    https://api.telegram.org/bot${{ secrets.TELEGRAM_TOKEN }}/sendMessage
```
После изменения – закоммитьте и запушите в main. Новый шаг появится в следующем прогоне.



