<template>
  <div>
    <v-container fluid> 
      <v-layout row>
          <v-flex xs12>
            <v-carousel>
              <v-carousel-item
                v-for="ad in ads"
                :key="ad.id"
                :src="ad.image"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>

            <v-card
              class="mx-auto"
              max-width="400"
              v-for="ad in ads"
              :key="ad.id"
              
            >
              <v-img
                class="white--text"
                height="200px"
                :src="ad.image"
              >
                <v-card-title class="align-end fill-height">{{ad.title}}</v-card-title>
              </v-img>

              <v-card-text>
                <span class="text--primary">
                  <span>{{ad.description}}</span><br>
                </span>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  color="orange"
                >
                  Открыть
                </v-btn>
                <v-btn
                  text
                  raised
                  color="orange"
                >
                  Купить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ads:[
          {
            title: 'Первое объявление', 
            description: 'Lorem ipsum',
            promo: false,
            image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: '1'
          },
          {
            title: 'Второе объявление', 
            description: 'Lorem ipsum',
            promo: false,
            image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            id: '2'
          },
          {
            title: 'Третье объявление', 
            description: 'Lorem ipsum',
            promo: false,
            image: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: '3'
          },
        ]
      }
    }
  }
</script>

<style >
  .container,
  .container--fluid {
    padding: 0!important;
  }
</style>

