fetch('Question.json')
  .then(response => response.json())
  .then(data => {
    const spaceQuestions = data.spaceQuestions;
    console.log(spaceQuestions);
  });
