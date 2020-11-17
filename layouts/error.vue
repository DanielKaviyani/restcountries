<template>
    <v-app dark class="accent">
        <notifications group="message" />
        <v-container class="fill-height">
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="4">
                    <h1 v-if="error.statusCode === 404">
                        {{ pageNotFound }}
                    </h1>
                    <h1 v-else>
                        {{ otherError }}
                    </h1>
                    <v-btn
                        class="text-capitalize text--secondary primary"
                        to="/"
                    >
                        Home Page
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    layout: 'empty',
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred',
        }
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError
        return {
            title,
        }
    },
}
</script>

<style scoped>
h1 {
    font-size: 20px;
}
</style>
