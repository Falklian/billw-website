<template>
  <img class="rounded-full" :src="image" />
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  }
});
</script>
