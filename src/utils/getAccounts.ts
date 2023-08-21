import { type Account } from '@/interface/accounts'
import { getNameAccountType } from './getNameAccountType'

export const getAccounts = (accounts: Account[]) => {
  const fomratedAccounts = accounts.filter(account => {
    const money = account.moneda
    const accountType = getNameAccountType(account.tipo_letras)

    if (!account.n.includes('87237832')) return false
    if (accountType === '') return false
    if (money === 'u$s' || money === '$') return true
    return false
  })

  return fomratedAccounts
}
