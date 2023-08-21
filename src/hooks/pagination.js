import { ref, computed } from 'vue';
import { useBooks } from './book';



export function usePagination() {
    const { books } = useBooks();//books.value
    const currentPage = ref(1);
    const perPage = ref(1);

    // Función para obtener los registros de la página actual
    function getRecordsForPage() {
        return computed(() => {
            const startIndex = (currentPage.value - 1) * perPage;
            const endIndex = startIndex + perPage;
            console.log(books.value.slice(startIndex, endIndex));
            return books.value.slice(startIndex, endIndex);
        })
    }

    // Función para ir a la página anterior
    function goToPreviousPage() {
        if (currentPage.value > 1) {
            currentPage.value -= 1;
        }
    };

    // Función para ir a la página siguiente
    function goToNextPage() {
        if (currentPage.value < totalPages.value) {
            currentPage.value += 1;
        }
    };

    return { currentPage, perPage, getRecordsForPage, goToPreviousPage, goToNextPage }
}
