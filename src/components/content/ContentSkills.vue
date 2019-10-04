<template>
    <div class="full-height white">
        <v-card flat>
            <v-card-title>
                <div class="display-1">
                    Skills & Languages
                    <v-chip
                        label
                        color="secondary"
                    >
                        Stronger ones
                    </v-chip>
                </div>
            </v-card-title>

            <v-divider class="mt-2 mx-4" />

            <v-row>
                <v-col
                    v-for="skillArea in skillAreaList"
                    :key="skillArea.title"
                    cols="12"
                    md="6"
                    class="py-0"
                >
                    <v-card-text>
                        <v-subheader>{{ skillArea.title }}</v-subheader>
                        <v-chip
                            v-for="skill in skillArea.skillSet"
                            :key="skill.name"
                            :color="skill.strong ? 'secondary' : 'default'"
                            :outlined="!skill.strong"
                            label
                            class="mr-2 mb-2"
                        >
                            {{ skill.name }}
                        </v-chip>
                    </v-card-text>
                </v-col>
            </v-row>

        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'ContentSkills',
        data() {
            return {
                skillAreaList: [
                    {
                        title: 'Dev Languages',
                        skillSet: [
                            { name: 'JavaScript', strong: true },
                            { name: 'ES6/7/8', strong: true },
                            { name: 'TypeScript', strong: false },
                            { name: 'HTML5', strong: true },
                            { name: 'CSS3', strong: true },
                            { name: 'Java', strong: true },
                            { name: 'PHP', strong: false },
                        ],
                    },
                    {
                        title: 'Frameworks & Libraries',
                        skillSet: [
                            { name: 'Vue.js', strong: true },
                            { name: 'React', strong: false },
                            { name: 'React Native', strong: false },
                            { name: 'Angular.js', strong: true },
                            { name: 'Ionic', strong: false },
                            { name: 'SASS', strong: true },
                            { name: 'Stylus', strong: false },
                            { name: 'Vuetify', strong: true },
                            { name: 'Bootstrap', strong: true },
                            { name: 'React Native Paper', strong: false },
                            { name: 'Mocha', strong: false },
                            { name: 'Chai', strong: false },
                            { name: 'Spring', strong: false },
                            { name: 'WordPress', strong: true },
                        ],
                    },
                    {
                        title: 'Other Dev Skills',
                        skillSet: [
                            { name: 'Redux', strong: true },
                            { name: 'Vuex', strong: true },
                            { name: 'JSON', strong: true },
                            { name: 'Firebase', strong: false },
                            { name: 'MongoDB', strong: false },
                            { name: 'SQL', strong: false },
                            { name: 'Git', strong: true },
                            { name: 'NPM Modules', strong: true },
                            { name: 'Lint', strong: true },
                            { name: 'Unit Testing', strong: false },
                            { name: 'TDD', strong: false },
                        ],
                    },
                    {
                        title: 'Environment, Lifecycle & Integration',
                        skillSet: [
                            { name: 'REST', strong: true },
                            { name: 'GraphQL', strong: false },
                            { name: 'Webpack', strong: true },
                            { name: 'Vue CLI', strong: true },
                            { name: 'Docker', strong: false },
                        ],
                    },
                    {
                        title: 'Design & UX',
                        skillSet: [
                            { name: 'Web Design', strong: true },
                            { name: 'UX', strong: true },
                            { name: 'Bootstrap', strong: true },
                            { name: 'Material Design', strong: true },
                            { name: 'Adobe InDesign', strong: false },
                            { name: 'Adobe XD', strong: false },
                        ],
                    },
                    {
                        title: 'Languages',
                        skillSet: [
                            { name: 'Portuguese', strong: true },
                            { name: 'English', strong: true },
                            { name: 'Spanish', strong: false },
                            { name: 'French', strong: false },
                        ],
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    .full-height {
        height: 100%;
    }
</style>
