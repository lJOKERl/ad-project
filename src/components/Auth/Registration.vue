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
                            <v-toolbar-title>Регистрация</v-toolbar-title>
            
                          </v-toolbar>
                          <v-card-text>
                            <v-form v-model="valid" ref="form" validation>
                              <v-text-field
                                label="E-mail"
                                name="emal"
                                prepend-icon="mdi-account"
                                type="email"
                                :rules="emailRules"
                                v-model="email"
                              ></v-text-field>

                              <v-text-field
                                id="password"
                                label="Пароль"
                                name="password"
                                prepend-icon="mdi-lock"
                                type="password"
                                v-model="password"
                                :counter="6"
                                :rules="passwordRules"
                              ></v-text-field>

                              <v-text-field
                                id="confirm-password"
                                label="Подтверждение пароля"
                                name="confirm-password"
                                prepend-icon="mdi-lock"
                                type="password"
                                v-model="confirmPassword"
                                :counter="6"
                                :rules="confirmPasswordRules"
                              ></v-text-field>
                            </v-form>
                          </v-card-text>
                          <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn 
                            dark 
                            color="blue-grey"
                            :loading="loading"
                            :disabled="!valid || loading"
                            @click="onSubmit">Зарегистрироваться</v-btn>
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
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        emailRules: [
          v => !!v || 'Поле E-mail обязательное',
          v => /.+@.+\..+/.test(v) || 'Не валидный E-mail',
        ],
        passwordRules: [
          v => !!v || 'Пароль пароль обязательное',
          v => (v && v.length >= 6) || 'Пароль должен быть не менее 6 символов',
        ],
        confirmPasswordRules: [
          v => !!v || 'Пароль пароль обязательное',
          v => (v === this.password) || 'Пароли должны совпадать',
        ]
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit() {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('registerUser',user)
          .then(() => {
            this.$router.push("/");
          })
          // .catch(error => console.log(error));
          .catch(() => {});
        }
      }
    }
  }
</script>

