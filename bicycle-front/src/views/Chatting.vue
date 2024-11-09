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
      chattings: [],
      timer: '',
    }
  },
    mounted(){
  
      this.fetchChattings();
      this.timer = setInterval(() => {
        this.fetchChattings();
      }, 5000);
    },
    unmounted() {
      clearInterval(this.timer);
    },
  methods:{
    async fetchChattings() {
        try {
          console.log(this.$route.params.lost_id);
          const res = await axios.get('/api/losts/'+this.$route.params.lost_id + '/chattings?password=' + history.state.password);
          this.chattings = res.data;
        
          this.$refs.scrollref.scrollTop = this.$refs.scrollref.scrollHeight;
        } catch (error) {
          console.log(error)
        }
    },
    send(){//localhost 주소 + api
      axios.post('/api/chattings/' + this.$route.params.lost_id, {
        content: this.content,
        password: history.state.password,
      }).then(response => {
        console.log(response)
        this.$refs.input.value = '';
        
        this.fetchChattings();
      })
    }
    
  },
   datas: () => ({
      expand: false,
      chattings : [],
    }),
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
    <v-container>
        <div class=" bg-deep-purple-lighten-5 d-flex align-center pa-5 text-h4 font-weight-black bg-white" style="min-height:100px; width:100%;">
            <v-avatar image="https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png" size="60"></v-avatar>&nbsp&nbsp**님과의 채팅
          </div>
        <div ref="scrollref" class="bg-deep-purple-lighten-5 border-sm main" style="height: 700px; width: 100%; border-color: red; overflow-y: scroll">
          
          <v-col v-for="chatting in chattings":key="chatting">
            <div :class="['bg-yellow', 'chatting-box', chatting.type == 1 ? 'me' : 'you']">{{chatting.content}}</div>
          </v-col>
          
       
        </div>
    </v-container>
            <v-textarea ref="input" v-model="content" name="content" class="mt-1" label="메세지를 입력하시오."></v-textarea>
        <v-btn @click="send">전송</v-btn>
   
</template>

  <!-- <img src = "https://cdn-icons-png.flaticon.com/512/9073/9073032.png"> -->