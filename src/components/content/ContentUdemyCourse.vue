<template>
    <div class="primary course px-4 text-center white--text">
        <img
            :src="udemyLogo"
            alt="Logo Udemy"
            width="140"
            class="mb-4"
        >

        <h6 class="display-1 text-uppercase font-weight-light my-6">
            My <span class="font-weight-medium">Vue.js course</span> on udemy is out!
        </h6>
        <v-btn
            x-large
            depressed
            color="secondary"
            class="my-4"
            width="200px"
            @click="goToUdemyCourse"
        >
            Check it out
        </v-btn>

        <p class="caption text-uppercase mt-4">( on Portuguese )</p>
    </div>
</template>

<script>
    const udemyLogo = require('../../assets/img/logo_udemy_white.png');

    export default {
        name: 'ContentUdemyCourse',
        data() {
            return {
                udemyLogo,
            };
        },
        methods: {
            goToUdemyCourse() {
                window.open('https://www.udemy.com/', '_blank');
            },
        },
    };
</script>

<style scoped>
    .course {
        padding-top: 100px;
        padding-bottom: 100px;
    }
</style>
