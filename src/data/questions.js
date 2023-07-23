const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    chosenOptionsIdx: [1], // Paris is the correct answer
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    chosenOptionsIdx: [1], // Mars is the correct answer
  },
  {
    question: 'What is 12 multiplied by 5?',
    options: ['55', '60', '48', '50'],
    chosenOptionsIdx: [1], // 60 is the correct answer
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['O', 'H2O', 'CO2', 'H2'],
    chosenOptionsIdx: [1], // H2O is the correct answer
  },
  {
    question: 'Which countries are part of the United Kingdom?',
    options: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    chosenOptionsIdx: [0, 1, 2, 3], // All options are correct answers
  },
  {
    question: 'Which animals are mammals?',
    options: ['Lion', 'Eagle', 'Dolphin', 'Shark'],
    chosenOptionsIdx: [0, 2], // Lion and Dolphin are correct answers
  },
  {
    question: 'Which colors are in a rainbow?',
    options: ['Red', 'Green', 'Yellow', 'Blue', 'Purple', 'White'],
    chosenOptionsIdx: [0, 2, 3, 4], // Red, Yellow, Blue, and Purple are correct answers
  },
  {
    question: 'Which of these are prime numbers?',
    options: ['10', '17', '25', '7', '12'],
    chosenOptionsIdx: [1, 3], // 17 and 7 are correct answers
  },
  {
    question: 'Which programming languages are used for web development?',
    options: ['Java', 'Python', 'HTML', 'CSS', 'Ruby'],
    chosenOptionsIdx: [2, 3], // HTML and CSS are correct answers
  },
  {
    question: 'Which of these are gas giants?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'],
    chosenOptionsIdx: [2, 3, 4], // Jupiter, Saturn, and Neptune are correct answers
  },
  {
    question: 'Which of these countries are in South America?',
    options: ['Brazil', 'Japan', 'Australia', 'Argentina', 'India'],
    chosenOptionsIdx: [0, 3], // Brazil and Argentina are correct answers
  },
  {
    question: 'Which of these are programming paradigms?',
    options: [
      'Imperative',
      'Object-Oriented',
      'Declarative',
      'Procedural',
      'Pizza',
    ],
    chosenOptionsIdx: [0, 1, 2, 3], // All options except 'Pizza' are correct answers
  },
  {
    question: 'Which of these are primary colors?',
    options: ['Red', 'Green', 'Blue', 'Yellow', 'Black'],
    chosenOptionsIdx: [0, 2], // Red and Blue are correct answers
  },
  {
    question: 'Which of these are factors of 24?',
    options: ['5', '8', '3', '6', '12'],
    chosenOptionsIdx: [2, 3, 4], // 3, 6, and 12 are correct answers
  },
  {
    question: 'Which of these are famous inventors?',
    options: [
      'Thomas Edison',
      'Marie Curie',
      'Leonardo da Vinci',
      'Galileo Galilei',
    ],
    chosenOptionsIdx: [0, 1, 2], // Thomas Edison, Marie Curie, and Leonardo da Vinci are correct answers
  },
  {
    question: 'Which of these are programming languages?',
    options: ['Spanish', 'Java', 'French', 'Python', 'Mandarin'],
    chosenOptionsIdx: [1, 3], // Java and Python are correct answers
  },
  {
    question: 'Which of these are continents?',
    options: ['Asia', 'Antarctica', 'Caribbean', 'Africa', 'Greenland'],
    chosenOptionsIdx: [0, 1, 3], // Asia, Antarctica, and Africa are correct answers
  },
  {
    question: 'Which of these are noble gases?',
    options: ['Nitrogen', 'Oxygen', 'Helium', 'Hydrogen', 'Neon'],
    chosenOptionsIdx: [2, 4], // Helium and Neon are correct answers
  },
  {
    question: 'Which of these are programming constructs?',
    options: ['If statement', 'Apple', 'Loop', 'Function', 'Banana'],
    chosenOptionsIdx: [0, 2, 3], // If statement, Loop, and Function are correct answers
  },
  {
    question: 'Which of these are parts of a flower?',
    options: ['Petal', 'Stem', 'Leaf', 'Root', 'Fruit'],
    chosenOptionsIdx: [0, 1, 2, 3], // Petal, Stem, Leaf, and Root are correct answers
  },
  // Add more questions here...
]

export default questions
