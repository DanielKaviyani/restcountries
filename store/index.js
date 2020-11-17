export const state = () => ({
    countries: [],
    country: {},
})

export const mutations = {
    SET_LIST(state, payload) {
        state.countries = payload
    },
    SET_COUNTRY(state, payload) {
        state.country = payload
    },
    SORT_COUNTRIES(state, payload) {
        state.countries = state.countries.sort((a, b) => {
            if (payload === 'population') return b.population - a.population
            else {
                if (a.name < b.name) return -1
                if (a.name > b.name) return 1
                return 0
            }
        })
    },
}

export const actions = {
    async get_countries({ commit }, payload) {
        await this.$axios.get('all').then(({ data }) => {
            commit('SET_LIST', data)
        })
    },
    async search_countries({ commit }, payload) {
        await this.$axios.get(`name/${payload}`).then(({ data }) => {
            commit('SET_LIST', data)
        })
    },
    async region_filter({ commit }, payload) {
        await this.$axios.get(`/region/${payload}`).then(({ data }) => {
            commit('SET_LIST', data)
        })
    },
    async get_country({ commit }, payload) {
        await this.$axios.get(`/alpha/${payload}`).then(({ data }) => {
            commit('SET_COUNTRY', data)
        })
    },
}
