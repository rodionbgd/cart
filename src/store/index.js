import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        SET_PRODUCT_LIST(state, products) {
            state.products = products;
        },
        ADD_TO_CART(state, product) {
            const productToAdd = state.cart?.find(p => p.id === product.id);
            if (productToAdd) {
                productToAdd.amount += product.amount;
                productToAdd.date = product.date;
                state.cart = [...state.cart];
                return;
            }
            state.cart = [...state.cart, product];
        }
    },
    actions: {
        getProductsList({commit}) {
            api.getProductsList().then(result => {
                commit("SET_PRODUCT_LIST", result);
            });
        },
        addProduct({commit}, product) {
            commit("ADD_TO_CART", product);
        }
    },
    modules: {}
})
