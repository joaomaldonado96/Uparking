<template>

    <v-card class="infor espacio alto">

        <pm-consulta-bosque v-if="zona==1"></pm-consulta-bosque>
        <pm-consulta-coliseo v-if="zona==2"></pm-consulta-coliseo>
        <pm-consulta-calvo v-if="zona==3"></pm-consulta-calvo>
        <pm-consulta-ciencias v-if="zona==4"></pm-consulta-ciencias>
        <pm-consult-musica v-if="zona==5"></pm-consult-musica>

        <v-bottom-nav :value="true" :active.sync="e2" :color="color"  shift>
        <v-btn dark @click="zona=1">
          <span>Bosque</span>
          <v-icon>dashboard</v-icon>
        </v-btn>
        <v-btn dark @click="zona=2">
          <span>Coliseo</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn dark @click="zona=3">
          <span>Luis A. Calvo</span>
          <v-icon>book</v-icon>
        </v-btn>
        <v-btn dark @click="zona=4">
          <span>Facultad de ciencias</span>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn dark @click="zona=5">
          <span>Musica</span>
          <v-icon>music_note</v-icon>
        </v-btn>
      </v-bottom-nav>
                    </v-card>


</template>

<script>
import PmConsultaBosque from '../components/consultaBosque'
import PmConsultaColiseo from '../components/consultaColiseo'
import PmConsultaCalvo from '../components/consultaCalvo'
import PmConsultaCiencias from '../components/consultaCiencias'
import PmConsultMusica from '../components/consultaMusica'
export default {


 data () {
    return {
      e2: 0,
      zona:1
    }
  },
  components:{
    PmConsultaBosque,
    PmConsultaColiseo,
    PmConsultaCalvo,
    PmConsultaCiencias,
    PmConsultMusica
  },

  computed: {
    color () {
      switch (this.e2) {
        case 0: return 'green accent-4 '
        case 1: return 'green'
        case 2: return 'green accent-4 '
        case 3: return 'teal'
        case 4: return 'green accent-4 '
      }
    }
  }
}
</script>

<style>
.alto{
  height: -webkit-fill-available;
}
</style>
