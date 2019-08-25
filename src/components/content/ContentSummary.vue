<template>
    <div class="primary white--text text-center full-height py-5">
        <v-avatar
            size="180px"
            class="mb-4"
        >
            <img
                :src="profileImage"
                alt="avatar"
            >
        </v-avatar>

        <h5 class="display-1">Phellipe Perin</h5>
        <h6 class="subtitle-1 text-uppercase">Front-end Developer</h6>

        <v-divider class="my-5 mx-4" />

        <p class="title font-weight-light mb-0">Front-end developer with 7+ years of experience.</p>
        <p class="title font-weight-light mb-3">5 of those working remotely.</p>
        <p class="title font-weight-light mb-0">Currently focused on developing Vue.js SPAs.</p>
        <p class="title font-weight-light">Now learning React & React Native.</p>
    </div>
</template>

<script>
    const profileImage = require('../../assets/img/profile.jpg');

    export default {
        name: 'ContentSummary',
        data() {
            return {
                profileImage,
            };
        },
    };
</script>

<style scoped>
    .full-height {
        height: 100%;
    }
</style>
