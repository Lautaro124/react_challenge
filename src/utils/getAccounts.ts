import { type Account } from '@/interface/accounts'
import { getNameAccountType } from './getNameAccountType'

export const getAccounts = (accounts: Account[], currentPage: number) => {
  const accountsFilterByType = accounts.filter(account => {
    const money = account.moneda
    const accountType = getNameAccountType(account.tipo_letras)

    if (accountType === '') return false
    if (money === 'u$s' || money === '$') return true
    return false
  })
  const lastItem = getIdToLastItem(accountsFilterByType.length, currentPage)

  return accountsFilterByType.slice(currentPage, lastItem)
}

export const getIdToLastItem = (length: number, currentPage: number) => {
  if (length >= 6) return currentPage + 5
  return currentPage + 6
}
