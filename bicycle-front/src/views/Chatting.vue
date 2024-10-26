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
          this.chatting = res.data;
        } catch (error) {
          console.log(error)
        }
    },
    send(){//localhost 주소 + api
      axios.post('/api/chattings', {
        content: this.content,
        type: 1,
        

      }).then(response => {
        console.log(response)
      })
    }
    
  }
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
</style>

<template>
    <v-container >
        <div class="d-flex align-center pa-5 text-h4 font-weight-black bg-white" style="min-height:100px; width:100%;">
            <v-avatar image="https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png" size="60"></v-avatar>&nbsp&nbsp**님과의 채팅
          </div>
        <div class="bg-deep-purple-lighten-5 border-sm main" style="height: 700px; width: 100%; border-color: red; overflow-y: scroll">
          
          <div class="bg-yellow chatting-box me">1</div>
          <div class="bg-yellow chatting-box you">1</div>
          <div class="bg-yellow chatting-box me">1</div>
          <div class="bg-yellow chatting-box me">1</div>
          <div class="bg-yellow chatting-box you">1</div>
          <div class="bg-yellow chatting-box me">1</div>
        </div>
        <v-textarea class="mt-1" label="메세지를 입력하시오." name="content" v-model="content"></v-textarea>
        <v-btn @click.prevent='send' type="submit">전송</v-btn>
           
    </v-container>
</template>