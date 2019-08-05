import 'core-js/features/object/assign';
import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';

let model = JSON.parse(window.vue_bnb_listing_model);
model = populateAmenitiesAndPrices(model);

const app = new Vue({
    data() {
        return Object.assign(model, {
            headerImageStyle: { 'background-image': `url(${model.images[0]})` },
            contracted: true,
            modalOpen: false
        });
    },
    methods: {
        escapeKeyListener: (e) => {
            if (e.key === 'Escape' && app.modalOpen) {
                app.modalOpen = false;
            }
        }
    },
    watch: {
        modalOpen: function() {
            const className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created() {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed() {
        document.removeEventListener('keyup', this.escapeKeyListener);
    }
}).$mount('#app');

