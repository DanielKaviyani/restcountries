<template>
    <v-text-field
        v-model="search"
        outlined
        color="secondary"
        hide-details
        placeholder="Search for a country..."
        background-color="primary"
        prepend-inner-icon="mdi-magnify"
    ></v-text-field>
</template>

<script>
export default {
    name: 'SearchBox',
    data: () => ({
        timeout: null,
        search: '',
    }),
    watch: {
        search(val) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                if (val === '') this.$store.dispatch('get_countries')
                else this.$store.dispatch('search_countries', val)
            }, 600)
        },
    },
}
</script>
