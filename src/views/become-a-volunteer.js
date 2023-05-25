import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './become-a-volunteer.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const BECOMEAVOLUNTEER = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="becomeavolunteer-container">
      <Helmet>
        <title>BECOME-A-VOLUNTEER - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="BECOME-A-VOLUNTEER - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="becomeavolunteer-container01">
        <div className="becomeavolunteer-btn-group">
          <Link to="/" className="becomeavolunteer-navlink button">
            HOME
          </Link>
          <button className="becomeavolunteer-button button">/</button>
          <Link to="/get-involve" className="becomeavolunteer-navlink1 button">
            GET INVOLVE
          </Link>
          <button className="becomeavolunteer-button1 button">/</button>
          <button className="becomeavolunteer-button2 button">VOLUNTEER</button>
        </div>
      </div>
      <div className="becomeavolunteer-hero">
        <h3 className="becomeavolunteer-text">
          By partnering with celebrities and their generous donations, we
          provide the opportunity for individuals to make a meaningful impact by
          volunteering in our tree plantation mission.
        </h3>
        <a href="#name" id="BECOME" className="becomeavolunteer-link button">
          BECOME A VOLUNTEER
        </a>
      </div>
      <div className="becomeavolunteer-gallery">
        <h2 className="becomeavolunteer-text01">
          OUR UPCOMING PROJECTS OR EVENTS
        </h2>
        <span className="becomeavolunteer-text02">
          Join us for our upcoming tree planting events and projects! As a
          volunteer, you can help create a greener future and make a real
          difference in your community. Let&apos;s grow together!
        </span>
      </div>
      <div className="becomeavolunteer-gallery1">
        <article className="becomeavolunteer-gallery-card">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1560073744-7643b964bdf8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZ1bmRyYWlzaW5nJTIwfGVufDB8fHx8MTY4MjYzNjQ1Mw&amp;ixlib=rb-4.0.3&amp;h=1500"
            loading="eager"
            className="becomeavolunteer-image"
          />
          <h2 className="becomeavolunteer-heading">fundraising events</h2>
          <span className="becomeavolunteer-text03">
            organizing fundraising events or promote student engagement and
            motivation build community and promote environmental sustainability
            on campus and beyond.
          </span>
        </article>
        <div className="becomeavolunteer-gallery-card1">
          <img
            alt="image"
            src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/groupofemployeeattreeplantingeventinmexico-1641504949839.jpg?v=1641504977"
            loading="eager"
            className="becomeavolunteer-image1"
          />
          <h2 className="becomeavolunteer-heading1">tree maintenance</h2>
          <span className="becomeavolunteer-text04">
            Participating in tree maintenance and care activities and make
            nature happy
          </span>
        </div>
        <div className="becomeavolunteer-gallery-card2">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQwfHxzdHVkZW50JTIwY2x1YnxlbnwwfHx8fDE2ODI2MzY1MDM&amp;ixlib=rb-4.0.3&amp;h=1500"
            className="becomeavolunteer-image2"
          />
          <h2 className="becomeavolunteer-heading2">
            Encouraging student clubs
          </h2>
          <span className="becomeavolunteer-text05">
            you can help collect seeds from existing trees, propagate them with
            help of your mentors, and then transplant them into the school or
            collage grounds.
          </span>
        </div>
      </div>
      <div className="becomeavolunteer-banner">
        <h2 id="FILL IT" className="becomeavolunteer-text06">
          <span>TAKE A STEP AHEAD</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <h2 className="becomeavolunteer-text10">
          Fill out the form and let us know how you want to get involved!
        </h2>
      </div>
      <div className="becomeavolunteer-container02">
        <div className="becomeavolunteer-container03">
          <form action="https://formspree.io/f/mgebrgwq" method ="POST" className="becomeavolunteer-form">
            <div className="becomeavolunteer-container04">
              <div id="DETAIL" className="becomeavolunteer-container05">
                <label htmlFor="First name" className="becomeavolunteer-text11">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Type Your Name"
                  autoComplete="name"
                  className="becomeavolunteer-textinput input"
                />
              </div>
              <div id="DETAIL" className="becomeavolunteer-container06">
                <label htmlFor="Email" className="becomeavolunteer-text12">
                  Email ID
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  required
                  placeholder="Type Your Email ID"
                  autoComplete="email"
                  className="becomeavolunteer-textinput1 input"
                />
              </div>
              <div id="DETAIL" className="becomeavolunteer-container07">
                <label htmlFor="message" className="becomeavolunteer-text13">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  maxlength="10"
                  minlength="10"
                  placeholder="Type Your Mobile No."
                  autoComplete="off"
                  className="becomeavolunteer-textinput2 input"
                />
              </div>
              <div id="DETAIL" className="becomeavolunteer-container08">
                <label htmlFor="URL" className="becomeavolunteer-text14">
                  Select the activity/event
                </label>
                <select required className="becomeavolunteer-select">
                  <option value="Option1" selected>
                    Fundraising Events
                  </option>
                  <option value="Option 2">Tree Maintenance</option>
                  <option value="Option 3">Encouraging Student Clubs</option>
                </select>
                <div
                  data-thq="thq-dropdown"
                  className="becomeavolunteer-thq-dropdown list-item"
                >
                  <ul
                    data-thq="thq-dropdown-list"
                    className="becomeavolunteer-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="becomeavolunteer-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="becomeavolunteer-dropdown-toggle"
                      >
                        <span className="becomeavolunteer-text15">
                          Sub-menu Item
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="becomeavolunteer-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="becomeavolunteer-dropdown-toggle1"
                      >
                        <span className="becomeavolunteer-text16">
                          Sub-menu Item
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="becomeavolunteer-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="becomeavolunteer-dropdown-toggle2"
                      >
                        <span className="becomeavolunteer-text17">
                          Sub-menu Item
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                id="SUBMIT_DETAILS"
                name="Submit"
                type="submit"
                className="becomeavolunteer-button3 button"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="becomeavolunteer-container09">
          <span className="becomeavolunteer-text18">
            <span className="becomeavolunteer-text19">
              AS A VOLUNTEER, YOU WILL GET ACCESS TO:
            </span>
            <br></br>
            <br></br>
            <span className="becomeavolunteer-text22">✔</span>
            <span>  </span>
            <span className="becomeavolunteer-text24">
              Incredible sustainability stories for plants
            </span>
            <br className="becomeavolunteer-text25"></br>
            <br className="becomeavolunteer-text26"></br>
            <span className="becomeavolunteer-text27">✔</span>
            <span className="becomeavolunteer-text28">  </span>
            <span className="becomeavolunteer-text29">
              A dedicated mentor to help you accomplish your goals
            </span>
            <br className="becomeavolunteer-text30"></br>
            <br className="becomeavolunteer-text31"></br>
            <span className="becomeavolunteer-text32">✔</span>
            <span className="becomeavolunteer-text33">  </span>
            <span className="becomeavolunteer-text34">
              Access to details of amazing plats.
            </span>
            <br className="becomeavolunteer-text35"></br>
            <br className="becomeavolunteer-text36"></br>
            <span className="becomeavolunteer-text37">✔</span>
            <span>  </span>
            <span className="becomeavolunteer-text39">
              Regular updates on all the upcoming projects or events
            </span>
            <br className="becomeavolunteer-text40"></br>
            <br className="becomeavolunteer-text41"></br>
            <span className="becomeavolunteer-text42">✔</span>
            <span className="becomeavolunteer-text43">   </span>
            <span className="becomeavolunteer-text44">
              Visibility on our website in volunteer reports section
            </span>
            <br></br>
            <br></br>
            <span className="becomeavolunteer-text47">✔</span>
            <span> get a reward or Certificate</span>
            <br></br>
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BECOMEAVOLUNTEER
