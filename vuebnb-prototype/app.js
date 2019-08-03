const app = new Vue({
    data() {
        return {
            contracted: true,
            modalOpen: false,
            
            title: sample.title,
            address: sample.address,
            about: sample.about,
            amenities: sample.amenities,
            prices: sample.prices,
            headerImageStyle: {
                'background-image': 'url(sample/header.jpg)'
            }
        }
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

