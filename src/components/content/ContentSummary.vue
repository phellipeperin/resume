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

        <h5 class="display-1">
            Phellipe PERIN
        </h5>
        <h6 class="subtitle-1 text-uppercase">
            Front-end Developer
        </h6>

        <v-divider class="my-5 mx-4" />

        <p class="title font-weight-light mb-0">
            Front-end developer with 8+ years of experience.
        </p>
        <p class="title font-weight-light mb-3">
            Experienced leading, mentoring and managing teams.
        </p>

        <v-divider class="my-5 mx-4" />

        <v-list
            class="mx-auto primary"
            width="300px"
        >
            <v-list-item
                v-for="contactInfo in contactInfoList"
                :key="contactInfo.value"
                class="primary white--text"
            >
                <v-list-item-avatar>
                    <v-icon
                        class="white--text"
                        size="20px"
                        v-text="contactInfo.icon"
                    />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title
                        class="body-2 text-uppercase white--text"
                        v-text="contactInfo.value"
                    />
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    const profileImage = require('../../assets/img/profile.jpg');

    export default {
        name: 'ContentSummary',
        data() {
            return {
                profileImage,
                contactInfoList: [
                    { icon: '$vuetify.icons.email', value: 'phellipe.perin@gmail.com' },
                    { icon: '$vuetify.icons.mapMarker', value: 'Porto, Portugal' },
                    { icon: '$vuetify.icons.mapClock', value: 'UTC +1' },
                ],
            };
        },
    };
</script>

<style scoped>
    .full-height {
        height: 100%;
    }

    .contact-title {
        font-size: 18px;
    }
</style>
