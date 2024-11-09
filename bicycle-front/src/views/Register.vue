

<script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  import { useKakao } from 'vue3-kakao-maps/@utils';
  import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
useKakao('dce85f31b935dbfca1bf021b26706b9d');

const map = ref();

const message = ref('');

const coordinate = ref({
  lat: 37,
  lng: 31,
});
const bicycle = ref('')
const content = ref('')
const location = ref('')
const password = ref('')
const lost_date = ref('')
const onLoadKakaoMap = (mapRef) => {

  map.value = mapRef;


  kakao.maps.event.addListener(map.value, 'click', function (mouseEvent) {

    // 클릭한 위도, 경도 정보를 가져옵니다

    const latlng = mouseEvent.latLng;
    coordinate.value = {
      lat: latlng.getLat(),
      lng: latlng.getLng()
    }
    console.log(coordinate.value)

  });

};

function send(){//localhost 주소 + api
    console.log(coordinate.value.lat)
      axios.post('/api/losts', {
        bicycle: bicycle.value,
        location: location.value,
        lost_date: lost_date.value,
        content: content.value,
        password: password.value,
        lat: coordinate.value.lat,
        lng: coordinate.value.lng,
      }).then(response => {
        console.log(router)
        router.push('/')
      })
  }
</script>
<style>
</style>

<template>


<h1 class="pa-5">자전거 분실 등록 페이지</h1>
   <v-container fluid>
      <form method="POST" action="/">
      <v-col cols="6" >
        <v-list-subheader class="text-h6">자전거기종</v-list-subheader>
      </v-col>
                             
      <v-col cols="12">
        <v-text-field name="bicycle" v-model="bicycle"></v-text-field>
      </v-col>
    

    

    
      <v-col cols="6">
        <v-list-subheader  class="text-h6">잃어버린 위치</v-list-subheader>
      </v-col>

      <v-col cols="12">
 <KakaoMap :lat=" 37.566535" :lng="126.977969" @onLoadKakaoMap="onLoadKakaoMap" style="width:100%;" class="mb-5">
    <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
  </KakaoMap> 
        <v-text-field
          name="location" v-model="location"
          placeholder="주소에 대한 상세한 설명"
        ></v-text-field>
      </v-col>   




      <v-col cols="6">
        <v-list-subheader  class="text-h6">잃어버린 시간</v-list-subheader>
      </v-col>

      <v-col cols="12">
        <v-text-field
          model-value="12:30:00"
          type="datetime-local"
          name="lost_date"
          v-model="lost_date"
        ></v-text-field>
      </v-col>

      <v-col cols="4">
        <v-list-subheader class="text-h6" >설명</v-list-subheader>
      </v-col>

      <v-col cols="12">
        <v-textarea
          name="content"
          v-model="content"
        ></v-textarea>
      </v-col>
      <v-row>
      <v-col cols="2">
        <v-list-subheader class="text-h6 ma-0">비밀번호</v-list-subheader>
      </v-col>
      
      <v-col cols="6" offset="0">
      <v-text-field
        name="password"
        v-model="password"
        class="ma--1"
      ></v-text-field>
      </v-col>
      </v-row>
        <v-btn @click="send" block
                class="bg-success py-6 text-h5 font-weight-bold mt-4 elevation-6">
           등록
        </v-btn>
      </form>
  </v-container>
</template>