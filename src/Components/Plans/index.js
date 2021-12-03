import React from 'react'
import { PlansContainer, Header, Title, Subtitle, Content, Footer, Quantity, Value, Label, PlansButton } from './PlansElements';

const Plans = () => {
    return (
        <PlansContainer>
            <Header>
                <Title>Bamboo Stand</Title>
                <Subtitle>Pledge $25 or more</Subtitle>
            </Header>
            <Content>
                You get an ergonomic stand made of natrual bamboo. You've helpe dud launch our promotional campaign, 
                and you'll be added to a special Backer member list.
            </Content>
            <Footer>
                <Quantity>
                    <Value>101</Value>
                    <Label>left</Label>
                </Quantity>
                <PlansButton>Select Reward</PlansButton>
            </Footer>
        </PlansContainer>
    )
}

export default Plans;
