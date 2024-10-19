

<script>
  import axios from 'axios';
  export default {
  name: 'App',
  data(){
    return{      
      bicycle:'',
      lost_date: '',
      content: '',
      location: '',
    }
  },
  methods:{
    send(){//localhost 주소 + api
      axios.post('http://127.0.0.1:5000/losts', {
        bicycle: this.bicycle,
        location: this.location,
        lost_date: this.lost_date,
        content: this.content,

      }).then(response => {
        console.log(response)
      })
    }
    
  }
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
        <v-text-field
          name="location" v-model="location"
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

      
        <v-btn @click.prevent='send' type="submit" block
                class="bg-success py-6 text-h5 font-weight-bold mt-4 elevation-6">
           등록
        </v-btn>
      </form>
  </v-container>
</template>