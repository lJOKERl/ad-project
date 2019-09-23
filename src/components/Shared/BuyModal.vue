<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      
      <template v-slot:activator="{ on }">
        <v-btn
        outlined
        color="blue-grey"
        v-on="on"
      >
        <v-icon left>mdi-plus</v-icon> Купить
      </v-btn>
      </template>
      <v-card>
        <v-toolbar color="yellow">
          <v-btn icon  @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Купить: {{ad.title}}</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-toolbar-items>
            <v-btn text @click="dialog = false">Сохранить</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container>
          <v-layout row>
            <v-flex xs12 sm10 offset-sm1>
              <v-text-field
                  label="Ваше имя"
                  name="name"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="name"
              ></v-text-field>

              <v-text-field
                name="phone"
                label="Ваше телефон"
                prepend-icon="mdi-account"
                type="text"
                v-model="phone"
              ></v-text-field>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn 
                  color="red" 
                  text 
                  @click="dialog = false"
                  :disabled="localLoading"
                >Закрыть</v-btn>

                <v-btn 
                  color="success" 
                  text 
                  @click = 'onSave'
                  :disabled="localLoading"
                  :loading="localLoading">Купить</v-btn>
              </v-card-actions>
            </v-flex> 
          </v-layout>
        </v-container>
        
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  props: ['ad'],
  data() {
    return {
      dialog: false,
      name: '',
      phone: '',
      localLoading: false
    }
  },
  methods: {
    onSave() {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = false
        this.$store.dispatch('createOrder', {
          adId: this.ad.id,
          name: this.name,
          phone: this.phone,
          ownerId: this.ad.ownerId
        })
        .finally(() => {
          this.name = ''
          this.phone = ''
          this.localLoading = false
          this.dialog = false
        })
      }
    }
  }
}
</script>