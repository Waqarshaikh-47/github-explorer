<template>
    <div class="row align-items-center container">
  <div class="col-auto">
    <img :src="profile.avatar_url" class="user-image rounded-circle img-thumbnail" />
  </div>
  <div class="col">
    <h2>{{ profile.name }}</h2>
    <p class="text-muted">{{ profile.bio }}</p>
  </div>
</div>

  </template>
  
  <script setup lang="ts">
  import { withDefaults } from 'vue';
  withDefaults(defineProps<{ profile: any }>(),{
    profile: ()=> {return {avatar_url : '' , bio : ''}}
})
  </script>
  
  <style scoped>

  .user-image{
    width: 120px; 
    height: 120px;
  }
  </style>
  