import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';


const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
    &:hover{
      
      text-shadow: 0px 0px 20px  rgb(206, 166, 171);

    }
    
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 198px;
    object-fit: cover;
  }
  &:hover{
    -moz-transform: scale(0.95);
	  -webkit-transform: scale(0.95);
	  transform: scale(0.95);
    transition: width 0.5s ease 0s;
    transition: width .3s ease-in-out 0s,height .35s ease-in,margin .15s ease-in-out;
  }
  
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1
      
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);





export default Slider;