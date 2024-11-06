<template>
  <div>
    <p><strong>Title:</strong> {{ userData.title }}</p>
    <p><strong>Body:</strong> {{ userData.body }}</p>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive} from "vue";
import { useFormStore } from "../stores/formStore";
import { getUserData } from "../api/formApi";

const user = useFormStore();
const { recentUserId } = user;
const userData = reactive({
  title: null,
  body: null,
});

onMounted(() => loadData());

const loadData = async () => {
  try {
    console.log("oi!");
    const response = await getUserData(recentUserId);
    userData.title = response.title;
    userData.body = response.body;
  } catch (error) {
    console.error("Chyba při načítání dat:", error);
  }
};
</script>