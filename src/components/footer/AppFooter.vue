<template>
    <v-footer
        dark
        padless
    >
        <v-card
            flat
            tile
            class="primary text-center"
            width="100%"
        >
            <v-card-text class="white--text">
                This (simple) project was made with Vue.js and is available
                <v-btn
                    text
                    small
                    color="default"
                    @click="goToProjectGithub"
                >
                    here
                </v-btn>
            </v-card-text>

            <v-divider class="mx-4" />

            <v-card-text class="white--text">
                <strong>Phellipe Perin</strong> — Front-end Developer
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: 'AppFooter',
        methods: {
            goToProjectGithub() {
                window.open('https://github.com/phellipeperin/resume', '_blank');
            },
        },
    };
</script>

<style scoped>

</style>
