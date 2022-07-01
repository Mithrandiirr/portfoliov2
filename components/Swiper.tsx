import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./swiperButton";
import useEmblaCarousel from "embla-carousel-react";
import styled from '@emotion/styled'

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
`
const Feedback = styled.span`
    font-size: 1.2rem;
    text-align: center;
    font-weight:300;
`
const Client = styled.div`
    position: relative;
    width: 100%;
    text-align-last: end;
    font-size: 1.5rem;
    right: 11px;
    svg {
    position: absolute;
    right: 0px;
    width: 117px;
    top: 25px;
    }
`
type EmblaProps = {
    slides: Array<number>,
}
const EmblaCarousel = ({ slides } :EmblaProps) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
         

            <div className="embla__slide" >
              <div className="embla__slide__inner">
              <FlexBox>
        <svg width="125" height="24" viewBox="0 0 125 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 0.781006L16.3206 7.28393L24.3882 8.53748L18.6819 13.8101L19.8473 21.0877L12.5 17.8434L5.15268 21.0877L6.31813 13.8101L0.611794 8.53748L8.6794 7.28393L12.5 0.781006Z" fill="#D0E015"/>
<path d="M37.5 0.781006L41.3206 7.28393L49.3882 8.53748L43.6819 13.8101L44.8473 21.0877L37.5 17.8434L30.1527 21.0877L31.3181 13.8101L25.6118 8.53748L33.6794 7.28393L37.5 0.781006Z" fill="#D0E015"/>
<path d="M62.5 0.781006L66.3206 7.28393L74.3882 8.53748L68.6819 13.8101L69.8473 21.0877L62.5 17.8434L55.1527 21.0877L56.3181 13.8101L50.6118 8.53748L58.6794 7.28393L62.5 0.781006Z" fill="#D0E015"/>
<path d="M87.5 0.781006L91.3206 7.28393L99.3882 8.53748L93.6819 13.8101L94.8473 21.0877L87.5 17.8434L80.1527 21.0877L81.3181 13.8101L75.6118 8.53748L83.6794 7.28393L87.5 0.781006Z" fill="#D0E015"/>
<path d="M112.5 0.781006L116.321 7.28393L124.388 8.53748L118.682 13.8101L119.847 21.0877L112.5 17.8434L105.153 21.0877L106.318 13.8101L100.612 8.53748L108.679 7.28393L112.5 0.781006Z" fill="#D0E015"/>
</svg>

        <Feedback>
        "I have to say I have never been so satisfied with a result before, I sent the Figma design and in less than a day I received the exact template in HTML and CSS using clean and quality code. I would hire again."
        </Feedback>
        <Client>Rafat Kurdi
            
            <svg width="148" height="7" viewBox="0 0 148 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.7326 5.43493C5.75302 3.57363 9.62122 3.71171 14.0216 3.70001C34.8404 3.64464 55.66 3.70001 76.4788 3.70001C99.7162 3.70001 123.043 4.53419 146.165 1.96509" stroke="#D0E015" stroke-width="3" stroke-linecap="round"/>
</svg>
          
        </Client>
       

    </FlexBox>
              </div>
            </div>
            <div className="embla__slide" >
              <div className="embla__slide__inner">
              <FlexBox>
        <svg width="125" height="24" viewBox="0 0 125 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 0.781006L16.3206 7.28393L24.3882 8.53748L18.6819 13.8101L19.8473 21.0877L12.5 17.8434L5.15268 21.0877L6.31813 13.8101L0.611794 8.53748L8.6794 7.28393L12.5 0.781006Z" fill="#D0E015"/>
<path d="M37.5 0.781006L41.3206 7.28393L49.3882 8.53748L43.6819 13.8101L44.8473 21.0877L37.5 17.8434L30.1527 21.0877L31.3181 13.8101L25.6118 8.53748L33.6794 7.28393L37.5 0.781006Z" fill="#D0E015"/>
<path d="M62.5 0.781006L66.3206 7.28393L74.3882 8.53748L68.6819 13.8101L69.8473 21.0877L62.5 17.8434L55.1527 21.0877L56.3181 13.8101L50.6118 8.53748L58.6794 7.28393L62.5 0.781006Z" fill="#D0E015"/>
<path d="M87.5 0.781006L91.3206 7.28393L99.3882 8.53748L93.6819 13.8101L94.8473 21.0877L87.5 17.8434L80.1527 21.0877L81.3181 13.8101L75.6118 8.53748L83.6794 7.28393L87.5 0.781006Z" fill="#D0E015"/>
<path d="M112.5 0.781006L116.321 7.28393L124.388 8.53748L118.682 13.8101L119.847 21.0877L112.5 17.8434L105.153 21.0877L106.318 13.8101L100.612 8.53748L108.679 7.28393L112.5 0.781006Z" fill="#D0E015"/>
</svg>

        <Feedback>
        "Yaakoubi was great with communication, price, and completing the job in a timely manner. Thank you!!"
        </Feedback>
        <Client>Natalia
            
            <svg width="148" height="7" viewBox="0 0 148 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.7326 5.43493C5.75302 3.57363 9.62122 3.71171 14.0216 3.70001C34.8404 3.64464 55.66 3.70001 76.4788 3.70001C99.7162 3.70001 123.043 4.53419 146.165 1.96509" stroke="#D0E015" stroke-width="3" stroke-linecap="round"/>
</svg>
          
        </Client>
       

    </FlexBox>
              </div>
            </div>
            <div className="embla__slide" >
              <div className="embla__slide__inner">
              <FlexBox>
        <svg width="125" height="24" viewBox="0 0 125 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 0.781006L16.3206 7.28393L24.3882 8.53748L18.6819 13.8101L19.8473 21.0877L12.5 17.8434L5.15268 21.0877L6.31813 13.8101L0.611794 8.53748L8.6794 7.28393L12.5 0.781006Z" fill="#D0E015"/>
<path d="M37.5 0.781006L41.3206 7.28393L49.3882 8.53748L43.6819 13.8101L44.8473 21.0877L37.5 17.8434L30.1527 21.0877L31.3181 13.8101L25.6118 8.53748L33.6794 7.28393L37.5 0.781006Z" fill="#D0E015"/>
<path d="M62.5 0.781006L66.3206 7.28393L74.3882 8.53748L68.6819 13.8101L69.8473 21.0877L62.5 17.8434L55.1527 21.0877L56.3181 13.8101L50.6118 8.53748L58.6794 7.28393L62.5 0.781006Z" fill="#D0E015"/>
<path d="M87.5 0.781006L91.3206 7.28393L99.3882 8.53748L93.6819 13.8101L94.8473 21.0877L87.5 17.8434L80.1527 21.0877L81.3181 13.8101L75.6118 8.53748L83.6794 7.28393L87.5 0.781006Z" fill="#D0E015"/>
<path d="M112.5 0.781006L116.321 7.28393L124.388 8.53748L118.682 13.8101L119.847 21.0877L112.5 17.8434L105.153 21.0877L106.318 13.8101L100.612 8.53748L108.679 7.28393L112.5 0.781006Z" fill="#D0E015"/>
</svg>

        <Feedback>
        "Great developer to work with and very knowledgeable"
        </Feedback>
        <Client>Logan Gray
            
            <svg width="148" height="7" viewBox="0 0 148 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.7326 5.43493C5.75302 3.57363 9.62122 3.71171 14.0216 3.70001C34.8404 3.64464 55.66 3.70001 76.4788 3.70001C99.7162 3.70001 123.043 4.53419 146.165 1.96509" stroke="#D0E015" stroke-width="3" stroke-linecap="round"/>
</svg>
          
        </Client>
       

    </FlexBox>
              </div>
            </div>
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;