import React from 'react'
import {
  PriceContain,
  PriceTitle,
  PriceLine,
  PriceBall
} from './style';
import { Container } from '../../global';
const Pricing = () => {
  return (
    <Container>
      <PriceContain>
        <PriceTitle>$10.00USD/Month</PriceTitle>
        <PriceLine>
          <PriceBall />
          <PriceBall />
          <PriceBall />
          <PriceBall />
        </PriceLine>
      </PriceContain>
    </Container>
  )
}

export default Pricing
