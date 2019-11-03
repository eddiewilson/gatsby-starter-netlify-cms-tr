import Styled from "styled-components";
import MEDIA from "../../utils/mediaTemplates";

export const Nav = Styled.nav`
ul {
    padding: 0;
    list-style: none;
    display: none;
  }
  li {
    list-style: none;
  }
  nav {
    ${MEDIA.PHONE`
    position: fixed;
    right: 0rem;
    top: 0rem;
    width: 100vw;
    opacity: 1;
    display: none;
    height: 50px;
    z-index: 3;
    transition all 0.2s ease-in-out 0s;
    &:hover{
        cursor: pointer;
    }
    `};
    &.-active {
      opacity: 1;
      left: 0rem;
      right: 0rem;
      height: 100vh;
      background-color: #339999;
      ul {
        transition all 0.2s ease-in-out 0s;
        opacity: 1;
        height: 85vh;
      }
    }
    ul {
      opacity: 0;
      height: 0;
      padding: 2rem;
      height: 100%;
      display: flex;
      align-items: flex-end;
      ${MEDIA.PHONE`
      align-items: center;
      flex-direction: column;
    `};
      li {
          margin: 0.25rem auto;
        a {
          text-decoration: none;
          color: white;
          padding: 0.5rem 1rem;
          text-align: center;
          ${MEDIA.PHONE`
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 9px;`}
        }
      }
    }
  }
  button{
    position: fixed;
    z-index: 5;
    right: 1rem;
    top: 2rem;
    width: 50px;
    background-color: transparent;
    opacity: 1;
    padding: 0.25rem;
    border: none;
    height: 48px;
    box-sizing: border-box;
    background-color: rgba(1,1,1,0.2);
    border-radius: 1000px;
    &:focus{
        outline: none;
    }
    
    &:before{
        content: '';
        position: absolute;
        width: 25px;
        border-bottom: 2px solid white;
        top: 18px;
        left: 50%;
        margin-left -12.5px;
        transistion: all 0.2s ease-in-out 0.2s;
    }
    &:after{
        content: '';
        position: absolute;
        width: 25px;
        border-bottom: 2px solid white;
        bottom: 18px;
        left: 50%;
        margin-left -12.5px;
       transistion: all 0.2s ease-in-out 0.2s;
    }
    &.-active{
        &:before{
            transform: translateY(5px) rotate(-145deg);
            transform-origin: center center;
        }
        &:after{
            transform: translateY(-5px) rotate(145deg);
            transform-origin: center center;
        }
    }
    &:hover{
        cursor: pointer;
    }
}
`;
