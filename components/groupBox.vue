<template>
    <v-select
        v-model="region"
        outlined
        clearable
        :items="regions"
        hide-details
        color="secondary"
        placeholder="Filter by Region"
        background-color="primary"
        @click:clear="all_countries"
    ></v-select>
</template>

<script>
export default {
    name: 'GroupBox',
    data: () => ({
        regions: [
            { text: 'Africa', value: 'africa' },
            { text: 'Americas', value: 'americas' },
            { text: 'Asia', value: 'asia' },
            { text: 'Europe', value: 'europe' },
            { text: 'Oceania', value: 'oceania' },
        ],
        region: '',
    }),
    watch: {
        region(val) {
            if (val) this.$store.dispatch('region_filter', val)
        },
    },
    methods: {
        all_countries() {
            this.$store.dispatch('get_countries')
        },
    },
}
</script>
