<template>
    <h1>{{ this.message }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios  from 'axios'

export default defineComponent({
    data () {
        return {
            path: 'http://rest:5000/ping',
            message: ''
        }
    },

    created() {
        axios.get(this.path)
            .then((res) => {
                this.message = res.data
            })
            .catch((error) => {
                console.error(error)
            })
    }
})
</script>