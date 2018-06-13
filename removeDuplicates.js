const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('> Input string to dedupe:')
rl.on('line', (string)=> {
  console.log(string)
})
