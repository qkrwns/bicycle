<template>
  <KakaoMap :lat="33.450701" :lng="126.570667" @onLoadKakaoMap="onLoadKakaoMap">
    <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
  </KakaoMap>
</template>

<script setup>
import { ref } from 'vue';
import { useKakao } from 'vue3-kakao-maps/@utils';
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';

// Kakao API 초기화
useKakao('dce85f31b935dbfca1bf021b26706b9d');

const map = ref();

const message = ref('');

const coordinate = ref({
  lat: 37,
  lng: 31,
});

const onLoadKakaoMap = (mapRef) => {

  map.value = mapRef;


  kakao.maps.event.addListener(map.value, 'click', function (mouseEvent) {

    // 클릭한 위도, 경도 정보를 가져옵니다

    const latlng = mouseEvent.latLng;
    coordinate.value = {
      lat: latlng.getLat(),
      lng: latlng.getLng()
    }
    console.log(coordinate)

  });

};
</script>

<style scoped>
/* 스타일을 추가하고 싶다면 여기에 작성하세요 */
</style>
