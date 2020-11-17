import Vue from 'vue'

export default function ({ $axios, redirect }) {
    $axios.onError(error => {
        Vue.notify({
            group: 'message',
            type: 'error',
            text: error.response
                ? error.response.data.message
                : 'Oops Error !!!',
        })
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}
