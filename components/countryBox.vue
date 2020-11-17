<template>
    <v-card :to="`/${country.alpha3Code}`" color="primary">
        <v-img
            :src="country.flag"
            :lazy-src="country.flag"
            width="100%"
            height="200px"
            aspect-ratio="4:3"
        ></v-img>
        <v-card-text>
            <h1 class="text--primary subtitle-1 font-weight-bold">
                {{ country.name }}
            </h1>
            <ul class="list">
                <li>
                    <span class="text--primary">Population:</span>
                    <span class="ml-1">
                        {{ country.population | number_format }}
                    </span>
                </li>
                <li>
                    <span class="text--primary">Region:</span>
                    <span class="ml-1">
                        {{ country.region }}
                    </span>
                </li>
                <li>
                    <span class="text--primary">Capital:</span>
                    <span class="ml-1">
                        {{ country.capital }}
                    </span>
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'Country',
    filters: {
        number_format(val) {
            return Intl.NumberFormat().format(val)
        },
    },
    props: {
        country: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.list {
    padding: 0;
    li {
        list-style: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}
h1.subtitle-1 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
