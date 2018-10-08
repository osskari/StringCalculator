function Add(numbers) {
    if(numbers == "") {
        return 0;
    }
    var a = numbers.split(',').map(Number);
    var retval = 0;
    for(var i = 0; i < a.length; i++){
        retval += a[i];
    }
    return retval;
}

module.exports = Add;