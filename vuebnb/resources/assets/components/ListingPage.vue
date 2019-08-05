<template>
    <div>
        <header-image :image-url="images[0]" @header-clicked="openModal"></header-image>
        <div class="container">
            <div class="heading">
                <h1>{{ title }}</h1>
                <p>{{ address }}</p>
            </div>
            <hr>
            <div class="about">
                <h3>About this listing</h3>
                <expandable-text>{{ about }}</expandable-text>
            </div>
            <div class="lists">
                <feature-list title="Amenities" :items="amenities">
                    <template slot-scope="amenity">
                        <i class="fa fa-lg" :class="amenity.icon"></i>
                        <span>{{ amenity.title }}</span>
                    </template>
                </feature-list>
                <feature-list title="Prices" :items="prices">
                    <template slot-scope="price">
                        {{ price.title }}: <strong>{{ price.value }}</strong>
                    </template>
                </feature-list>
            </div>
        </div>
        <modal-window ref="imagemodal">
            <image-carousel :images="images"></image-carousel>
        </modal-window>
    </div>
</template>

<script>
    import { populateAmenitiesAndPrices } from '../js/helpers';
    import ExpandableText from './ExpandableText.vue';
    import FeatureList from './FeatureList.vue';
    import HeaderImage from './HeaderImage.vue';
    import ImageCarousel from './ImageCarousel.vue';
    import ModalWindow from './ModalWindow.vue';

    let model = JSON.parse(window.vue_bnb_listing_model);
    model = populateAmenitiesAndPrices(model);
    
    export default {
        name: 'ListingPage',
        data() {
            return Object.assign(model, {});
        },
        methods: {
            openModal() {
                this.$refs.imagemodal.modalOpen = true;
            }
        },
        components: {
            ExpandableText,
            FeatureList,
            HeaderImage,
            ImageCarousel,
            ModalWindow
        }
    }
</script>

<style>
    .heading {
        margin-bottom: 2em;
    }

    .heading h1 {
        font-size: 32px;
        font-weight: 700;
    }

    .heading p {
        font-size: 15px;
        color: #767676;
    }
    
    .about {
        margin-top: 2em;
    }

    .about h3 {
        font-size: 22px;
    }
</style>
