<template>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-card
                flat
                tile
                class="d-flex"
            >
                <img
                    :src="imgUrl"
                    alt="Screenshot"
                    width="100%"
                    class="pointer"
                    v-on="on"
                >
            </v-card>
        </template>

        <img
            :src="imgUrl"
            alt="Screenshot"
            width="100%"
        >
    </v-dialog>
</template>

<script>
    export default {
        name: 'ContentPortfolioImage',
        props: {
            imgUrl: { type: String, required: true },
        },
        data() {
            return {
                dialog: false,
            };
        },
    };
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>
