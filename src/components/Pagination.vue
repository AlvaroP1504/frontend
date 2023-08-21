<script setup>
import { defineProps } from 'vue';
import { usePagination } from '../hooks/pagination';
const props = defineProps({
    total: {
        type: Number,
        required: true
    },
    perPage: {
        type: Number,
        required: true
    }
})
const { goToNextPage,goToPreviousPage,currentPage } = usePagination();


</script>
<template>
    <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
      <ul class="inline-flex -space-x-px text-sm h-8">
        <li>
          <a href="#" @click.prevent="goToPreviousPage" :disabled="currentPage === 1" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
        <!-- Renderizar los números de página -->
        <li v-for="pageNumber in props.total" :key="pageNumber">
          <a
            href="#"
            @click.prevent="currentPage = pageNumber"
            :class="{
              'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white': pageNumber !== currentPage,
              'flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white': pageNumber === currentPage
            }"
          >{{ pageNumber }}</a>
        </li>
        <li>
          <a href="#" @click.prevent="goToNextPage" :disabled="currentPage === props.total" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
      </ul>
    </nav>
</template>