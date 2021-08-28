import React from 'react';
import Button from '../../components/Button';
import { StyledHeroSection, StyledHeading, StyledA } from './HomePage.styles';
import HeatMap from '../../assets/Heatmap.svg';

const HomePage = () => (
  <StyledHeroSection>
    <StyledHeading>No reactions to your reddit posts?</StyledHeading>
    <p>Great timing, great results! Find the best time to post on your subreddit</p>
    <Button text="Show me the best time" />
    <StyledA href="/">r/javascript</StyledA>
    <img src={HeatMap} alt="Heat Map" />
  </StyledHeroSection>
);

export default HomePage;
