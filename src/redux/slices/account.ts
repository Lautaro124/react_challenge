import { type Account } from '@/interface/accounts'
import { calculateItemsPerPage } from '@/utils/calculateItemsPerPage'
import { getFormattedAccounts } from '@/utils/getFormattedAccounts'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  accounts: Account[]
  currentPage: number
  account?: Account
}

const initialState: InitialState = {
  accounts: [],
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
// Se creo un slice para realizar acciones/cambios de estados en base a llamados
const accountsSlices = createSlice({
  name: 'acount',
  initialState,
  reducers: {
    setAccounts(state, action: PayloadAction<Account[]>) {
      const accounts = getFormattedAccounts(action.payload)
      const itemsPerPage = calculateItemsPerPage(state.currentPage, accounts.length)
      const startIndex = state.currentPage * itemsPerPage
      const endIndex = startIndex + itemsPerPage

      state.accounts = accounts.slice(startIndex, endIndex)
    },
    changePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    selecOneDetail(state, action: PayloadAction<Account | undefined>) {
      state.account = action.payload
    }
  }
})

export const { changePage, selecOneDetail, setAccounts } = accountsSlices.actions
export default accountsSlices.reducer
