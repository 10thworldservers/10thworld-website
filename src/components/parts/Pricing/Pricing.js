import React, {useState} from 'react'
import {
  PriceContain,
  PriceTitle,
  PriceLine,
  PriceBall
} from './style';
import { arrayStateHandler } from '../../../utils/arrayHelpers';
import { Container } from '../../global';

const Pricing = () => {
  const [priceBalls, setPriceBalls] = useState(
    [
      {
        id: 0,
        active: false
      },
      {
        id: 1,
        active: false
      },
      {
        id: 2,
        active: false
      },
      {
        id: 3,
        active: false
      },

    ]
  );
  const handleHover = (event, id) => {
    const arrayState = arrayStateHandler(priceBalls, id, 3, 'active');
    setPriceBalls(arrayState);
  };
  return (
    <Container>
      <PriceContain>
        <PriceTitle>$10.00USD/Month</PriceTitle>
        <PriceLine>
          {priceBalls.map((ball, index) => {
            return (
              <PriceBall
                key={ball.id}
                active={ball.active}
                onMouseEnter={(e) => handleHover(e, ball.id)}
              />
            )
          })}
        </PriceLine>
      </PriceContain>
    </Container>
  )
}

export default Pricing
