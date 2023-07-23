<script setup>
import { ref } from 'vue'
import Intro from './Intro.vue'
import Playground from './Playground.vue'

const QUIZ_DURATION_IN_SECS = 5
const QUIZ_QUESTIONS_CNT = 5

const gameState = ref('intro')

const changeGameState = (state) => {
  gameState.value = state
}
</script>

<template>
  <Intro
    v-if="gameState == 'intro'"
    :quiz-duration="QUIZ_DURATION_IN_SECS"
    :quiz-questions-cnt="QUIZ_QUESTIONS_CNT"
    @change-game-state="changeGameState"
  />
  <Playground
    v-if="gameState == 'play'"
    :quiz-duration="QUIZ_DURATION_IN_SECS"
    :quiz-questions-cnt="QUIZ_QUESTIONS_CNT"
    @change-game-state="changeGameState"
  />
</template>

<style scoped></style>
