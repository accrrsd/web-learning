import { createSlice } from '@reduxjs/toolkit'
import { percentOf } from '../utils/utils'

const allScrollsSlice = createSlice({
  name: 'scrollsContainer',
  initialState: {
    containerScroll: {
      value: 0,
    },
  },
  reducers: {
    changeScroll(state, action) {
      const name = action.payload.name
      switch (name) {
        case 'containerScroll':
          state[name].value = action.payload.value
          state[name].bool =
            percentOf(state[name].value, window.innerHeight) > state[name].changeNum
          break

        default:
          state[name].value = action.payload.value
          break
      }
    },
    changeSpecificKey(state, action) {
      const name = action.payload.name
      const key = action.payload.key
      const value = action.payload.value
      state[name][key] = value
    },
  },
})

export const { changeScroll, changeSpecificKey } = allScrollsSlice.actions
export const scrollReducer = allScrollsSlice.reducer

const allMouseSlice = createSlice({
  name: 'mouseContainer',
  initialState: {
    firstPageMouse: {
      pos: {
        x: 0,
        y: 0,
      },
    },
  },
  reducers: {
    changeMousePos(state, action) {
      const name = action.payload.name
      state[name].pos.x = action.payload.x
      state[name].pos.y = action.payload.y
    },
  },
})

export const { changeMousePos } = allMouseSlice.actions
export const mouseReducer = allMouseSlice.reducer
