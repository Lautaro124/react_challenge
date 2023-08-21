'use client'
import getAccounts from '@/utils/getAccounts'
import Button from './button'
import { type Account } from '@/interface/accounts'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { selecOneDetail } from '@/redux/slices/account'
import { getNameAccountType } from '@/utils/getNameAccountType'
interface AccountsSectionProps {
  accounts: Account[]
}

const AccountsSection = ({ accounts }: AccountsSectionProps) => {
  const { currentPage } = useSelector((state: RootState) => state.acount)
  const dispatch = useDispatch()
  const accountsFormated = getAccounts(accounts, currentPage)
  const router = useRouter()
  const onClick = (account: Account) => {
    dispatch(selecOneDetail(account))
    router.push('/detail')
  }

  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 h-[90%] py-12">
      {
        accountsFormated.map(account => (
          <Button onClick={() => { onClick(account) }} key={account.n}>
            <div className="flex flex-col gap-1">
              <span>{getNameAccountType(account.tipo_letras.toLocaleUpperCase())}</span>
              <span>Nro: {account.n}</span>
            </div>
          </Button>
        ))
      }
    </section>
  )
}

export default AccountsSection
