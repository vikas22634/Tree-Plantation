import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './about-us.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const AboutUs = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="about-us-container">
      <Helmet>
        <title>about-us - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="about-us - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="about-us-container01">
        <div className="about-us-btn-group">
          <Link to="/" className="about-us-navlink button">
            HOME
          </Link>
          <button className="about-us-button button">/</button>
          <button className="about-us-button1 button">ABOUT US</button>
        </div>
      </div>
      <div className="about-us-hero">
        <h1 className="about-us-text">
          <span>WE ARE</span>
          <br></br>
          <span>
            TREE PLANTATION
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </h1>
        <span className="about-us-text05">
          A NON-PROFIT ORGANIZATION FOCUSED ON INDIA&apos;S REFORESTATION
        </span>
        <Link
          to="/plant-tree"
          id="PLANT_A_TREE"
          className="about-us-navlink1 button"
        >
          LET&apos;S CONTRIBUTE
        </Link>
      </div>
      <div className="about-us-gallery">
        <h1 className="about-us-text06">OUR VISION</h1>
        <span className="about-us-text07">
          <span>
            We want to make it simple for anyone to help the environment by
            planting trees. Together we can restore forests, create habitat for
            biodiversity, and make a positive social impact around INDIA
          </span>
          <br></br>
          <br></br>
          <span className="about-us-text11">
            We plant trees from your donation.
          </span>
        </span>
        <div className="about-us-container02">
          <div className="about-us-container03">
            <span className="about-us-text12">
              WANT TO HELP MAKE A POSITIVE IMPACT FOR THE ENVIRONMENT ?
            </span>
            <Link
              to="/plant-tree"
              id="PLANT_A_TREE"
              className="about-us-navlink2 button"
            >
              DONATE
            </Link>
          </div>
        </div>
        <div className="about-us-banner">
          <h2 className="about-us-text13">
            <span className="about-us-text14">
              ONE PERSON.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="about-us-text15">ONE TREE.</span>
            <span className="about-us-text16"> ONE PLANET.</span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span className="about-us-text20">
              Since 2023, we have increased the number of trees planted each
              month, and are working with partners across INDIA
            </span>
          </h2>
        </div>
        <div className="about-us-container04">
          <div className="about-us-container05">
            <span className="about-us-text21">OUR PROCESS</span>
          </div>
          <div className="about-us-container06">
            <div className="about-us-container07">
              <img
                alt="image"
                src="https://img.freepik.com/free-icon/donate_318-694196.jpg?size=626&amp;ext=jpg&amp;uid=R50095628&amp;semt=robertav1_2_sidr"
                loading="eager"
                className="about-us-image"
              />
              <span className="about-us-text22">
                <span className="about-us-text23">YOU</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="about-us-text25">DONATE</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="about-us-text27"></br>
                <span className="about-us-text28">ON OUR WEBSITE</span>
              </span>
            </div>
            <img
              alt="image"
              src="https://img.freepik.com/free-icon/keyboard-right-arrow-button_318-76510.jpg?size=626&amp;ext=jpg&amp;uid=R50095628&amp;semt=robertav1_2_sidr"
              loading="eager"
              className="about-us-image01"
            />
            <div className="about-us-container08">
              <img
                alt="image"
                src="https://static.vecteezy.com/system/resources/previews/001/176/991/original/hand-holding-bag-of-money-vector.jpg"
                loading="eager"
                className="about-us-image02"
              />
              <span className="about-us-text29">
                <span className="about-us-text30">WE P00L</span>
                <br className="about-us-text31"></br>
                <span className="about-us-text32">YOUR DONATION</span>
              </span>
            </div>
            <img
              alt="image"
              src="https://img.freepik.com/free-icon/keyboard-right-arrow-button_318-76510.jpg?size=626&amp;ext=jpg&amp;uid=R50095628&amp;semt=robertav1_2_sidr"
              loading="eager"
              className="about-us-image03"
            />
            <div className="about-us-container09">
              <img
                alt="image"
                src="https://cdn.shopify.com/s/files/1/0326/7189/articles/reforestation_one_tree_planted_2000x.jpg?v=1658422804"
                loading="eager"
                className="about-us-image04"
              />
              <span className="about-us-text33">
                <span className="about-us-text34">PARTNERS</span>
                <br className="about-us-text35"></br>
                <span className="about-us-text36">GROW SAPLING</span>
              </span>
            </div>
            <img
              alt="image"
              src="https://img.freepik.com/free-icon/keyboard-right-arrow-button_318-76510.jpg?size=626&amp;ext=jpg&amp;uid=R50095628&amp;semt=robertav1_2_sidr"
              loading="eager"
              className="about-us-image05"
            />
            <div className="about-us-container10">
              <img
                alt="image"
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-tree-planting-illustration_23-2149210052.jpg?w=2000"
                loading="eager"
                className="about-us-image06"
              />
              <span className="about-us-text37">
                <span className="about-us-text38">TEAM</span>
                <br className="about-us-text39"></br>
                <span className="about-us-text40">PLANT TREES</span>
              </span>
            </div>
            <img
              alt="image"
              src="https://img.freepik.com/free-icon/keyboard-right-arrow-button_318-76510.jpg?size=626&amp;ext=jpg&amp;uid=R50095628&amp;semt=robertav1_2_sidr"
              loading="eager"
              className="about-us-image07"
            />
            <div className="about-us-container11">
              <img
                alt="image"
                src="https://img.freepik.com/free-vector/reforestation-abstract-concept-illustration-silviculture-reforestation-program-replanting-trees-forest-natural-restoration-save-woodland-climate-change-mitigation_335657-767.jpg"
                loading="eager"
                className="about-us-image08"
              />
              <span className="about-us-text41">
                <span className="about-us-text42">TREE</span>
                <br className="about-us-text43"></br>
                <span className="about-us-text44">MONITERING</span>
              </span>
            </div>
            <img
              alt="image"
              src="https://img.freepik.com/free-icon/keyboard-right-arrow-button_318-76510.jpg?size=626&amp;ext=jpg&amp;uid=R50095628&amp;semt=robertav1_2_sidr"
              loading="eager"
              className="about-us-image09"
            />
            <div className="about-us-container12">
              <img
                alt="image"
                src="https://www.nwc.design/wp-content/uploads/2018/06/expand-reach-of-research-reports.png"
                loading="eager"
                className="about-us-image10"
              />
              <span className="about-us-text45">
                <span className="about-us-text46">WE REPORT</span>
                <br className="about-us-text47"></br>
                <span className="about-us-text48">YOUR IMPACT</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-authors">
        <h1 className="about-us-text49">GET TO KNOW MORE ABOUT US</h1>
        <div className="about-us-container13">
          <header className="about-us-testimonial-card">
            <div className="about-us-testimonial">
              <img
                alt="profile"
                src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg?size=626&amp;ext=jpg&amp;uid=R50095628&amp;semt=robertav1_2_sidr"
                className="about-us-image11"
              />
              <span className="about-us-text50">VIKAS AGRAWAL</span>
              <span className="about-us-text51">FOUNDER</span>
            </div>
          </header>
          <header className="about-us-testimonial-card1">
            <div className="about-us-testimonial1">
              <img
                alt="profile"
                src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg?size=626&amp;ext=jpg&amp;uid=R50095628&amp;semt=robertav1_2_sidr"
                className="about-us-image12"
              />
              <span className="about-us-text52">RISHABH ROHILA</span>
              <span className="about-us-text53">CO-FOUNDER</span>
            </div>
          </header>
          <header className="about-us-testimonial-card2">
            <div className="about-us-testimonial2">
              <img
                alt="profile"
                src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg?size=626&amp;ext=jpg&amp;uid=R50095628&amp;semt=robertav1_2_sidr"
                className="about-us-image13"
              />
              <span className="about-us-text54">MOHIT KUMAR</span>
              <span className="about-us-text55">CEO</span>
            </div>
          </header>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AboutUs
