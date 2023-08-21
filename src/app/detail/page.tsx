'use client'
import { type RootState } from '@/redux/store'
import LayoutGenerator from '../components/layoutGenerator'
import { useSelector } from 'react-redux'
import { getNameAccountType } from '@/utils/getNameAccountType'

const Detail = () => {
  const { account } = useSelector((state: RootState) => state.acount)

  return (
    <LayoutGenerator title="Este es tu saldo actual">
      <section className='flex justify-center items-center h-[90%] py-12'>
        <div className='flex flex-col justify-center gap-2 items-start h-full w-1/3 text-[rgb(0,48,80)]'>
          <span>Saldo de cuenta: {account?.saldo}</span>
          <span>Tipo de cuenta: {getNameAccountType(account?.tipo_letras ?? '')}</span>
          <span>Número de cuelta: {account?.n}</span>
        </div>
      </section>
    </LayoutGenerator>
  )
}

export default Detail
