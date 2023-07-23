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
    <button
      type="button"
      class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-[128px] py-2.5"
      @click="endGame"
    >
      End
    </button>
  </div>
</template>

<style scoped></style>
