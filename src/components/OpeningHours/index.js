import React from 'react'
import { OpenContainer, 
        OpenWrapper, 
        OpenRow, 
        Column1, 
        Column2, 
        TextWrapper, 
        ImgWrap, 
        Img, 
        TopLine,
        Heading, 
        Subtitle } from './OpeningElement'

       

const OpeningElement = ({
    lightBg, 
    id, 
    imgStart,
    topLine, 
    lightText,  
    darkText,
    headline, 
    description,
    description2,
    description3,
    description4,
    img,
    alt,
    primary,
    dark,
    dark2
}) => {
  return (
    <>
        <OpenContainer lightBg={lightBg} id={id}>
            <OpenWrapper>
                <OpenRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <Subtitle darkText={darkText}>{description2}</Subtitle>
                        <Subtitle darkText={darkText}>{description3}</Subtitle>
                        <Subtitle darkText={darkText}>{description4}</Subtitle>
                        
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                    </Column2>
                </OpenRow>
            </OpenWrapper>
        </OpenContainer>
    </>
  )
}

export default OpeningElement