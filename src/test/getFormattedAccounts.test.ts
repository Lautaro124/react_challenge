import { expect, test } from 'vitest'
import { getFormattedAccounts } from '../utils/getFormattedAccounts'
import mock from '../mocks/accounts.json'
import expectedResult from '../mocks/expectedAccounts.json'

test('Test to getFormattedAccounts as filter when the no haver format required', () => {
  const accounts = getFormattedAccounts(mock.cuentas)

  expect(accounts).toHaveLength(8)
  expect(accounts).toStrictEqual(expectedResult)
})
