import 'core-js/features/object/assign';
import Vue from 'vue';
import ListingPage from '../components/ListingPage.vue';

export default new Vue({
    render: h => h(ListingPage)
}).$mount('#app');

