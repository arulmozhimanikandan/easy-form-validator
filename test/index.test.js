const { isEmailValid, isNameValid, isOnlyAlphabets, isOnlyIntegers} = require('../index')

describe('test validation', () => {
    describe('Email Validator', () => {
        test('check if email valid', () => {
            expect(isEmailValid('arulgetsolute@gmail.com')).toEqual(true)
        })
        test('check if email invalid', () => {
            expect(isEmailValid('arulgetsolute@.com')).toEqual(false)
        })
    })

    describe('name Validator', () => {
        test('check if name valid', () => {
            expect(isNameValid('arulmozhi', 5)).toEqual(true)
        })
        test('check if name valid without minimum character', () => {
            expect(isNameValid('a', 3)).toEqual(false)
        })
        test('check if name valid with invalid character and numbers', () => {
            expect(isNameValid('arul-18', 4)).toEqual(false)
        })
    })

    describe('Alphabets Validator', () => {
        test('check if string contains only alphabets', () => {
            expect(isOnlyAlphabets('arulmozhi')).toEqual(true)
        })
        test('check if string contains only alphabets when contains integers', () => {
            expect(isOnlyAlphabets('arulmozhi19')).toEqual(false)
        })
    })

    describe('Integer Validator', () => {
        test('check if string contains only numbers', () => {
            expect(isOnlyIntegers('234534534')).toEqual(true)
        })
        test('check if string contains only alphabets when contains integers', () => {
            expect(isOnlyIntegers('foo')).toEqual(false)
        })
    })

})
