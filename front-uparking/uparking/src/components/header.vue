<template>
  <div id="header">
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile  @click="link=1">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="link=2">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Consultar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="link=5" >
          <v-list-tile-action>
            <v-icon>edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Editar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="green accent-4" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{mensaje}}</v-toolbar-title>
    </v-toolbar>

          <div id="info sm" v-if="link==1">
              <v-app id="inspire">
                <v-layout>
                    <v-card class="infor">
                      <v-card-media src="http://www.defondos.com/images/wallpapers/poligonos%20verde%20botella%20wallpaper%20pattern%20(39)-414980_800.jpeg" height="200px">
                      </v-card-media>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="display-3">¿Qué es UParking?</h3>
                                <span class="subheading">UParking, es una  aplicación que permite a los usuarios consultar o actualizar en tiempo real el estado del parqueadero ya sea para moto o para carro dentro de las instalaciones de la Universidad Industrial de Santander tanto en la sede principal como en la facultad de salud.
                                </span>
                                <v-divider class="my-3"></v-divider>
                            <div class="title mb-3">¿Qué deseas hacer?</div>

                        </div>
                      </v-card-title>

                        <div class="text-xs-center">
                          <v-btn color="green accent-4 success"  @click.native="link=2" >
                            Consultar&nbsp;
                            <v-icon>search</v-icon>

                          </v-btn>

                          <v-btn color="green accent-4 success"  @click.native="link=5" >
                            Editar&nbsp;
                            <v-icon dark>edit</v-icon>
                          </v-btn>

                        </div>

                    </v-card>
                </v-layout>
              </v-app>
            </div>

        <pm-info-sedes v-if="link==2"   @aLik3="cambioALink3"></pm-info-sedes>
        <pm-consul-prin v-if="link==3"></pm-consul-prin>
        <pm-editar-sedes v-if="link==5" @aLik3="cambioALink3"></pm-editar-sedes>
        <pm-editar-prin v-if="link==6"></pm-editar-prin>

             <v-footer height="auto" class="grey darken-3">
                <v-layout row wrap justify-center>
                  <v-flex xs12 py-3 text-xs-center white--text>
                    &copy;2018 — <strong>Joao Maldonado y Felipe Silva</strong>
                  </v-flex>
                </v-layout>
              </v-footer>


  </v-app>
</div>
</template>

<script>
import PmInfoSedes from '../components/infoSedes'
import PmConsulPrin from '../components/consultaPrincipal'
import PmEditarSedes from '../components/editarSedes'
import PmEditarPrin from '../components/editarPrincipal'


export default {
  components:{
    PmInfoSedes,
    PmConsulPrin,
    PmEditarSedes,
    PmEditarPrin
  },
  data: () => ({
    drawer: null,
    mensaje:'Uparking',
    link:1
  }),
  methods:{

    cambioALink3(link){

        this.link=link
      }

  }
};
</script>
