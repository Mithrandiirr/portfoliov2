import React from 'react'
import styled from '@emotion/styled'
import EmblaCarousel from './Swiper';

const SwiperSection = styled.div`
    margin: 4rem 6rem;
     @media screen and (max-width:575px) {
        margin:4rem 4rem;
          }
          @media screen and (max-width:440px) {
        margin:4rem 1rem;
          }
`
const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Carousel() {
  return (
    <SwiperSection className='mt-[2rem]'>
       <h1 className="text-[50px] ">What Clients Say<span className="text-[#D0E015]">.</span></h1>
        <EmblaCarousel slides={slides} />
    </SwiperSection>
  )
}

export default Carousel