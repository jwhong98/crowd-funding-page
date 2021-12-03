import React from 'react'
import { DescriptionContainer, DescriptionWrapper, Title, Content } from './DescriptionCardElements';

const DescriptionCard = () => {
    return (
        <DescriptionContainer>
            <DescriptionWrapper>
                <Title>About this project</Title>
                <Content>The Mastercraft Bamboo Monitor Riser is a stylish platform that elevates your screen to a more comfortable viewing height.
                Placing your monitor at eye level has the potential to improve your posture and make you more comfortable white at work,
                helping you stay focused on the task at hand.</Content>
                <Content>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow 
                notepads, pens, and USB sticks to ve stored under the stand.</Content>
            </DescriptionWrapper>
        </DescriptionContainer>
    )
}

export default DescriptionCard;
