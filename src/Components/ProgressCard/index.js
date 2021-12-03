import React from 'react'
import { ProgressContainer, ProgressWrapper, ProgressStats, StatsValue, StatsLabel } from './ProgressCardElements';

const ProgressCard = () => {
    return (
        <ProgressContainer>
            <ProgressWrapper>
                <ProgressStats>
                    <StatsValue>$89,914</StatsValue>
                    <StatsLabel>of $100,000 backed</StatsLabel>
                </ProgressStats>
                <ProgressStats>
                    <StatsValue>5,007</StatsValue>
                    <StatsLabel>total backers</StatsLabel>
                </ProgressStats>
                <ProgressStats>
                    <StatsValue>56</StatsValue>
                    <StatsLabel>days left</StatsLabel>
                </ProgressStats>
            </ProgressWrapper>
        </ProgressContainer>
    )
}

export default ProgressCard;
