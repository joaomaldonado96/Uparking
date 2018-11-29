<template>
   <div class="alto" >
                 <v-card-media src="https://www.uis.edu.co/webUIS/es/academia/facultades/cienciasHumanas/departamentoEducacionFisicaDeportes/imagenes/coliseo1.jpg" height="200px">
                      </v-card-media>

                        <div class="text-xs-center">
                          <h3 class="display-3">Parqueadero del coliseo</h3>

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

                          <h4 class="display-1">lugares disponibles de carros y <br></h4>
                        </div>
                        <div class="text-xs-center gris">
                           <v-btn v-if="bike==0" fab dark large color="red" >
                              {{bike}}
                            </v-btn>
                          <v-btn v-else fab dark large color="teal"  >
                              {{bike}}
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
      cars: 0,
      bike:0,
      errors: []
    }
  },

  // Fetches posts when the component is created.
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
};
</script>

<style>
.gris{
  color: grey;
}
</style>
