<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list dense>
        <v-list-item 
        
        v-for="link of links" :key="link.title"
        :to="link.url"
        >
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item 
          @click="onLogout"
          v-if="isUserLoggedIn"
        >
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Выйти</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="yellow"
    >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-items>
        <v-btn text :to="'/'">Ad project</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="link of links" :key="link.title"
        :to="link.url">
          <v-icon left>{{link.icon}}</v-icon>{{link.title}}
        </v-btn>
        <v-btn text 
          @click="onLogout"
          v-if="isUserLoggedIn"
        >
          <v-icon left>mdi-logout</v-icon>Выйти
        </v-btn>
      </v-toolbar-items>
    </v-app-bar> 

    <v-content>
      <v-container
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>

    <template v-if="error">
      <v-snackbar
      :timeout="3000"
      color="error"
      :value="true"
      @input="closeError"
    >
      {{error}}
      <v-btn
        dark
        text
        @click="closeError"
      >
        Close
      </v-btn>
    </v-snackbar>
    </template>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
      }
    },
    computed: {
      error () {
        return this.$store.getters.error
      },
      isUserLoggedIn() {
        return this.$store.getters.isUserLoggedIn
      },
      links () {
        if (this.isUserLoggedIn) {
          return [
            {title: 'Заказы', icon: 'mdi-bookmark', url: '/orders'},
            {title: 'Новое объявление', icon: 'mdi-plus-circle-outline', url: '/new'},
            {title: 'Мои объявления', icon: 'mdi-format-list-bulleted', url: '/list'},
          ]
        }

        return [
          {title: 'Логин', icon: 'mdi-lock', url: '/login'},
          {title: 'Регистрация', icon: 'mdi-face', url: '/registration'},
        ]
      }
    },
    methods: {
      closeError() {
        this.$store.dispatch('clearError');
      },
      onLogout() {
        this.$store.dispatch('logoutUser');
        this.$router.push('/');
      }
    }
  };
</script>



<style lang="less">
  .v-toolbar__title {
    a {
      color: white!important;
      text-decoration: none;
    }
  }
</style>
