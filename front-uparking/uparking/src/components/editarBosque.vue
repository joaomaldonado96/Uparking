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
                          <v-btn  @click.native="posts=posts+1" >
                                      +
                                    </v-btn>
                                    <v-btn  @click.native="posts=posts-1" >
                                      -
                                    </v-btn>
                              <v-btn  @click.native="postPost()" >
                                      Subir
                                    </v-btn>
                        </div>


                      </div>




</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nombre:'Bosque',
      posts: 0,
      dispoCarro:0,
      errors: [],
      errr:[]

    }
  },
  created() {
    axios.get('http://localhost:3000/api/zona/1').then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data.result[0].dispoCarro
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
  ,
  methods:{
          // Pushes posts to the server when called.
      postPost() {

        console.log(this.postBody)
        axios.put('http://localhost:3000/api/zona/1', {nombre:this.nombre,
            dispoCarro:this.posts,
            dispoMoto:0,
            idsede:1
        })
        .then(response => {})
        .catch(e => {
          this.errr.push(e)
        })

      }

  }
}
</script>

<style>

</style>
