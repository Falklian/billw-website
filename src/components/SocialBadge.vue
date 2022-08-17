<template>
  <a
    class="transition rounded inline-flex w-10 h-10 bg-slate-700 hover:bg-slate-900 border-2 border-slate-700 place-content-center place-items-center text-slate-400 hover:text-emerald-600"
    :href="url"
    target="_blank"
  >
    <FontAwesomeIcon class="text-2xl" :icon="['fab', icon]" />
  </a>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
    validator(value) {
      return value.match(/github|linkedin-in/i) !== null;
    }
  },
  url: {
    type: String,
    required: true,
    validator(value) {
      return value.match(/^https?:\/\//i) !== null;
    }
  }
});
</script>
