<template>
  <div>
    <h1>Repo List Page</h1>
    <ul>
      <li v-for="repo in repos" :key="repo.id">
        {{ repo.name }}: {{ repo.description }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  interface Repository {
    id: number;
    name: string;
    description: string;
  }

  export default {
    name: 'RepoListPage',
    setup() {
      const repos = ref([] as Repository[]);

      onMounted(async () => {
        const response = await axios.get('http://localhost:3001/repos');
        repos.value = response.data;
      });

      return {
        repos,
      };
    },
  };
</script>

<style scoped>
  /* CSS Styles*/
</style>
