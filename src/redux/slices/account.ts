import { type Account } from '@/interface/accounts'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  currentPage: number
  account?: Account
}

const initialState: InitialState = {
  currentPage: 0,
  account: {
    e: '',
    n: '',
    t: '',
    saldo: '',
    tipo_letras: '',
    moneda: ''
  }
}

const accountsSlices = createSlice({
  name: 'acount',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    selecOneDetail(state, action: PayloadAction<Account | undefined>) {
      state.account = action.payload
    }
  }
})

export const { changePage, selecOneDetail } = accountsSlices.actions
export default accountsSlices.reducer
