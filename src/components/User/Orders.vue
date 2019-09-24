<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-center pt-5" v-if="loading">
          <v-progress-circular
            :size="50"
            color="amber"
            indeterminate
          ></v-progress-circular>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 v-else-if="!loading && orders.length !== 0">
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

          <v-flex xs12 class="text-xs-center" v-else>
            <h1 class="text--secondary">У вас нет заказов</h1>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      orders() {
        return this.$store.getters.orders
      }
    },
    created() {
      this.$store.dispatch('fetchOrders')
    },
    methods: {
      markDone (order) {
        this.$store.dispatch('markOrderDone', order.id)
          .then(() => {
            order.done = true
          })
          .catch(() => {})
      } 
    }
  }
</script>

