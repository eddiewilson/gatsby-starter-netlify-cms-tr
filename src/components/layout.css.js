import styled from "styled-components";
import MEDIA from "../utils/mediaTemplates";

export const Container = styled.span`
  #one {
    min-height: 70vh;
    background-color: #339999;
    color: white;
    ${MEDIA.PHONE`
  `};
  }
  .header {
    margin-bottom: 7rem;
    ${MEDIA.PHONE`
    margin-bottom: 4rem;
    `}
  }

  #overlay {
    position: absolute;
    top: 490px;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.26);
    width: 50%;
    margin-left: 5%;
    color: white;
    padding: 2%;
  }
  .teamtitle {
    margin-bottom: 1.1%;
  }
  .team h2 {
    color: #339999;
  }
  .team span,
  .teamend span {
  }

  .links {
    margin-top: 6.3%;
    margin-bottom: 6.3%;
  }
  .links a {
    text-decoration: none;
    color: #333333;
    text-decoration: underline;
  }
  .links ul li {
    list-style: none;
  }
  .links ul li a:hover {
    color: #339999;
  }
  .prices {
    margin-bottom: 6.5%;
  }
  .prices ul li {
    list-style: none;
  }
  .availability ul li {
    list-style: none;
  }
  /****Footer****/
  .foot {
    line-height: 1.5em;
  }
  .foot a {
    text-decoration: none;
    color: #333333;
  }
  .foot a:hover {
    color: #339999;
  }

  .foot ul li {
    list-style: none;
    margin-bottom: 5px;
  }
  .address {
    margin-top: 30px;
  }
  #footer_social {
    margin-top: 20px;
  }
  #credit {
    text-align: center;
    color: #333333;
    margin: 0 auto;
    margin-top: 60px;
    width: 400px;
  }
  #credit a:first-child {
    text-decoration: none;
    color: #333333;
    cursor: default;
    display: inline-block;
  }
  #credit a {
    text-decoration: none;
    color: #333333;
    display: inline-block;
  }
  /**Google Maps**/
  #content h1 {
    font-size: 1em;
  }
  #four {
    background-color: #e3e9ff;
    padding-bottom: 35px;
  }
  #five {
    background-color: #cad1db;
    padding-bottom: 5%;
    color: #333333;
  }

  /*default styles*/
  textarea {
    border: 0px;
    background-color: #ffffff;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    font-weight: inherit;
    color: #333333;
    padding: 0px !important;
    vertical-align: top;
    transition-property: height;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
    /* Firefox 4 */
    -moz-transition-property: height;
    -moz-transition-duration: 0.2s;
    -moz-transition-timing-function: ease;
    -moz-transition-delay: 0s;
    /* Safari and Chrome */
    -webkit-transition-property: height;
    -webkit-transition-duration: 0.2s;
    -webkit-transition-timing-function: ease;
    -webkit-transition-delay: 0s;
    /* Opera */
    -o-transition-property: height;
    -o-transition-duration: 0.2s;
    -o-transition-timing-function: ease;
    -o-transition-delay: 0s;
    resize: none;
    outline-color: #ffffff;
    box-shadow: 0px 0px 0px 15px #ffffff;
    position: relative;
    overflow: auto;
  }
  textarea:focus {
    box-shadow: 0px 0px 0px 15px #ffffff;
    background-color: #ffffff;
  }
`;
