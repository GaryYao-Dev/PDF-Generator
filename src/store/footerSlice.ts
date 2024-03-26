import { createSlice } from '@reduxjs/toolkit'

const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    showLink: true,
    showPageNumber: true,
  },
  reducers: {
    toggleLink: (state) => {
      state.showLink = !state.showLink
    },
    togglePageNumber: (state) => {
      state.showPageNumber = !state.showPageNumber
    },
  },
})

export const { toggleLink, togglePageNumber } = footerSlice.actions
export default footerSlice
