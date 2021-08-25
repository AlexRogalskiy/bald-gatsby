import styled from 'styled-components';

const LabelPill = styled.li`
  font-size: 1.2rem;
  padding: 0.4rem 1rem;
  background: var(--cyan50);
  color: var(--cyan800);
  border: 1px solid var(--cyan200);
  margin: 0.3rem 0.4rem;
  border-radius: 2rem;
  transition: transform 0.2s;
`;

const Footer = styled.footer`
  padding: 5px;
  z-index: 90;
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 1.2rem;
  text-align: right;
  box-sizing: border-box;
  cursor: crosshair;
  opacity: 0.3;
  background-color: #fff;
  color: var(--gray800);
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

type PostHeroImgProps = {
  headerImg: string;
  headerTextColor?: string;
  headerBreadcrumbBg?: string;
  headerShadow?: string;
};
const PostHeroImgSection = styled.section<PostHeroImgProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.headerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 3rem 1.5rem 0;
  margin-bottom: 3rem;
  a {
    text-decoration: none;
    flex: 0;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    color: ${(props) =>
      props.headerTextColor ? props.headerTextColor : '#FFF'};
    background: ${(props) =>
      props.headerBreadcrumbBg ? props.headerBreadcrumbBg : 'none'};
    text-shadow: ${(props) =>
      props.headerShadow ? '0 1px 3px rgba(0,0,0,.4)' : ''};
  }
  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    flex: 0;
    line-height: 1.3;
    max-width: 90rem;
    color: ${(props) =>
      props.headerTextColor ? props.headerTextColor : '#FFF'};
    text-shadow: ${(props) =>
      props.headerShadow ? '0 2px 6px rgba(0,0,0,.4)' : ''};
  }
  time {
    padding-bottom: 30rem;
    font-size: 1.5rem;
    color: ${(props) =>
      props.headerTextColor ? props.headerTextColor : '#FFF'};
  }
`;
const BlogEntry = styled.article`
  display: flex;
  flex-wrap: wrap;
  max-width: 90rem;
  margin: 0 auto;
`;

const PostContentArea = styled.section`
  max-width: 100%;
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  --subheading-width: 15rem;
  .portfolioDetail {
    display: flex;
    margin-bottom: 1.5rem;
    flex-direction: column;
    code {
      font-size: 0.75em;
      padding: 0.2em 0.4em;
    }
    h3 {
      margin-top: 0;
      margin-bottom: 0.5em;
      &::after {
        display: inline;
        content: ':';
      }
    }
    ul {
      margin-top: 0;
      margin-bottom: 0;
      justify-content: flex-start;
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      // padding: 0 0 0 1.5em;
      border-left: 3px solid #ddd;
      li {
        margin-left: 1.5em;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
    li {
      margin-bottom: 1rem;
    }
    @media screen and (min-width: 600px) {
      flex-direction: row;
    }
  }
  h3 {
    margin-top: 1.5rem;
    color: var(--cyan800);
    font-weight: 600;
    margin-bottom: 0.75em;
    font-size: 2.1rem;
    line-height: 1.6;
  }
  a {
    color: inherit;
    transition: color 0.2s, background-color 0.2s;
    text-decoration-color: var(--yellow400);
    &:hover {
      color: var(--red600);
      text-decoration-color: var(--yellow600);
    }
  }
  p {
    font-size: 1.7rem;
    line-height: 1.56;
    color: var(--gray700);
    margin-top: 0;
    margin-bottom: 1.6rem;

    &.excerpt {
      font-size: 2.1rem;
      line-height: 1.4;
      color: var(--coolGray400);
      margin-top: 2em;
      margin-bottom: 2em;
    }
  }
  hr {
    margin: 5rem auto;
    width: 10rem;
    border: none;
    border-top: 2px solid #ddd;
    &::after {
      content: 'creatives';
      text-align: center;
      display: block;
      padding: 0.5rem;
      font-size: 1.4rem;
      color: #333;
      border-bottom: 2px solid #ddd;
    }
  }
  code {
    background: var(--red50);
    font-size: 0.65em;
    color: var(--red800);
    border-radius: 0.5rem;
    padding: 0.1em 0.6em;
    border: 1px solid var(--red200);
    box-sizing: border-box;
  }
  img {
    margin: auto;
    display: block;
    max-width: 100%;
  }

  blockquote {
    display: none;
    float: right;
    vertical-align: text-top;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border: none;
    letter-spacing: -0.03em;
    color: var(--coolGray500);
    font-weight: 300;
    border-left: var(--coolGray100) 5px solid;

    &.ql {
      float: left;
    }

    &.qr {
      float: right;
    }
  }

  img + em,
  span.gatsby-resp-image-wrapper + em,
  div.emb-video + p em {
    text-align: center;
    display: block;
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 0.7em;
  }
  ul.post-tags {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }
  ul,
  ol {
    font-size: 1.5rem;
    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }
  h3 {
    flex: 0;
    text-transform: capitalize;
    @media screen and (min-width: 600px) {
      flex: 0 0 var(--subheading-width);
    }
  }
  h6 {
    @media screen and (min-width: 900px) {
      margin-left: 0;
      margin-right: 0;
      padding-left: var(--subheading-width);
      font-size: 2.4rem;
    }
    max-width: 80rem;
    letter-spacing: normal;
    font-family: Georgia, serif;
    font-style: italic;
    font-size: 2.2rem;
    line-height: 1.5;
    margin: 2rem auto;
    margin-top: 4rem;
    margin-bottom: 3rem;
    font-weight: 200;
    color: var(--coolGray400);
    em,
    a {
      font-style: normal;
    }
  }

  .simple-button {
    color: #fff;
    padding: 1.3rem 2rem;
    font-size: 1.3rem;
    border: none;
    border-radius: 2rem;
    font-family: inherit;
    margin-right: 1rem;
    font-weight: 700;
    width: 100%;
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-0.2rem);
    }
  }
  .emb-video {
    height: 0;
    padding-top: 25px;
    padding-bottom: 67.5%;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;

    embed,
    iframe,
    object,
    video {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
  div.small-gif img {
    max-width: 400px;
  }
  div.img-border img {
    border: 1px solid #ddd;
  }

  @media screen and (min-width: 600px) {
    p {
      font-size: 1.8rem;
      margin-bottom: 2rem;

      &.excerpt {
        font-size: 2.7rem;
        line-height: 1.5;
      }
    }

    blockquote {
      display: block;
      width: 30%;
      font-size: 2.7rem;
      line-height: 1.5;
      padding-left: 4rem;

      &.qr {
        margin-left: 5rem;
      }

      &.ql {
        margin-left: 0rem;
        padding-right: 4rem;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    blockquote {
      display: block;
      width: 30%;

      &.qr {
        margin-left: 7rem;
      }

      &.ql {
        margin-left: -4.5rem;
      }
    }
  }
`;
const PageHeading = styled.h1`
  font-weight: 400;
  color: var(--gray700);
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin: 3rem 0 2rem;
`;

const PostNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 8rem;
  margin-bottom: 8rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--coolGray600);
    border-radius: 1rem;
    width: 100%;
    padding: 1rem 2rem;
    background-color: var(--coolGray50);
    border: var(--coolGray400) 1px solid;
    margin: 0rem 0 1.5rem 0;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-2px);
      color: var(--cyan700);
      background-color: var(--cyan50);
    }
    &.previous {
      padding-left: 1.5rem;
      text-align: left;
      margin-right: auto;

      &::before {
        display: flex;
        align-items: center;
        font-family: Helvetica, Arial, sans-serif;
        content: '\\2190 ';
        margin-right: 1rem;
        height: 100%;
      }
    }

    &.next {
      padding-right: 1.5rem;
      text-align: right;
      justify-content: flex-end;
      margin-left: auto;

      &::after {
        display: flex;
        align-items: center;
        font-family: Helvetica, Arial, sans-serif;
        content: '\\2192';
        margin-left: 1rem;
        text-align: right;
        height: 100%;
      }
    }

    @media screen and (min-width: 600px) {
      width: auto;
      max-width: 40%;
      text-align: center;
    }
    @media screen and (min-width: 1000px) {
      max-width: 33%;
    }
  }
`;

export {
  LabelPill,
  Footer,
  PostHeroImgSection,
  PageHeading,
  PostContentArea,
  BlogEntry,
  PostNav,
};
