<template>
<div class="alto" >
                 <v-card-media src="https://www.uis.edu.co/webUIS/es/academia/facultades/cienciasHumanas/departamentoEducacionFisicaDeportes/imagenes/coliseo1.jpg" height="200px">
                      </v-card-media>

                        <div class="text-xs-center">
                          <h3 class="display-3">Parqueadero del Coliseo</h3>

                                <v-divider class="my-3"></v-divider>
                        </div>
                        <div class="text-xs-center gris">
                          <h4 class="display-1">En este momento hay <br></h4>
                           <v-btn v-if="cars==0" fab dark large color="red" >
                              {{cars}}
                            </v-btn>
                          <v-btn v-else fab dark large color="teal"  >
                              {{cars}}
                            </v-btn>
                            <v-btn  @click.native="cars=cars+1" >
                                      +
                                    </v-btn>
                                    <v-btn  @click.native="cars=cars-1" >
                                      -
                                    </v-btn>
                          <br>

                          <h4 class="display-1">lugares disponibles de carros y <br></h4>
                        </div>
                        <div class="text-xs-center gris">
                           <v-btn v-if="bike==0" fab dark large color="red" >
                              {{bike}}
                            </v-btn>
                          <v-btn v-else fab dark large color="teal"  >
                              {{bike}}
                            </v-btn>
                            <v-btn  @click.native="bike=bike+1" >
                                      +
                                    </v-btn>
                                    <v-btn  @click.native="bike=bike-1" >
                                      -
                                    </v-btn>
                              <v-btn  @click.native="postPost()" >
                                      Subir
                                    </v-btn>

                          <h4 class="display-1">lugares disponibles en este de motos <br></h4>




                        </div>


                      </div>




</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nombre:'Coliseo',
      cars: 0,
      bike:0,
      dispoCarro:0,
      errors: [],
      errr:[]

    }
  },
  created() {
    axios.get('http://localhost:3000/api/zona/2').then(response => {
      // JSON responses are automatically parsed.
      this.cars = response.data.result[0].dispoCarro
      this.bike =  response.data.result[0].dispoMoto
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
        axios.put('http://localhost:3000/api/zona/2', {nombre:this.nombre,
            dispoCarro:this.cars,
            dispoMoto:this.bike,
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
