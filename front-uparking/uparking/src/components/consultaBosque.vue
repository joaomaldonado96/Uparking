<template>
   <div class="alto" >
                 <v-card-media src="https://igx.4sqi.net/img/general/600x600/12322433_fShcaWD76Y5x5c33GEzHgX0VUNbAHlL1gFdqDXvoqLk.jpg" height="200px">
                      </v-card-media>

                        <div class="text-xs-center">
                          <h3 class="display-3">Parqueadero del bosque</h3>

                                <v-divider class="my-3"></v-divider>
                        </div>
                        <div class="text-xs-center gris">
                          <h4 class="display-1">En este momento hay <br></h4>
                           <v-btn v-if="posts==0" fab dark large color="red" >
                              {{posts}}
                            </v-btn>
                          <v-btn v-else fab dark large color="teal"  >
                              {{posts}}
                            </v-btn>

                          <h4 class="display-1">lugares disponibles en este parqueadero <br></h4>
                        </div>
                      </div>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get('http://localhost:3000/api/zona/1').then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data.result[0].dispoCarro
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>

<style>
.gris{
  color: grey;
}
</style>
