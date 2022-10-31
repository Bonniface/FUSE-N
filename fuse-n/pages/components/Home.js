import React from 'react';
import  styled from 'styled-components';
import Section from './Section'
import Footer from './Footer'
function Home() {
    return ( 
      <Container>
          <Section  
          title = "Model S"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-s.jpg"
          LeftButtonText="Custom Order"
          RightButtonText="Existing Inventory"
          />
          <Section 
          title = "Model Y"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-y.jpg"
          LeftButtonText="Custom Order"
          RightButtonText="Existing Inventory"
          />
          <Section 
          title = "Model 3"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-3.jpg"
          LeftButtonText="Custom Order"
          RightButtonText="Existing Inventory"/>
          <Section 
          title = "Model X"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-x.jpg"
          LeftButtonText="Custom Order"
          RightButtonText="Existing Inventory"/>
          <Section 
          title = "Solar Panels"
          description = "Lowest Cost Solar Panels in America"
          backgroundImg = "solar-panel.jpg"
          LeftButtonText="Order Now"
          RightButtonText="Learn More"/>
          
          <Section 
          title = "Solar Roof"
          description = "Produce Clean Energy From Your Roof"
          backgroundImg = "solar-roof.jpg"
          LeftButtonText="Order Now"
          RightButtonText="Learn More"/>
          <Section 
          title = "Accessories"
          backgroundImg = "accessories.jpg"
          LeftButtonText="Shop Now"
          />
          
      </Container>
      
    );
  }


export default Home;

const Container = styled.div`
   heigt: 100vh;
`
