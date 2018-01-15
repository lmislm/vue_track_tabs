<template>
  <v-layout colum>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>登录</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="输入邮箱"
            v-model="email">
            ></v-text-field>
          <v-text-field
            label="输入密码"
            v-model="password">
            ></v-text-field>
          <br>
          <div class="error" v-html="error"/>
          <br>
          <v-btn
            class="cyan"
            @click="register">
            登录
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register () {
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    },
    watch: {
      email (value) {
        console.log('email has changed', value)
      }
    },
    mounted () {
//      setTimeout(() => {
//        this.email = 'hello email'
//      }, 2000)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
