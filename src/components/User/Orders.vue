<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm10 offset-sm1>
          <h1 class="text--secondary mb-3">Заказы</h1>
          <v-list
        flat
    >
      <v-list-item-group
        
        multiple
      >
        <v-list-item v-for="order of orders"
              :key="order.id">
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                v-model="active"
                color="orange"
                @click="markDone(order)"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content 
              
            >
              <v-list-item-title>{{order.name}}</v-list-item-title>
              <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
              
            </v-list-item-content>

            <v-list-item-action>
                <v-btn outlined :to="'/ad/' + order.adId">открыть</v-btn>
              </v-list-item-action>
            
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        orders: [
          {
            id: 1,
            name: 'Alex',
            phone: '8-925-36-55-809',
            adId: '123',
            done: false
          }
        ],
        markDone(order) {
          order.done = true;
        }
      }
    }
  }
</script>

