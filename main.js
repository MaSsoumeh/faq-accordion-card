const arrowItems = document.querySelectorAll('.arrow-icon');
const questionItems = document.querySelectorAll('.question');

arrowItems.forEach((element) =>
  element.addEventListener('click', (event) => {
    const answerParagraph =
      event.target.parentElement.parentElement.nextElementSibling;
    const questionPart = event.target.parentElement.previousElementSibling;
    event.target.classList.toggle('rotate-arrow');
    answerParagraph.classList.toggle('show-answer-part');
    questionPart.classList.toggle('active-question');
  })
);
questionItems.forEach((element) =>
  element.addEventListener('click', (event) => {
    const answerParagraph = event.target.parentElement.nextElementSibling;
    answerParagraph.classList.toggle('show-answer-part');
    event.target.classList.toggle('active-question');
    event.target.nextElementSibling.classList.toggle('rotate-arrow');
  })
);
