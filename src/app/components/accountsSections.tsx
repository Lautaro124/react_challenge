'use client'
import Button from './button'
import { type Account } from '@/interface/accounts'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { changePage, selecOneDetail, setAccounts } from '@/redux/slices/account'
import { getNameAccountType } from '@/utils/getNameAccountType'
import { useEffect } from 'react'
import service from '@/service/service'

const AccountsSection = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { currentPage, accounts } = useSelector((state: RootState) => state.acount)

  const getData = async () => {
    const accounts = await service()
    dispatch(setAccounts(accounts.cuentas))
  }

  useEffect(() => {
    void getData()
    console.log(accounts)
  }, [currentPage])

  const onClick = (account: Account) => {
    dispatch(selecOneDetail(account))
    router.push('/detail')
  }

  const nextOptions = () => {
    const nextPage = currentPage + 1
    dispatch(changePage(nextPage))
  }

  const backOptions = () => {
    const backPage = currentPage - 1
    dispatch(changePage(backPage))
  }

  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 h-[90%] py-12">
      {
        currentPage !== 0 && (
          <Button onClick={backOptions}>
            <div className="flex flex-col gap-1">
              <span>{'<<'} Opciones anteriores</span>
            </div>
          </Button>
        )
      }
      {
        accounts.map((account, index) => (
          <Button onClick={() => { onClick(account) }} key={index}>
            <div className="flex flex-col gap-1">
              <span>{getNameAccountType(account.tipo_letras)}</span>
              <span>Nro: {account.n}</span>
            </div>
          </Button>
        ))
      }
      {
        accounts.length >= 5 && (
          <Button onClick={nextOptions}>
            <div className="flex flex-col gap-1">
              <span>Mas opciones {'>>'}</span>
            </div>
          </Button>
        )
      }
    </section>
  )
}

export default AccountsSection
