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
            >
            <div class="car-link">
              <v-btn class="error" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>
            </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <template>
      <v-container grid-list-{xs through xl}="lg">
        <v-row>
          <v-col
            v-for="ad in ads"
            :key="ad.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
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
                  :to="'/ad/' + ad.id"
                >
                  Открыть
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  outlined 
                  color="black"
                >
                  Купить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
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
  .car-link {
    position: absolute;
    bottom: 60px;
    left: 50%;
    background: rgba(0, 0, 0, .3);
    transform: translate(-50%, 0);
    padding: 10px;
    border-radius: 5px;
  }
</style>

