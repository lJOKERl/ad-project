<template>
  <div>
    <v-container>
      <v-layout row>
          <v-flex xs12>
            <template>
              <v-app >
                <v-content>
                  <v-container
                    fluid
                  >
                    <v-row 
                      justify="center"
                    >
                      <v-col
                        cols="12"
                        sm="8"
                        md="6"
                      >
                        <v-card class="elevation-6">
                          <v-toolbar color="yellow" flat>
                            <v-toolbar-title>Новое объявление</v-toolbar-title>
            
                          </v-toolbar>
                          <v-card-text>
                            <v-form v-model="valid" ref="form" validation>
                              <v-text-field
                                label="Загологок"
                                name="title"
                                required=""
                                type="text"
                                :rules="[v => !!v || 'Обязательное поле']"
                                v-model="title"
                              ></v-text-field>

                              <v-textarea
                                label="Описание"
                                name="description"
                                required=""
                                type="text"
                                :rules="[v => !!v || 'Обязательное поле']"
                                v-model="description"
                              ></v-textarea>
                            </v-form>

                            <v-layout>
                              <v-flex xs12 mt-3>
                                  <v-btn
                                    outlined 
                                    color="blue-grey"
                                    class="ma-2"
                                  >
                                  <v-icon left dark>mdi-cloud-upload</v-icon>
                                  Загрузить изображение
                                </v-btn>
                                <v-layout>
                                  <v-flex xs12 ma-2>
                                    <img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" width="100%" alt="">
                                  </v-flex>
                                </v-layout>
                                <v-layout>
                                  <v-flex xs12 ma-2>
                                    <v-switch
                                      v-model="promo"
                                      label="Добавить в слайдер?"
                                      color="orange"
                                    ></v-switch>
                                  </v-flex>
                                </v-layout>
                              </v-flex>
                            </v-layout>
                          </v-card-text>
                          <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn 
                            dark 
                            color="blue-grey"
                            :disabled="!valid"
                            @click="createAd">Создать</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-content>
              </v-app>
            </template>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        promo: false,
        description: '',
        valid: false,
      }
    },
    methods: {
      createAd() {
          if (this.$refs.form.validate()) {
            const ad = {
              title: this.title,
              description: this.description,
              promo: this.promo,
              image: 'https://konkurs.trip2rus.ru/sites/default/files/field/images/foto/dsc_8947.jpg'
            }
            
            this.$store.dispatch('createAd', ad);
          }
        }
    }
  }
</script>

