/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: CounterSliceState = {
  value: 0,
  status: 'idle',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

/* Types */
export interface CounterSliceState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}
