function Add(numbers) {
    try{
        if(numbers == "") {
            return 0;
        }
        var separators = [',', '\n'];
        var a = numbers.split(new RegExp(separators.join('|'), 'g')).map(Number);
        var retval = 0;
        var negatives = "";
        for(var i = 0; i < a.length; i++){
            if(a[i] < 0){
                if(negatives.length > 0){
                    negatives += ',';
                }
                negatives += (a[i]);
            }
            retval += a[i];
        }
        if(negatives.length > 0){
            throw "Negatives not allowed: " + negatives;
        }
        return retval;
    }
    catch(e){
        console.log(e);
    }
}

module.exports = Add;