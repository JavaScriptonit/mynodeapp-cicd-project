const path = require('path');
const fs = require('fs')

/*
Tests to check the files exists: index.html, Dockerfile, .gitignore
Generating logs file: junit.xml
 */
test('main index.html file exists', () => {
  const filePath = path.join(__dirname, "index.html")
  expect(fs.existsSync(filePath)).toBeTruthy();
});

test('Dockerfile exists', () => {
  const filePath = path.join(__dirname, "..", "Dockerfile")
  expect(fs.existsSync(filePath)).toBeTruthy();
});

test('.gitignore file exists', () => {
  const filePath = path.join(__dirname, "..", ".gitignore")
  expect(fs.existsSync(filePath)).toBeTruthy();
});
