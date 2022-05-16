<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <div class="text-h6">State Card</div>
      <!-- Form Goes Here -->
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input v-model="course" label="Course Name" />
        <q-input v-model="instructor" label="Professor" />
        <q-input v-model="ghID" label="GitHub ID" />
        <q-input v-model="ghProxyURL" label="GitHub Proxy URL" />
        <q-input v-model="localTest" label="Local Test Field" />
        <div v-if="store.repoCount > 0">
          <div><strong>REPO LIST</strong> / {{ store.repoCount }}</div>
          <div class="text-left">
            <ul>
              <li v-for="(r, idx) in repos" :key="idx">
                {{ r }}
              </li>
            </ul>
          </div>
        </div>
        <div class="q-pa-sm q-gutter-sm">
          <q-btn label="Load GH" type="submit" color="primary" />
          <q-btn label="Load Test" @click="onTest()" color="secondary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
export default {
  name: 'StateCardComponent',
};
</script>

<script setup lang="ts">
//NOTICE THE SETUP IN THE SCRIPT TAG, MAKES THINGS EASIER

import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSE577Store } from 'stores/se577-store';
//import axios from 'axios';

//setup state managment
const store = useSE577Store();

const { course, instructor, repos, ghID, ghProxyURL } = storeToRefs(store);

let localTest = ref('local test');

const onReset = () => {
  localTest.value = 'localTest';
  repos.value = [];
};

const onSubmit = async () => {
  store.loadGHRepos();
};

const onTest = async () => {
  store.loadTestRepos();
};

watch([course, instructor], () => {
  console.log('state changed');
});

onMounted(() => onReset());
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
