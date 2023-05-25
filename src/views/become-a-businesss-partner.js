import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './become-a-businesss-partner.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const BECOMEABUSINESSSPARTNER = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="becomeabusinessspartner-container">
      <Helmet>
        <title>
          BECOME-A-BUSINESSS-PARTNER - TREE--PLANTATION
        </title>
        <meta
          property="og:title"
          content="BECOME-A-BUSINESSS-PARTNER - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="becomeabusinessspartner-container01">
        <div className="becomeabusinessspartner-btn-group">
          <Link to="/" className="becomeabusinessspartner-navlink button">
            HOME
          </Link>
          <button className="becomeabusinessspartner-button button">/</button>
          <Link
            to="/get-involve"
            className="becomeabusinessspartner-navlink1 button"
          >
            GET INVOLVE
          </Link>
          <button className="becomeabusinessspartner-button1 button">/</button>
          <button className="becomeabusinessspartner-button2 button">
            BUSINESS
          </button>
        </div>
      </div>
      <div className="becomeabusinessspartner-hero">
        <h3 className="becomeabusinessspartner-text">
          Join us in growing a sustainable future for generations to come,
          become a business partner in our mission to plant more trees!
        </h3>
        <a
          href="#First name"
          id="BECOME"
          className="becomeabusinessspartner-link button"
        >
          BECOME A BUSINESS PARTNER
        </a>
      </div>
      <div className="becomeabusinessspartner-banner">
        <h2 className="becomeabusinessspartner-text01">
          <span>WORKING WITH BRANDS LIKE :</span>
          <br className="becomeabusinessspartner-text03"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1588036873025-7261a5647adf?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fEhZVU5EQUl8ZW58MHx8fHwxNjgyMjc4ODgy&amp;ixlib=rb-4.0.3&amp;w=200"
          loading="eager"
          className="becomeabusinessspartner-image"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxOSUtFJTIwTE9HT3xlbnwwfHx8fDE2ODIyNzg4NDM&amp;ixlib=rb-4.0.3&amp;w=200"
          loading="eager"
          className="becomeabusinessspartner-image1"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxOSUtFJTIwTE9HT3xlbnwwfHx8fDE2ODIyNzg4NDM&amp;ixlib=rb-4.0.3&amp;w=200"
          loading="eager"
          className="becomeabusinessspartner-image2"
        />
      </div>
      <div className="becomeabusinessspartner-banner1">
        <h2 className="becomeabusinessspartner-text05">
          <span>HUNDAI</span>
          <br className="becomeabusinessspartner-text07"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <h2 className="becomeabusinessspartner-text09">
          <span>STARBUCKS</span>
          <br className="becomeabusinessspartner-text11"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <h2 className="becomeabusinessspartner-text13">McDonald&apos;s</h2>
      </div>
      <div className="becomeabusinessspartner-banner2">
        <div className="becomeabusinessspartner-container02">
          <span className="becomeabusinessspartner-text14">
            <span>
              Now, more than ever, businesses need to think about their effects
              on the planet and how they can start giving back to the
              environment. We&apos;re on a mission to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="becomeabusinessspartner-text16">
              make it simple
            </span>
            <span className="becomeabusinessspartner-text17">
              {' '}
              for businesses to give back
            </span>
            <span>
              {' '}
              in a way that has both immediate and long-term impact and a model
              that can be tailored to work for your business.
            </span>
            <br></br>
            <br></br>
            <span>
              With hundreds of projects with great stories, locations, and
              impact areas, we&apos;re destined to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="becomeabusinessspartner-text22">
              find the planting project that best fits your brand, mission, and
              goals.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fFRSRUV8ZW58MHx8fHwxNjgyMjgwNDYy&amp;ixlib=rb-4.0.3&amp;w=300"
          className="becomeabusinessspartner-image3"
        />
      </div>
      <div className="becomeabusinessspartner-gallery">
        <h2 className="becomeabusinessspartner-text23">
          ACHIEVE YOUR SUSTAINABILITY GOALS
        </h2>
        <span className="becomeabusinessspartner-text24">
          <span>
            By being flexible and understanding your needs, we find the best way
            for your business to make a difference.
          </span>
          <br className="becomeabusinessspartner-text26"></br>
          <span>
            Whether it&apos;s by organizing employee events, or donating to our
            global planting projects, our business partners are making a
            positive impact.
          </span>
        </span>
      </div>
      <div className="becomeabusinessspartner-gallery1">
        <article className="becomeabusinessspartner-gallery-card">
        <Link to="/become-a-businesss-partner" className="becomeabusinessspartner-gallery-card">
          <img
            alt="image"
            src="https://media.gettyimages.com/id/1306683507/photo/people-from-the-chinese-mainland-and-taiwan-participate-in-a-voluntary-afforestation-campaign.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=hxLcJg2hWixf-iVBlUOlYvnEnU3HpGON_ZFuWzVlalU="
            loading="eager"
            className="becomeabusinessspartner-image4"
          />
          <h2 className="becomeabusinessspartner-heading">
            SUPPORT REFORESTATION
          </h2>
          <span className="becomeabusinessspartner-text28">
            Plant one tree for every product or service sold with our
            one-for-one model, donate a percentage of sales, or formulate
            special giving campaigns on social media.
          </span>
          </Link>
        </article>
        <div className="becomeabusinessspartner-gallery-card1">
        <Link to="/employee-engagement" className="becomeabusinessspartner-gallery-card1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1576267423429-569309b31e84?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxlbXBsb3llZSUyMGVuZ2FnZW1lbnR8ZW58MHx8fHwxNjgyNjQwMTQ1&amp;ixlib=rb-4.0.3&amp;h=1500"
            loading="eager"
            className="becomeabusinessspartner-image5"
          />
          </Link>
          <h2 className="becomeabusinessspartner-heading1">
            EMPLOYEE ENGAGEMENT
          </h2>
          <span className="becomeabusinessspartner-text29">
            Our global tree planting events will help your team connect with
            nature, while also contributing to a positive environmental impact.
          </span>
        </div>
        <div className="becomeabusinessspartner-gallery-card2">
          
        <Link to="urban-reforestation" className="becomeabusinessspartner-gallery-card2">
          <img
            alt="image"
            src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/one-tree-planted-urban-tree-new-york-city-1660765574971.jpg?v=1660765577"
            className="becomeabusinessspartner-image6"
          />
          <h2 className="becomeabusinessspartner-heading2">
            URBAN REFORESTATION
          </h2>
          <span className="becomeabusinessspartner-text30">
            Support one of our urban reforestation projects by planting close to
            your headquarters and improving your local biodiversity.
          </span>
          </Link>
        </div>
      </div>
      <div className="becomeabusinessspartner-banner3">
        <h2 id="FILL IT" className="becomeabusinessspartner-text31">
          <span>GET STARTED TODAY</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <h2 className="becomeabusinessspartner-text35">
          <span>
            Fill out the form and let us know how you want to get involved!
          </span>
          <br></br>
          <span>
            You can also reach out to us directly by calling now or sending
            email.
          </span>
        </h2>
      </div>
      <div className="becomeabusinessspartner-container03">
        <div className="becomeabusinessspartner-container04">
          <form action="https://formspree.io/f/mpzekvae" method ="POST" className="becomeabusinessspartner-form">
            <div className="becomeabusinessspartner-container05">
              <div className="becomeabusinessspartner-container06">
                <div className="becomeabusinessspartner-container07">
                  <div
                    id="DETAIL"
                    className="becomeabusinessspartner-container08"
                  >
                    <label
                      htmlFor="First name"
                      className="becomeabusinessspartner-text39"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="First name"
                      name="first name"
                      required
                      placeholder="Type Your First Name"
                      autoComplete="given-name"
                      className="becomeabusinessspartner-textinput input"
                    />
                  </div>
                  <div
                    id="DETAIL"
                    className="becomeabusinessspartner-container09"
                  >
                    <label
                      htmlFor="Email"
                      className="becomeabusinessspartner-text40"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      id="Email"
                      name="email"
                      required
                      placeholder="Type Your Email ID"
                      autoComplete="email"
                      className="becomeabusinessspartner-textinput1 input"
                    />
                  </div>
                  <div
                    id="DETAIL"
                    className="becomeabusinessspartner-container10"
                  >
                    <label
                      htmlFor="URL"
                      className="becomeabusinessspartner-text41"
                    >
                      Company Website URL
                    </label>
                    <input
                      type="text"
                      id="URL"
                      name="URL"
                      required
                      placeholder="Type Your Website URL"
                      autoComplete="url"
                      className="becomeabusinessspartner-textinput2 input"
                    />
                  </div>
                  <div
                    id="DETAIL"
                    className="becomeabusinessspartner-container11"
                  >
                    <label
                      htmlFor="message"
                      className="becomeabusinessspartner-text42"
                    >
                      Message
                    </label>
                    <input
                      type="text"
                      id="message"
                      name="message"
                      required
                      placeholder="Type Your Message"
                      autoComplete="off"
                      className="becomeabusinessspartner-textinput3 input"
                    />
                  </div>
                </div>
              </div>
              <div className="becomeabusinessspartner-container12">
                <div className="becomeabusinessspartner-container13">
                  <div
                    id="DETAIL"
                    className="becomeabusinessspartner-container14"
                  >
                    <label
                      htmlFor="Last name"
                      className="becomeabusinessspartner-text43"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="Last name"
                      name="Last name"
                      required
                      placeholder="Type Your Last Name"
                      autoComplete="family-name"
                      className="becomeabusinessspartner-textinput4 input"
                    />
                  </div>
                  <div
                    id="DETAIL"
                    className="becomeabusinessspartner-container15"
                  >
                    <label
                      htmlFor="C_name"
                      className="becomeabusinessspartner-text44"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="C_name"
                      name="C_name"
                      required
                      placeholder="Type Your Company Name"
                      autoComplete="organization"
                      className="becomeabusinessspartner-textinput5 input"
                    />
                  </div>
                  <div
                    id="DETAIL"
                    className="becomeabusinessspartner-container16"
                  >
                    <label
                      htmlFor="Mobile"
                      className="becomeabusinessspartner-text45"
                    >
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      id="Mobile"
                      name="Mobile"
                      required
                      maxlength="10"
                      minlength="10"
                      placeholder="Type Your Mobile No."
                      className="becomeabusinessspartner-textinput6 input"
                    />
                  </div>
                </div>
                <button
                  id="SUBMIT_DETAILS"
                  name="Submit"
                  type="submit"
                  className="becomeabusinessspartner-button3 button"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="becomeabusinessspartner-container17">
          <span className="becomeabusinessspartner-text46">
            <span className="becomeabusinessspartner-text47">
              AS A BUSINESS PARTNER, YOU WILL GET ACCESS TO:
            </span>
            <br></br>
            <br></br>
            <span className="becomeabusinessspartner-text50">✔</span>
            <span>  </span>
            <span className="becomeabusinessspartner-text52">
              Incredible sustainability stories for your business
            </span>
            <br className="becomeabusinessspartner-text53"></br>
            <br className="becomeabusinessspartner-text54"></br>
            <span className="becomeabusinessspartner-text55">✔</span>
            <span className="becomeabusinessspartner-text56">  </span>
            <span className="becomeabusinessspartner-text57">
              A dedicated account manager to help you accomplish your goals
            </span>
            <br className="becomeabusinessspartner-text58"></br>
            <br className="becomeabusinessspartner-text59"></br>
            <span className="becomeabusinessspartner-text60">✔</span>
            <span className="becomeabusinessspartner-text61">  </span>
            <span className="becomeabusinessspartner-text62">
              Access to a library of amazing photos, videos, and marketing
              assets
            </span>
            <br className="becomeabusinessspartner-text63"></br>
            <br className="becomeabusinessspartner-text64"></br>
            <span className="becomeabusinessspartner-text65">✔</span>
            <span>  </span>
            <span className="becomeabusinessspartner-text67">
              Regular updates on all the projects you are supporting
            </span>
            <br className="becomeabusinessspartner-text68"></br>
            <br className="becomeabusinessspartner-text69"></br>
            <span className="becomeabusinessspartner-text70">✔</span>
            <span className="becomeabusinessspartner-text71">   </span>
            <span className="becomeabusinessspartner-text72">
              Visibility on our website and social media (after a donation
              milestone)
            </span>
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BECOMEABUSINESSSPARTNER
