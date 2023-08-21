'use client'
import Button from './button'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter()

  return (
    <footer className='p-3 py-5 h-24 flex items-center border-t border-t-[#d4d9db]'>
      <Button onClick={() => { router.replace('/') }}>
        Salir
      </Button>
    </footer>
  )
}

export default Footer
