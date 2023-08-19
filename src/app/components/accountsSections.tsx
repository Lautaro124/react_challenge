'use client'
import getAccounts from '@/utils/getAccounts'
import Button from './button'
import { type Account } from '@/interface/accounts'
import { useSelector } from 'react-redux'
import { type RootState } from '@/redux/store'

interface AccountsSectionProps {
  accounts: Account[]
}

const AccountsSection = ({ accounts }: AccountsSectionProps) => {
  const { currentPage } = useSelector((state: RootState) => state.acount)
  const accountsFormated = getAccounts(accounts, currentPage)
  const getNameAccountType = (type: string) => {
    if (type === 'CC') return 'Cuenta Corriente'
    if (type === 'CA') return 'Caja de Ahorro'
    return ''
  }
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 h-[90%] py-12">
      {
        accountsFormated.map(account => (
          <Button key={account.n}>
            <div className="flex flex-col gap-1">
              <span>{getNameAccountType(account.tipo_letras.toLocaleUpperCase())}</span>
              <span>Nro: {account.n}</span>
            </div>
          </Button>
        )).slice(0, 6)
      }
    </section>
  )
}

export default AccountsSection
