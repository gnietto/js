'use strict'

function processDataJs(inputString) {
    const firstLine = "Hello, World.";
    return `${firstLine}\n${inputString}`;
};

function processDataNode(inputString) {
    const firstLine = "Hello, World.";
    process.stdout.write(`${firstLine}\n${inputString}`); 
};

console.log(processDataJs('30 Days of Code'));
console.log(processDataNode('30 Days of Code'));