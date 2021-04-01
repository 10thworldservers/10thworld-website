import React, { useState } from 'react';
import { faqQ } from '../../utils/faq';
import { ListParent, ListChild, ListLink, ListIcon, ListIconActive, CopyText } from './style';

const Slider = () => {

  const [questions, showQuestions] = useState(faqQ);

  const handleClick = (e, id) => {
    let updatedQuestions = [...questions];
    let index = updatedQuestions.findIndex(item => id === item.id);

    updatedQuestions[index]['isVisible'] = !updatedQuestions[index]['isVisible'];

    showQuestions(updatedQuestions);
    e.preventDefault()
  };

  return (
    <>
      <ListParent>
        {questions.map((item, index) => {
          return (
              <ListChild key={item.id}>
                <ListLink href="#" rel="noopener noreferrer" onClick={(e) => handleClick(e, item.id)}>{item.question}</ListLink>
                {questions[index].isVisible ? <CopyText>{ item.answer }</CopyText> : null}
              </ListChild>
          )
        })}
      </ListParent>
    </>
  )
};


export default Slider;
