<template>
    <v-content>
        <v-container
            fluid
            class="py-0"
        >
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                    class="pa-0"
                >
                    <content-summary />
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    class="pa-0"
                >
                    <content-skills />
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                    class="pa-0"
                >
                    <content-work-experience />
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                    class="pa-0"
                >
                    <content-udemy-course />
                </v-col>
            </v-row>
            <!-- <v-row>
                <v-col
                    cols="12"
                    class="pa-0"
                >
                    <content-portfolio />
                </v-col>
            </v-row> -->
        </v-container>
    </v-content>
</template>

<script>
    import ContentSummary from './ContentSummary.vue';
    import ContentSkills from './ContentSkills.vue';
    import ContentWorkExperience from './ContentWorkExperience.vue';
    import ContentUdemyCourse from './ContentUdemyCourse.vue';
    // import ContentPortfolio from './ContentPortfolio.vue';

    export default {
        name: 'AppContent',
        components: {
            ContentSummary,
            ContentSkills,
            ContentWorkExperience,
            ContentUdemyCourse,
            // ContentPortfolio,
        },
    };
</script>

<style scoped>

</style>
