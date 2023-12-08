<template>
    <div>
        <div class="pt-6 pl-6 mb-4">
            <h1 class="text-4xl">Dernières actualités</h1>
            <p class="italic">Données du Ministère de l'écologie</p>
        </div>
        <!-- carousel -->
        <div class="flex flex-wrap justify-between mb-2">
            <a v-for="article in articles"
                :key="article.id"
                :href="article.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-center w-1/6 mx-5 my-2 border-2 p-2 dark:border-green-800 border-green-400 dark:bg-green-800 dark:text-white text-green-800 border-radius-5 rounded px-2 flex items-center justify-center dark:hover:bg-green-700 hover:bg-green-300"
            >
                {{ article.title }}
            </a>
        </div>

        <!-- Informations -->
        <HomePage />
    </div>
</template>

<script setup>
    import makeRequest from "~/components/functions/getRSS.js";
    import HomePage from "~/components/HomePage.vue";

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
