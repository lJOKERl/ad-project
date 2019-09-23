<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.image"
              tile

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
                <buy-modal :ad="ad"></buy-modal>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
  <div v-else>
    <v-contai>
      <v-layout row>
        <v-flex xs12 class="text-xs-center">
          <v-progress-circular
            :size="50"
            color="amber"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-contai>
  </div>
</template>

<script>
  export default {
    computed: {
      promoAds() {
        return this.$store.getters.promoAds;
      },
      ads() {
        return this.$store.getters.ads;
      },
      loading() {
        return this.$store.getters.loading
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

