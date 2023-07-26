<script setup>
import { ref } from 'vue'

const props = defineProps(['quizDuration'])
const emit = defineEmits(['onChangeGameState'])

const endGame = () => {
  emit('onChangeGameState', 'finished')
}

const remainingTime = ref(props.quizDuration)
setTimeout(() => {
  const startTime = new Date().getTime()
  let countdownInterval = setInterval(() => {
    const curTime = new Date().getTime()
    remainingTime.value =
      props.quizDuration - Math.ceil((curTime - startTime) / 1000)
    if (remainingTime.value <= 0) {
      endGame()
      clearInterval(countdownInterval)
    }
  }, 100)
}, 1000)
</script>

<template>
  <div class="text-gray-700 text-right">
    Remaining: <span class="font-semibold">{{ remainingTime }} s.</span>
  </div>
</template>

<style scoped></style>
