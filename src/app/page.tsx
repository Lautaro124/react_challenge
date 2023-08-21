import service from '@/service/service'
import AccountsSection from './components/accountsSections'
import LayoutGenerator from './components/layoutGenerator'

export default async function Home() {
  const accounts = await service()

  return (
    <LayoutGenerator title="Selecciona la cuenta a consultar">
      <AccountsSection accounts={accounts.cuentas}/>
    </LayoutGenerator>
  )
}
