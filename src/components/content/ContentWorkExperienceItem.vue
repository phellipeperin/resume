<template>
    <v-card class="elevation-2">
        <v-card-title class="headline">
            {{ work.role }}
            <span class="subtitle-1 ml-2">at <strong>{{ work.company }}</strong></span>
        </v-card-title>

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
</template>

<script>
    export default {
        name: 'ContentWorkExperienceItem',
        props: {
            work: { type: Object, required: true },
        },
    };
</script>

<style scoped>

</style>
