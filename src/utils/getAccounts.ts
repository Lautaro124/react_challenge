import { type Account } from '@/interface/accounts'

const getAccounts = (accounts: Account[], currentPage: number) => {
  const lastItem = currentPage + 5
  const accountsFilterByType = accounts.filter(account => {
    const money = account.moneda

    if (money === 'u$s' || money === '$') return true
    return false
  })

  return accountsFilterByType.slice(currentPage, lastItem)
}

export default getAccounts
