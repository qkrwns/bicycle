<script setup>
import axios from 'axios';
import {
  ref,
  onMounted
} from 'vue';
import {
  useKakao
} from 'vue3-kakao-maps/@utils';
import {
  KakaoMap,
  KakaoMapMarker
} from 'vue3-kakao-maps';
import {
  useRoute,
  useRouter
} from 'vue-router'

const router = useRouter()
useKakao('dce85f31b935dbfca1bf021b26706b9d');
const losts = ref([])
async function fetchLosts() {
  try {
    const res = await axios.get('/api/losts');
    losts.value = res.data;
    losts.value = losts.value.map(lost => ({...lost, expand: false}))

    console.log(losts.value)
  } catch (error) {
    console.log(error)
  }
};

function goChatting(id) {
  const password = window.prompt('비밀번호를 입력하시오(작성자가 아니라면 아무 숫자나입력)');
  console.log(password);
  router.push({
    path: '/chatting/' + id,
    state: {
      password
    }
  })
}
onMounted(() => {
  fetchLosts();
})
</script>
<style scoped>
  .main {
    postion: relative;
  }

  button.floatting-btn {
    position: fixed;
    bottom: 42px;
    right: 30px;
    border-radius: 50%;
    width: 64px;
    height: 64px !important;
    z-index: 9999;
  }

  .floatting-btn a {
    color: #000;
    text-decoration: none;
  }
</style>

<template>

  <!-- <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true">
    <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker> -->
  <!-- </KakaoMap> -->

  <v-card class="mx-auto" max-width="640">

    <v-layout class="main">

      <v-app-bar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>분실목록</v-toolbar-title>
      </v-app-bar>
      <v-main>
        
          <router-link to="/register"><v-btn class="floatting-btn bg-blue-grey-darken-1">등록 </v-btn></router-link>
        
        <v-container>
          <v-row dense>
            <v-col v-for="lost in losts" :key="lost.id" cols="12">
              <v-card color="#385F73">
                <v-card-title class="text-h4">
                  <v-avatar
                    image="https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png"
                    size="60"></v-avatar>
                </v-card-title>

                <div class="mx-5 d-flex justify-center text-h6">
                  자전거: {{lost.bicycle}}
                  <br>
                  <br>
                  위치: {{lost.location}}
                  <br>
                  <br>
                  시간: {{lost.lost_date}}
                  <br>
                  <br>
                  {{lost.content}}
                </div>

                <v-card-actions class="d-flex justify-end">
                  2024-9-7 13:55
                </v-card-actions>
                <div class="d-flex justify-end mx-2">
                  <v-btn v-on:click="goChatting(lost.id)">채팅하기</v-btn>
                </div>
                <v-expand-transition>
                  <div v-if="lost.expand">
                    <div class="py-2" v-if="lost.lat">
                       <KakaoMap :lat="lost.lat" :lng="lost.lng" @onLoadKakaoMap="onLoadKakaoMap">
    <KakaoMapMarker :lat="lost.lat" :lng="lost.lng"></KakaoMapMarker>
  </KakaoMap>
                    </div>
                  </div>
                </v-expand-transition>

                <v-divider></v-divider>


                <v-card-actions v-if="lost.lat">
                  <v-btn :text="!lost.expand ? '위치보기' : '닫기'" @click="lost.expand = !lost.expand"></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

          </v-row>

        </v-container>
      </v-main>

    </v-layout>
  </v-card>
</template>