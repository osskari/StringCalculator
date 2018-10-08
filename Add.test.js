const calculator = require('./StringCalculator')

test("inputs an empty string into the Add function", () => {
    expect(calculator("")).toBe(0);
});

test("inputs one number into the Add function" , () => {
    expect(calculator("2")).toBe(2);
});

test("inputs 2 numbers into the Add function", () => {
    expect(calculator("2,5")).toBe(7);
});

test("inputs 10 numbers into the Add function", () => {
    expect(calculator("1,2,3,4,5,6,7,8,9,10")).toBe(55);
});

test("inputs a negative number into the Add function", () => {
    expect(calculator("-1,-2,-3")).toBe();
});

test("inputs some numbers including some over 1000", () => {
    expect(calculator("1,2,3,4,1001,5,6,1005,7,8,9,10")).toBe(55);
});