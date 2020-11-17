<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4">
                <search-box />
            </v-col>
            <v-col cols="6" offset-sm="2" sm="3">
                <sort-box />
            </v-col>
            <v-col cols="6" sm="3">
                <group-box />
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="(country, index) in countries"
                :key="index"
                cols="12"
                sm="4"
                md="3"
            >
                <country-box :country="country" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Main',
    async asyncData({ store }) {
        await store.dispatch('get_countries')
    },
    computed: {
        countries() {
            return this.$store.state.countries
        },
    },
}
</script>
