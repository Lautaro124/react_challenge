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

  // Realiza en llamado de la api y dispacha un evento para ingresar las cuentas
  const getData = async () => {
    const serviceAccounts = await service()
    dispatch(setAccounts(serviceAccounts.cuentas))
  }
  // al inicial la pagina ejecuta la funcion getData y cada vez que se modifique el currentPage se va a ejecutar
  useEffect(() => {
    void getData()
  }, [currentPage])

  // Funcion para poder ir a los detalles y dispacha una accion que obtiene los datos de una cuenta
  const onClick = (account: Account) => {
    dispatch(selecOneDetail(account))
    router.push('/detail')
  }

  // Ejecuta un dispatch para cambiar el paginado
  const handlePageChange = (direction: 'next' | 'back'): void => {
    if (direction === 'next') dispatch(changePage(currentPage + 1))
    if (direction === 'back') dispatch(changePage(currentPage - 1))
  }

  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 h-[90%] py-12">
      {
        currentPage !== 0 && (
          <Button onClick={() => { handlePageChange('back') }}>
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
          <Button onClick={() => { handlePageChange('next') }}>
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
