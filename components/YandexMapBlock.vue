<template>
  <yandex-map
    :coords="[56.318417, 36.728517]"
    zoom="17"
    style="width: 100%; height: 400px;"
    :cluster-options="{
      1: {clusterDisableClickZoom: true}
    }"
    :behaviors="['ruler']"
    :controls="['fullscreenControl', 'zoomControl']"
    :placemarks="placemarks"
    map-type="map"
  /><!--  -->
</template>
<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  components: {
    yandexMap,
    ymapMarker
  },
  data () {
    return {
      placemarks: [
        {
          coords: [56.318417, 36.728517],
          properties: {}, // define properties here
          options: {}, // define options here
          clusterName: "1",
          balloonTemplate: '<div>Детский клуб "Белый слон"</div>',
          callbacks: { click: function() {} },
        }
      ],
      width: 0,
      height: 0,
    }
  },
}
</script>
