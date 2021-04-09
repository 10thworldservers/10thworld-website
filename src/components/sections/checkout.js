import React, { useState, useContext } from "react"
import { loadStripe } from "@stripe/stripe-js"
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthProvider';

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51ITVyBAS0djFnCh0wSRe0TERZZWl3b9PWnfS1pD5bI2QVxyOOJaggdSDY8jm8D8RYruPNJqDA5WIcjoWhLNMuHAg00dB3yqrZa")
  }
  return stripePromise
}
const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const { user, context } = useContext(AuthContext);
  const userAccount = context.getAccount();
  console.log("CHECKOUT USER ACCOUNT :", userAccount);
  if (userAccount !== undefined){
    console.trace("CHECKOUT USER NAME FROM ACCOUNT :", userAccount.name);
    console.log("CHECKOUT USER ID FROM ACCOUNT :", userAccount.localAccountId);
    console.log("CHECKOUT USER TOKEN FROM STATE :", user);
  }

  const redirectToCheckout = async event => {
    event.preventDefault();
    
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: "price_1ITW5OAS0djFnCh030YLxmpx", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
      //clientReferenceId is set by us from user db and passed to webhook, it is the only way to associate checkout session to client.
      clientReferenceId: userAccount.localAccountId,
      customerEmail: userAccount.userName
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  return (
    <CheckoutButton
      disabled={loading}
      onClick={(event) => redirectToCheckout(event)}
    >
      Get Access
    </CheckoutButton>
  )
}

const CheckoutButton = styled.button`
  font-size: 18px;
  padding: 0.25rem 2rem;
  font-weight: 600;
  text-align: center;
  color: ${props => props.theme.color.black.regular};
  background-color: hsl(42, 87%, 55%);
  border-radius: 10px;
  letter-spacing: 1.5px;
  margin-right: 0.5rem;
  &:hover {
    box-shadow: 1px 1px 1em black;
    transition: box-shadow 0.2s ease;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-bottom: 0.75rem;
    font-size: 24px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    /* max-width: 50%; */
    margin-right: 0.25rem;
  }
`;
export default Checkout