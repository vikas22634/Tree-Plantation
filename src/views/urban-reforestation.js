import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component4 from '../components/component4'
import Footer from '../components/footer'

import './urban-reforestation.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const UrbanReforestation = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="urban-reforestation-container">
      <Helmet>
        <title>urban-reforestation - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="urban-reforestation - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="urban-reforestation-container1">
<div className="urban-reforestation-btn-group">
<Link to="/" className="urban-reforestation-navlink5 button">
  HOME
</Link>
<button className="urban-reforestation-button3 button">/</button>
<Link
  to="/get-involve"
  className="urban-reforestation-navlink6 button"
>
  GET INVOLVE
</Link>
<button className="urban-reforestation-button4 button">/</button>
<button className="urban-reforestation-button5 button">
  URBAN REFORESTATION
</button>
</div>
</div>
<div className="urban-reforestation-hero">
<h1 className="urban-reforestation-text">WHAT IS URBAN FORESTRY?</h1>
</div>
<div className="urban-reforestation-banner">
<div className="urban-reforestation-container05">
<h1 className="urban-reforestation-text01">
  Tree Plantation’s New Specialist Explains
</h1>
<span className="urban-reforestation-text02">
  <span>
    My name is Rishabh Rohila, and I am Tree Plantation’s Director. A
    bit of a hypothetical question here, but what came first:
    <span
      dangerouslySetInnerHTML={{
        __html: ' ',
      }}
    />
  </span>
  <span className="urban-reforestation-text04">
    the town or the tree?
  </span>
  <span>
    {' '}
    Even at it’s oldest, civilization as we know it began around 3,000
    BC. In contrast, the earliest trees date back to 400 million years
    ago. Not much of a contest, and that’s the point. How do we honor
    the living legacy of forests and the vital ecosystems they create
    within the context of our modern, 21st century communities?
  </span>
  <br className="urban-reforestation-text06"></br>
  <br className="urban-reforestation-text07"></br>
  <span>
    When we think about our towns and cities, we are blessed with
    opportunities for reimagining and redefining our relationships
    between local forests, our built environments, and ourselves. We
    need roads to get us to our jobs, hospitals for our health &amp;
    well-being, and affordable housing to sustain us. Coincidentally,
    trees can also be a source of job creation, wellness, and a means
    to create a home.
  </span>
  <br className="urban-reforestation-text09"></br>
  <br></br>
  <span>
    We don’t have to choose between urban communities and green urban
    spaces. We can have both.
  </span>
  <br className="urban-reforestation-text12"></br>
  <span>And that’s where I come in.</span>
  <br></br>
  <br></br>
  <br></br>
</span>
<img
  alt="image"
  src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/blog-headers--galleries-4x6-1633613432595.png?v=1633613436"
  loading="eager"
  className="urban-reforestation-image1"
/>
</div>
<div className="urban-reforestation-container06">
<h1 className="urban-reforestation-text17">
  What Is Urban Forestry?
</h1>
<span className="urban-reforestation-text18">
  <span>
    At its core, the term urban forests refers to the trees we live
    with - from individual street trees and urban greenspaces to shady
    school groves and suburban forests. Each one different in tree
    species and size, yet all linking together to form urban forests.
    They are powerhouses for providing ecosystem services such as air
    pollution removal, stormwater pollution capture, carbon
    sequestration, green infrastructure, and urban heat regulation,
    and as such are essential green infrastructure for any healthy,
    vibrant community.
  </span>
  <br></br>
  <br></br>
  <span>
    Urban forestry is the act of maintaining, protecting, and in One
    Tree Planted’s case - planting - urban forests. All within the
    backdrop of a rapidly changing urban landscape.
  </span>
  <br></br>
  <br></br>
  <span className="urban-reforestation-text25">
                         
    <span
      dangerouslySetInnerHTML={{
        __html: ' ',
      }}
    />
  </span>
  <span className="urban-reforestation-text26"> </span>
  <span className="urban-reforestation-text27">
    {' '}
    Why Is Urban Forestry Important?
  </span>
  <br className="urban-reforestation-text28"></br>
  <br></br>
  <span>
    More people than ever live in urban areas. By 2050, 68% of the
    world’s population - more than 6.5 billion people - will live in
    urban areas, including nearly 400 million people in the United
    States alone.
  </span>
  <br className="urban-reforestation-text31"></br>
  <br></br>
  <span>
    People in these areas need a livable environment. Over 90% of the
    world’s population live in communities where air quality levels do
    not meet World Health Organization standards. And it’s not just
    clean air they need, but cool air. The combination of hard
    surfaces radiating heat, tall buildings blocking the wind, and
    loss of trees create what’s known as the urban heat island effect.
    Without trees, our hot cities will continue to get hotter, less
    livable, and more dangerous, with urban heat waves already killing
    upwards of 1,300 people per year in the United States, and even
    more globally.
  </span>
  <br className="urban-reforestation-text34"></br>
  <br></br>
  <span>
    The climate is changing. Simply put, human-induced climate change
    is “widespread, rapid, and intensifying”. This July 2021 was the
    hottest month on record. We must act now by planting trees in the
    communities that need them most to prevent the worst impacts of
    climate change from endangering the lives of our most vulnerable
    populations.
  </span>
  <br className="urban-reforestation-text37"></br>
  <br></br>
  <span>
    Trees are part of the solution. Just one large, mature canopy tree
    can sequester (i.e. store in its wood) about 22 pounds of carbon
    dioxide annually. Also that year, that same tree will produce
    6,000 pounds of oxygen and absorb 1,000 gallons of rainwater, all
    while improving community aesthetics and increasing residential
    property values by up to 10%. Imagine what we can do with a whole
    forest...
  </span>
  <br className="urban-reforestation-text40"></br>
  <br></br>
  <span>
    Trees and forests - and the benefits they provide to us - will be
    more important than ever for growing populations that need healthy
    communities and a livable environment.
  </span>
  <br className="urban-reforestation-text43"></br>
  <br></br>
  <span>
    But our history of environmental and social justice in the United
    States has already placed some communities at a disadvantage. Data
    shows that low-income and communities of color have 41% and 33%
    less tree canopy, respectively, than whiter, more affluent
    communities.
  </span>
</span>
</div>
</div>
<div className="urban-reforestation-banner1">
<h1 className="urban-reforestation-text46">
SUBSCRIBE TO OUR NEWSLETTER
</h1>
<span className="urban-reforestation-text47">
GET GOOD NEWS, REFORESTATION UPDATES, PLANTING EVENT INFORMATION, AND
MORE DELIVERED RIGHT TO YOUR INBOX.
</span>
<form action= "https://formspree.io/f/xpzekvqe" method ="POST">
<div className="urban-reforestation-container07">
<input
  type="text"
  required
  placeholder="Enter Your Name"
  className="urban-reforestation-textinput input"
/>
<input
  type="email"
  id="email"
  name="email"
  required
  placeholder="Email Here..."
  autoComplete="email"
  className="urban-reforestation-textinput1 input"
/>
<button type="submit" className="urban-reforestation-button6 button">
  Subscribe
</button>
</div>
</form>

</div>
<footer className="urban-reforestation-footer">
<div className="urban-reforestation-container08">
<div className="urban-reforestation-logo">
  <Link to="/" className="urban-reforestation-navlink7">
    <img
      alt="logo"
      src="/playground_assets/logo-200h.png"
      className="urban-reforestation-image2"
    />
  </Link>
  <span className="urban-reforestation-text48">
    <span className="urban-reforestation-text49">S</span>
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
<div className="urban-reforestation-links-container">
  <div className="urban-reforestation-container09">
    <div className="urban-reforestation-product-container">
      <span className="urban-reforestation-text51">
        TAX ID #43-0981273
      </span>
      <span className="urban-reforestation-text52">
        One Tree planted is a 501(c) tax-exempt organization and your
        donation is tax-deductible within the guidelines of INDIAN law
      </span>
    </div>
    <div className="urban-reforestation-company-container">
      <span className="urban-reforestation-text53">Company</span>
      <Link to="/about-us" className="urban-reforestation-navlink8">
        About Us
      </Link>
      <span className="urban-reforestation-text54">
        Privacy Policy
      </span>
      <span className="urban-reforestation-text55">
        Volunteer Report 2023
      </span>
      <a
        href="https://images-platform.99static.com/uwFxpJtHFabd0R9glURtRxym5fQ=/0x0:1594x1594/500x500/top/smart/99designs-contests-attachments/63/63059/attachment_63059708"
        target="_blank"
        rel="noreferrer noopener"
        className="urban-reforestation-link"
      >
        Certificate Sample
      </a>
    </div>
  </div>
  <div className="urban-reforestation-container10">
    <div className="urban-reforestation-contact">
      <span className="urban-reforestation-text56">Contact Us</span>
      <span className="urban-reforestation-text57">
        support.treeplantation@gmail.com
      </span>
      <a
        href="tel:+91 8890414818"
        className="urban-reforestation-link1"
      >
        +91 8890414818
      </a>
    </div>
    <div className="urban-reforestation-socials">
      <span className="urban-reforestation-text58">Follow Us</span>
      <div className="urban-reforestation-icon-group">
        <svg
          viewBox="0 0 602.2582857142856 1024"
          className="urban-reforestation-icon"
        >
          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
        </svg>
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="urban-reforestation-icon02"
        >
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="urban-reforestation-icon04"
        >
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg
          viewBox="0 0 1024 1024"
          className="urban-reforestation-icon06"
        >
          <path d="M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.315-24.149-11.435-13.269-9.387-23.509-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.859 50.389 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.853 3.712 193.792 3.712 193.792 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z"></path>
        </svg>
        <svg
          viewBox="0 0 1024 1024"
          className="urban-reforestation-icon08"
        >
          <path d="M810.667 298.667h-597.333c-47.104 0-85.333 38.229-85.333 85.333v384c0 47.104 38.229 85.333 85.333 85.333h597.333c47.104 0 85.333-38.229 85.333-85.333v-384c0-47.104-38.229-85.333-85.333-85.333zM397.483 610.816l68.352 59.733c13.013 11.349 29.483 16.981 46.165 16.981s33.152-5.675 46.165-16.981l68.352-59.733-1.579 1.579 155.563 155.563h-537.003l155.563-155.563-1.579-1.579zM213.333 737.835v-288.128l153.685 134.443-153.685 153.685zM656.981 584.149l153.685-134.443v288l-153.685-153.557zM810.667 384v8.96l-280.576 245.504c-9.685 8.448-26.496 8.448-36.181 0l-280.576-245.504v-8.96h597.333z"></path>
        </svg>
      </div>
    </div>
  </div>
</div>
</div>
<div className="urban-reforestation-separator"></div>
<span className="urban-reforestation-text59">
<span>
  © 2023
  <span
    dangerouslySetInnerHTML={{
      __html: ' ',
    }}
  />
</span>
<span className="urban-reforestation-text61">TREE PLANTATION</span>
<span>, All Rights Reserved.</span>
</span>
</footer>
</div>
)
}

export default UrbanReforestation
