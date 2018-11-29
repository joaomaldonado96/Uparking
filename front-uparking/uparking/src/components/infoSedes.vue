<template>
 <div id="infoSedes sm" >
              <v-app id="inspire">
                 <pm-consul-salud v-if="link==4"></pm-consul-salud>
                <v-layout v-else >
                    <v-card class="infor espacio">
                      <v-card-media src="http://www.defondos.com/images/wallpapers/poligonos%20verde%20botella%20wallpaper%20pattern%20(39)-414980_800.jpeg" height="200px">
                      </v-card-media>

                        <div class="text-xs-center">
                          <h3 class="display-3">¿Qué sede deseas consultar?</h3>

                                <v-divider class="my-3"></v-divider>
                        </div>


                        <div class="text-xs-center">
                          <v-btn color="green accent-4 success" @click="aLik3">
                             Sede Principal&nbsp;
                            <v-icon>search</v-icon>

                          </v-btn>

                          <v-btn color="green accent-4 success" @click="link=4">
                           Sede de Salud&nbsp;
                            <v-icon dark>search</v-icon>
                          </v-btn>

                        </div>

                    </v-card>
                </v-layout>


              </v-app>
            </div>
</template>

<script>
import PmConsulSalud from '../components/consultaSalud'

export default {
  components:{
    PmConsulSalud
  },
  data(){
      return{
        link3:3,
        link:0
        }

  },

methods:{
  aLik3(){

      this.$emit('aLik3',this.link3)
    }

  }

  }

</script>

<style>

.espacio {
     width: -webkit-fill-available;

}

</style>


