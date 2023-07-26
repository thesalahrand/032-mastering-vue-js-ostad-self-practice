<script setup>
import { reactive, ref } from 'vue'
import Countdown from './Countdown.vue'
import Questions from './Questions.vue'
import Actions from './Actions.vue'
import Result from './Result.vue'
import _questions from '../../data/questions'

const props = defineProps(['gameState', 'quizDuration', 'quizQuestionsCnt'])
const emit = defineEmits(['changeGameState'])

const showResult = ref(false)
const marks = ref(0)
const currQuestionIdx = ref(0)
const questions = reactive(
  _questions
    .sort(() => Math.random() - 0.5)
    .filter((question, idx) => idx < props.quizQuestionsCnt)
    .map((question, idx) => {
      return { ...question, chosenOptions: [] }
    })
)

const calcMarks = () => {
  marks.value = questions.reduce((_marks, question) => {
    const correctOptionsSorted = question.correctOptions.sort((a, b) => a - b)
    const chosenOptionsSorted = question.chosenOptions.sort((a, b) => a - b)
    return JSON.stringify(correctOptionsSorted) ===
      JSON.stringify(chosenOptionsSorted)
      ? _marks + 1
      : _marks
  }, 0)
}

const onChangeGameState = (state) => {
  if (state == 'finished') {
    calcMarks()
    showResult.value = true
    let timeout = setTimeout(() => {
      showResult.value = false
      clearTimeout(timeout)
    }, 5000)
  }
  emit('changeGameState', state)
}

const goToNextQuestion = () => {
  if (currQuestionIdx.value == questions.length - 1) return
  currQuestionIdx.value++
}

const goToPrevQuestion = () => {
  if (currQuestionIdx.value == 0) return
  currQuestionIdx.value--
}

const toggleChosenOptions = (questionIdx, optionIdx) => {
  if (questions[questionIdx].chosenOptions.includes(optionIdx)) {
    questions[questionIdx].chosenOptions.splice(
      questions[questionIdx].chosenOptions.indexOf(optionIdx),
      1
    )
  } else {
    questions[questionIdx].chosenOptions.push(optionIdx)
  }
}
</script>

<template>
  <div>
    <Countdown
      v-show="!showResult && gameState == 'play'"
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
