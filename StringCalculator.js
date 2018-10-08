function Add(numbers) {
    try{
        if(numbers == "") {
            return 0;
        }
        var delim = "";
        if(numbers[0] == '/' && numbers[1] == '/'){
            delim = numbers.substring(2, numbers.indexOf('/n'));
            numbers = numbers.slice((numbers.indexOf('/n') + 2));
        }
        var separators;
        var a;
        if(delim == ""){
            separators = [',', '\n'];
            a = numbers.split(new RegExp(separators.join('|'), 'g')).map(Number);
        }
        else {
            separators = delim;
            a = numbers.split(delim).map(Number);
        }
        var retval = 0;
        var negatives = "";
        for(var i = 0; i < a.length; i++){
            if(a[i] < 0){
                if(negatives.length > 0){
                    negatives += ',';
                }
                negatives += (a[i]);
            }
            if(a[i] < 1000){
                retval += a[i];
            }
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