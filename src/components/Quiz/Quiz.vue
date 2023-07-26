<script setup>
import { ref } from 'vue'
import Intro from './Intro.vue'
import Playground from './Playground.vue'

const QUIZ_DURATION_IN_SECS = 10
const QUIZ_QUESTIONS_CNT = 5

const gameState = ref('intro')

const changeGameState = (state) => {
  gameState.value = state
}
</script>

<template>
  <div>
    <Intro
      v-if="gameState == 'intro'"
      :quiz-duration="QUIZ_DURATION_IN_SECS"
      :quiz-questions-cnt="QUIZ_QUESTIONS_CNT"
      @change-game-state="changeGameState"
    />
    <Playground
      v-if="gameState == 'play' || gameState == 'finished'"
      :game-state="gameState"
      :quiz-duration="QUIZ_DURATION_IN_SECS"
      :quiz-questions-cnt="QUIZ_QUESTIONS_CNT"
      @change-game-state="changeGameState"
    />
  </div>
</template>

<style scoped></style>
