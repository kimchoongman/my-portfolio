import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <StyledIntro>
      <section className='intro-bg'>
        <div className='intro-box'>
          <div className='intro-title'>
            김충만 <br /> 프론트엔드 개발자{" "}
          </div>
        </div>
      </section>
    </StyledIntro>
  );
};

const StyledIntro = styled.section`
  width: 100%;

  .intro-bg {
    width: 100%;
    height: 100vh;
    position: relative;
    background: url(/images/bg.jpg);
    background-size: cover;
    z-index: -1;

    ::before {
      content: "";
      position: absolute;
      background-color: #000;
      opacity: 0.5;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: inherit;
    }
  }

  .intro-box {
    width: 100%;
    height: inherit;
    max-width: 71.25rem;
    margin: 0 auto;
    padding: calc(4rem + 4.5rem) 2rem 4rem;
    text-align: center;
    color: #fff;
    line-height: 1.5;

    .intro-title {
      font-family: "Black Han Sans", sans-serif;
      font-size: 4rem;
    }
  }
`;

export default Intro;
