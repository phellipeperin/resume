<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <v-btn
                icon
                v-on="on"
                @click="goToLink"
            >
                <v-icon>{{ icon }}</v-icon>
            </v-btn>
        </template>
        <span>{{ description }}</span>
    </v-tooltip>
</template>

<script>
    export default {
        name: 'SocialLink',
        props: {
            destination: { type: String, required: true, validator: value => (['LINKEDIN', 'GITHUB', 'EMAIL', 'RESUME'].indexOf(value) !== -1) },
        },
        data() {
            return {
                icon: '',
                description: '',
            };
        },
        created() {
            if (this.destination === 'LINKEDIN') {
                this.icon = '$vuetify.icons.linkedinBox';
                this.description = 'Linkedin';
            }
            if (this.destination === 'GITHUB') {
                this.icon = '$vuetify.icons.githubBox';
                this.description = 'Github';
            }
            if (this.destination === 'EMAIL') {
                this.icon = '$vuetify.icons.email';
                this.description = 'Email';
            }
            if (this.destination === 'RESUME') {
                this.icon = '$vuetify.icons.fileAccount';
                this.description = 'Resume';
            }
        },
        methods: {
            goToLink() {
                let url = '';
                if (this.destination === 'LINKEDIN') url = 'https://www.linkedin.com/in/phellipeperin/';
                if (this.destination === 'GITHUB') url = 'https://github.com/phellipeperin';
                if (this.destination === 'EMAIL') url = 'mailto:phellipe.perin@gmail.com';
                if (this.destination === 'RESUME') url = 'http://phellipe.com.br/files/resume_phellipe_perin.pdf';

                if (url) window.open(url, '_blank');
            },
        },
    };
</script>

<style scoped>

</style>
