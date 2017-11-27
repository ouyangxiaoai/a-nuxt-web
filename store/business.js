export const state = () => ({
  childPlatform: [],
  childCompany: []
})

export const mutations = {
  'B_INTRO_CHILD' (state, payload) {
    state.childPlatform = payload.platform
    state.childCompany = payload.company
  }
}
