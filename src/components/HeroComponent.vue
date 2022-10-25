<template>
  <div class="flex flex-col lg:flex-row lg:h-screen">
    <div class="flex lg:w-1/3 place-items-center place-content-center mt-16 lg:mt-0 lg:place-content-end lg:pr-16">
      <Transition
        enter-active-class="delay-300 duration-1000 ease-out"
        enter-from-class="translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
      >
        <RoundedImage class="grayscale transition transform w-48 lg:w-full" v-show="state.show" :image="portrait" />
      </Transition>
    </div>
    <div class="flex flex-col lg:flex-row lg:relative lg:w-2/3 place-items-center justify-items-center lg:pl-16">
      <Transition
        enter-active-class="delay-500 duration-1000 ease-out"
        enter-from-class="translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
      >
        <div class="flex-col text-center lg:text-left lg:w-full transition transform mt-8 lg:mt-0" v-show="state.show">
          <h1 class="text-5xl lg:text-7xl font-light">Bill</h1>
          <h1 class="text-emerald-600 text-5xl lg:text-7xl font-bold">Walker</h1>
          <div class="flex flex-col lg:flex-row lg:justify-between">
            <div class="text-base lg:text-xl mt-8 lg:mt-4">Developer | DevOps | IT | Manager</div>
            <div class="flex place-items-center place-content-center gap-1 mt-8 lg:mt-0">
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
          class="flex flex-wrap text-center md:text-left md:flex-nowrap w-11/12 lg:w-auto mt-8 lg:mt-0 justify-between transition transform lg:absolute border-t-2 border-gray-500 lg:bottom-16 lg:left-16 lg:right-0 pt-4"
          v-show="state.show"
        >
          <div class="basis-full sm:basis-1/2 md:basis-auto">
            <p class="font-bold">Location</p>
            <p>Rock Island, IL</p>
          </div>
          <div class="basis-full sm:basis-1/2 md:basis-auto mt-4 sm:mt-0">
            <p class="font-bold">Mobile</p>
            <p>309-749-5544</p>
          </div>
          <div class="basis-full sm:basis-1/2 md:basis-auto mt-4 md:mt-0">
            <p class="font-bold">Resume</p>
            <p>
              <a href="https://www.dropbox.com/s/knxw5hd78leoo1r/wkw-resume.docx?dl=0" class="hover:text-emerald-600">
                Word Doc
              </a>
            </p>
          </div>
          <div class="basis-full sm:basis-1/2 md:basis-auto mt-4 md:mt-0">
            <p class="font-bold">E-mail</p>
            <p><a href="mailto:bill@billw.dev" class="hover:text-emerald-600">bill@billw.dev</a></p>
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
