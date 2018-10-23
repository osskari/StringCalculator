const calculator = require('./StringCalculator')

it("inputs an empty string into the Add function", () => {
    expect(calculator("")).toBe(0);
});

it("inputs one number into the Add function" , () => {
    expect(calculator("2")).toBe(2);
});

it("inputs 2 numbers into the Add function", () => {
    expect(calculator("2,5")).toBe(7);
});

it("inputs 10 numbers into the Add function", () => {
    expect(calculator("1,2,3,4,5,6,7,8,9,10")).toBe(55);
});

it("inputs a negative number into the Add function", () => {
    expect(calculator("-1,-2,-3")).toBe();
});

it("inputs some numbers including some over 1000", () => {
    expect(calculator("1,2,3,4,1001,5,6,1005,7,8,9,10")).toBe(55);
});

it("inputs a single character delimeter and some numbers", () => {
    expect(calculator("//!/n1!2!3!4!5")).toBe(15);
});

it("inputs a stubstring as a delimiter and some numbers", () => {
   expect(calculator("//delim/n1delim2delim3delim4delim5delim6")).toBe(21);
});
