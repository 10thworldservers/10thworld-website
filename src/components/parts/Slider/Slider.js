import React, { useState } from 'react';
import { faqQ } from '../../../utils/faq';
import { arrayStateHandler } from '../../../utils/arrayHelpers';
import { ListParent, ListChild, ListLink, ListIcon, ListIconActive, CopyText } from './style';
import arrow from '../../../images/icon-arrow.svg';

const Slider = () => {

  const [questions, showQuestions] = useState(faqQ);

  const handleClick = (e, id) => {
    let updatedQuestions = arrayStateHandler(questions, id, 4, 'isVisible');

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
              {questions[index].isVisible ? <ListIconActive alt="icon arrow down" src={ arrow }/> : <ListIcon alt="icon arrow up" src={arrow} /> }
              
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
