<template>
  <div>
    <v-container>
      <v-layout row>
          <v-flex xs8 offset-sm2>
            <h1 class="text--secondary mb-3">Объявление</h1>
            <v-card>
              <v-layout >
                <v-flex >
                  <v-img 
                  
                  height="200px"
                  ></v-img>
                </v-flex>
                <v-flex col xs8>
                  <v-card-text>
                    <h2 class="text--secondary">Lorem</h2>
                    <p>Lorem ipsum</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn 
                      outlined 
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
    data() {
      return {
        
      }
    }
  }
</script>

