import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                 
                title="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"

             />
            <Section
                title="Model Y"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"
             /> 
            <Section
                title="Model 3"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"
             /> 
             <Section
                title="Model X"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"
             />
             <Section
                title="Lower cost solar panel in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="ORDER NOW"
                rightBtnText="LEARN MORE"
             />
             <Section
                title="Accessories"
                description="Order Online For Touchless Delivery"
                backgroundImg="accessories.jpg"
                leftBtnText="shop now"
                 
             />
        </Container>
    )
}

export default Home
const Container=styled.div`
    height: 100vh;

`
