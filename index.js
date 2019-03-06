const brain = require('brain.js');

const positive = require('./src/training-data/data-positive');
const negative = require('./src/training-data/data-negative');
const utils = require('./src/utils');

const moods = utils.serialise([...positive, ...negative]);

const net = new brain.NeuralNetwork();
net.train(moods, { log: true });
const output = net.run(utils.encode('Javascript is awesome!'));

console.log(output);
