import React from 'react';
import styled from 'styled-components';

const SpotifyTtile = styled.h3`
  margin-bottom: 1rem;
`;

const SpotifyButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10% 0;

  text-align: center;
`;

const SpotifyButton = styled.button`
  display: inline-block;
  padding: 1rem;

  background-color: var(--colour-black);
  border: none;

  font-family: var(--font-primary);

  text-align: center;
  text-decoration: none;
  color: var(--colour-white);

  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

function ArtistFooter(props) {
  const { name, url } = props;

  return (
    <SpotifyButtonContainer>
      <div>
        <SpotifyTtile>
          Luckily, there is more from {name}. <br />
          Check out their full discography.
        </SpotifyTtile>
        <SpotifyButton as="a" href={url}>
          More from {name}
        </SpotifyButton>
      </div>
    </SpotifyButtonContainer>
  );
}

export default ArtistFooter;
