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
 results_2.forEach(texts => {
  //const text = texts.slice(-(name.length + 1), 0);
    if (!charachters.includes(name)) {
      charachters.push(name);
    }
    charachtersSpeeches.push(texts);
  })
})

console.log(charachters);

for(let num = 0; num < charachters.length; num += 1) {
      fs.writeFileSync(`${charachters[num]}.txt`, `${charachtersSpeeches[num]}`)
}