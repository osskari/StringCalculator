function Add(numbers) {
    if(numbers == "") {
        return 0;
    }
    var separators = [',', '\n'];
    var a = numbers.split(new RegExp(separators.join('|'), 'g')).map(Number);
    var retval = 0;
    for(var i = 0; i < a.length; i++){
        retval += a[i];
    }
    console.log(retval);
    return retval;
}

module.exports = Add;