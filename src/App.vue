<template>
    <v-app>
        <app-header />
        <app-content />
        <app-footer />
    </v-app>
</template>

<script>
    import AppHeader from './components/header/AppHeader.vue';
    import AppContent from './components/content/AppContent.vue';
    import AppFooter from './components/footer/AppFooter.vue';

    export default {
        name: 'App',
        components: { AppHeader, AppContent, AppFooter },
    };
</script>

<style>
    div.v-application *,
    div.v-application .display-1,
    div.v-application .display-2,
    div.v-application .display-3,
    div.v-application .display-4,
    div.v-application .headline,
    div.v-application .title,
    div.v-application .subtitle-1,
    div.v-application .subtitle-2,
    div.v-application .body-1,
    div.v-application .body-2,
    div.v-application .caption,
    div.v-application .overline {
        font-family: 'Exo', sans-serif !important;
    }
</style>
