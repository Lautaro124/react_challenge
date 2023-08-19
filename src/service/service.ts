import { type Accounts } from '@/interface/accounts'

// funcion de servicio para obtener datos de la api
const service = async (): Promise<Accounts> => {
  const url = process.env.NEXT_PUBLIC_API_URL ?? ''
  const response = await fetch(url)

  return await response.json()
}

export default service
