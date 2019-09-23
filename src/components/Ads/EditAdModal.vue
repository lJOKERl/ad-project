<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      
      <template v-slot:activator="{ on }">
        <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
        <v-btn
        outlined
        color="blue-grey"
        v-on="on"
      >
        <v-icon left>mdi-pencil</v-icon> Изменить
      </v-btn>
      </template>
      <v-card>
        <v-toolbar color="yellow">
          <v-btn icon  @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Редактировать: {{ad.title}}</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-toolbar-items>
            <v-btn text @click="dialog = false">Сохранить</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container>
          <v-layout row>
            <v-flex xs12 sm10 offset-sm1>
              <v-text-field
                  label="Заголовок"
                  name="title"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="editedTitle"
              ></v-text-field>

              <v-text-field
                name="description"
                label="Описание"
                prepend-icon="mdi-account"
                type="text"
                v-model="editedDesciption"
              ></v-text-field>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn 
                  color="red" 
                  text 
                  @click="dialog = false"
                >Закрыть</v-btn>

                <v-btn 
                  color="success" 
                  text 
                  @click = 'onSave'>Сохранить</v-btn>
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
      editedTitle: this.ad.title,
      editedDesciption: this.ad.description,
    }
  },
  methods: {
    onSave() {
      if (this.editedTitle !== '' && this.editedDesciption !== '') {
        this.$store.dispatch('updateAd', {
          id: this.ad.id,
          title: this.editedTitle,
          description: this.editedDesciption
        });

        this.dialog = false
      }
    }
  }
}
</script>