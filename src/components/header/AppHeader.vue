<template>
    <v-app-bar
        app
        dark
        flat
        color="primary"
    >
        <v-toolbar-title class="headline text-uppercase">
            <span class="font-weight-light">Phellipe&nbsp;Perin</span>
        </v-toolbar-title>
        <v-spacer />

        <social-link destination="LINKEDIN" />
        <social-link destination="GITHUB" />
        <social-link destination="EMAIL" />
        <social-link destination="RESUME" />
    </v-app-bar>
</template>

<script>
    import SocialLink from '../social/SocialLink.vue';

    export default {
        name: 'AppHeader',
        components: { SocialLink },
    };
</script>

<style scoped lang="scss">

</style>
