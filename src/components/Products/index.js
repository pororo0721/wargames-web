import React from 'react';



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
        <ProductsH1>Our Products</ProductsH1>
        <ProductsWrapper>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/FOwAAOSwOvZglkXj/s-l500.jpg"/>
                    <ProductsH2>Bolt Action</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/PpgAAOSwEcNgQffp/s-l500.jpg"/>
                    <ProductsH2>Black Powder</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src={Icon1}/>
                    <ProductsH2>Pike & shotte</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src={Icon1}/>
                    <ProductsH2>Hail Caesar</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/zcEAAOSwNxNh0YCa/s-l500.jpg"/>
                    <ProductsH2>SPQR</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/images/g/RkIAAOSw2hRh0w5F/s-l500.jpg"/>
                    <ProductsH2>Project Z</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src={Icon1}/>
                    <ProductsH2>Strontium Dog</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src={Icon1}/>
                    <ProductsH2>Judge Dread</ProductsH2>
            </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src="https://i.ebayimg.com/images/g/C2sAAOSwxCBiJOm9/s-l500.jpg"/>
                        <ProductsH2>Warhammer 40,000</ProductsH2>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon2}/>
                        <ProductsH2>Warhammer Age of sigmar</ProductsH2>  
                </ProductsCard>
                <ProductsCard>
                <ProductsIcon src="https://i.ebayimg.com/thumbs/images/g/U9oAAOSwLalh0fvK/s-l225.jpg"/>
                    <ProductsH2>Perry Miniatures</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src={Icon1}/>
                    <ProductsH2>Gripping Beast</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src={Icon1}/>
                    <ProductsH2>Deus Vult</ProductsH2>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src={Icon1}/>
                    <ProductsH2>Rendera Accessories</ProductsH2>
            </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon3}/>
                        <ProductsH2>Paints & Tools & Acessories</ProductsH2>
            </ProductsCard>
        </ProductsWrapper>

    </Productscontainer>
  )
}

export default Products