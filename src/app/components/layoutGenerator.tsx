interface LayoutGeneratorProps {
  title: string
  children: React.ReactNode
}
const LayoutGenerator = ({ children, title }: LayoutGeneratorProps) => {
  return (
    <main className="py-8 px-7 h-[71%] w-screen">
      <section className="h-[10%] flex flex-col items-center justify-center text-[rgb(0,48,80)]">
        <span className="text-center text-lg">Consultar saldo</span>
        <h1 className="font-bold text-3xl tracking-wider">{title}</h1>
      </section>
        {children}
    </main>
  )
}

export default LayoutGenerator
