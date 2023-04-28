<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/info">Info About Me</router-link>
    <router-link to="/repos">List Repos</router-link>
    <router-link to="/repo-details">Repo Details</router-link>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ccc;
  }

    nav a {
      text-decoration: none;
      color: #333;
    }

      nav a:hover {
        color: #007bff;
      }
</style>
