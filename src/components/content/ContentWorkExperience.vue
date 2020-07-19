<template>
    <div class="blue-grey lighten-5 py-10 px-4">
        <section-header title="Carrer History" />

        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
                v-for="(work, i) in workExperinceList"
                :key="i"
                fill-dot
                small
            >
                <content-work-experience-item :work="work" />
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
    import SectionHeader from '../header/SectionHeader.vue';
    import ContentWorkExperienceItem from './ContentWorkExperienceItem.vue';

    export default {
        name: 'ContentWorkExperience',
        components: { SectionHeader, ContentWorkExperienceItem },
        data() {
            return {
                workExperinceList: [
                    {
                        role: 'Software Engineer',
                        company: 'EdirectInsure',
                        start: 'jan/20',
                        descriptionList: [
                            'Insurance selling platform for south-east Asia.',
                            'Back-end with API integration with Golang and Node.js',
                            'Front-end pages and flow development with TypeScript and Polymer',
                            'Communication in English with all clients.',
                        ],
                    },
                    {
                        role: 'Lead Front-end Developer',
                        company: 'Nexfar',
                        start: 'nov/17',
                        descriptionList: [
                            'Vue.js and React.js as core frameworks',
                            'Mentoring and teaching other front-end developers.',
                            'Designed both the web application and mobile app',
                            'Responsible for all the front-end environment, from core decisions (such as which framework) to coding and deploying.',
                        ],
                    },
                    {
                        role: 'Remote Freelancer',
                        company: 'PhPerin',
                        start: 'may/14',
                        end: 'jan/20',
                        descriptionList: [
                            'Developed and implemented software solutions based on client requirements.',
                            'Worked remotely for many different companies',
                            'Served as lead/core member for 6 different SPAs.',
                            'Delivered more than 40 different projects (SPAs, websites and more).',
                        ],
                    },
                    {
                        role: 'Front-end Developer',
                        company: 'Sinterink',
                        start: 'out/16',
                        end: 'jul/17',
                        descriptionList: [
                            'AngularJS as core framework',
                            'Single front-end developer. Responsible for all the environment',
                        ],
                    },
                    {
                        role: 'Fullstack Developer',
                        company: 'K2Studio',
                        start: 'out/16',
                        end: 'jul/17',
                        descriptionList: [
                            'JQuery and AngularJS as core front-end frameworks',
                            'Java with Spring and PostgreSQL for back-end and database',
                            'Despite being a fullstack, was mainly focus on front-end',
                        ],
                    },
                ],
            };
        },
    };
</script>

<style scoped>

</style>
