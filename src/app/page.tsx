import AccountsSection from './components/accountsSections'
import LayoutGenerator from './components/layoutGenerator'

export default function Home() {
  return (
    <LayoutGenerator title="Selecciona la cuenta a consultar">
      <AccountsSection />
    </LayoutGenerator>
  )
}
