const fs = require('fs')

const scenario = fs.readFileSync('./scenario.txt', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
})
const resultNames = scenario.toString();
const results_1 = resultNames.match(/^[a-z]+:/gmi);

const resultText = scenario.toString();
const results_2 = resultText.match(/[a-z]+.+[?,;.:!]/gmi);

const charachters = [];
const charachtersSpeeches = [];
results_1.forEach(characterName => {
 const name = characterName.slice(0, -1);
    if (!charachters.includes(name)) {
      charachters.push(name);
    }
})

results_2.forEach(texts => {
  const text = texts.slice(-5, 0);
  
  if(text.match(charachters[0])) {
    charachtersSpeeches[0].push(texts)
  }
  if(text.match(charachters[1])) {
    charachtersSpeeches[1].push(texts)
  }
  if(text.match(charachters[2])) {
    charachtersSpeeches[2].push(texts)
  }
  if(text.match(charachters[3])) {
    charachtersSpeeches[3].push(texts)
  }
})

console.log(charachters);

for(let num = 0; num < charachters.length; num += 1) {
      fs.writeFileSync(`${charachters[num]}.txt`, `${charachtersSpeeches[num]}`)
}