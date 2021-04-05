new Vue({
  el: "#flashcards-app",
  data: {
    newQuestion: "",
    newAnswer: "",
    newCategory: "",
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]
  },
  methods: {
    flipCard: function(index) {
      if (this.cards[index].flipped) {
        this.cards[index].flipped = false;
      } else {
        this.cards[index].flipped = true;
      }
    },
    addCard: function() {
      if (this.newQuestion === "" || this.newAnswer === "" || this.newCategory === "") {
        alert("Please fill out all fields before submitting.");
      } else {
        this.cards.push({question: this.newQuestion, answer: this.newAnswer, category: this.newCategory, flipped: false})
        this.newQuestion = "";
        this.newAnswer = "";
        this.newCategory = "";
      }
    }
  }
})