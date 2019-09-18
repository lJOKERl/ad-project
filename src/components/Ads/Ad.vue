<template>
 <v-container>
      <v-layout row>
          <v-flex xs12 sm10 offset-sm1>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-text>
                <span>Number 10</span><br>
                <span class="text--primary">
                  <span>Whitehaven Beach</span><br>
                  <span>Whitsunday Island, Whitsunday Islands</span>
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
    data() {
      return {
        
      }
    }
  }
</script>

