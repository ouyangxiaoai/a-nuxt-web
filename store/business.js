export const state = () => ({
  childPlatform: [],
  childCompany: [],
  company: {}
})

export const mutations = {
  'B_INTRO_CHILD' (state, payload) {
    state.childPlatform = payload.platform
    state.childCompany = payload.company
  },
  'B_INTRO_COMPANY' (state, payload) {
    state.company[payload.id] = payload.company
  }
}
export const actions = {
  async getProvinces ({commit}, {province}) {
    let list = await this.$axios.get('/v1/company/', {params: {province, status: 2}})
    commit('B_INTRO_COMPANY', {company: list.data.results, id: province})
  }
}
