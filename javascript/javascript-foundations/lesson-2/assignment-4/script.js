user = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'jsmith@company.com'
}

function logUserInfo(user) {
    console.log(user.firstName + ' ' + user.lastName + ': ' + user.email)
}

logUserInfo(user)