import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import './payment-gatway.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const PaymentGatway = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="payment-gatway-container">
      <Helmet>
        <title>payment-gatway - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="payment-gatway - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="payment-gatway-container1">
        <img
          alt="image"
          src="https://media.istockphoto.com/id/1348157796/vector/website-under-construction-page-web-page-under-construction-website-under-maintenance-page.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=vJCWlc0t7pZY3b41LciyKsXQAtcDlMqzq2M7zOsl5rI="
          className="payment-gatway-image"
        />
        <img
          alt="image"
          src="/playground_assets/png%20image-300h.png"
          loading="eager"
          className="payment-gatway-image1"
        />
        <span className="payment-gatway-text">
          <span className="payment-gatway-text01">
            OTHER PAYMENT OPTIONS LIKE CREDIT/DEBIT CARD,NET BANKING,UPI WILL BE MADE AVAILABLE SOON!
          </span>
          <br></br>
          <br></br>
          <span className="payment-gatway-text04">
            THANKS FOR YOUR CONTRIBUTION.
          </span>
          <span className="payment-gatway-text05">🌲</span>
          <br></br>
          <br></br>
          <span className="payment-gatway-text08">
            SCAN THE BELOW QR CODE TO MAKE A PAYMENT
          </span>
        </span>
        <span className="payment-gatway-text09">
          <span className="payment-gatway-text10">
            RECEIPT OF THIS TRANSACTION ALONG WITH CERTIFICATE
            WILL BE PROVIDED WITHIN 3-4 DAYS!
          </span>
          <br className="payment-gatway-text11"></br>
          <br></br>
          
        </span>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PaymentGatway
