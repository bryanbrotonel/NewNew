import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import formatDate from '../../../api/FormatDate';

const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  text-decoration: none;
  color: initial;

  @media (min-width: 768px) {
    flex-direction: ${(props) => props.theme.direction};
  }
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  flex-basis: ${(props) => props.theme.basis};
`;

const ImageWrapper = styled.div`
  height: 250px;
  width: 100%;

  overflow: hidden;

  @media (min-width: 768px) {
    height: ${(props) => props.theme.imageHeight};
    width: ${(props) => props.theme.imageWidth};
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;

  transition: ease-out 0.3s;

  &:hover {
    transform: scale(1.025);
    transition: ease-out 0.3s;
  }
`;

const ContentWraper = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
`;

const Content = styled.div`
  color: var(--colour-darkGrey);

  p {
    font-size: var(--text-md);
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    letter-spacing: 0;
    text-overflow: ellipsis;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
`;

const MetaData = styled.span`
  display: inline-block;
  font-family: var(--font-primary);
`;

const ProfileLink = styled.span`
  display: inline-block;

  font-family: var(--font-secondary);
  font-size: inherit;
  font-weight: bold;
  color: var(--colour-black);
  margin: 1rem 0;

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const themeDefault = {
  imageHeight: '250px',
  imageWidth: '400px',
  direction: 'row',
  basis: '0',
};

const themePrimary = {
  imageHeight: '400px',
  imageWidth: 'auto',
  direction: 'column',
  basis: '50%',
};

const themeSecondary = {
  imageHeight: '100%',
  imageWidth: 'auto',
  direction: 'row',
  basis: '50%',
};

function PostFeature(props) {
  const {
    post: { title, subtitle, date, author, link, artists },
    theme,
  } = props;

  const featuredArtist = artists[0];
  const artistImage = featuredArtist.image.url;

  // Format date
  var dateFormatted = formatDate(date);

  var currentTheme = themeDefault;

  if (theme != null) {
    switch (theme) {
      case 'primary':
        currentTheme = themePrimary;
        break;
      case 'secondary':
        currentTheme = themeSecondary;
        break;
      default:
        break;
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Container as={NavLink} to={`blog/${link}`}>
        <ImageContainer>
          <ImageWrapper>
            <PostImage
              src={artistImage}
              alt={`${title} - Image`}
              loading="lazy"
            />
          </ImageWrapper>
        </ImageContainer>
        <ContentWraper>
          <Title>{title}</Title>
          <MetaData>
            {dateFormatted}&ensp;<span>&#8226;</span>&ensp;{author}
          </MetaData>
          <Content>
            <p>{subtitle}</p>
          </Content>
          <ProfileLink>Read More</ProfileLink>
        </ContentWraper>
      </Container>
    </ThemeProvider>
  );
}

export default PostFeature;
