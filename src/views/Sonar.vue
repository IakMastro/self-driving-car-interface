<template>
  <div>
    <b-table striped hover :items="logs"></b-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios  from 'axios'

export default defineComponent({
  data () {
    return {
      path: 'http://localhost:5000/api/sonar',
      logs: ''
    }
  },

  created() {
    axios.get(this.path)
      .then((res) => {
        this.logs = res.data
      })
      .catch((error) => {
        console.error(error)
      })
  }
})
</script>