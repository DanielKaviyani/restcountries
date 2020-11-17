<template>
    <v-container class="fill-height">
        <v-btn color="primary" class="text--primary" @click="go_back">
            <v-icon size="15">mdi-arrow-left</v-icon>
            <span class="text-capitalize">Back</span>
        </v-btn>
        <v-row align="center">
            <v-col cols="12" sm="6" md="4">
                <v-img
                    :src="country.flag"
                    :lazy-src="country.flag"
                    aspect-ratio="4:3"
                    class="image"
                ></v-img>
            </v-col>
            <v-col offset-md="2" cols="12" sm="6">
                <h1 class="font-weight-bold mb-6">
                    {{ country.name }}
                </h1>
                <v-row>
                    <v-col cols="12" sm="6">
                        <ul>
                            <li>
                                <span class="font-weight-medium">
                                    Native Name:
                                </span>
                                <span class="text--secondary">
                                    {{ country.nativeName }}
                                </span>
                            </li>
                            <li>
                                <span class="font-weight-medium">
                                    Population:
                                </span>
                                <span class="text--secondary">
                                    {{ country.population | number_format }}
                                </span>
                            </li>
                            <li>
                                <span class="font-weight-medium">Region:</span>
                                <span class="text--secondary">
                                    {{ country.region }}
                                </span>
                            </li>
                            <li>
                                <span class="font-weight-medium">
                                    Sub Region:
                                </span>
                                <span class="text--secondary">
                                    {{ country.subregion }}
                                </span>
                            </li>
                            <li>
                                <span class="font-weight-medium">
                                    Capital:
                                </span>
                                <span class="text--secondary">
                                    {{ country.capital }}
                                </span>
                            </li>
                        </ul>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <ul>
                            <li>
                                <span class="font-weight-medium">
                                    Top Level Domain:
                                </span>
                                <span class="text--secondary">
                                    {{ country.topLevelDomain[0] }}
                                </span>
                            </li>
                            <li>
                                <span class="font-weight-medium">
                                    Currencies:
                                </span>
                                <span class="text--secondary">
                                    {{ country.currencies[0].name }}
                                </span>
                            </li>
                            <li>
                                <span class="font-weight-medium">
                                    Languages:
                                </span>
                                <span
                                    v-for="(lang, index) in country.languages"
                                    :key="index"
                                >
                                    {{
                                        country.languages.length >= index + 1
                                            ? `${lang.name},`
                                            : lang.name
                                    }}
                                </span>
                            </li>
                        </ul>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" sm="4">
                        <div class="text--primary mb-2 mb-sm-0">
                            Border Countries:
                        </div>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <v-btn
                            v-for="(lang, key) in country.languages"
                            :key="key"
                            :to="`/${lang.iso639_2}`"
                            small
                            color="primary"
                            class="borders text-capitalize text--primary caption mb-2"
                        >
                            {{ lang.name }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Country',
    filters: {
        number_format(val) {
            return Intl.NumberFormat().format(val)
        },
    },
    async asyncData({ store, route }) {
        await store.dispatch('get_country', route.params.country)
    },
    computed: {
        country() {
            return this.$store.state.country
        },
    },
    methods: {
        go_back() {
            window.history.go(-1)
        },
    },
}
</script>

<style lang="scss" scoped>
.image {
    width: 100%;
    height: 300px;
}
ul {
    padding: 0;
    li {
        list-style: none;
        margin-bottom: 10px;
    }
}
.borders {
    &:not(:last-child) {
        margin-right: 10px;
    }
}
</style>
