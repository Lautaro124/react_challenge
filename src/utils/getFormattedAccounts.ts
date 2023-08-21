import { type Account } from '@/interface/accounts'
import { getNameAccountType } from './getNameAccountType'

// Funcion para filtrar las cuentas segun el formato solicitado y sacando las cuentas que no tengan numero de cuenta
export const getFormattedAccounts = (accounts: Account[]): Account[] => {
  const formattedAccounts = accounts.filter(account => {
    const money = account.moneda
    const accountType = getNameAccountType(account.tipo_letras)

    // Filtrar cuentas que no tienen el número '87237832' en el campo 'n'
    if (!account.n.includes('87237832')) return false
    // Filtrar cuentas que no tienen un tipo de cuenta válido
    if (accountType === '') return false
    // Filtrar cuentas que tienen moneda 'u$s' o '$'
    if (money === 'u$s' || money === '$') return true
    return false
  })

  return formattedAccounts
}
