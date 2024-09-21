<script>
export default {
    data: () => ({
      expand: false,
    }),
  }
</script>
<style>
</style>

<template>
<h1 class="pa-5">자전거 분실 등록 페이지</h1>
   <v-container fluid>
    
      <v-col cols="6" >
        <v-list-subheader class="text-h6">자전거기종</v-list-subheader>
      </v-col>
                             
      <v-col cols="12">
        <v-text-field ></v-text-field>
      </v-col>
    

    

    
      <v-col cols="6">
        <v-list-subheader class="text-h6">잃어버린 위치</v-list-subheader>
      </v-col>

      <v-col cols="12">
        <v-text-field
         
        ></v-text-field>
      </v-col>
    

    
      <v-col cols="6">
        <v-list-subheader class="text-h6">잃어버린 시간</v-list-subheader>
      </v-col>

      <v-col cols="12">
        <v-text-field
          model-value="12:30:00"
          type="datetime-local"
          
        ></v-text-field>
      </v-col>

      <v-col cols="4">
        <v-list-subheader class="text-h6">설명</v-list-subheader>
      </v-col>

      <v-col cols="12">
        <v-textarea
          
        ></v-textarea>
      </v-col>

      
        <v-btn block
                class="bg-success py-6 text-h5 font-weight-bold mt-4 elevation-6">
           등록
        </v-btn>
      
  </v-container>
</template>s