// Простой сервер с live reload для разработки
const liveServer = require('live-server');

const params = {
  port: 8080, // Порт сервера
  root: '.', // Корень сервера (текущая папка)
  open: true, // Открыть браузер автоматически
  file: 'index.html', // Главная страница
  wait: 100, // Задержка перед перезагрузкой (мс)
  logLevel: 2, // Уровень логирования
};

liveServer.start(params);
