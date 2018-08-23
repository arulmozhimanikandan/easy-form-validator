const { isEmailValid, isNameValid} = require('../index')

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
            expect(isNameValid('arulmozhi')).toEqual(true)
        })
        test('check if name valid without minimum character', () => {
            expect(isNameValid('a')).toEqual(false)
        })
        test('check if name valid with invalid character and numbers', () => {
            expect(isNameValid('arul-18')).toEqual(false)
        })
    })

})
