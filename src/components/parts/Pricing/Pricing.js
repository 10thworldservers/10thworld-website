import React, {useState} from 'react'
import {
  PriceContain,
  PriceTitle,
  PriceLine,
  PriceBall,
  PriceTextContainer,
  PriceInfo
} from './style';
import { arrayStateHandler } from '../../../utils/arrayHelpers';
import { Container, FlexContainer } from '../../global';

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

  const [priceInfo, setPriceInfo] = useState(
    [
      {
        id: 0,
        text: 'Automatically spin up servers with the press of a button',
        active: false
      },
      {
        id: 1,
        text: 'Stability a given through the power of cloud services',
        active: false
      },
      {
        id: 2,
        text: 'Secure database managed by Azure',
        active: false
      },
      {
        id: 3,
        text: 'Reliability guaranteed',
        active: false
      }
    ]
  );

  const handleHover = (event, id) => {
    const arrayState = arrayStateHandler(priceBalls, id, 3, 'active');
    const textState = arrayStateHandler(priceInfo, id, 3, 'active');
    setPriceBalls(arrayState);
    setPriceInfo(textState)
  };

  return (
    <Container>
      <PriceContain>
        <PriceTitle>
          <h2>$10.00USD</h2>
          <span>month</span>
        </PriceTitle>
        <FlexContainer>
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
        <PriceTextContainer>
          {priceInfo.map(item => {
            return (
              <PriceInfo
                key={item.id}
                active={item.active}
                onMouseEnter={(e) => handleHover(e, item.id)}
              >
                <p>{item.text}</p>
              </PriceInfo>
            )
          })}
        </PriceTextContainer>
        </FlexContainer>
        
      </PriceContain>
    </Container>
  )
}

export default Pricing
