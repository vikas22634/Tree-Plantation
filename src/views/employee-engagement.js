import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component4 from '../components/component4'
import Footer from '../components/footer'
import PHOTOS1 from '../components/photos1'
import PHOTOS2 from '../components/photos2'
import PHOTOS3 from '../components/photos3'
import PHOTOS4 from '../components/photos4'
import PHOTOS5 from '../components/photos5'
import PHOTOS6 from '../components/photos6'
import './employee-engagement.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const EmployeeEngagement = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="employee-engagement-container">
      <Helmet>
        <title>employee-engagement - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="employee-engagement - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="employee-engagement-container1">
        <div className="employee-engagement-btn-group">
          <Link to="/" className="employee-engagement-navlink button">
            HOME
          </Link>
          <button className="employee-engagement-button button">/</button>
          <Link to="/plant-tree" className="employee-engagement-navlink1 button">
           GET INVOLVE
          </Link>
          <button className="employee-engagement-button1 button">/</button>
          <button className="employee-engagement-button2 button">EMPLOYEE ENGAGEMENT</button>
        </div>
      </div>
      <div className="employee-engagement-hero">
        <h1 className="employee-engagement-text">EMPLOYEE ENGAGEMENT</h1>
        <span className="employee-engagement-text01">
          GET YOUR EMPLOYEES ENGAGED AND THEIR HANDS IN THE DIRT!
        </span>
      </div>
      <div className="employee-engagement-banner">
        <h2 className="employee-engagement-text02">
          YOU ARE JUST ONE STEP AWAY
        </h2>
        <a
          href="https://www.facebook.com/treeplantation.org/"
          target="_blank"
          rel="noreferrer noopener"
          className="employee-engagement-link"
        >
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxmYWNlYm9va3xlbnwwfHx8fDE2ODI4ODM5NjM&amp;ixlib=rb-4.0.3&amp;w=200"
            className="employee-engagement-image1"
          />
        </a>
        <a
          href="https://www.instagram.com/treeplantation1/"
          target="_blank"
          rel="noreferrer noopener"
          className="employee-engagement-link1"
        >
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmYWNlYm9va3xlbnwwfHx8fDE2ODI4ODM5NjM&amp;ixlib=rb-4.0.3&amp;w=200"
            className="employee-engagement-image2"
          />
        </a>
        <a
          href="https://chat.whatsapp.com/DgyaU77dJkJ5X1ME1J00qn"
          target="_blank"
          rel="noreferrer noopener"
          className="employee-engagement-link2"
        >
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxmYWNlYm9va3xlbnwwfHx8fDE2ODI4ODM5Njc&amp;ixlib=rb-4.0.3&amp;w=200"
            className="employee-engagement-image3"
          />
        </a>
        <a
          href="https://twitter.com/TreePlantations"
          target="_blank"
          rel="noreferrer noopener"
          className="employee-engagement-link3"
        >
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmYWNlYm9va3xlbnwwfHx8fDE2ODI4ODM5NjM&amp;ixlib=rb-4.0.3&amp;w=200"
            className="employee-engagement-image4"
          />
        </a>
        <a
          href="https://www.youtube.com/@treeplantation6462"
          target="_blank"
          rel="noreferrer noopener"
          className="employee-engagement-link4"
        >
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxmYWNlYm9va3xlbnwwfHx8fDE2ODI4ODM5NjM&amp;ixlib=rb-4.0.3&amp;w=200"
            loading="eager"
            className="employee-engagement-image5"
          />
        </a>
      </div>
      <div className="employee-engagement-banner1">
        <div className="employee-engagement-container5">
          <h1 className="employee-engagement-text03">
            GET OUTSIDE &amp; GET YOUR HANDS IN THE DIRT
          </h1>
          <span className="employee-engagement-text04">
            <span className="employee-engagement-text05">
              LET US PLAN A TAILORED EMPLOYEE ENGAGEMENT EVENT FOR YOUR COMPANY!
            </span>
            <br className="employee-engagement-text06"></br>
            <br></br>
            <span>
              We can organize tree planting and restoration events exclusively
              for your employees in cities all around the world. These
              activities are an awesome way to connect with nature, give back to
              your local community, support healthy native habitats and build
              team morale!
            </span>
            <br className="employee-engagement-text09"></br>
            <br className="employee-engagement-text10"></br>
            <span className="employee-engagement-text11">
              WHAT YOU&apos;LL RECEIVE...
            </span>
            <br></br>
            <span>
              🌲Trees, seedlings and any plants that need to get in the ground
            </span>
            <br></br>
            <span>🌲</span>
            <span>All the tools and materials required for the activity</span>
            <br></br>
            <span>🌲</span>
            <span>Education and instructions from our planting partners</span>
            <br></br>
            <span>🌲</span>
            <span>Option to have a professional photographer for the day</span>
            <br></br>
            <span>🌲</span>
            <span>
              Option to receive One Tree Planted Reforestation t-shirts with
              your company&apos;s logo
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="https://e360.yale.edu/assets/site/Leh-Tree-Planting_Wikipedia-Small-2.jpg"
          className="employee-engagement-image6"
        />
      </div>
      <div className="employee-engagement-banner2">
        <h2 id="FILL IT" className="employee-engagement-text26">
          <span>START PLANING TODAY ! AND BECOME</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <div className="employee-engagement-btn-group1">
          <Link
            to="/become-a-volunteer"
            className="employee-engagement-navlink07 button"
          >
            VOLUNTEER
          </Link>
          <Link
            to="/become-a-businesss-partner"
            className="employee-engagement-navlink08 button"
          >
            BUSINESS PARTNER
          </Link>
        </div>
      </div>
      <div className="employee-engagement-gallery">
        <h2 className="employee-engagement-text30">PHOTOS FROM PAST EVENTS</h2>
      </div>
      <div className="employee-engagement-gallery1">
        <PHOTOS1 rootClassName="rootClassName"></PHOTOS1>
        <PHOTOS2></PHOTOS2>
        <PHOTOS3></PHOTOS3>
        <PHOTOS4 rootClassName="photos4-root-class-name"></PHOTOS4>
        <PHOTOS5></PHOTOS5>
        <PHOTOS6></PHOTOS6>
      </div>
      <div className="employee-engagement-stats">
        <div className="employee-engagement-stat">
          <h1 className="employee-engagement-text31">
            <span>7k</span>
            <span>+</span>
          </h1>
          <span className="employee-engagement-text34">Users</span>
        </div>
        <div className="employee-engagement-stat1">
          <h1 className="employee-engagement-text35">
            <span>3k</span>
            <span>+</span>
          </h1>
          <span className="employee-engagement-text38">Volunteers</span>
        </div>
        <div className="employee-engagement-stat2">
          <h1 className="employee-engagement-text39">369</h1>
          <span className="employee-engagement-text40">business Partners</span>
        </div>
        <div className="employee-engagement-stat3">
          <h1 className="employee-engagement-text41">
            <span>50k</span>
            <span>+</span>
          </h1>
          <span className="employee-engagement-text44">Tree Planted</span>
        </div>
      </div>
      <footer className="employee-engagement-footer">
        <div className="employee-engagement-container6">
          <div className="employee-engagement-logo">
            <Link to="/" className="employee-engagement-navlink09">
              <img
                alt="logo"
                src="/playground_assets/logo-200h.png"
                className="employee-engagement-image7"
              />
            </Link>
            <span className="employee-engagement-text45">
              <span className="employee-engagement-text46">S</span>
              <span>
                UPPORT REFORESTATION OF iNDIA’S RAINFORESTS ON THIS EARTH
                SEASON. YOUR DONATION WILL HELP TO OUR VISION !
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className="employee-engagement-links-container">
            <div className="employee-engagement-container7">
              <div className="employee-engagement-product-container">
                <span className="employee-engagement-text48">
                  TAX ID #43-0981273
                </span>
                <span className="employee-engagement-text49">
                  One Tree planted is a 501(c) tax-exempt organization and your
                  donation is tax-deductible within the guidelines of INDIAN law
                </span>
              </div>
              <div className="employee-engagement-company-container">
                <span className="employee-engagement-text50">Company</span>
                <Link to="/about-us" className="employee-engagement-navlink10">
                  About Us
                </Link>
                <span className="employee-engagement-text51">
                  Privacy Policy
                </span>
                <span className="employee-engagement-text52">
                  Volunteer Report 2023
                </span>
                <a
                  href="https://images-platform.99static.com/uwFxpJtHFabd0R9glURtRxym5fQ=/0x0:1594x1594/500x500/top/smart/99designs-contests-attachments/63/63059/attachment_63059708"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="employee-engagement-link5"
                >
                  Certificate Sample
                </a>
              </div>
            </div>
            <div className="employee-engagement-container8">
              <div className="employee-engagement-contact">
                <span className="employee-engagement-text53">Contact Us</span>
                <span className="employee-engagement-text54">
                  support.treeplantation@gmail.com
                </span>
                <a
                  href="tel:+91 8890414818"
                  className="employee-engagement-link6"
                >
                  +91 8890414818
                </a>
              </div>
              <div className="employee-engagement-socials">
                <span className="employee-engagement-text55">Follow Us</span>
                <div className="employee-engagement-icon-group">
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="employee-engagement-icon"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="employee-engagement-icon02"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="employee-engagement-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="employee-engagement-icon06"
                  >
                    <path d="M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.315-24.149-11.435-13.269-9.387-23.509-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.859 50.389 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.853 3.712 193.792 3.712 193.792 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="employee-engagement-icon08"
                  >
                    <path d="M810.667 298.667h-597.333c-47.104 0-85.333 38.229-85.333 85.333v384c0 47.104 38.229 85.333 85.333 85.333h597.333c47.104 0 85.333-38.229 85.333-85.333v-384c0-47.104-38.229-85.333-85.333-85.333zM397.483 610.816l68.352 59.733c13.013 11.349 29.483 16.981 46.165 16.981s33.152-5.675 46.165-16.981l68.352-59.733-1.579 1.579 155.563 155.563h-537.003l155.563-155.563-1.579-1.579zM213.333 737.835v-288.128l153.685 134.443-153.685 153.685zM656.981 584.149l153.685-134.443v288l-153.685-153.557zM810.667 384v8.96l-280.576 245.504c-9.685 8.448-26.496 8.448-36.181 0l-280.576-245.504v-8.96h597.333z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="employee-engagement-separator"></div>
        <span className="employee-engagement-text56">
          <span>
            © 2023
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="employee-engagement-text58">TREE PLANTATION</span>
          <span>, All Rights Reserved.</span>
        </span>
      </footer>
    </div>
  )
}

export default EmployeeEngagement
