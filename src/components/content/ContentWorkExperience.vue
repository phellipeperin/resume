<template>
    <div class="py-8">
        <h5
            class="display-2 text-uppercase font-weight-light mb-4"
            :class="{'text-center': $vuetify.breakpoint.mdAndUp}"
        >
            Carrer History
        </h5>

        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
                v-for="(work, i) in workExperinceList"
                :key="i"
                fill-dot
                small
            >
                <v-card class="elevation-2">
                    <v-card-title class="headline">
                        {{ work.role }}
                        <span class="subtitle-1 ml-2">at <strong>{{ work.company }}</strong></span>
                    </v-card-title>

                    <v-card-text class="subtitle-1 py-0"></v-card-text>
                    <v-card-text class="subtitle-1 py-0">
                        from <strong>{{ work.start }}</strong>
                        <span v-if="work.end">&nbsp;to <strong>{{ work.end }}</strong></span>
                    </v-card-text>

                    <v-card-text>
                        <p
                            v-for="description in work.descriptionList"
                            :key="description"
                            class="mb-0"
                        >
                            - {{ description }}
                        </p>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
    export default {
        name: 'ContentWorkExperience',
        data() {
            return {
                workExperinceList: [
                    {
                        role: 'Lead Front-end Developer',
                        company: 'Nexfar',
                        start: 'nov/17',
                        descriptionList: [
                            'Vue.js and Angular.js as core frameworks (migrated from latter to former)',
                            'Designed both the web application and mobile app',
                            'Responsible for all the front-end environment, from core decisions (such as which framework) to coding and deploying',
                            'Mentoring and teaching other front-end developers',
                        ],
                    },
                    {
                        role: 'Remote Freelancer',
                        company: 'PhPerin',
                        start: 'may/14',
                        descriptionList: [
                            'Worked remotely for many different companies',
                            'Served as core (or only) member of front-end development of 6 different SPAs',
                            'Over 30 websites developed',
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
