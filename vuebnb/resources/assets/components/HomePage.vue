<template>
    <div class="home-container">
        <listing-summary-group v-for="(group, country) in listing_groups" :key="country" :listings="group" :country="country"></listing-summary-group>
    </div>
</template>

<script>
    import axios from 'axios';
    import { groupByCountry } from '../js/helpers';
    import routeMixin from '../js/route-mixin';
    import ListingSummaryGroup from './ListingSummaryGroup';
    
    export default {
        name: 'HomePage',
        mixins: [routeMixin],
        data() {
            return { listing_groups: [] }
        },
        components: {
            ListingSummaryGroup
        },
        methods: {
            assignData({ listings }) {
                this.listing_groups = groupByCountry(listings);
            }
        }
    }
</script>

<style>
    
</style>
