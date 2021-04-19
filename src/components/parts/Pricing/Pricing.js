import React from 'react'
import { PriceContain } from './style';
import { Container } from '../../global';
const Pricing = () => {
  return (
    <Container>
      <PriceContain>
        <h1 style={{color:'white', textAlign: 'center', 
      margin: '1.5rem 0 0 0'}}>$10.00/Month</h1>
        <div style={{
          width: '75%',
          backgroundColor: 'white',
          height: '5px',
          display: 'flex',
          justifyContent: 'space-around',
          margin: '4rem auto'
        }}>
          <div style={{
            width: '20px',
            borderRadius: '50%',
            height: '20px',
            backgroundColor: 'white',
            marginTop: '-7px'
          }}></div>
          <div style={{
            width: '20px',
            borderRadius: '50%',
            height: '20px',
            backgroundColor: 'white',
            marginTop: '-7px'
          }}>
            <p style={{color: 'white', marginTop: '2.5rem'}}>Test</p>
          </div>
          {/* active */}
          <div style={{
            width: '20px',
            borderRadius: '50%',
            height: '20px',
            backgroundColor: 'hsl(209, 20%, 25%)',
            border: '1px solid white',
            marginTop: '-7px',
            zIndex: '1'
          }}></div>
          <div style={{
            width: '20px',
            borderRadius: '50%',
            height: '20px',
            backgroundColor: 'white',
            marginTop: '-7px'
          }}></div>
        </div>
      </PriceContain>
    </Container>
  )
}

export default Pricing
