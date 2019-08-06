import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        saved: [1, 15],
        listing_summaries: [],
        listings: []
    },
    mutations: {
        TOGGLE_SAVED(state, id) {
            const index = state.saved.findIndex(saved => saved === id);
            if (index === -1) {
                state.saved.push(id);
            } else {
                state.saved.splice(index, 1);
            }
        },
        ADD_DATA(state, { route, data }) {
            if (route === 'listing') {
                state.listings.push(data.listing);
            } else {
                state.listing_summaries = data.listings;
            }
        }
    },
    actions: {

    },
    getters: {
        getListing: state => id => state.listings.find(listing => id == listing.id)
    }
});