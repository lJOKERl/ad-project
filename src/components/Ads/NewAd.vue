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
                                    @click="triggerUpload"
                                  >
                                  <v-icon left dark>mdi-cloud-upload</v-icon>
                                  Загрузить изображение
                                </v-btn>
                                <input type="file"
                                  ref="fileInput"
                                  style="display: none"
                                  accept="image/*"
                                  @change="onFileChange"
                                >
                                <v-layout>
                                  <v-flex xs12 ma-2>
                                    <img :src="imageSrc" width="100%" alt="" v-if="imageSrc">
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
                            :disabled="!valid || !image"
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
        image: null,
        imageSrc: ''
      }
    },
    methods: {
      createAd() {
          if (this.$refs.form.validate() && this.image) {
            const ad = {
              title: this.title,
              description: this.description,
              promo: this.promo,
              image: this.image
            }

            this.$store.dispatch('createAd', ad)
              .then(() => {
                this.$router.push('/list')
              })
              .catch(() => {})
          }
        },
        triggerUpload() {
          this.$refs.fileInput.click();
        },
        onFileChange(event) {
          const file = event.target.files[0];

          const reader = new FileReader();

          reader.onload = () => {
            this.imageSrc = reader.result;
          }

          reader.readAsDataURL(file);
          this.image = file;

        }
    }
  }
</script>

