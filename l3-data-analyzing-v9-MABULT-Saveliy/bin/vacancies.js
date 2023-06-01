const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2];

const fileContent = fs.readFileSync(inputPath, 'utf-8');
const lines = fileContent.trim().split('\n');
const rowCount = lines.length - 1;
const cities = Array.from(
  new Set(lines.slice(1).map((line) => line.split(',')[2]))
).join(', ');
const salaries = lines
  .slice(1)
  .map((line) => parseInt(line.split(',')[3], 10))
  .filter((salary) => !isNaN(salary))
  .sort((a, b) => b - a);
const maximumSalary = salaries[0];
const graduatedCount = new Set(
  lines.slice(1).map((line) => line.split(',')[4])
).size;
const companyTypes = Array.from(
  new Set(lines.slice(1).map((line) => line.split(',')[5]))
).join(', ');

console.log(`Count: ${rowCount}`);
console.log(`Cities: ${cities}`);
console.log(`Maximum salary: ${maximumSalary}`);
console.log(`Graduated: ${graduatedCount}`);
console.log(`Company types: ${companyTypes}`);