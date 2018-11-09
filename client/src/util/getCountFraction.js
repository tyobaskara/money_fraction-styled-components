const getCountFraction = stack => {
    var countFraction = 1;
    var fraction = 0;
    var result = [];

    if(stack.length > 1) {
        for(var i = 0; i<stack.length; i++){
            if(stack[i+1] && stack[i] == stack[i+1]) {
                fraction = stack[i];
                countFraction++;
            } else {
                result.push({
                    count: countFraction,
                    value: stack[i]
                });
                countFraction = 1;
            }
        }
    } else {
        result.push({
            count: 1,
            value: stack[0]
        });
    }


    return result;
}

export { getCountFraction };