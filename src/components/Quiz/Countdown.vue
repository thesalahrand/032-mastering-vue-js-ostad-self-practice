<script setup>
import { reactive, ref } from 'vue'

const props = defineProps(['quizDuration'])
const emit = defineEmits(['onChangeGameState'])

const endGame = () => {
  emit('onChangeGameState', 'intro')
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
  <div class="border px-4 py-2.5 rounded-lg text-gray-500">
    Remaining: <span class="font-medium">{{ remainingTime }}</span>
  </div>
</template>

<style scoped></style>
