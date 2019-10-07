+<template>
    <div class="white py-10 px-4 text-center">
        <section-header title="Portfolio" />

        <p class="body-1 mb-0 mt-2">
            I can't make public most of my code, however I can share some screenshots.
        </p>
        <p class="body-1 mb-0">
            You should still check my GitHub, there are some pet projects there :)
        </p>
        <v-btn
            x-large
            depressed
            color="secondary"
            class="mt-4 mb-8"
            @click="goToGithub"
        >
            See Pet Projects
        </v-btn>

        <v-container fluid>
            <v-row>
                <v-col
                    v-for="(screenshot, i) in portfolioScreenshots"
                    :key="i"
                    class="d-flex child-flex"
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-card
                        flat
                        tile
                        class="d-flex"
                    >
                        <img
                            :src="screenshot.img"
                            alt="Screenshot"
                            width="100%"
                        >
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import SectionHeader from '../header/SectionHeader.vue';

    const screenshotNexfar1 = require('../../assets/img/portfolio/nexfar1.png');
    const screenshotNexfar2 = require('../../assets/img/portfolio/nexfar2.png');
    const screenshotNexfar3 = require('../../assets/img/portfolio/nexfar3.png');
    const screenshotNexfar4 = require('../../assets/img/portfolio/nexfar4.png');
    const screenshotNexfar5 = require('../../assets/img/portfolio/nexfar5.png');
    const screenshotSymph1 = require('../../assets/img/portfolio/symph1.png');
    const screenshotSymph2 = require('../../assets/img/portfolio/symph2.png');
    const screenshotInova1 = require('../../assets/img/portfolio/inova1.png');

    export default {
        name: 'ContentPortfolio',
        components: { SectionHeader },
        data() {
            return {
                portfolioScreenshots: [
                    { img: screenshotNexfar1 },
                    { img: screenshotNexfar2 },
                    { img: screenshotNexfar3 },
                    { img: screenshotNexfar4 },
                    { img: screenshotNexfar5 },
                    { img: screenshotSymph1 },
                    { img: screenshotSymph2 },
                    { img: screenshotInova1 },
                ],
            };
        },
        methods: {
            goToGithub() {
                window.open('https://github.com/phellipeperin', '_blank');
            },
        },
    };
</script>

<style scoped>

</style>
