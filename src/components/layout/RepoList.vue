<template>
    <div class="d-flex container mt-5">
        <ul class="list-unstyled">
            <li v-for="repo in repos" :key="repo.id" class="mb-2">
            <div class="card p-4 repo-list-card">
          <a :href="repo.html_url" target="_blank" class="text-decoration-none">{{ repo.name }}</a>
        </div>
        </li>
      </ul>
  </div>
  </template>
  
  <script setup lang="ts">

import { withDefaults } from 'vue';
  withDefaults(defineProps<{ repos: any }>(),{
    repos: ()=> {return []}
})

  </script>
  
  <style scoped>
  .repo-list-card{
    width: 18rem;
  }
  </style>
  