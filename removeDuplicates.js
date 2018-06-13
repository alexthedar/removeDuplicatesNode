const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('> Input string to dedupe:')
rl.on('line', (string)=> {
  dedup(string)
})

function dedup(string){
  let isValid = validate(string);
  if(isValid === true){
    console.log(`> Deduped string: ${removeDuplicates(string)}`)
    rl.close()
  } else {
    console.log('> Only UPPER or lowercase letters may be entered.')
  }
}

function validate(str){
  let RegExpression = /^[a-zA-Z\s]*$/; 
  return RegExpression.test(str)
}

function removeDuplicates(str){
  let stringArray = str.split('')
  let finalArr = []

  for(let i = 0; i< stringArray.length; i++){
    if (!stringArray.includes(stringArray[i].toLowerCase())) {
      finalArr.push(stringArray[i])
    }
  }

  return finalArr.join('');
}
