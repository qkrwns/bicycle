<script>
import axios from 'axios';

// export default {
//     data: () => ({
//       expand: false,
//     }),
//   }

  export default {
  name: 'App',
  data(){
    return{      
      content:'',
      type: '',
    }
  },
    mounted(){
      this.fetchChattings();
    },
  methods:{
    async fetchChattings() {
        try {
          console.log(this.$route.params.lost_id);
          const res = await axios.get('/api/losts/'+this.$route.params.lost_id + '/chattings');
          this.chattings = res.data;
        } catch (error) {
          console.log(error)
        }
    },
    send(){//localhost 주소 + api
      axios.post('/api/chattings/' + this.$route.params.lost_id, {
        content: this.content,
        type: 1,

      }).then(response => {
        console.log(response)
      })
    }
    
  },
   datas: () => ({
      expand: false,
      chattings : [],
    }),

    methods : {
      async fetchchattings() {
        try {
          const res = await axios.get('/api/chattings/' + this.$route.params.lost_id)
          this.chattings = res.datas;
        } catch (error) {
          console.log(error)
        }
      }
    },
}

</script>
<style>
  .chatting-box {
    width: 30%;
    min-height: 180px;
    margin: 20px 20px 0;
    border: 1px solid #333;
    border-radius: 25px;
    padding: 20px;
  }
  
  .chatting-box.me {
    margin-left: auto;
  }
  .button{
    font-size:40px;
    border:none;
    text-decoration:none;

  }
</style>

<template>
    <v-container >
        <v-btn  class="button mb-5 "><router-link to="/"><</router-link></v-btn>
        <div class=" bg-deep-purple-lighten-5 d-flex align-center pa-5 text-h4 font-weight-black bg-white" style="min-height:100px; width:100%;">
            <v-avatar image="https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png" size="60"></v-avatar>&nbsp&nbsp**님과의 채팅
          </div>
        <div class="bg-deep-purple-lighten-5 border-sm main" style="height: 700px; width: 100%; border-color: red; overflow-y: scroll">
          
          <div v-for="chatting in chattings":key="chatting" class="bg-yellow chatting-box me">1</div>
          <div class="bg-yellow chatting-box you">{/*{chatting.content}*/}</div>
       
        </div>
    </v-container>
            <v-textarea v-model="content" name="content" class="mt-1" label="메세지를 입력하시오."></v-textarea>
        <v-btn @click="send">전송</v-btn>
</template>

  <!-- <img src = "https://cdn-icons-png.flaticon.com/512/9073/9073032.png"> -->