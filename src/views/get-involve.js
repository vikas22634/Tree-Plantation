import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './get-involve.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const GetInvolve = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="get-involve-container">
      <Helmet>
        <title>get-involve - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="get-involve - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="get-involve-container1">
        <div className="get-involve-btn-group">
          <Link to="/" className="get-involve-navlink button">
            HOME
          </Link>
          <button className="get-involve-button button">/</button>
          <button className="get-involve-button1 button">GET INVOLVE</button>
        </div>
      </div>
      <div className="get-involve-hero">
        <h1 className="get-involve-text">
          <span className="get-involve-text01">
            SUSTAINABILITY FOR
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="get-involve-text02"></br>
          <span className="get-involve-text03">BUSINESS OR VOLUNTEERS</span>
        </h1>
        <div className="get-involve-btn-group1">
          <Link
            to="/become-a-businesss-partner"
            className="get-involve-navlink1 button"
          >
            BECOME A BUSINESS PARTNER
          </Link>
          <Link
            to="/become-a-volunteer"
            className="get-involve-navlink2 button"
          >
            BECOME A VOLUNTEER
          </Link>
        </div>
      </div>
      <div className="get-involve-banner">
        <h2 className="get-involve-text04">
          <span>WORKING WITH BRANDS LIKE :</span>
          <br className="get-involve-text06"></br>
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
          className="get-involve-image"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxOSUtFJTIwTE9HT3xlbnwwfHx8fDE2ODIyNzg4NDM&amp;ixlib=rb-4.0.3&amp;w=200"
          loading="eager"
          className="get-involve-image01"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxOSUtFJTIwTE9HT3xlbnwwfHx8fDE2ODIyNzg4NDM&amp;ixlib=rb-4.0.3&amp;w=200"
          loading="eager"
          className="get-involve-image02"
        />
      </div>
      <div className="get-involve-banner1">
        <h2 className="get-involve-text08">
          <span>HUNDAI</span>
          <br className="get-involve-text10"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <h2 className="get-involve-text12">
          <span>STARBUCKS</span>
          <br className="get-involve-text14"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <h2 className="get-involve-text16">McDonald&apos;s</h2>
      </div>
      <div className="get-involve-banner2">
        <div className="get-involve-container2">
          <span className="get-involve-text17">
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
            <span className="get-involve-text19">make it simple</span>
            <span className="get-involve-text20">
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
            <span className="get-involve-text25">
              find the planting project that best fits your brand, mission, and
              goals.
            </span>
            <br></br>
            <br></br>
            <span>
              We also
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="get-involve-text29">post opportunities</span>
            <span>
              {' '}
              for
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="get-involve-text31">volunteers</span>
            <span>
               We have some
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="get-involve-text33">
              exciting events coming up
            </span>
            <span>
              , and we would love for you to be a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="get-involve-text35">part of them</span>
            <span>
              ! As a volunteer, you will have the opportunity to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="get-involve-text37">contribute</span>
            <span>
              {' '}
              to our mission of creating a greener, more
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="get-involve-text39">sustainable future</span>
            <span>
              . Whether it&apos;s planting trees in your local community or
              helping to organize a fundraising event, your involvement will
              make a real difference. Join us and let&apos;s make our upcoming
              projects a success together!
            </span>
            <br></br>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fFRSRUV8ZW58MHx8fHwxNjgyMjgwNDYy&amp;ixlib=rb-4.0.3&amp;w=300"
          className="get-involve-image03"
        />
      </div>
      <div className="get-involve-gallery">
        <h2 className="get-involve-text42">
          ACHIEVE YOUR SUSTAINABILITY GOALS
        </h2>
        <span className="get-involve-text43">
          <span>
            By being flexible and understanding your needs, we find the best way
            for your business to make a difference.
          </span>
          <br className="get-involve-text45"></br>
          <span>
            Whether it&apos;s by organizing employee events, or donating to our
            global planting projects, our business partners are making a
            positive impact.
          </span>
        </span>
      </div>
      <div className="get-involve-gallery1">
        <article className="get-involve-gallery-card">
        <Link to="/become-a-businesss-partner">"
          <img
            alt="image"
            src="https://media.gettyimages.com/id/1306683507/photo/people-from-the-chinese-mainland-and-taiwan-participate-in-a-voluntary-afforestation-campaign.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=hxLcJg2hWixf-iVBlUOlYvnEnU3HpGON_ZFuWzVlalU="
            loading="eager"
            className="get-involve-image04"
          />
          </Link>
          <h2 className="get-involve-heading">SUPPORT REFORESTATION</h2>
          <span className="get-involve-text47">
            Plant one tree for every product or service sold with our
            one-for-one model, donate a percentage of sales, or formulate
            special giving campaigns on social media.
          </span>
        </article>
        <div className="get-involve-gallery-card1">
        <Link to="/employee-engagement">
            
          <img 
            alt="image"
            src="https://images.unsplash.com/photo-1576267423429-569309b31e84?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxFTVBMT1lFRSUyMEVOR0FHRU1FTlR8ZW58MHx8fHwxNjgyNjQwOTc0&amp;ixlib=rb-4.0.3&amp;h=1500"
            loading="eager"
            className="get-involve-image05"
            
          />
         
          </Link>
          <h2 className="get-involve-heading1">EMPLOYEE ENGAGEMENT</h2>
          <span className="get-involve-text48">
            Our global tree planting events will help your team connect with
            nature, while also contributing to a positive environmental impact.
          </span>
        </div>
        <div className="get-involve-gallery-card2">

        <Link to="/urban-reforestation">
          <img
            alt="image"
            src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/one-tree-planted-urban-tree-new-york-city-1660765574971.jpg?v=1660765577"
            className="get-involve-image06"
          />
          </Link>
          <h2 className="get-involve-heading2">URBAN REFORESTATION</h2>
          <span className="get-involve-text49">
            Support one of our urban reforestation projects by planting close to
            your headquarters and improving your local biodiversity.
          </span>
        </div>
      </div>
      <div className="get-involve-gallery2">
        <h2 className="get-involve-text50">OUR UPCOMING PROJECTS OR EVENTS</h2>
        <span className="get-involve-text51">
          Join us for our upcoming tree planting events and projects! As a
          volunteer, you can help create a greener future and make a real
          difference in your community. Let&apos;s grow together!
        </span>
      </div>
      <div className="get-involve-gallery3">
        <article className="get-involve-gallery-card3">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1560073744-7643b964bdf8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZ1bmRyYWlzaW5nJTIwfGVufDB8fHx8MTY4MjYzNjQ1Mw&amp;ixlib=rb-4.0.3&amp;h=1500"
            loading="eager"
            className="get-involve-image07"
          />
          <h2 className="get-involve-heading3">fundraising events</h2>
          <span className="get-involve-text52">
            organizing fundraising events or promote student engagement and
            motivation build community and promote environmental sustainability
            on campus and beyond.
          </span>
        </article>
        <div className="get-involve-gallery-card4">
          <img
            alt="image"
            src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/groupofemployeeattreeplantingeventinmexico-1641504949839.jpg?v=1641504977"
            loading="eager"
            className="get-involve-image08"
          />
          <h2 className="get-involve-heading4">tree maintenance</h2>
          <span className="get-involve-text53">
            Participating in tree maintenance and care activities and make
            nature happy
          </span>
        </div>
        <div className="get-involve-gallery-card5">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQwfHxzdHVkZW50JTIwY2x1YnxlbnwwfHx8fDE2ODI2MzY1MDM&amp;ixlib=rb-4.0.3&amp;h=1500"
            className="get-involve-image09"
          />
          <h2 className="get-involve-heading5">Encouraging student clubs</h2>
          <span className="get-involve-text54">
            you can help collect seeds from existing trees, propagate them with
            help of your mentors, and then transplant them into the school or
            collage grounds.
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default GetInvolve
