<template>
  <div class="flex flex-row h-screen">
    <div class="flex w-1/3 place-items-center place-content-end pr-16">
      <Transition
        enter-active-class="delay-300 duration-1000 ease-out"
        enter-from-class="translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
      >
        <RoundedImage class="grayscale transition transform w-full" v-show="state.show" :image="portrait" />
      </Transition>
    </div>
    <div class="flex relative w-2/3 place-items-center justify-items-center pl-16">
      <Transition
        enter-active-class="delay-500 duration-1000 ease-out"
        enter-from-class="translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
      >
        <div class="flex-col w-full transition transform" v-show="state.show">
          <h1 class="text-7xl font-light">Bill</h1>
          <h1 class="text-emerald-600 text-7xl font-bold">Walker</h1>
          <div class="flex justify-between">
            <div class="text-xl pt-4">Developer | DevOps | IT | Manager</div>
            <div class="flex gap-1">
              <SocialBadge icon="github" url="https://github.com/Falklian" />
              <SocialBadge icon="linkedin-in" url="https://www.linkedin.com/in/billkwalker/" />
            </div>
          </div>
        </div>
      </Transition>
      <Transition
        enter-active-class="delay-700 duration-1000 ease-out"
        enter-from-class="translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
      >
        <div
          class="flex justify-between transition transform absolute border-t-2 border-gray-500 bottom-16 left-16 right-0 pt-4"
          v-show="state.show"
        >
          <div>
            <p class="font-bold">Location</p>
            <p>Rock Island, IL</p>
          </div>
          <div>
            <p class="font-bold">Mobile</p>
            <p>309-749-5544</p>
          </div>
          <div>
            <p class="font-bold">Website</p>
            <p><a href="https://billw.dev" class="hover:text-emerald-600">billw.dev</a></p>
          </div>
          <div>
            <p class="font-bold">E-mail</p>
            <p><a href="mailto:me@billw.dev" class="hover:text-emerald-600">me@billw.dev</a></p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import portrait from '../assets/images/portrait.jpg';
import RoundedImage from './RoundedImage.vue';
import SocialBadge from './SocialBadge.vue';

const state = reactive({
  show: false
});

onMounted(() => {
  state.show = !state.show;
});
</script>
