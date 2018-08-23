const isEmailValid = email => {
    return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}/g).test(email)
}

const isNameValid = name => {
    return !!(name && new RegExp(/^([^0-9]*)$/).test(name) && name.trim().length > 2)
}

const easyFormValidator = {
    isEmailValid,
    isNameValid,
}

module.exports = easyFormValidator;