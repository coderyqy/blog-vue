<template>
  <div>
      <div>
        name：<input type="text" v-model="name">
        password：<input type="text" v-model="password" >
      </div>
      <button @click="login">注册</button>
  </div>
</template>

<script>
import { register } from 'network/user'
import axios from 'axios'

export default {
  name: "adminLogin",
  data(){
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    async login() {
      console.log(this.name, this.password);
      const res = await register(this.name, this.password)
      console.log(res);
    }
  }
}
</script>

<style>

</style>