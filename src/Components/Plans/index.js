import React from 'react'
import { PlansContainer, Header, Title, Subtitle, Content, Footer, Quantity, Value, Label, PlansButton } from './PlansElements';

const Plans = (props) => {
    return (
        <PlansContainer>
            <Header>
                <Title>{props.item}</Title>
                <Subtitle>Pledge ${props.donation} or more</Subtitle>
            </Header>
            <Content>
                {props.description}
            </Content>
            <Footer>
                <Quantity>
                    <Value>{props.left}</Value>
                    <Label>left</Label>
                </Quantity>
                <PlansButton>Select Reward</PlansButton>
            </Footer>
        </PlansContainer>
    )
}

export default Plans;
