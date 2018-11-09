const getNumber = string => {
    let value = string;

    return value.replace(/^[0]+|[a-zA-Z.\s]/gm , '').replace(',','.');
}

export { getNumber };