<template>
   <div class="col-md-12">
          <GmapMap ref="mapRef" style="width: 100%; height: 100vh;" :zoom="16">
            <GmapMarker v-for="(marker, index) in poi"
              :key="index"
              :position="{ lat: marker.position[0], lng: marker.position[1] }"
              :icon="{ url: marker.icon }"
            />
          </GmapMap>
        </div>

</template>

<script>
import {gmapApi} from 'vue2-google-maps'
export default {
  name: 'app',
//    computed: {
//     google: gmapApi
// },
    mounted () {

 
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 10.8369108, lng: 106.6176161})
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
