import { expect, test } from 'vitest'
import { getAccounts } from '../utils/getAccounts'
import mock from '../mocks/accounts.json'
import expectedResult from '../mocks/expectedAccounts.json'

test('Test to getAccounts as filter when the no haver format required', () => {
  const accounts = getAccounts(mock.cuentas)

  expect(accounts).toHaveLength(8)
  expect(accounts).toStrictEqual(expectedResult)
})
