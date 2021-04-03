import React, { useState } from 'react';
import { faqQ } from '../../utils/faq';
import { ListParent, ListChild, ListLink, ListIcon, ListIconActive, CopyText } from './style';
import arrow from '../../images/icon-arrow.svg';

const Slider = () => {

  const [questions, showQuestions] = useState(faqQ);

  const handleClick = (e, id) => {
    let updatedQuestions = [...questions];
    let index = updatedQuestions.findIndex(item => id === item.id);
    let precedingIndex = id + 1;
    let previousIndex = id - 1;

    if (previousIndex < 0) {
      updatedQuestions[index]['isVisible'] = !updatedQuestions[index]['isVisible'];
      updatedQuestions[precedingIndex]['isVisible'] = false;
    } else if (precedingIndex > 4) {
      updatedQuestions[index]['isVisible'] = !updatedQuestions[index]['isVisible'];
      updatedQuestions[previousIndex]['isVisible'] = false;
    } else {
      updatedQuestions[previousIndex]['isVisible'] = false;
      updatedQuestions[precedingIndex]['isVisible'] = false;
      updatedQuestions[index]['isVisible'] = !updatedQuestions[index]['isVisible'];

    }

    showQuestions(updatedQuestions);
    e.preventDefault()
  };

  return (
    <>
      <ListParent>
        {questions.map((item, index) => {
          return (
              <ListChild key={item.id}>
              <ListLink href="#" rel="noopener noreferrer" onClick={(e) => handleClick(e, item.id)}>{item.question}
              {questions[index].isVisible ? <ListIcon src={arrow} /> : <ListIconActive src={ arrow } />}
              
              </ListLink>
              {questions[index].isVisible ? <CopyText>{item.answer}</CopyText> : null}
              </ListChild>
          )
        })}
      </ListParent>
    </>
  )
};


export default Slider;
