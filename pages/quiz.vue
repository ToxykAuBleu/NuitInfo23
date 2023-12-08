<template>
    <div class="flex flex-col items-center justify-center min-h-[87.8vh] py-2">
        <h1 class="text-4xl mb-4">Quiz</h1>
        <div class="w-full max-w-md">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <h2 v-if="!quizFinished" class="block text-gray-700 text-sm font-bold mb-2">Affirmation {{ currentQuestionIndex + 1 }}:</h2>
                    <p v-if="!quizFinished" class="text-gray-700 text-base">{{ affirmations[currentQuestionIndex].statement }}</p>
                    <p v-if="showJustification && !quizFinished" class="text-gray-700 text-base mt-4">Réponse : {{ affirmations[currentQuestionIndex].response ? 'Vrai' : 'Faux' }}</p>
                    <p v-if="showJustification && !quizFinished" class="text-gray-700 text-base mt-4">{{ affirmations[currentQuestionIndex].justification }}</p>
                    <p v-if="quizFinished" class="text-gray-700 text-base mt-4">Résultat : {{ correctAnswersCount }} / {{ affirmations.length }}</p>
                    <p v-if="quizFinished" class="text-gray-700 text-base mt-4">{{ comment }}</p>
                </div>
                <div class="flex items-center justify-between">
                    <button v-if="!showJustification && !quizFinished" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="answer(false)">
                        Faux
                    </button>
                    <button v-if="!showJustification && !quizFinished" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="answer(true)">
                        Vrai
                    </button>
                    <button v-if="showJustification && !quizFinished" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="nextQuestion">
                        Suivant
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '~/assets/JSON/Questionnaire.json';

export default {
    data() {
        return {
            affirmations: data.affirmations,
            currentQuestionIndex: 0,
            showJustification: false,
            correctAnswersCount: 0,
            quizFinished: false,
            comment: ''
        }
    },
    methods: {
        answer(userResponse) {
            this.showJustification = true;
            if (userResponse === this.affirmations[this.currentQuestionIndex].response) {
                this.correctAnswersCount++;
            }
        },
        nextQuestion() {
            if (this.currentQuestionIndex < this.affirmations.length - 1) {
                this.currentQuestionIndex++;
                this.showJustification = false;
            } else {
                this.finishQuiz();
            }
        },
        finishQuiz() {
            this.quizFinished = true;
            const percentage = this.correctAnswersCount / this.affirmations.length;
            if (percentage === 1) {
                this.comment = "Excellent travail ! Vous êtes un génie !";
            } else if (percentage >= 0.75) {
                this.comment = "Bon travail ! Vous avez bien fait !";
            } else if (percentage >= 0.5) {
                this.comment = "Pas mal, mais vous pouvez faire mieux !";
            } else {
                this.comment = "Oh non ! Vous devez étudier davantage !";
            }
        }
    }
}
</script>

<style scoped>
</style>