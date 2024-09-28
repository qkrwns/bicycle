<script>
export default {
    data: () => ({
      expand: false,
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
        <v-textarea class="mt-1" label="메세지를 입력하시오."></v-textarea>
        <v-btn>전송</v-btn>
           
    </v-container>
</template>