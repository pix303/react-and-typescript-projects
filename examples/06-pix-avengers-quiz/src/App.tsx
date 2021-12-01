import './App.css';
import React from 'react';

type QuestionItem = {
  question: string;
  answer: string;
  isCorrect: boolean;
};

const questionsData: QuestionItem[] = [
  { question: 'How many legs have a person', answer: '2', isCorrect: true },
  { question: 'How many legs have a cow', answer: '3', isCorrect: false },
  { question: 'How many legs have a bird', answer: '2', isCorrect: true },
  { question: 'How many legs have a snake', answer: '1', isCorrect: false }
];

const QuestionCardComponent = ({
  question,
  answer,
  isCorrect
}: QuestionItem) => {
  const [hidden, toggleHidden] = React.useState(true);
  return (
    <article className="question-article">
      <header>Question is: {question}</header>
      <h3 className={hidden ? 'blurred' : 'visible'}>{answer}</h3>
      <button onClick={() => toggleHidden(!hidden)}>
        {hidden ? 'show' : 'hide'}
      </button>
      <footer>
        <i className={isCorrect ? 'success' : 'error'}>
          Answer is {isCorrect ? 'correct' : 'wrong'}
        </i>
      </footer>
    </article>
  );
};

function App() {
  return (
    <div className="App">
      {questionsData.map((quest) => {
        return (
          <QuestionCardComponent
            question={quest.question}
            answer={quest.answer}
            isCorrect={quest.isCorrect}
          />
        );
      })}
    </div>
  );
}

export default App;
