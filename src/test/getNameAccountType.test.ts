import { expect, test } from 'vitest'
import { getNameAccountType } from '../utils/getNameAccountType'

test('Test getNameAccountType to checking account', () => {
  const checkingAccount = 'Cuenta Corriente'
  expect(getNameAccountType('fjd')).toBe('')
  expect(getNameAccountType('cC')).toBe(checkingAccount)
  expect(getNameAccountType('CC')).toBe(checkingAccount)
})

test('Test getNameAccountType to savings Bank', () => {
  const savingsBank = 'Caja de Ahorro'
  expect(getNameAccountType('idfs')).toBe('')
  expect(getNameAccountType('CA')).toBe(savingsBank)
  expect(getNameAccountType('cA')).toBe(savingsBank)
})
