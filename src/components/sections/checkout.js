import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
const buttonStyles = {
  fontSize: "16px",
  fontWeight: "800",
  textAlign: "center",
  color: "#000",
  backgroundColor: "hsl(42, 87%, 55%)",
  padding: "12px 45px",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51ITVyBAS0djFnCh0wSRe0TERZZWl3b9PWnfS1pD5bI2QVxyOOJaggdSDY8jm8D8RYruPNJqDA5WIcjoWhLNMuHAg00dB3yqrZa")
  }
  return stripePromise
}
const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: "price_1ITW5OAS0djFnCh030YLxmpx", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  return (
    <button
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      Buy Now!
    </button>
  )
}
export default Checkout