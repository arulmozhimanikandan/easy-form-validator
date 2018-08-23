const isEmailValid = (email) => {
    return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)
}

const isNameValid = (name, minLength) => {
    return !!(name && new RegExp(/^([^0-9]*)$/).test(name) && name.trim().length >= minLength)
}

const isOnlyAlphabets = (value) => {
    return !!(value && new RegExp(/^([^0-9]*)$/).test(value))
}

const isOnlyIntegers = (value) => {
    return !!(value && new RegExp(/^([^a-zA-Z]*)$/).test(value))
}

const easyFormValidator = {
    isEmailValid,
    isNameValid,
    isOnlyAlphabets,
    isOnlyIntegers
}

module.exports = easyFormValidator;