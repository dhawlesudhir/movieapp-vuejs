
<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900" v-if="!hasData">No result</h2>
      <div v-if="hasData">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Movies found</h2>
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="movie in movies" :key="movie.imdbID" class="group relative">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img :src="movie.Poster" :alt="movie.Title" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="movie.Poster">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ movie.Title }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ movie.Year }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ movie.Type }}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore()

const movies = store.state.movieData.movies;

const hasData = computed(() => movies.length)

</script>