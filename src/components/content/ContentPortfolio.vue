<template>
    <div class="white py-10 px-4">
        <section-header
            title="Portfolio"
            subtitle="I can't make public most of my code, however I can share some screenshots :)"
        />

        <v-carousel
            cycle
            height="640px"
            delimiter-icon="$vuetify.icons.checkboxBlankCircle"
            next-icon="$vuetify.icons.chevronRight"
            prev-icon="$vuetify.icons.chevronLeft"
        >
            <v-carousel-item
                v-for="(screenshot, i) in portfolioScreenshots"
                :key="i"
                :src="screenshot.img"
            />
        </v-carousel>
    </div>
</template>

<script>
    import SectionHeader from '../header/SectionHeader.vue';

    const screenshotNexfar1 = require('../../assets/img/portfolio/portfolio_nexfar_1.png');
    const screenshotSymph1 = require('../../assets/img/portfolio/portfolio_symph_1.png');
    const screenshotSymph2 = require('../../assets/img/portfolio/portfolio_symph_2.png');

    export default {
        name: 'ContentPortfolio',
        components: { SectionHeader },
        data() {
            return {
                portfolioScreenshots: [
                    { img: screenshotNexfar1 },
                    { img: screenshotSymph1 },
                    { img: screenshotSymph2 },
                ],
            };
        },
    };
</script>

<style scoped>

</style>
