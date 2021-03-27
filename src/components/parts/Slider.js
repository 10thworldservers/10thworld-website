import React, { useState } from 'react';
import styled from 'styled-components';
import { faqQ } from '../../utils/faq';

const Slider = () => {

  const [questions, showQuestions] = useState(faqQ);

  console.log(questions)

  const handleClick = (e, id) => {
    let previousIndex = id - 1;
    let precedingIndex = id + 1;
    let updatedQuestions = [...questions];
    let index = updatedQuestions.findIndex(item => id === item.id);

    if (previousIndex < 0) {
      updatedQuestions[index]['visible'] = !updatedQuestions[index]['visible'];
      updatedQuestions[precedingIndex]['visible'] = false;
      console.log('No previous index or preceding index', index);
    } else if (precedingIndex > 4) {
      updatedQuestions[index]['visible'] = !updatedQuestions[index]['visible'];
      updatedQuestions[previousIndex]['visible'] = false;
    } else  {
      updatedQuestions[previousIndex]['visible'] = false;
      updatedQuestions[precedingIndex]['visible'] = false;
      updatedQuestions[index]['visible'] = !updatedQuestions[index]['visible'];
    }

    
    showQuestions(updatedQuestions);
    e.preventDefault();
  };

  return (
    <>
      <ListParent>
        {questions.map(item => {
          return (
            <div style={{ color: 'white' }} key={item.id}>
              {item.question}
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
