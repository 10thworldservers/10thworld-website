import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = () => {

  const [questions, showQuestions] = useState([
    {
      id: 0,
      question: "How do I get started?",
      answer: "Once you've created an account and purchased a subscription you will gain access to a server.",
      visible: false,
    },
    {
      id: 1,
      question: "How will I be billed?",
      answer: "All payments are processed through Stripe on a monthly basis.",
      visible: false
    },
    {
      id: 2,
      question: "Can I cancel my subscription?",
      answer: "You can deactivate your subscription at any time (that's if Valheim ever stops being fun).",
      visible: false
    },
  ]);

  console.log(questions)

  const handleClick = (e) => {
    e.preventDefault();
    const updatedQuestions = [...questions];

  };

  return (
    <>
      <ListParent>
        {questions.map(item => {
          return (
            <div style={{ color: 'white' }} key={item.id}>
              {item.question}
              {item.answer}
            </div>
          )
        })}

      </ListParent>
    </>
  )
};

const ListParent = styled.div`
  display: flex;
  flex-direction: column;
`

export default Slider;
