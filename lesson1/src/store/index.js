/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: []
    },
    getters: {
        paymentsList: (state) => state.paymentsList
        /*         paymentsList: ({ paymentsList }) => paymentsList
         */
    },
    mutations: {
        SET_PAYMENTS_LIST(state, paymentsList) {
            state.paymentsList = paymentsList
        }
    },
    actions: {
        fetchData({ commit }) {
            setTimeout(() => {
                const initialPaymentsList = [
                    {
                        Date: '28.03.2020',
                        Category: 'Food',
                        Value: 169
                    },
                    {
                        Date: '24.03.2020',
                        Category: 'Transport',
                        Value: 360
                    },
                    {
                        Date: '24.03.2020',
                        Category: 'Food',
                        Value: 532
                    }
                ]

                commit('SET_PAYMENTS_LIST', initialPaymentsList)
            }, 1000)
        }
    },
    modules: {}
})
