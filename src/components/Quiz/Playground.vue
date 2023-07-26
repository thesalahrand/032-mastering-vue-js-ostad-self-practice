<script setup>
import { reactive, ref } from 'vue'
import allQuestions from '../../data/questions'
import Countdown from './Countdown.vue'

const props = defineProps(['quizDuration', 'quizQuestionsCnt'])
const emit = defineEmits(['changeGameState'])

const onChangeGameState = (state) => {
  emit('changeGameState', state)
}

const questions = reactive(
  allQuestions
    .sort(() => Math.random() - 0.5)
    .filter((question, idx) => idx < props.quizQuestionsCnt)
    .map((question, idx) => {
      return { ...question, chosenOptions: [] }
    })
)
</script>

<template>
  <div class="flex justify-between">
    <Countdown
      :quiz-duration="quizDuration"
      @on-change-game-state="onChangeGameState"
    />
    <Questions :questions="questions" />
  </div>
</template>

<style scoped></style>
