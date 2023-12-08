<template>
    <div>
        <h1 class="text-2xl ml-4">Actualité</h1>
        <!-- carousel -->
        <div class="flex flex-wrap justify-between mb-2">
            <div
                class="w-1/6 mx-5 my-2 border-2 dark:border-green-800 border-green-400 dark:bg-green-800 dark:text-white text-green-800 border-radius-5 rounded px-2 flex items-center justify-center dark:hover:bg-green-700 hover:bg-green-300"
                v-for="article in articles"
                :key="article.id">
                <a
                    :href="article.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-center"
                    >{{ article.title }}</a
                >
            </div>
        </div>
        <HomePage />
    </div>
</template>

<script setup>
    import makeRequest from "~/components/functions/getRSS.js";

    const articles = ref([]);

    async function fetchArticles() {
        try {
            const start = 0;
            const end = 10;
            articles.value = await makeRequest(start, end);
        } catch (error) {
            console.error(error);
        }
    }

    onMounted(fetchArticles);
</script>

<style scoped></style>
