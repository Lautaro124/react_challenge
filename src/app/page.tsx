import service from '@/service/service'
import Image from 'next/image'

export default async function Home() {
  const accounts = await service()

  console.log(accounts)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p></p>
    </main>
  )
}
