function getMonthName(number) {
    months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    if (number < 1 || number > 12) {
        console.log('Wrong!')
    } else {
    for (let index = 0; index < months.length; index++) {
        if (number == index + 1) {
            console.log(months[index])
        }
    }
}
}

getMonthName(0)
getMonthName(3)
getMonthName(12)