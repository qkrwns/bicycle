<script>
 import axios from 'axios';
 
 export default {
    data: () => ({
      expand: false,
      losts : []
    }),
    mounted(){
      this.fetchLosts();
    },
    methods : {
      async fetchLosts() {
        try {
          const res = await axios.get('/api/losts');
          this.losts = res.data;
        } catch (error) {
          console.log(error)
        }
      },
      goChatting(id) {
        const password = window.prompt('비밀번호를 입력하시오(작성자가 아니라면 아무 숫자나입력)');
        console.log(password);
        this.$router.push({ path: '/chatting/' + id, state: {password}})
      }
    },
    


 }
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
  .floatting-btn a{
    color: #000;
    text-decoration: none;
  }
</style>

<template>

  <v-card
    class="mx-auto"
    max-width="640"
  >

    <v-layout  class="main">

      <v-app-bar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>분실목록</v-toolbar-title>
      </v-app-bar>
      <v-main>
       <v-btn class="floatting-btn">
        <router-link to="/register">등록</router-link>
       </v-btn>
        <v-container>
          <v-row dense>
            <v-col v-for="lost in losts":key="lost.id" cols="12"> 
              <v-card color="#385F73">
                <v-card-title class="text-h4">
                  <v-avatar image="https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png" size="60"></v-avatar>
                </v-card-title>

                <div class="mx-5 d-flex justify-center text-h6">
                  자전거: {{lost.bicycle}}
                  <br>
                  위치: {{lost.location}}
                  <br>
                  시간: {{lost.lost_date}}
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
      <div v-if="expand">
        <div class="py-2">
          123
        </div>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>


    <v-card-actions>
      <v-btn
        :text="!expand ? '위치보기' : '닫기'"
        @click="expand = !expand"
      ></v-btn>
    </v-card-actions>
              </v-card>
            </v-col>
             
          </v-row>
          
        </v-container>
      </v-main>
      
    </v-layout>
  </v-card>
</template>