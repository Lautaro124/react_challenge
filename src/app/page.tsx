import service from '@/service/service'
import Button from './components/buttons'

export default async function Home() {
  const accounts = await service()

  return (
    <main className="py-5 px-7 h-[75%]">
      <section className="h-[10%] flex flex-col items-center justify-center">
        <span>Consultar saldo</span>
        <h1 className="font-bold text-2xl">Selecciona la cuenta a consultar</h1>
      </section>
      <section className="grid grid-cols-3 grid-rows-2 gap-4 h-[90%] py-12">
        {
          accounts.cuentas.map(account => (
            <Button key={account.n}>
              <div className="flex flex-col gap-1">
                <span>{account.tipo_letras}</span>
                <span>Nro: {account.n}</span>
              </div>
            </Button>
          )).slice(0, 6)
        }
      </section>
    </main>
  )
}
