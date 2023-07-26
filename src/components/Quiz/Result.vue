<script setup>
const props = defineProps(['marks', 'quizQuestionsCnt'])
const feedbacks = [
  {
    minScorePercent: 0,
    maxScorePercent: 19.99,
    title: 'Very Poor',
    emoji: '😞',
  },
  {
    minScorePercent: 20,
    maxScorePercent: 39.99,
    title: 'Below Average',
    emoji: '😐',
  },
  {
    minScorePercent: 40,
    maxScorePercent: 59.99,
    title: 'Average',
    emoji: '😊',
  },
  {
    minScorePercent: 60,
    maxScorePercent: 79.99,
    title: 'Good',
    emoji: '😃',
  },
  {
    minScorePercent: 80,
    maxScorePercent: 100,
    title: 'Excellent',
    emoji: '👍',
  },
]
</script>

<template>
  <div>
    <div
      class="flex flex-col items-center"
      v-for="(feedback, idx) in feedbacks"
      :key="idx"
      v-show="
        ((marks / quizQuestionsCnt) * 100).toFixed(2) >=
          feedback.minScorePercent &&
        ((marks / quizQuestionsCnt) * 100).toFixed(2) <=
          feedback.maxScorePercent
      "
    >
      <span class="text-8xl">{{ feedback.emoji }}</span>
      <h2 class="text-2xl font-bold text-gray-700 mt-6 mb-3">
        {{ feedback.title }}!
      </h2>
      <p class="text-gray-500">
        You got <span class="font-bold">{{ marks }}</span
        >/<span class="font-bold">{{ quizQuestionsCnt }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
