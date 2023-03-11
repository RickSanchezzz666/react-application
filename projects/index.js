const fs = require('fs')

const scenario = fs.readFileSync('./scenario.txt', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
})
const resultio = scenario.toString();
const results = resultio.match(/^[a-z]+:/gmi);

const charachters = [];
results.forEach(characterName => {
 const name = characterName.slice(0, -1);
 // [].find(e => ...) => null || elem
 // [].includes(<value>) => boolean
 if (!charachters.includes(name)) {
  charachters.push(name);
 }
});

console.log(charachters);

for(let num = 0; num < charachters.length; num += 1) {
    fs.writeFileSync(`${charachters[num]}.txt`, 'blablabla')
}