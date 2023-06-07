const validatePassword = require("./validatePassword");

test("returns false for empty password", () => {
  expect(validatePassword("")).toBe(false);
});

test("returns false for password w/ no numbers", () => {
  expect(validatePassword("abcdefghijk")).toBe(false);
});

test("returns false for password w/ no letters", () => {
  expect(validatePassword("12345678910")).toBe(false);
});

test("returns false for password w/ <8 characters, at least 1 number, at least 1 letter", () => {
  expect(validatePassword("a12c")).toBe(false);
});

test("returns true for password w/ >8 lowercase characters, at least 1 number, at least 1 letter", () => {
  expect(validatePassword("a12bdy778k")).toBe(true);
});

test("returns true for password w/ >8 UPPERCASE characters, at least 1 number, at least 1 letter", () => {
  expect(validatePassword("A12BDY778K")).toBe(true);
});

test("returns true for password w/ >8 UPPERCASE & lowercase characters, at least 1 number, at least 1 letter", () => {
  expect(validatePassword("a12BdY7C8k")).toBe(true);
});

// npx jest
// npx jest validatePassowrd.test.js

// https://www.youtube.com/watch?v=89Pl2Uok8xc
// https://www.youtube.com/watch?v=FKnzS_icp20
// https://www.youtube.com/watch?v=IDjF6-s1hGk
