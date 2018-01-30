export const state = () => ({
  childPlatform: [],
  childCompany: []
})

export const mutations = {
  'B_INTRO_CHILD' (state, payload) {
    state.childPlatform = payload[0]
    state.childCompany = payload[1]
  }
}
