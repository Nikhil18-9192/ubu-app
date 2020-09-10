export const state = () => ({
  salonModalState: false
})

export const getters = {
  getSalonModalState: state => {
    return state.salonModalState
  }
}

export const mutations = {
  TOGGLE_SALON_MODAL: state => {
    state.salonModalState = !state.salonModalState
  }
}