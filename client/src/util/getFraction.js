const getFraction = value => {
    var currencyFraction = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];
    var value = value;

    var index= 0;
    var stack = [];
    do {
        if(currencyFraction[index] && value - currencyFraction[index] < 0){
            index++
        } else {
            value = value - currencyFraction[index];

            stack.push(currencyFraction[index]);
        }
    }
    while(currencyFraction[index]);

    return stack;
}

export { getFraction };