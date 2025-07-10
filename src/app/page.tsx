"use client"
import { useEffect } from "react"
import React from 'react'
import Home from '../../components/Home/Home'
import Nav from '../../components/Home/nav'
import Places from '../../components/Home/Places'
import Text from '../../components/Home/Text'
import HotelGrid from '../../components/Home/Hotel'
import Htext from '../../components/Home/Htext'
import Hchoose from '../../components/Home/Hchoose'
import CustomerReview from '../../components/Home/Review'
import Nt from '../../components/Home/Nt'
import TravelBlogGrid from '../../components/Home/News'
import SubscribeForm from '../../components/Home/Email'
import Footer from '../../components/Home/Footer'
import ScrollToTop from '../../components/Home/Scrool'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      anchorPlacement: 'top-bottom', // Defines which position of the element should be animated
    });
  }, []);

  return (
    <div>
      <Nav />
      <Home />
      <Text />
      <Places />
      <Htext />
      <HotelGrid />
      <Hchoose />
      <CustomerReview />
      <Nt />
      <TravelBlogGrid />
      <SubscribeForm />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default HomePage