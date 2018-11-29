<template>

    <v-card class="infor espacio alto">

        <pm-edita-bosque v-if="zona==1"></pm-edita-bosque>
        <pm-edita-coli v-if="zona==2"></pm-edita-coli>
        <pm-edita-luis v-if="zona==3"></pm-edita-luis>
        <pm-edita-ciencia v-if="zona==4"></pm-edita-ciencia>
        <pm-edita-musi v-if="zona==5"></pm-edita-musi>


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
import PmEditaBosque from '../components/editarBosque'
import PmEditaColi from '../components/editaColiseo'
import PmEditaCiencia from '../components/editaCiencias'
import PmEditaLuis from '../components/editaLuis'
import PmEditaMusi from '../components/editaMusica'
export default {


 data () {
    return {
      e2: 0,
      zona:1
    }
  },
  components:{
    PmEditaBosque,
    PmEditaColi,
    PmEditaCiencia,
    PmEditaLuis,
    PmEditaMusi
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
