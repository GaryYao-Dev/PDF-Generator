import { Fields } from '@/types/Fields'
import { createSlice } from '@reduxjs/toolkit'


const dataSlice = createSlice({
  name: 'data',
  initialState: {
    profession: <Fields[]>[],
  },
  reducers: {
    addProfession: (state, action) => {
      const current = state.profession
      const newProfession = [...current, action.payload]
      state.profession = newProfession
    },
    deleteProfession: (state, action) => {
      state.profession.splice(action.payload, 1)
    },
    updateProfession: (state, action) => {
      state.profession[action.payload.index] = action.payload.data
    },
  },
})

export const { addProfession, deleteProfession, updateProfession } =
  dataSlice.actions

const dataReducer = dataSlice.reducer

export default dataReducer
