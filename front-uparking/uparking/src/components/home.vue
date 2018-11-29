<template>

<pm-header></pm-header>

</template>

<script>
import axios from 'axios';
import PmHeader from './header'

export default {
  name:'Home',
  components:{
    PmHeader
  },
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get('http://localhost:3000/api/zonas').then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data.result[0]
    })
    .catch(e => {
      this.errors.push(e)
    })
  }

}
</script>

