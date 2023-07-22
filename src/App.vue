<script setup>
import { ref } from 'vue'

const spaceCount = ref(0)
const whatPressed = ref('')
const showMessage = ref(false)
</script>

<template>
  <section class="max-w-screen-sm mx-auto py-6">
    <!-- Space Count Program  -->
    <div>
      <h2 class="font-semibold text-center mb-4 text-gray-700">
        Space Count Program
      </h2>

      <textarea
        @keypress.space="spaceCount++"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <p class="text-gray-500 mt-2 text-sm">
        You have pressed space {{ spaceCount }} times
      </p>
    </div>
    <hr class="my-4" />
    <!-- Which Key Pressed Program  -->
    <div>
      <h2 class="font-semibold text-center mb-4 text-gray-700">
        Which Key Pressed Program?
      </h2>

      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Type anything..."
        @keypress="($event) => (whatPressed = $event.key)"
      />
      <p class="text-gray-500 mt-2 text-sm">
        You have just pressed <span class="font-bold">{{ whatPressed }}</span>
      </p>
    </div>
    <hr class="my-4" />
    <!-- Form Submit Prevent Program  -->
    <div>
      <h2 class="font-semibold text-center mb-4 text-gray-700">
        Form Submit Prevent Program
      </h2>

      <form @submit.prevent action="">
        <input
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
          placeholder="Type anything..."
        />
        <button
          @click.prevent
          type="submit"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Submit This Form
        </button>
      </form>
    </div>
    <hr class="my-4" />
    <!-- Which Key Pressed Program  -->
    <div>
      <h2 class="font-semibold text-center mb-4 text-gray-700">
        Composite Key Pressed Program
      </h2>

      <button
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        @click.ctrl.shift="showMessage = true"
      >
        Press CTRL + SHIFT
      </button>
      <p class="text-gray-500 mt-2 text-sm" v-show="showMessage">
        You have pressed <span class="font-bold">CTRL + SHIFT + Button</span>
      </p>
    </div>
    <hr class="my-4" />
    <!-- Event Bubbling Capturing Program  -->
    <div>
      <h2 class="font-semibold text-center mb-4 text-gray-700">
        Event Bubbling & Capturing
      </h2>

      <div
        class="w-full h-24 flex items-center rounded-md justify-center border border-dashed"
        @click="() => console.log('Div Clicked')"
      >
        <button
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          @click.stop="() => console.log('Button Clicked')"
        >
          Click Me
        </button>
      </div>
    </div>
    <hr class="my-4" />
  </section>
</template>

<style scoped></style>
