import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArroForward, ArroRight } from './HeroElement'

const HeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1> Historical and Warhammer</HeroH1>
                <HeroP>
                Selling historical and Warhammer figures from 1000BC to 40,000AD, 
                plus paint, tools and accessories. 
                Other scales are available!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get to know {hover ? <ArroForward /> : <ArroRight />}
                    </Button>
                </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection