import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './why-tree.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const WhyTree = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="why-tree-container">
      <Helmet>
        <title>why-tree - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="why-tree - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="why-tree-container1">
        <div className="why-tree-btn-group">
          <Link to="/" className="why-tree-navlink button">
            HOME
          </Link>
          <button className="why-tree-button button">/</button>
          <button className="why-tree-button1 button">LEARN</button>
        </div>
      </div>
      <div className="why-tree-hero">
        <h1 className="why-tree-text">WHY TREES ?</h1>
        <span className="why-tree-text01">
          THE BENEFITS OF PLANTING TREES FOR OUR PLANET
        </span>
      </div>
      <div className="why-tree-gallery">
        <h1 className="why-tree-text02">
          WHY ARE TREES IMPORTANT TO THE ENVIRONMENT?
        </h1>
        <span className="why-tree-text03">
          <span className="why-tree-text04">
            Trees help
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="why-tree-text05">clean the air we breathe</span>
          <span className="why-tree-text06">
            , filter the water we drink, and provide habitat to over 80% of the
            world&apos;s terrestrial biodiversity.
          </span>
          <br className="why-tree-text07"></br>
          <span className="why-tree-text08">
            Forests provide jobs to over 1.6 billion people, absorb harmful
            carbon from the atmosphere, and are key ingredients in 25% of all
            medicines. Have you ever taken an Aspirin? It comes from the bark of
            a tree!
          </span>
          <br className="why-tree-text09"></br>
          <br className="why-tree-text10"></br>
          <span className="why-tree-text11">
            Here are the five pillars that explain why trees are vital -
          </span>
        </span>
        <div className="why-tree-banner">
          <div className="why-tree-container2">
            <h1 className="why-tree-text12">1. AIR</h1>
            <span className="why-tree-text13">
              Trees help to clean the air we breathe. Through their leaves and
              bark, they absorb harmful pollutants and release clean oxygen for
              us to breathe. In urban environments, trees absorb pollutant gases
              like nitrogen oxides, ozone, and carbon monoxide, and sweep up
              particles like dust and smoke. Increasing levels of carbon dioxide
              caused by deforestation and fossil fuel combustion trap heat in
              the atmosphere. Healthy, strong trees act as carbon sinks, offset
              carbon and reducing the effects of climate change.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1597217270167-2fdaeb90b7ae?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxhaXJ8ZW58MHx8fHwxNjgyMjk0MjM3&amp;ixlib=rb-4.0.3&amp;w=300"
            loading="eager"
            className="why-tree-image"
          />
        </div>
        <div className="why-tree-banner1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1575839650725-902d2ed700ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxXQVRFUiUyME9OJTIwTEVBVkV8ZW58MHx8fHwxNjgyMzI3MDIw&amp;ixlib=rb-4.0.3&amp;w=300"
            loading="eager"
            className="why-tree-image1"
          />
          <div className="why-tree-container3">
            <h1 className="why-tree-text14">2. WATER</h1>
            <span className="why-tree-text15">
              Trees play a key role in capturing rainwater and reducing the risk
              of natural disasters like floods and landslides. Their intricate
              root systems act like filters, removing pollutants and slowing
              down the water’s absorption into the soil. This process prevents
              harmful waterslide erosion and reduces the risk of over-saturation
              and flooding. According to the UN Food and Agriculture
              Association, a mature evergreen tree can intercept more than
              15,000 litres of water every year.
            </span>
          </div>
        </div>
        <div className="why-tree-banner2">
          <div className="why-tree-container4">
            <h1 className="why-tree-text16">3. BIODIVERSITY</h1>
            <span className="why-tree-text17">
              A single tree can be home to hundreds of species of insect, fungi,
              moss, mammals, and plants. Depending on the kind of food and
              shelter they need, different forest animals require different
              types of habitat. Without trees, forest creatures would have
              nowhere to call home.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1559597083-917ff50e4b20?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fEJJT0RJVkVSU0lUWXxlbnwwfHx8fDE2ODIzMjcwNDc&amp;ixlib=rb-4.0.3&amp;w=300"
            loading="eager"
            className="why-tree-image2"
          />
        </div>
        <div className="why-tree-container5">
          <div className="why-tree-container6">
            <span className="why-tree-text18">
              PLANT A TREE AND GET  CERTIFICATE
            </span>
            <Link
              to="/plant-tree"
              id="PLANT_A_TREE"
              className="why-tree-navlink1 button"
            >
              PLANT A TREE
            </Link>
          </div>
          <a
            href="https://images-platform.99static.com/uwFxpJtHFabd0R9glURtRxym5fQ=/0x0:1594x1594/500x500/top/smart/99designs-contests-attachments/63/63059/attachment_63059708"
            target="_blank"
            rel="noreferrer noopener"
            className="why-tree-link"
          >
            <img
              alt="image"
              src="https://images-platform.99static.com/uwFxpJtHFabd0R9glURtRxym5fQ=/0x0:1594x1594/500x500/top/smart/99designs-contests-attachments/63/63059/attachment_63059708"
              loading="eager"
              className="why-tree-image3"
            />
          </a>
        </div>
        <div className="why-tree-banner3">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U09DSUFMJTIwSU1QQUNUfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=60"
            loading="eager"
            className="why-tree-image4"
          />
          <div className="why-tree-container7">
            <h1 className="why-tree-text19">4. SOCIAL IMPACT</h1>
            <span className="why-tree-text20">
              From arborists to loggers and researchers, the job opportunities
              provided by the forestry industry are endless. We don’t just rely
              on trees for work, though. Sustainable tree farming provides
              timber to build homes and shelters, and wood to burn for cooking
              and heating. Food-producing trees provide fruit, nuts, berries,
              and leaves for consumption by both humans and animals, and pack a
              powerful nutritional punch.
            </span>
          </div>
        </div>
        <div className="why-tree-banner4">
          <div className="why-tree-container8">
            <h1 className="why-tree-text21">5. HEALTH</h1>
            <span className="why-tree-text22">
              Trees help to clean the air we breathe. Through their leaves and
              bark, they absorb harmful pollutants and release clean oxygen for
              us to breathe. In urban environments, trees absorb pollutant gases
              like nitrogen oxides, ozone, and carbon monoxide, and sweep up
              particles like dust and smoke. Increasing levels of carbon dioxide
              caused by deforestation and fossil fuel combustion trap heat in
              the atmosphere. Healthy, strong trees act as carbon sinks, offset
              carbon and reducing the effects of climate change.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SEVBTFRIfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=60"
            loading="eager"
            className="why-tree-image5"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default WhyTree
