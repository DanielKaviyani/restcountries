<template>
    <v-select
        v-model="sortItem"
        outlined
        clearable
        :items="items"
        hide-details
        color="secondary"
        placeholder="Sort Countries"
        background-color="primary"
    ></v-select>
</template>

<script>
export default {
    name: 'GroupBox',
    data: () => ({
        items: [
            { text: 'Population', value: 'population' },
            { text: 'Country Name', value: 'name' },
        ],
        sortItem: '',
    }),
    watch: {
        sortItem(val) {
            if (val) this.$store.commit('SORT_COUNTRIES', val)
        },
    },
}
</script>
