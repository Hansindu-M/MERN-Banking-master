import React from 'react'
import ReactLoading from 'react-loading';
import styled from 'styled-components';

export default function Loader() {
  return (
    <LoaderWrapper className="loading-animation">
      <ReactLoading color="#E4D734" type="spin" width={64} height={64} delay={100} />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
.loading-animation {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
}
`;
