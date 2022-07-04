import React from 'react';
import tools from  '../../images/tools.jpg'


import { Productscontainer, 
         ProductsH1, 
         ProductsWrapper, 
         ProductsCard, 
         ProductsIcon, 
         ProductsH2, 
         } from './ProductsElement';

const Products = () => {
  return (
    <Productscontainer id="products">
        <ProductsH1>Items For Sale</ProductsH1>
        <ProductsWrapper>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/FOwAAOSwOvZglkXj/s-l500.jpg"/>
                    <ProductsH2>BOLT ACTION</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/PpgAAOSwEcNgQffp/s-l500.jpg"/>
                    <ProductsH2>BLACK POWDER</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/YF8AAOSwt1ph0ZL~/s-l500.gif"/>
                    <ProductsH2>GRIPPING BEAST PLASTICS</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/IUsAAOSwIblh0dV3/s-l500.jpg"/>
                    <ProductsH2>PIKE & SHOTTE</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/zcEAAOSwNxNh0YCa/s-l500.jpg"/>
                    <ProductsH2>SPQR</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/RkIAAOSw2hRh0w5F/s-l500.jpg"/>
                    <ProductsH2>PROJECT Z</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/AFYAAOSwmBNh0YOn/s-l500.jpg"/>
                    <ProductsH2>HAIL CAESAR</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/K4wAAOSwIQdZKVOM/s-l500.jpg"/>
                    <ProductsH2>DR WHO </ProductsH2>
            </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src="https://i.ebayimg.com/images/g/C2sAAOSwxCBiJOm9/s-l500.jpg"/>
                        <ProductsH2>WARHAMMER 40,000</ProductsH2>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src="https://i.ebayimg.com/images/g/hpQAAOSwutBiGnj2/s-l500.jpg"/>
                        <ProductsH2>WARHAMMER AGE OF SIGMAR</ProductsH2>  
                </ProductsCard>
                <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/thumbs/images/g/U9oAAOSwLalh0fvK/s-l225.jpg"/>
                    <ProductsH2>PERRY MINIATURES</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/WO8AAOSwj4Zihqiz/s-l500.jpg"/>
                    <ProductsH2>RUBICON MODELS</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/fhwAAOSw8eZh0aAj/s-l500.jpg"/>
                    <ProductsH2>DEUS VULT</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/GgYAAOSwcr9geJSD/s-l500.jpg"/>
                    <ProductsH2>BEYOND THE GATES OF ANTARES</ProductsH2>
            </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={tools}/>
                        <ProductsH2>PAINT & TOOLS & ACESSORIES</ProductsH2>
            </ProductsCard>
        </ProductsWrapper>

    </Productscontainer>
  )
}

export default Products