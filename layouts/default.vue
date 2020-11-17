<template>
    <v-app>
        <notifications group="message" />
        <v-app-bar app color="primary">
            <v-container>
                <div class="d-flex align-center justify-space-between">
                    <div
                        class="text-caption text-sm-subtitle-1 font-weight-bold"
                    >
                        Where in the world?
                    </div>
                    <div
                        class="text--primary caption cursor-pointer"
                        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
                    >
                        <v-icon size="15">
                            {{
                                $vuetify.theme.dark
                                    ? 'mdi-weather-night'
                                    : 'mdi-weather-sunny'
                            }}
                        </v-icon>
                        <span class="text-capitalize ml-1">dark mode</span>
                    </div>
                </div>
            </v-container>
        </v-app-bar>
        <v-main class="accent">
            <nuxt />
        </v-main>
    </v-app>
</template>
