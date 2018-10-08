const calculator = require('./StringCalculator')

test("inputs an empty string into the Add function", () => {
    expect(calculator("")).toBe(0);
});

test("inputs one number" , () => {
    expect(calculator("2")).toBe(2);
});

test("inputs 2 numbers into the Add function", () => {
    expect(calculator("2,5")).toBe(7);
});