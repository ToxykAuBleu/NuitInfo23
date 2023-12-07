<template>
    <div class="flex justify-between items-center text-3xl dark:bg-gray-700 dark:text-white p-4 px-8">
        <nuxt-link to="/">EcoNavy</nuxt-link>
        <div class="flex space-x-12 pr-8">
            <nuxt-link to="/quizz">Quizz</nuxt-link>
            <nuxt-link to="/a-propos">À propos</nuxt-link>
        </div>
    </div>
    <div class="dark:bg-gray-400">
        <slot />
    </div>
</template>

<script setup></script>

<style scoped></style>