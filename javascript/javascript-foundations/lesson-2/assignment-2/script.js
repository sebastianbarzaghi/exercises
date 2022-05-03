function containsString(mainString, searchString) {
    if (mainString.indexOf(searchString) === -1) {
        console.log(false)
    } else {
        console.log(true)
    }
};

containsString('independent', 'depend');
containsString('independent', 'indy');