<template>
  <div>
    <Navbar/>
    <SearchBar @search="(username)=>handleSearch(username)" />
    <UserProfile v-if="userProfile" :profile="userProfile"/>
    <RepoList v-if="repos.length" :repos="repos"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '../layout/Navbar.vue'
import SearchBar from '../layout/SearchBar.vue'
import UserProfile from '../layout/UserProfile.vue'
import RepoList from '../layout/RepoList.vue'
import {fetchUserProfile , fetchUserRepos} from "../../../utils/githubService.ts"

const userProfile = ref(null)
const repos = ref([])

const handleSearch = async (username:string) => {
  try {
    userProfile.value = await fetchUserProfile(username)
    repos.value = await fetchUserRepos(username)
  } catch (err) {
    userProfile.value = null // initialize user
    repos.value = []   // initialize user-repos
    console.log(err)
  }
}

</script>

<style scoped>
</style>
