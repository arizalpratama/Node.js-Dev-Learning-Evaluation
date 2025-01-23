const EventEmitter = require('events');

const BasicMath = {
  add: (a, b) => console.log(a + b),
  subtract: (a, b) => console.log(a - b),
};

// Tulis kodemu di bawah ini ...
const eventEmitter = new EventEmitter(); // Membuat instance EventEmitter

// Menambahkan listener fungsi add dari BasicMath
eventEmitter.on('calculate', BasicMath.add);

// Menambahkan one-time listener fungsi subtract dari BasicMath
eventEmitter.once('calculate', BasicMath.subtract);

// Memicu event 'calculate' dengan parameter 2 dan 3
eventEmitter.emit('calculate', 2, 3);

// Memicu event 'calculate' dengan parameter 5 dan 6
eventEmitter.emit('calculate', 5, 6);