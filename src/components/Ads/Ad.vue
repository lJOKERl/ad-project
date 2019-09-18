<template>
 <v-container>
      <v-layout row>
          <v-flex xs12 sm10 offset-sm1>
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
                  <span>{{ad.description}}</span>
                </span>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  outlined
                  color="blue-grey"
                >
                  Изменить
                </v-btn>
                <v-btn
                  outlined
                  color="success"
                >
                  Купить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
 </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      ad() {
        const id = this.id;
        return this.$store.getters.adById(id);
      }
    }
  }
</script>

