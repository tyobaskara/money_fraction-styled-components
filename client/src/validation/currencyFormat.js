const currencyFormat  = string => {;
    return string.match( /^(([a-zA-Z][0-9])|([a-zA-Z]+[\s]{0,1}[0-9])|([0-9.]))*[,0-9]{0,3}$/gm);
}

export { currencyFormat };