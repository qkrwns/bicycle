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
  <v-card
    class="mx-auto"
    max-width="640"
  >
    <v-layout>

      <v-app-bar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>분실목록</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card color="#385F73">
                <v-card-title class="text-h4">
                  <v-avatar image="https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png" size="60"></v-avatar>
                </v-card-title>

                <div class="mx-5 d-flex justify-center text-h6">
                  저번주목요일19일에자전거를놓고통근버스타고갔고금요일은제가연차를써서회사에안나갔어요자전거를확실히묶어뒀는데...
                </div>

                <v-card-actions class="d-flex justify-end">
                  2024-9-7 13:55
                </v-card-actions>
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
             <v-col cols="12">
              <v-card color="#385F73">
                <v-card-title class="text-h4">
                  <v-avatar image="https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png" size="60"></v-avatar>
                </v-card-title>

                <div class="mx-5 d-flex justify-center text-h6">
                  저번주목요일19일에자전거를놓고통근버스타고갔고금요일은제가연차를써서회사에안나갔어요자전거를확실히묶어뒀는데...
                </div>

                <v-card-actions class="d-flex justify-end">
                  2024-9-7 13:55
                </v-card-actions>
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