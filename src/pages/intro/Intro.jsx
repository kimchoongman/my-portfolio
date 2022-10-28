import React from "react";
import styled from "styled-components";
import { BsChevronDoubleDown } from "react-icons/bs";

const Intro = () => {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledIntro>
      <section className='intro-bg'>
        <div className='intro-box'>
          <div className='intro-title'>
            김충만 <br /> 프론트엔드 개발자
          </div>
          <hr />
          <div className='greeting'>
            안녕하세요!
            <br />
            사람들이 사랑하는 것이 무엇인지 늘 궁금한
            <br />
            <span className='font-green'>꿈나무 개발자</span>입니다.
          </div>
          <div className='more' onClick={handleScroll}>
            더 알아보기 <BsChevronDoubleDown className='more-icon' />
          </div>
        </div>
      </section>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
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
    padding: 9.5rem 2rem 4rem;
    text-align: center;

    .intro-title {
      color: #fff;
      line-height: 1.5;
      font-family: "Black Han Sans", sans-serif;
      font-size: 4rem;
    }

    hr {
      width: 10%;
      height: 0;
      border: none;
      border-top: 0.2rem solid #f4623a;
    }

    .greeting {
      margin-top: 1.75rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: hsla(0, 0%, 100%, 0.8);
      line-height: 1.5;

      .font-green {
        color: #007251;
      }
    }

    .more {
      display: inline-block;
      margin-top: 2rem;
      padding: 0.75rem 1.75rem;
      border: none;
      border-radius: 10rem;
      background-color: #f4623a;
      text-decoration: none;
      color: #fff;
      line-height: 1.5;
      cursor: pointer;

      .more-icon {
        vertical-align: middle;
      }
    }
  }
`;

export default Intro;
