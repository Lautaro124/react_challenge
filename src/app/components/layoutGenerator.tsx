interface LayoutGeneratorProps {
  title: string
  children: React.ReactNode
}
const LayoutGenerator = ({ children, title }: LayoutGeneratorProps) => {
  return (
    <main className="py-8 px-7 h-[71%]">
      <section className="h-[10%] flex flex-col items-center justify-center">
        <span>Consultar saldo</span>
        <h1 className="font-bold text-2xl">{title}</h1>
      </section>
        {children}
    </main>
  )
}

export default LayoutGenerator
