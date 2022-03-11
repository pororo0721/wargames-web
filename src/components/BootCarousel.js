import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const BootCarousel = () => {
    return (
        <div>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/272720559_111063764815122_7650649713770568467_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=mfpZ0u-15dEAX-uk34P&_nc_ht=scontent-lcy1-1.xx&oh=00_AT8GTQ2FNZB7ySIGPbmhXJeQ_5lalJNk6WE_1wBJQy7rUA&oe=6230A4A6"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/272733103_111138418140990_6999952256556523732_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_ohc=OmqWLWEIYTIAX-XHDpz&_nc_ht=scontent-lcy1-1.xx&oh=00_AT-h0kT4bjZc_vJEQZ5jOunCCAY-FeH1RboezQKFPhQ7dw&oe=6230AB6C"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/273830568_118595187395313_1981791691595672630_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=eYLEMp1hi-QAX_teRhu&_nc_ht=scontent-lcy1-1.xx&oh=00_AT_Fwkdss2xj7-gea9q-Dt-VHTsFCrqK5OO2ZWeGoxM8MQ&oe=623151F1"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default BootCarousel;