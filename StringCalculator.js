function Add(numbers) {
    if(numbers == "") {
        return 0;
    }
    var a = numbers.split(',').map(Number);
    if(a.length == 1) {
        return a[0];
    } else if(a.length == 2) {
        return a[0] + a[1];
    } else {
        return 0;
    }
}

module.exports = Add;