// server/server.js
const express = require('express');
const { SerialPort } = require('serialport');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
const host = '192.168.1.6'; // Укажите ваш локальный IP-адрес

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const arduinoPort = 'COM4'; // Укажите соответствующий COM-порт для вашего Arduino
const baudRate = 9600; // Скорость передачи данныхA

const serialPort = new SerialPort({
  path: arduinoPort,
  baudRate: baudRate,
});

// Обработка ошибок открытия порта
serialPort.on('error', err => {
  console.error('Error opening port:', err.message);
});
// Пример обработчика для чтения данных с порта
serialPort.on('data', data => {
  console.log('Data received from Arduino:', data.toString());
});

// Маршрут для включения/выключения светодиода на Arduino через GET-запрос
app.get('/toggleLED', (req, res) => {
  const ledNumber = req.query.ledNumber;
  const action = req.query.action;
  let command = '';

  if (action === 'on') {
    command = ledNumber+'LED_ON';
  } else if (action === 'off') {
    command = ledNumber+'LED_OFF';
  } else {
    return res.status(400).send('Invalid action. Use "on" or "off".');
  }

  serialPort.write(command, err => {
    if (err) {
      console.error('Error writing to serial port:', err.message);
      res.status(500).send('Failed to send command to Arduino');
    } else {
      console.log(`Command "${command}" sent to Arduino`);
      res.send(`Command "${command}" sent successfully`);
    }
  });
});

// Маршрут для включения/выключения светодиода на Arduino через GET-запрос
app.get('/toggleRelay', (req, res) => {
  const relayNumber = req.query.relayNumber;
  const action = req.query.action;
  let command = '';

  if (action === 'on') {
    command = relayNumber+'REL_ON';
  } else if (action === 'off') {
    command = relayNumber+'REL_OFF';
  } else {
    return res.status(400).send('Invalid action. Use "on" or "off".');
  }

  serialPort.write(command, err => {
    if (err) {
      console.error('Error writing to serial port:', err.message);
      res.status(500).send('Failed to send command to Arduino');
    } else {
      console.log(`Command "${command}" sent to Arduino`);
      res.send(`Command "${command}" sent successfully`);
    }
  });
});

app.get('/getSensorsData', (req, res) => {
  let command = 'getSensorsData';
  serialPort.write(command, err => {
    if (err) {
      console.error('Error writing to serial port:', err.message);
      res.status(500).send('Failed to send command to Arduino');
    } else {
      console.log(`Command "${command}" sent to Arduino`);
    }
  });
  serialPort.once('data', data => {
    const temperature = data.toString(); // Преобразуем полученные данные в строку
    console.log(`Temperature received from Arduino: ${temperature}`);
    res.send(temperature); // Отправляем полученную температуру в ответ на запрос
  });
});

// Маршрут для обработки значения input range
app.get('/sendRange', (req, res) => {
  const rangeValue = req.query.value;
  const command = `RANGE_${rangeValue}`;

  serialPort.write(command, err => {
    if (err) {
      console.error('Error writing to serial port:', err.message);
      res.status(500).send('Failed to send range value to Arduino');
    } else {
      console.log(`Range value "${rangeValue}" sent to Arduino`);
      res.send(`Range value "${rangeValue}" sent successfully`);
    }
  });
});

// Обслуживание статических файлов из папки build
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Все остальные запросы обрабатываются отправкой index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// Старт сервера
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
