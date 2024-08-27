<template>
    <div class="searchContainer">
    <i @click="search" class="bi bi-search"></i>
    <input class="input" type="text" v-model="query" @keyup.enter="search" placeholder="Enter Username" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue'
  
  const query = ref<string>('')
  
  const emit = defineEmits<{
    (event: 'search', query: string): any
  }>()
  
  const search = (): void => {
    if (query.value.trim()) {
      emit('search', query.value.trim())
    }
  }
  </script>
  

  <style scoped>
  /* This is not the best way to add css I will update this  */
  .searchContainer {
     margin: 20px auto;
     width: 300px;
     position: relative;
 }
 
 .input {
     border: none;
     border-bottom: 1px solid #e3e4dc;
     padding: 10px 20px;
     width: none;
     outline: none;
     font-size: 16px;
     color: #393e46;
 }
 
   </style>