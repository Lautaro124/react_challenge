import service from '@/service/service'
import AccountsSection from './components/accountsSections'

export default async function Home() {
  const accounts = await service()

  return (
    <main className="py-8 px-7 h-[71%]">
      <section className="h-[10%] flex flex-col items-center justify-center">
        <span>Consultar saldo</span>
        <h1 className="font-bold text-2xl">Selecciona la cuenta a consultar</h1>
      </section>
      <AccountsSection accounts={accounts.cuentas}/>
    </main>
  )
}
