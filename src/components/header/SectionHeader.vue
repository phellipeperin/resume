<template>
    <div>
        <h5
            class="display-2 text-uppercase font-weight-light"
            :class="{'mb-4': !subtitle, 'text-center': $vuetify.breakpoint.mdAndUp}"
        >
            {{ title }}
        </h5>
        <h6
            v-if="subtitle"
            class="subtitle-1 mb-4"
            :class="{'text-center': $vuetify.breakpoint.mdAndUp}"
        >
            {{ subtitle }}
        </h6>
    </div>
</template>

<script>
    export default {
        name: 'SectionHeader',
        props: {
            title: { type: String, required: true },
            subtitle: { type: String, default: '' },
        },
    };
</script>

<style scoped>

</style>
