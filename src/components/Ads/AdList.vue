<template>
  <div>
    <v-container>
      <v-layout row>
          <v-flex xs12 sm10 offset-sm1>
            <h1 class="text--secondary mb-3">Список объявлений</h1>

            <v-card class="elevation-6 mb-3" v-for="ad of myAds" :key="ad.id">
              <v-layout >
                <v-flex xs4>
                  <v-img 
                  :src="ad.image"
                  height="200px"
                  ></v-img>
                </v-flex>
                <v-flex col xs8>
                  <v-card-text>
                    <h2 class="text--secondary">{{ad.title}}</h2>
                    <p>{{ad.description}}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      outlined 
                      :to="'/ad/' + ad.id"
                      class="ml-2"
                      color="blue-grey"
                    >открыть</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    computed: {
      myAds() {
        return this.$store.getters.ads;
      }
    }
  }
</script>

