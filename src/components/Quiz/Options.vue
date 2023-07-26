<script setup>
const props = defineProps(['gameState', 'questions', 'questionIdx', 'options'])
const emit = defineEmits(['onToggleChosenOptions'])

const onToggleChosenOptions = (questionIdx, optionIdx) => {
  if (props.gameState == 'finished') return
  emit('onToggleChosenOptions', questionIdx, optionIdx)
}
</script>

<template>
  <ul class="space-y-3">
    <li
      v-for="(option, optionIdx) in options"
      :key="optionIdx"
      class="w-full inline-flex items-center border-2 rounded-lg px-4 py-3 group"
      :class="{
        'hover:bg-purple-500': gameState == 'play',
        'bg-purple-500':
          gameState == 'play' &&
          questions[questionIdx].chosenOptions.includes(optionIdx),
        'bg-green-500':
          gameState == 'finished' &&
          questions[questionIdx].correctOptions.includes(optionIdx),
        'bg-red-500':
          gameState == 'finished' &&
          !questions[questionIdx].correctOptions.includes(optionIdx) &&
          questions[questionIdx].chosenOptions.includes(optionIdx),
        'cursor-pointer': gameState == 'play',
        'cursor-not-allowed': gameState == 'finished',
      }"
      @click="onToggleChosenOptions(questionIdx, optionIdx)"
    >
      <span
        class="w-8 h-8 flex items-center justify-center rounded-full text-xs mr-2 font-bold"
        :class="{
          'bg-white text-gray-700':
            (gameState == 'finished' &&
              questions[questionIdx].correctOptions.includes(optionIdx)) ||
            questions[questionIdx].chosenOptions.includes(optionIdx),
          'bg-purple-500 text-white group-hover:bg-white group-hover:text-gray-700':
            gameState == 'play' &&
            !questions[questionIdx].chosenOptions.includes(optionIdx),
          'bg-purple-500 text-white':
            gameState == 'finished' &&
            !questions[questionIdx].chosenOptions.includes(optionIdx) &&
            !questions[questionIdx].correctOptions.includes(optionIdx),
        }"
        >{{ String.fromCharCode(65 + optionIdx) }}</span
      >
      <span
        :class="{
          'text-white':
            (gameState == 'finished' &&
              questions[questionIdx].correctOptions.includes(optionIdx)) ||
            questions[questionIdx].chosenOptions.includes(optionIdx),
          'text-gray group-hover:text-white':
            gameState == 'play' &&
            !questions[questionIdx].chosenOptions.includes(optionIdx),
          'text-gray':
            gameState == 'finished' &&
            !questions[questionIdx].chosenOptions.includes(optionIdx) &&
            !questions[questionIdx].correctOptions.includes(optionIdx),
        }"
        >{{ option }}</span
      >
    </li>
  </ul>
</template>

<style scoped></style>
