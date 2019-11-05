import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: inherit;
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }
  //
  /* ==========================================================================
GRIDLEX
Just a Flexbox Grid System - v. 2.7.1
========================================================================== */
[class~="grid"],
[class*="grid-"],
[class*="grid_"] {
box-sizing: border-box;
display: flex;
flex-flow: row wrap;
margin: 0 -0.5rem; }

[class~="col"],
[class*="col-"],
[class*="col_"] {
box-sizing: border-box;
padding: 0 0.5rem 1rem;
max-width: 100%; }

[class~="col"],
[class*="col_"] {
flex: 1 1 0%; }

[class*="col-"] {
flex: none; }

[class~="grid"][class~="col"],
[class~="grid"][class*="col-"],
[class~="grid"][class*="col_"],
[class*="grid-"][class~="col"],
[class*="grid-"][class*="col-"],
[class*="grid-"][class*="col_"],
[class*="grid_"][class~="col"],
[class*="grid_"][class*="col-"],
[class*="grid_"][class*="col_"] {
margin: 0;
padding: 0; }

/************************
HELPERS SUFFIXES
*************************/
[class*="grid-"][class*="-noGutter"] {
margin: 0; }
[class*="grid-"][class*="-noGutter"] > [class~="col"],
[class*="grid-"][class*="-noGutter"] > [class*="col-"] {
padding: 0; }

[class*="grid-"][class*="-noWrap"] {
flex-wrap: nowrap; }

[class*="grid-"][class*="-center"] {
justify-content: center; }

[class*="grid-"][class*="-right"] {
justify-content: flex-end;
align-self: flex-end;
margin-left: auto; }

[class*="grid-"][class*="-top"] {
align-items: flex-start; }

[class*="grid-"][class*="-middle"] {
align-items: center; }

[class*="grid-"][class*="-bottom"] {
align-items: flex-end; }

[class*="grid-"][class*="-reverse"] {
flex-direction: row-reverse; }

[class*="grid-"][class*="-column"] {
flex-direction: column; }
[class*="grid-"][class*="-column"] > [class*="col-"] {
flex-basis: auto; }

[class*="grid-"][class*="-column-reverse"] {
flex-direction: column-reverse; }

[class*="grid-"][class*="-spaceBetween"] {
justify-content: space-between; }

[class*="grid-"][class*="-spaceAround"] {
justify-content: space-around; }

[class*="grid-"][class*="-equalHeight"] > [class~="col"],
[class*="grid-"][class*="-equalHeight"] > [class*="col-"],
[class*="grid-"][class*="-equalHeight"] > [class*="col_"] {
align-self: stretch; }
[class*="grid-"][class*="-equalHeight"] > [class~="col"] > *,
[class*="grid-"][class*="-equalHeight"] > [class*="col-"] > *,
[class*="grid-"][class*="-equalHeight"] > [class*="col_"] > * {
height: 100%; }

[class*="grid-"][class*="-noBottom"] > [class~="col"],
[class*="grid-"][class*="-noBottom"] > [class*="col-"],
[class*="grid-"][class*="-noBottom"] > [class*="col_"] {
padding-bottom: 0; }

[class*="col-"][class*="-top"] {
align-self: flex-start; }

[class*="col-"][class*="-middle"] {
align-self: center; }

[class*="col-"][class*="-bottom"] {
align-self: flex-end; }

[class*="col-"][class*="-first"] {
order: -1; }

[class*="col-"][class*="-last"] {
order: 1; }

/************************
GRID BY NUMBER
*************************/
[class*="grid-1"] > [class~="col"],
[class*="grid-1"] > [class*="col-"],
[class*="grid-1"] > [class*="col_"] {
flex-basis: 100%;
max-width: 100%; }

[class*="grid-2"] > [class~="col"],
[class*="grid-2"] > [class*="col-"],
[class*="grid-2"] > [class*="col_"] {
flex-basis: 50%;
max-width: 50%; }

[class*="grid-3"] > [class~="col"],
[class*="grid-3"] > [class*="col-"],
[class*="grid-3"] > [class*="col_"] {
flex-basis: 33.33333%;
max-width: 33.33333%; }

[class*="grid-4"] > [class~="col"],
[class*="grid-4"] > [class*="col-"],
[class*="grid-4"] > [class*="col_"] {
flex-basis: 25%;
max-width: 25%; }

[class*="grid-5"] > [class~="col"],
[class*="grid-5"] > [class*="col-"],
[class*="grid-5"] > [class*="col_"] {
flex-basis: 20%;
max-width: 20%; }

[class*="grid-6"] > [class~="col"],
[class*="grid-6"] > [class*="col-"],
[class*="grid-6"] > [class*="col_"] {
flex-basis: 16.66667%;
max-width: 16.66667%; }

[class*="grid-7"] > [class~="col"],
[class*="grid-7"] > [class*="col-"],
[class*="grid-7"] > [class*="col_"] {
flex-basis: 14.28571%;
max-width: 14.28571%; }

[class*="grid-8"] > [class~="col"],
[class*="grid-8"] > [class*="col-"],
[class*="grid-8"] > [class*="col_"] {
flex-basis: 12.5%;
max-width: 12.5%; }

[class*="grid-9"] > [class~="col"],
[class*="grid-9"] > [class*="col-"],
[class*="grid-9"] > [class*="col_"] {
flex-basis: 11.11111%;
max-width: 11.11111%; }

[class*="grid-10"] > [class~="col"],
[class*="grid-10"] > [class*="col-"],
[class*="grid-10"] > [class*="col_"] {
flex-basis: 10%;
max-width: 10%; }

[class*="grid-11"] > [class~="col"],
[class*="grid-11"] > [class*="col-"],
[class*="grid-11"] > [class*="col_"] {
flex-basis: 9.09091%;
max-width: 9.09091%; }

[class*="grid-12"] > [class~="col"],
[class*="grid-12"] > [class*="col-"],
[class*="grid-12"] > [class*="col_"] {
flex-basis: 8.33333%;
max-width: 8.33333%; }

@media (max-width: 80em) {
[class*="_lg-1"] > [class~="col"],
[class*="_lg-1"] > [class*="col-"],
[class*="_lg-1"] > [class*="col_"] {
flex-basis: 100%;
max-width: 100%; }
[class*="_lg-2"] > [class~="col"],
[class*="_lg-2"] > [class*="col-"],
[class*="_lg-2"] > [class*="col_"] {
flex-basis: 50%;
max-width: 50%; }
[class*="_lg-3"] > [class~="col"],
[class*="_lg-3"] > [class*="col-"],
[class*="_lg-3"] > [class*="col_"] {
flex-basis: 33.33333%;
max-width: 33.33333%; }
[class*="_lg-4"] > [class~="col"],
[class*="_lg-4"] > [class*="col-"],
[class*="_lg-4"] > [class*="col_"] {
flex-basis: 25%;
max-width: 25%; }
[class*="_lg-5"] > [class~="col"],
[class*="_lg-5"] > [class*="col-"],
[class*="_lg-5"] > [class*="col_"] {
flex-basis: 20%;
max-width: 20%; }
[class*="_lg-6"] > [class~="col"],
[class*="_lg-6"] > [class*="col-"],
[class*="_lg-6"] > [class*="col_"] {
flex-basis: 16.66667%;
max-width: 16.66667%; }
[class*="_lg-7"] > [class~="col"],
[class*="_lg-7"] > [class*="col-"],
[class*="_lg-7"] > [class*="col_"] {
flex-basis: 14.28571%;
max-width: 14.28571%; }
[class*="_lg-8"] > [class~="col"],
[class*="_lg-8"] > [class*="col-"],
[class*="_lg-8"] > [class*="col_"] {
flex-basis: 12.5%;
max-width: 12.5%; }
[class*="_lg-9"] > [class~="col"],
[class*="_lg-9"] > [class*="col-"],
[class*="_lg-9"] > [class*="col_"] {
flex-basis: 11.11111%;
max-width: 11.11111%; }
[class*="_lg-10"] > [class~="col"],
[class*="_lg-10"] > [class*="col-"],
[class*="_lg-10"] > [class*="col_"] {
flex-basis: 10%;
max-width: 10%; }
[class*="_lg-11"] > [class~="col"],
[class*="_lg-11"] > [class*="col-"],
[class*="_lg-11"] > [class*="col_"] {
flex-basis: 9.09091%;
max-width: 9.09091%; }
[class*="_lg-12"] > [class~="col"],
[class*="_lg-12"] > [class*="col-"],
[class*="_lg-12"] > [class*="col_"] {
flex-basis: 8.33333%;
max-width: 8.33333%; } }

@media (max-width: 64em) {
[class*="_md-1"] > [class~="col"],
[class*="_md-1"] > [class*="col-"],
[class*="_md-1"] > [class*="col_"] {
flex-basis: 100%;
max-width: 100%; }
[class*="_md-2"] > [class~="col"],
[class*="_md-2"] > [class*="col-"],
[class*="_md-2"] > [class*="col_"] {
flex-basis: 50%;
max-width: 50%; }
[class*="_md-3"] > [class~="col"],
[class*="_md-3"] > [class*="col-"],
[class*="_md-3"] > [class*="col_"] {
flex-basis: 33.33333%;
max-width: 33.33333%; }
[class*="_md-4"] > [class~="col"],
[class*="_md-4"] > [class*="col-"],
[class*="_md-4"] > [class*="col_"] {
flex-basis: 25%;
max-width: 25%; }
[class*="_md-5"] > [class~="col"],
[class*="_md-5"] > [class*="col-"],
[class*="_md-5"] > [class*="col_"] {
flex-basis: 20%;
max-width: 20%; }
[class*="_md-6"] > [class~="col"],
[class*="_md-6"] > [class*="col-"],
[class*="_md-6"] > [class*="col_"] {
flex-basis: 16.66667%;
max-width: 16.66667%; }
[class*="_md-7"] > [class~="col"],
[class*="_md-7"] > [class*="col-"],
[class*="_md-7"] > [class*="col_"] {
flex-basis: 14.28571%;
max-width: 14.28571%; }
[class*="_md-8"] > [class~="col"],
[class*="_md-8"] > [class*="col-"],
[class*="_md-8"] > [class*="col_"] {
flex-basis: 12.5%;
max-width: 12.5%; }
[class*="_md-9"] > [class~="col"],
[class*="_md-9"] > [class*="col-"],
[class*="_md-9"] > [class*="col_"] {
flex-basis: 11.11111%;
max-width: 11.11111%; }
[class*="_md-10"] > [class~="col"],
[class*="_md-10"] > [class*="col-"],
[class*="_md-10"] > [class*="col_"] {
flex-basis: 10%;
max-width: 10%; }
[class*="_md-11"] > [class~="col"],
[class*="_md-11"] > [class*="col-"],
[class*="_md-11"] > [class*="col_"] {
flex-basis: 9.09091%;
max-width: 9.09091%; }
[class*="_md-12"] > [class~="col"],
[class*="_md-12"] > [class*="col-"],
[class*="_md-12"] > [class*="col_"] {
flex-basis: 8.33333%;
max-width: 8.33333%; } }

@media (max-width: 48em) {
[class*="_sm-1"] > [class~="col"],
[class*="_sm-1"] > [class*="col-"],
[class*="_sm-1"] > [class*="col_"] {
flex-basis: 100%;
max-width: 100%; }
[class*="_sm-2"] > [class~="col"],
[class*="_sm-2"] > [class*="col-"],
[class*="_sm-2"] > [class*="col_"] {
flex-basis: 50%;
max-width: 50%; }
[class*="_sm-3"] > [class~="col"],
[class*="_sm-3"] > [class*="col-"],
[class*="_sm-3"] > [class*="col_"] {
flex-basis: 33.33333%;
max-width: 33.33333%; }
[class*="_sm-4"] > [class~="col"],
[class*="_sm-4"] > [class*="col-"],
[class*="_sm-4"] > [class*="col_"] {
flex-basis: 25%;
max-width: 25%; }
[class*="_sm-5"] > [class~="col"],
[class*="_sm-5"] > [class*="col-"],
[class*="_sm-5"] > [class*="col_"] {
flex-basis: 20%;
max-width: 20%; }
[class*="_sm-6"] > [class~="col"],
[class*="_sm-6"] > [class*="col-"],
[class*="_sm-6"] > [class*="col_"] {
flex-basis: 16.66667%;
max-width: 16.66667%; }
[class*="_sm-7"] > [class~="col"],
[class*="_sm-7"] > [class*="col-"],
[class*="_sm-7"] > [class*="col_"] {
flex-basis: 14.28571%;
max-width: 14.28571%; }
[class*="_sm-8"] > [class~="col"],
[class*="_sm-8"] > [class*="col-"],
[class*="_sm-8"] > [class*="col_"] {
flex-basis: 12.5%;
max-width: 12.5%; }
[class*="_sm-9"] > [class~="col"],
[class*="_sm-9"] > [class*="col-"],
[class*="_sm-9"] > [class*="col_"] {
flex-basis: 11.11111%;
max-width: 11.11111%; }
[class*="_sm-10"] > [class~="col"],
[class*="_sm-10"] > [class*="col-"],
[class*="_sm-10"] > [class*="col_"] {
flex-basis: 10%;
max-width: 10%; }
[class*="_sm-11"] > [class~="col"],
[class*="_sm-11"] > [class*="col-"],
[class*="_sm-11"] > [class*="col_"] {
flex-basis: 9.09091%;
max-width: 9.09091%; }
[class*="_sm-12"] > [class~="col"],
[class*="_sm-12"] > [class*="col-"],
[class*="_sm-12"] > [class*="col_"] {
flex-basis: 8.33333%;
max-width: 8.33333%; } }

@media (max-width: 36em) {
[class*="_xs-1"] > [class~="col"],
[class*="_xs-1"] > [class*="col-"],
[class*="_xs-1"] > [class*="col_"] {
flex-basis: 100%;
max-width: 100%; }
[class*="_xs-2"] > [class~="col"],
[class*="_xs-2"] > [class*="col-"],
[class*="_xs-2"] > [class*="col_"] {
flex-basis: 50%;
max-width: 50%; }
[class*="_xs-3"] > [class~="col"],
[class*="_xs-3"] > [class*="col-"],
[class*="_xs-3"] > [class*="col_"] {
flex-basis: 33.33333%;
max-width: 33.33333%; }
[class*="_xs-4"] > [class~="col"],
[class*="_xs-4"] > [class*="col-"],
[class*="_xs-4"] > [class*="col_"] {
flex-basis: 25%;
max-width: 25%; }
[class*="_xs-5"] > [class~="col"],
[class*="_xs-5"] > [class*="col-"],
[class*="_xs-5"] > [class*="col_"] {
flex-basis: 20%;
max-width: 20%; }
[class*="_xs-6"] > [class~="col"],
[class*="_xs-6"] > [class*="col-"],
[class*="_xs-6"] > [class*="col_"] {
flex-basis: 16.66667%;
max-width: 16.66667%; }
[class*="_xs-7"] > [class~="col"],
[class*="_xs-7"] > [class*="col-"],
[class*="_xs-7"] > [class*="col_"] {
flex-basis: 14.28571%;
max-width: 14.28571%; }
[class*="_xs-8"] > [class~="col"],
[class*="_xs-8"] > [class*="col-"],
[class*="_xs-8"] > [class*="col_"] {
flex-basis: 12.5%;
max-width: 12.5%; }
[class*="_xs-9"] > [class~="col"],
[class*="_xs-9"] > [class*="col-"],
[class*="_xs-9"] > [class*="col_"] {
flex-basis: 11.11111%;
max-width: 11.11111%; }
[class*="_xs-10"] > [class~="col"],
[class*="_xs-10"] > [class*="col-"],
[class*="_xs-10"] > [class*="col_"] {
flex-basis: 10%;
max-width: 10%; }
[class*="_xs-11"] > [class~="col"],
[class*="_xs-11"] > [class*="col-"],
[class*="_xs-11"] > [class*="col_"] {
flex-basis: 9.09091%;
max-width: 9.09091%; }
[class*="_xs-12"] > [class~="col"],
[class*="_xs-12"] > [class*="col-"],
[class*="_xs-12"] > [class*="col_"] {
flex-basis: 8.33333%;
max-width: 8.33333%; } }

/************************
COLS SIZES
*************************/
[class~="grid"] > [class*="col-1"],
[class*="grid-"] > [class*="col-1"],
[class*="grid_"] > [class*="col-1"] {
flex-basis: 8.33333%;
max-width: 8.33333%; }

[class~="grid"] > [class*="col-2"],
[class*="grid-"] > [class*="col-2"],
[class*="grid_"] > [class*="col-2"] {
flex-basis: 16.66667%;
max-width: 16.66667%; }

[class~="grid"] > [class*="col-3"],
[class*="grid-"] > [class*="col-3"],
[class*="grid_"] > [class*="col-3"] {
flex-basis: 25%;
max-width: 25%; }

[class~="grid"] > [class*="col-4"],
[class*="grid-"] > [class*="col-4"],
[class*="grid_"] > [class*="col-4"] {
flex-basis: 33.33333%;
max-width: 33.33333%; }

[class~="grid"] > [class*="col-5"],
[class*="grid-"] > [class*="col-5"],
[class*="grid_"] > [class*="col-5"] {
flex-basis: 41.66667%;
max-width: 41.66667%; }

[class~="grid"] > [class*="col-6"],
[class*="grid-"] > [class*="col-6"],
[class*="grid_"] > [class*="col-6"] {
flex-basis: 50%;
max-width: 50%; }

[class~="grid"] > [class*="col-7"],
[class*="grid-"] > [class*="col-7"],
[class*="grid_"] > [class*="col-7"] {
flex-basis: 58.33333%;
max-width: 58.33333%; }

[class~="grid"] > [class*="col-8"],
[class*="grid-"] > [class*="col-8"],
[class*="grid_"] > [class*="col-8"] {
flex-basis: 66.66667%;
max-width: 66.66667%; }

[class~="grid"] > [class*="col-9"],
[class*="grid-"] > [class*="col-9"],
[class*="grid_"] > [class*="col-9"] {
flex-basis: 75%;
max-width: 75%; }

[class~="grid"] > [class*="col-10"],
[class*="grid-"] > [class*="col-10"],
[class*="grid_"] > [class*="col-10"] {
flex-basis: 83.33333%;
max-width: 83.33333%; }

[class~="grid"] > [class*="col-11"],
[class*="grid-"] > [class*="col-11"],
[class*="grid_"] > [class*="col-11"] {
flex-basis: 91.66667%;
max-width: 91.66667%; }

[class~="grid"] > [class*="col-12"],
[class*="grid-"] > [class*="col-12"],
[class*="grid_"] > [class*="col-12"] {
flex-basis: 100%;
max-width: 100%; }

[class~="grid"] > [data-push-left*="off-0"],
[class*="grid-"] > [data-push-left*="off-0"],
[class*="grid_"] > [data-push-left*="off-0"] {
margin-left: 0; }

[class~="grid"] > [data-push-left*="off-1"],
[class*="grid-"] > [data-push-left*="off-1"],
[class*="grid_"] > [data-push-left*="off-1"] {
margin-left: 8.33333%; }

[class~="grid"] > [data-push-left*="off-2"],
[class*="grid-"] > [data-push-left*="off-2"],
[class*="grid_"] > [data-push-left*="off-2"] {
margin-left: 16.66667%; }

[class~="grid"] > [data-push-left*="off-3"],
[class*="grid-"] > [data-push-left*="off-3"],
[class*="grid_"] > [data-push-left*="off-3"] {
margin-left: 25%; }

[class~="grid"] > [data-push-left*="off-4"],
[class*="grid-"] > [data-push-left*="off-4"],
[class*="grid_"] > [data-push-left*="off-4"] {
margin-left: 33.33333%; }

[class~="grid"] > [data-push-left*="off-5"],
[class*="grid-"] > [data-push-left*="off-5"],
[class*="grid_"] > [data-push-left*="off-5"] {
margin-left: 41.66667%; }

[class~="grid"] > [data-push-left*="off-6"],
[class*="grid-"] > [data-push-left*="off-6"],
[class*="grid_"] > [data-push-left*="off-6"] {
margin-left: 50%; }

[class~="grid"] > [data-push-left*="off-7"],
[class*="grid-"] > [data-push-left*="off-7"],
[class*="grid_"] > [data-push-left*="off-7"] {
margin-left: 58.33333%; }

[class~="grid"] > [data-push-left*="off-8"],
[class*="grid-"] > [data-push-left*="off-8"],
[class*="grid_"] > [data-push-left*="off-8"] {
margin-left: 66.66667%; }

[class~="grid"] > [data-push-left*="off-9"],
[class*="grid-"] > [data-push-left*="off-9"],
[class*="grid_"] > [data-push-left*="off-9"] {
margin-left: 75%; }

[class~="grid"] > [data-push-left*="off-10"],
[class*="grid-"] > [data-push-left*="off-10"],
[class*="grid_"] > [data-push-left*="off-10"] {
margin-left: 83.33333%; }

[class~="grid"] > [data-push-left*="off-11"],
[class*="grid-"] > [data-push-left*="off-11"],
[class*="grid_"] > [data-push-left*="off-11"] {
margin-left: 91.66667%; }

[class~="grid"] > [data-push-right*="off-0"],
[class*="grid-"] > [data-push-right*="off-0"],
[class*="grid_"] > [data-push-right*="off-0"] {
margin-right: 0; }

[class~="grid"] > [data-push-right*="off-1"],
[class*="grid-"] > [data-push-right*="off-1"],
[class*="grid_"] > [data-push-right*="off-1"] {
margin-right: 8.33333%; }

[class~="grid"] > [data-push-right*="off-2"],
[class*="grid-"] > [data-push-right*="off-2"],
[class*="grid_"] > [data-push-right*="off-2"] {
margin-right: 16.66667%; }

[class~="grid"] > [data-push-right*="off-3"],
[class*="grid-"] > [data-push-right*="off-3"],
[class*="grid_"] > [data-push-right*="off-3"] {
margin-right: 25%; }

[class~="grid"] > [data-push-right*="off-4"],
[class*="grid-"] > [data-push-right*="off-4"],
[class*="grid_"] > [data-push-right*="off-4"] {
margin-right: 33.33333%; }

[class~="grid"] > [data-push-right*="off-5"],
[class*="grid-"] > [data-push-right*="off-5"],
[class*="grid_"] > [data-push-right*="off-5"] {
margin-right: 41.66667%; }

[class~="grid"] > [data-push-right*="off-6"],
[class*="grid-"] > [data-push-right*="off-6"],
[class*="grid_"] > [data-push-right*="off-6"] {
margin-right: 50%; }

[class~="grid"] > [data-push-right*="off-7"],
[class*="grid-"] > [data-push-right*="off-7"],
[class*="grid_"] > [data-push-right*="off-7"] {
margin-right: 58.33333%; }

[class~="grid"] > [data-push-right*="off-8"],
[class*="grid-"] > [data-push-right*="off-8"],
[class*="grid_"] > [data-push-right*="off-8"] {
margin-right: 66.66667%; }

[class~="grid"] > [data-push-right*="off-9"],
[class*="grid-"] > [data-push-right*="off-9"],
[class*="grid_"] > [data-push-right*="off-9"] {
margin-right: 75%; }

[class~="grid"] > [data-push-right*="off-10"],
[class*="grid-"] > [data-push-right*="off-10"],
[class*="grid_"] > [data-push-right*="off-10"] {
margin-right: 83.33333%; }

[class~="grid"] > [data-push-right*="off-11"],
[class*="grid-"] > [data-push-right*="off-11"],
[class*="grid_"] > [data-push-right*="off-11"] {
margin-right: 91.66667%; }

@media (max-width: 80em) {
[class~="grid"] > [class*="_lg-1"],
[class*="grid-"] > [class*="_lg-1"],
[class*="grid_"] > [class*="_lg-1"] {
flex-basis: 8.33333%;
max-width: 8.33333%; }
[class~="grid"] > [class*="_lg-2"],
[class*="grid-"] > [class*="_lg-2"],
[class*="grid_"] > [class*="_lg-2"] {
flex-basis: 16.66667%;
max-width: 16.66667%; }
[class~="grid"] > [class*="_lg-3"],
[class*="grid-"] > [class*="_lg-3"],
[class*="grid_"] > [class*="_lg-3"] {
flex-basis: 25%;
max-width: 25%; }
[class~="grid"] > [class*="_lg-4"],
[class*="grid-"] > [class*="_lg-4"],
[class*="grid_"] > [class*="_lg-4"] {
flex-basis: 33.33333%;
max-width: 33.33333%; }
[class~="grid"] > [class*="_lg-5"],
[class*="grid-"] > [class*="_lg-5"],
[class*="grid_"] > [class*="_lg-5"] {
flex-basis: 41.66667%;
max-width: 41.66667%; }
[class~="grid"] > [class*="_lg-6"],
[class*="grid-"] > [class*="_lg-6"],
[class*="grid_"] > [class*="_lg-6"] {
flex-basis: 50%;
max-width: 50%; }
[class~="grid"] > [class*="_lg-7"],
[class*="grid-"] > [class*="_lg-7"],
[class*="grid_"] > [class*="_lg-7"] {
flex-basis: 58.33333%;
max-width: 58.33333%; }
[class~="grid"] > [class*="_lg-8"],
[class*="grid-"] > [class*="_lg-8"],
[class*="grid_"] > [class*="_lg-8"] {
flex-basis: 66.66667%;
max-width: 66.66667%; }
[class~="grid"] > [class*="_lg-9"],
[class*="grid-"] > [class*="_lg-9"],
[class*="grid_"] > [class*="_lg-9"] {
flex-basis: 75%;
max-width: 75%; }
[class~="grid"] > [class*="_lg-10"],
[class*="grid-"] > [class*="_lg-10"],
[class*="grid_"] > [class*="_lg-10"] {
flex-basis: 83.33333%;
max-width: 83.33333%; }
[class~="grid"] > [class*="_lg-11"],
[class*="grid-"] > [class*="_lg-11"],
[class*="grid_"] > [class*="_lg-11"] {
flex-basis: 91.66667%;
max-width: 91.66667%; }
[class~="grid"] > [class*="_lg-12"],
[class*="grid-"] > [class*="_lg-12"],
[class*="grid_"] > [class*="_lg-12"] {
flex-basis: 100%;
max-width: 100%; }
[class~="grid"] > [data-push-left*="_lg-0"],
[class*="grid-"] > [data-push-left*="_lg-0"],
[class*="grid_"] > [data-push-left*="_lg-0"] {
margin-left: 0; }
[class~="grid"] > [data-push-left*="_lg-1"],
[class*="grid-"] > [data-push-left*="_lg-1"],
[class*="grid_"] > [data-push-left*="_lg-1"] {
margin-left: 8.33333%; }
[class~="grid"] > [data-push-left*="_lg-2"],
[class*="grid-"] > [data-push-left*="_lg-2"],
[class*="grid_"] > [data-push-left*="_lg-2"] {
margin-left: 16.66667%; }
[class~="grid"] > [data-push-left*="_lg-3"],
[class*="grid-"] > [data-push-left*="_lg-3"],
[class*="grid_"] > [data-push-left*="_lg-3"] {
margin-left: 25%; }
[class~="grid"] > [data-push-left*="_lg-4"],
[class*="grid-"] > [data-push-left*="_lg-4"],
[class*="grid_"] > [data-push-left*="_lg-4"] {
margin-left: 33.33333%; }
[class~="grid"] > [data-push-left*="_lg-5"],
[class*="grid-"] > [data-push-left*="_lg-5"],
[class*="grid_"] > [data-push-left*="_lg-5"] {
margin-left: 41.66667%; }
[class~="grid"] > [data-push-left*="_lg-6"],
[class*="grid-"] > [data-push-left*="_lg-6"],
[class*="grid_"] > [data-push-left*="_lg-6"] {
margin-left: 50%; }
[class~="grid"] > [data-push-left*="_lg-7"],
[class*="grid-"] > [data-push-left*="_lg-7"],
[class*="grid_"] > [data-push-left*="_lg-7"] {
margin-left: 58.33333%; }
[class~="grid"] > [data-push-left*="_lg-8"],
[class*="grid-"] > [data-push-left*="_lg-8"],
[class*="grid_"] > [data-push-left*="_lg-8"] {
margin-left: 66.66667%; }
[class~="grid"] > [data-push-left*="_lg-9"],
[class*="grid-"] > [data-push-left*="_lg-9"],
[class*="grid_"] > [data-push-left*="_lg-9"] {
margin-left: 75%; }
[class~="grid"] > [data-push-left*="_lg-10"],
[class*="grid-"] > [data-push-left*="_lg-10"],
[class*="grid_"] > [data-push-left*="_lg-10"] {
margin-left: 83.33333%; }
[class~="grid"] > [data-push-left*="_lg-11"],
[class*="grid-"] > [data-push-left*="_lg-11"],
[class*="grid_"] > [data-push-left*="_lg-11"] {
margin-left: 91.66667%; }
[class~="grid"] > [data-push-right*="_lg-0"],
[class*="grid-"] > [data-push-right*="_lg-0"],
[class*="grid_"] > [data-push-right*="_lg-0"] {
margin-right: 0; }
[class~="grid"] > [data-push-right*="_lg-1"],
[class*="grid-"] > [data-push-right*="_lg-1"],
[class*="grid_"] > [data-push-right*="_lg-1"] {
margin-right: 8.33333%; }
[class~="grid"] > [data-push-right*="_lg-2"],
[class*="grid-"] > [data-push-right*="_lg-2"],
[class*="grid_"] > [data-push-right*="_lg-2"] {
margin-right: 16.66667%; }
[class~="grid"] > [data-push-right*="_lg-3"],
[class*="grid-"] > [data-push-right*="_lg-3"],
[class*="grid_"] > [data-push-right*="_lg-3"] {
margin-right: 25%; }
[class~="grid"] > [data-push-right*="_lg-4"],
[class*="grid-"] > [data-push-right*="_lg-4"],
[class*="grid_"] > [data-push-right*="_lg-4"] {
margin-right: 33.33333%; }
[class~="grid"] > [data-push-right*="_lg-5"],
[class*="grid-"] > [data-push-right*="_lg-5"],
[class*="grid_"] > [data-push-right*="_lg-5"] {
margin-right: 41.66667%; }
[class~="grid"] > [data-push-right*="_lg-6"],
[class*="grid-"] > [data-push-right*="_lg-6"],
[class*="grid_"] > [data-push-right*="_lg-6"] {
margin-right: 50%; }
[class~="grid"] > [data-push-right*="_lg-7"],
[class*="grid-"] > [data-push-right*="_lg-7"],
[class*="grid_"] > [data-push-right*="_lg-7"] {
margin-right: 58.33333%; }
[class~="grid"] > [data-push-right*="_lg-8"],
[class*="grid-"] > [data-push-right*="_lg-8"],
[class*="grid_"] > [data-push-right*="_lg-8"] {
margin-right: 66.66667%; }
[class~="grid"] > [data-push-right*="_lg-9"],
[class*="grid-"] > [data-push-right*="_lg-9"],
[class*="grid_"] > [data-push-right*="_lg-9"] {
margin-right: 75%; }
[class~="grid"] > [data-push-right*="_lg-10"],
[class*="grid-"] > [data-push-right*="_lg-10"],
[class*="grid_"] > [data-push-right*="_lg-10"] {
margin-right: 83.33333%; }
[class~="grid"] > [data-push-right*="_lg-11"],
[class*="grid-"] > [data-push-right*="_lg-11"],
[class*="grid_"] > [data-push-right*="_lg-11"] {
margin-right: 91.66667%; }
[class~="grid"] [class*="_lg-first"],
[class*="grid-"] [class*="_lg-first"],
[class*="grid_"] [class*="_lg-first"] {
order: -1; }
[class~="grid"] [class*="_lg-last"],
[class*="grid-"] [class*="_lg-last"],
[class*="grid_"] [class*="_lg-last"] {
order: 1; } }

@media (max-width: 64em) {
[class~="grid"] > [class*="_md-1"],
[class*="grid-"] > [class*="_md-1"],
[class*="grid_"] > [class*="_md-1"] {
flex-basis: 8.33333%;
max-width: 8.33333%; }
[class~="grid"] > [class*="_md-2"],
[class*="grid-"] > [class*="_md-2"],
[class*="grid_"] > [class*="_md-2"] {
flex-basis: 16.66667%;
max-width: 16.66667%; }
[class~="grid"] > [class*="_md-3"],
[class*="grid-"] > [class*="_md-3"],
[class*="grid_"] > [class*="_md-3"] {
flex-basis: 25%;
max-width: 25%; }
[class~="grid"] > [class*="_md-4"],
[class*="grid-"] > [class*="_md-4"],
[class*="grid_"] > [class*="_md-4"] {
flex-basis: 33.33333%;
max-width: 33.33333%; }
[class~="grid"] > [class*="_md-5"],
[class*="grid-"] > [class*="_md-5"],
[class*="grid_"] > [class*="_md-5"] {
flex-basis: 41.66667%;
max-width: 41.66667%; }
[class~="grid"] > [class*="_md-6"],
[class*="grid-"] > [class*="_md-6"],
[class*="grid_"] > [class*="_md-6"] {
flex-basis: 50%;
max-width: 50%; }
[class~="grid"] > [class*="_md-7"],
[class*="grid-"] > [class*="_md-7"],
[class*="grid_"] > [class*="_md-7"] {
flex-basis: 58.33333%;
max-width: 58.33333%; }
[class~="grid"] > [class*="_md-8"],
[class*="grid-"] > [class*="_md-8"],
[class*="grid_"] > [class*="_md-8"] {
flex-basis: 66.66667%;
max-width: 66.66667%; }
[class~="grid"] > [class*="_md-9"],
[class*="grid-"] > [class*="_md-9"],
[class*="grid_"] > [class*="_md-9"] {
flex-basis: 75%;
max-width: 75%; }
[class~="grid"] > [class*="_md-10"],
[class*="grid-"] > [class*="_md-10"],
[class*="grid_"] > [class*="_md-10"] {
flex-basis: 83.33333%;
max-width: 83.33333%; }
[class~="grid"] > [class*="_md-11"],
[class*="grid-"] > [class*="_md-11"],
[class*="grid_"] > [class*="_md-11"] {
flex-basis: 91.66667%;
max-width: 91.66667%; }
[class~="grid"] > [class*="_md-12"],
[class*="grid-"] > [class*="_md-12"],
[class*="grid_"] > [class*="_md-12"] {
flex-basis: 100%;
max-width: 100%; }
[class~="grid"] > [data-push-left*="_md-0"],
[class*="grid-"] > [data-push-left*="_md-0"],
[class*="grid_"] > [data-push-left*="_md-0"] {
margin-left: 0; }
[class~="grid"] > [data-push-left*="_md-1"],
[class*="grid-"] > [data-push-left*="_md-1"],
[class*="grid_"] > [data-push-left*="_md-1"] {
margin-left: 8.33333%; }
[class~="grid"] > [data-push-left*="_md-2"],
[class*="grid-"] > [data-push-left*="_md-2"],
[class*="grid_"] > [data-push-left*="_md-2"] {
margin-left: 16.66667%; }
[class~="grid"] > [data-push-left*="_md-3"],
[class*="grid-"] > [data-push-left*="_md-3"],
[class*="grid_"] > [data-push-left*="_md-3"] {
margin-left: 25%; }
[class~="grid"] > [data-push-left*="_md-4"],
[class*="grid-"] > [data-push-left*="_md-4"],
[class*="grid_"] > [data-push-left*="_md-4"] {
margin-left: 33.33333%; }
[class~="grid"] > [data-push-left*="_md-5"],
[class*="grid-"] > [data-push-left*="_md-5"],
[class*="grid_"] > [data-push-left*="_md-5"] {
margin-left: 41.66667%; }
[class~="grid"] > [data-push-left*="_md-6"],
[class*="grid-"] > [data-push-left*="_md-6"],
[class*="grid_"] > [data-push-left*="_md-6"] {
margin-left: 50%; }
[class~="grid"] > [data-push-left*="_md-7"],
[class*="grid-"] > [data-push-left*="_md-7"],
[class*="grid_"] > [data-push-left*="_md-7"] {
margin-left: 58.33333%; }
[class~="grid"] > [data-push-left*="_md-8"],
[class*="grid-"] > [data-push-left*="_md-8"],
[class*="grid_"] > [data-push-left*="_md-8"] {
margin-left: 66.66667%; }
[class~="grid"] > [data-push-left*="_md-9"],
[class*="grid-"] > [data-push-left*="_md-9"],
[class*="grid_"] > [data-push-left*="_md-9"] {
margin-left: 75%; }
[class~="grid"] > [data-push-left*="_md-10"],
[class*="grid-"] > [data-push-left*="_md-10"],
[class*="grid_"] > [data-push-left*="_md-10"] {
margin-left: 83.33333%; }
[class~="grid"] > [data-push-left*="_md-11"],
[class*="grid-"] > [data-push-left*="_md-11"],
[class*="grid_"] > [data-push-left*="_md-11"] {
margin-left: 91.66667%; }
[class~="grid"] > [data-push-right*="_md-0"],
[class*="grid-"] > [data-push-right*="_md-0"],
[class*="grid_"] > [data-push-right*="_md-0"] {
margin-right: 0; }
[class~="grid"] > [data-push-right*="_md-1"],
[class*="grid-"] > [data-push-right*="_md-1"],
[class*="grid_"] > [data-push-right*="_md-1"] {
margin-right: 8.33333%; }
[class~="grid"] > [data-push-right*="_md-2"],
[class*="grid-"] > [data-push-right*="_md-2"],
[class*="grid_"] > [data-push-right*="_md-2"] {
margin-right: 16.66667%; }
[class~="grid"] > [data-push-right*="_md-3"],
[class*="grid-"] > [data-push-right*="_md-3"],
[class*="grid_"] > [data-push-right*="_md-3"] {
margin-right: 25%; }
[class~="grid"] > [data-push-right*="_md-4"],
[class*="grid-"] > [data-push-right*="_md-4"],
[class*="grid_"] > [data-push-right*="_md-4"] {
margin-right: 33.33333%; }
[class~="grid"] > [data-push-right*="_md-5"],
[class*="grid-"] > [data-push-right*="_md-5"],
[class*="grid_"] > [data-push-right*="_md-5"] {
margin-right: 41.66667%; }
[class~="grid"] > [data-push-right*="_md-6"],
[class*="grid-"] > [data-push-right*="_md-6"],
[class*="grid_"] > [data-push-right*="_md-6"] {
margin-right: 50%; }
[class~="grid"] > [data-push-right*="_md-7"],
[class*="grid-"] > [data-push-right*="_md-7"],
[class*="grid_"] > [data-push-right*="_md-7"] {
margin-right: 58.33333%; }
[class~="grid"] > [data-push-right*="_md-8"],
[class*="grid-"] > [data-push-right*="_md-8"],
[class*="grid_"] > [data-push-right*="_md-8"] {
margin-right: 66.66667%; }
[class~="grid"] > [data-push-right*="_md-9"],
[class*="grid-"] > [data-push-right*="_md-9"],
[class*="grid_"] > [data-push-right*="_md-9"] {
margin-right: 75%; }
[class~="grid"] > [data-push-right*="_md-10"],
[class*="grid-"] > [data-push-right*="_md-10"],
[class*="grid_"] > [data-push-right*="_md-10"] {
margin-right: 83.33333%; }
[class~="grid"] > [data-push-right*="_md-11"],
[class*="grid-"] > [data-push-right*="_md-11"],
[class*="grid_"] > [data-push-right*="_md-11"] {
margin-right: 91.66667%; }
[class~="grid"] [class*="_md-first"],
[class*="grid-"] [class*="_md-first"],
[class*="grid_"] [class*="_md-first"] {
order: -1; }
[class~="grid"] [class*="_md-last"],
[class*="grid-"] [class*="_md-last"],
[class*="grid_"] [class*="_md-last"] {
order: 1; } }

@media (max-width: 48em) {
[class~="grid"] > [class*="_sm-1"],
[class*="grid-"] > [class*="_sm-1"],
[class*="grid_"] > [class*="_sm-1"] {
flex-basis: 8.33333%;
max-width: 8.33333%; }
[class~="grid"] > [class*="_sm-2"],
[class*="grid-"] > [class*="_sm-2"],
[class*="grid_"] > [class*="_sm-2"] {
flex-basis: 16.66667%;
max-width: 16.66667%; }
[class~="grid"] > [class*="_sm-3"],
[class*="grid-"] > [class*="_sm-3"],
[class*="grid_"] > [class*="_sm-3"] {
flex-basis: 25%;
max-width: 25%; }
[class~="grid"] > [class*="_sm-4"],
[class*="grid-"] > [class*="_sm-4"],
[class*="grid_"] > [class*="_sm-4"] {
flex-basis: 33.33333%;
max-width: 33.33333%; }
[class~="grid"] > [class*="_sm-5"],
[class*="grid-"] > [class*="_sm-5"],
[class*="grid_"] > [class*="_sm-5"] {
flex-basis: 41.66667%;
max-width: 41.66667%; }
[class~="grid"] > [class*="_sm-6"],
[class*="grid-"] > [class*="_sm-6"],
[class*="grid_"] > [class*="_sm-6"] {
flex-basis: 50%;
max-width: 50%; }
[class~="grid"] > [class*="_sm-7"],
[class*="grid-"] > [class*="_sm-7"],
[class*="grid_"] > [class*="_sm-7"] {
flex-basis: 58.33333%;
max-width: 58.33333%; }
[class~="grid"] > [class*="_sm-8"],
[class*="grid-"] > [class*="_sm-8"],
[class*="grid_"] > [class*="_sm-8"] {
flex-basis: 66.66667%;
max-width: 66.66667%; }
[class~="grid"] > [class*="_sm-9"],
[class*="grid-"] > [class*="_sm-9"],
[class*="grid_"] > [class*="_sm-9"] {
flex-basis: 75%;
max-width: 75%; }
[class~="grid"] > [class*="_sm-10"],
[class*="grid-"] > [class*="_sm-10"],
[class*="grid_"] > [class*="_sm-10"] {
flex-basis: 83.33333%;
max-width: 83.33333%; }
[class~="grid"] > [class*="_sm-11"],
[class*="grid-"] > [class*="_sm-11"],
[class*="grid_"] > [class*="_sm-11"] {
flex-basis: 91.66667%;
max-width: 91.66667%; }
[class~="grid"] > [class*="_sm-12"],
[class*="grid-"] > [class*="_sm-12"],
[class*="grid_"] > [class*="_sm-12"] {
flex-basis: 100%;
max-width: 100%; }
[class~="grid"] > [data-push-left*="_sm-0"],
[class*="grid-"] > [data-push-left*="_sm-0"],
[class*="grid_"] > [data-push-left*="_sm-0"] {
margin-left: 0; }
[class~="grid"] > [data-push-left*="_sm-1"],
[class*="grid-"] > [data-push-left*="_sm-1"],
[class*="grid_"] > [data-push-left*="_sm-1"] {
margin-left: 8.33333%; }
[class~="grid"] > [data-push-left*="_sm-2"],
[class*="grid-"] > [data-push-left*="_sm-2"],
[class*="grid_"] > [data-push-left*="_sm-2"] {
margin-left: 16.66667%; }
[class~="grid"] > [data-push-left*="_sm-3"],
[class*="grid-"] > [data-push-left*="_sm-3"],
[class*="grid_"] > [data-push-left*="_sm-3"] {
margin-left: 25%; }
[class~="grid"] > [data-push-left*="_sm-4"],
[class*="grid-"] > [data-push-left*="_sm-4"],
[class*="grid_"] > [data-push-left*="_sm-4"] {
margin-left: 33.33333%; }
[class~="grid"] > [data-push-left*="_sm-5"],
[class*="grid-"] > [data-push-left*="_sm-5"],
[class*="grid_"] > [data-push-left*="_sm-5"] {
margin-left: 41.66667%; }
[class~="grid"] > [data-push-left*="_sm-6"],
[class*="grid-"] > [data-push-left*="_sm-6"],
[class*="grid_"] > [data-push-left*="_sm-6"] {
margin-left: 50%; }
[class~="grid"] > [data-push-left*="_sm-7"],
[class*="grid-"] > [data-push-left*="_sm-7"],
[class*="grid_"] > [data-push-left*="_sm-7"] {
margin-left: 58.33333%; }
[class~="grid"] > [data-push-left*="_sm-8"],
[class*="grid-"] > [data-push-left*="_sm-8"],
[class*="grid_"] > [data-push-left*="_sm-8"] {
margin-left: 66.66667%; }
[class~="grid"] > [data-push-left*="_sm-9"],
[class*="grid-"] > [data-push-left*="_sm-9"],
[class*="grid_"] > [data-push-left*="_sm-9"] {
margin-left: 75%; }
[class~="grid"] > [data-push-left*="_sm-10"],
[class*="grid-"] > [data-push-left*="_sm-10"],
[class*="grid_"] > [data-push-left*="_sm-10"] {
margin-left: 83.33333%; }
[class~="grid"] > [data-push-left*="_sm-11"],
[class*="grid-"] > [data-push-left*="_sm-11"],
[class*="grid_"] > [data-push-left*="_sm-11"] {
margin-left: 91.66667%; }
[class~="grid"] > [data-push-right*="_sm-0"],
[class*="grid-"] > [data-push-right*="_sm-0"],
[class*="grid_"] > [data-push-right*="_sm-0"] {
margin-right: 0; }
[class~="grid"] > [data-push-right*="_sm-1"],
[class*="grid-"] > [data-push-right*="_sm-1"],
[class*="grid_"] > [data-push-right*="_sm-1"] {
margin-right: 8.33333%; }
[class~="grid"] > [data-push-right*="_sm-2"],
[class*="grid-"] > [data-push-right*="_sm-2"],
[class*="grid_"] > [data-push-right*="_sm-2"] {
margin-right: 16.66667%; }
[class~="grid"] > [data-push-right*="_sm-3"],
[class*="grid-"] > [data-push-right*="_sm-3"],
[class*="grid_"] > [data-push-right*="_sm-3"] {
margin-right: 25%; }
[class~="grid"] > [data-push-right*="_sm-4"],
[class*="grid-"] > [data-push-right*="_sm-4"],
[class*="grid_"] > [data-push-right*="_sm-4"] {
margin-right: 33.33333%; }
[class~="grid"] > [data-push-right*="_sm-5"],
[class*="grid-"] > [data-push-right*="_sm-5"],
[class*="grid_"] > [data-push-right*="_sm-5"] {
margin-right: 41.66667%; }
[class~="grid"] > [data-push-right*="_sm-6"],
[class*="grid-"] > [data-push-right*="_sm-6"],
[class*="grid_"] > [data-push-right*="_sm-6"] {
margin-right: 50%; }
[class~="grid"] > [data-push-right*="_sm-7"],
[class*="grid-"] > [data-push-right*="_sm-7"],
[class*="grid_"] > [data-push-right*="_sm-7"] {
margin-right: 58.33333%; }
[class~="grid"] > [data-push-right*="_sm-8"],
[class*="grid-"] > [data-push-right*="_sm-8"],
[class*="grid_"] > [data-push-right*="_sm-8"] {
margin-right: 66.66667%; }
[class~="grid"] > [data-push-right*="_sm-9"],
[class*="grid-"] > [data-push-right*="_sm-9"],
[class*="grid_"] > [data-push-right*="_sm-9"] {
margin-right: 75%; }
[class~="grid"] > [data-push-right*="_sm-10"],
[class*="grid-"] > [data-push-right*="_sm-10"],
[class*="grid_"] > [data-push-right*="_sm-10"] {
margin-right: 83.33333%; }
[class~="grid"] > [data-push-right*="_sm-11"],
[class*="grid-"] > [data-push-right*="_sm-11"],
[class*="grid_"] > [data-push-right*="_sm-11"] {
margin-right: 91.66667%; }
[class~="grid"] [class*="_sm-first"],
[class*="grid-"] [class*="_sm-first"],
[class*="grid_"] [class*="_sm-first"] {
order: -1; }
[class~="grid"] [class*="_sm-last"],
[class*="grid-"] [class*="_sm-last"],
[class*="grid_"] [class*="_sm-last"] {
order: 1; } }

@media (max-width: 36em) {
[class~="grid"] > [class*="_xs-1"],
[class*="grid-"] > [class*="_xs-1"],
[class*="grid_"] > [class*="_xs-1"] {
flex-basis: 8.33333%;
max-width: 8.33333%; }
[class~="grid"] > [class*="_xs-2"],
[class*="grid-"] > [class*="_xs-2"],
[class*="grid_"] > [class*="_xs-2"] {
flex-basis: 16.66667%;
max-width: 16.66667%; }
[class~="grid"] > [class*="_xs-3"],
[class*="grid-"] > [class*="_xs-3"],
[class*="grid_"] > [class*="_xs-3"] {
flex-basis: 25%;
max-width: 25%; }
[class~="grid"] > [class*="_xs-4"],
[class*="grid-"] > [class*="_xs-4"],
[class*="grid_"] > [class*="_xs-4"] {
flex-basis: 33.33333%;
max-width: 33.33333%; }
[class~="grid"] > [class*="_xs-5"],
[class*="grid-"] > [class*="_xs-5"],
[class*="grid_"] > [class*="_xs-5"] {
flex-basis: 41.66667%;
max-width: 41.66667%; }
[class~="grid"] > [class*="_xs-6"],
[class*="grid-"] > [class*="_xs-6"],
[class*="grid_"] > [class*="_xs-6"] {
flex-basis: 50%;
max-width: 50%; }
[class~="grid"] > [class*="_xs-7"],
[class*="grid-"] > [class*="_xs-7"],
[class*="grid_"] > [class*="_xs-7"] {
flex-basis: 58.33333%;
max-width: 58.33333%; }
[class~="grid"] > [class*="_xs-8"],
[class*="grid-"] > [class*="_xs-8"],
[class*="grid_"] > [class*="_xs-8"] {
flex-basis: 66.66667%;
max-width: 66.66667%; }
[class~="grid"] > [class*="_xs-9"],
[class*="grid-"] > [class*="_xs-9"],
[class*="grid_"] > [class*="_xs-9"] {
flex-basis: 75%;
max-width: 75%; }
[class~="grid"] > [class*="_xs-10"],
[class*="grid-"] > [class*="_xs-10"],
[class*="grid_"] > [class*="_xs-10"] {
flex-basis: 83.33333%;
max-width: 83.33333%; }
[class~="grid"] > [class*="_xs-11"],
[class*="grid-"] > [class*="_xs-11"],
[class*="grid_"] > [class*="_xs-11"] {
flex-basis: 91.66667%;
max-width: 91.66667%; }
[class~="grid"] > [class*="_xs-12"],
[class*="grid-"] > [class*="_xs-12"],
[class*="grid_"] > [class*="_xs-12"] {
flex-basis: 100%;
max-width: 100%; }
[class~="grid"] > [data-push-left*="_xs-0"],
[class*="grid-"] > [data-push-left*="_xs-0"],
[class*="grid_"] > [data-push-left*="_xs-0"] {
margin-left: 0; }
[class~="grid"] > [data-push-left*="_xs-1"],
[class*="grid-"] > [data-push-left*="_xs-1"],
[class*="grid_"] > [data-push-left*="_xs-1"] {
margin-left: 8.33333%; }
[class~="grid"] > [data-push-left*="_xs-2"],
[class*="grid-"] > [data-push-left*="_xs-2"],
[class*="grid_"] > [data-push-left*="_xs-2"] {
margin-left: 16.66667%; }
[class~="grid"] > [data-push-left*="_xs-3"],
[class*="grid-"] > [data-push-left*="_xs-3"],
[class*="grid_"] > [data-push-left*="_xs-3"] {
margin-left: 25%; }
[class~="grid"] > [data-push-left*="_xs-4"],
[class*="grid-"] > [data-push-left*="_xs-4"],
[class*="grid_"] > [data-push-left*="_xs-4"] {
margin-left: 33.33333%; }
[class~="grid"] > [data-push-left*="_xs-5"],
[class*="grid-"] > [data-push-left*="_xs-5"],
[class*="grid_"] > [data-push-left*="_xs-5"] {
margin-left: 41.66667%; }
[class~="grid"] > [data-push-left*="_xs-6"],
[class*="grid-"] > [data-push-left*="_xs-6"],
[class*="grid_"] > [data-push-left*="_xs-6"] {
margin-left: 50%; }
[class~="grid"] > [data-push-left*="_xs-7"],
[class*="grid-"] > [data-push-left*="_xs-7"],
[class*="grid_"] > [data-push-left*="_xs-7"] {
margin-left: 58.33333%; }
[class~="grid"] > [data-push-left*="_xs-8"],
[class*="grid-"] > [data-push-left*="_xs-8"],
[class*="grid_"] > [data-push-left*="_xs-8"] {
margin-left: 66.66667%; }
[class~="grid"] > [data-push-left*="_xs-9"],
[class*="grid-"] > [data-push-left*="_xs-9"],
[class*="grid_"] > [data-push-left*="_xs-9"] {
margin-left: 75%; }
[class~="grid"] > [data-push-left*="_xs-10"],
[class*="grid-"] > [data-push-left*="_xs-10"],
[class*="grid_"] > [data-push-left*="_xs-10"] {
margin-left: 83.33333%; }
[class~="grid"] > [data-push-left*="_xs-11"],
[class*="grid-"] > [data-push-left*="_xs-11"],
[class*="grid_"] > [data-push-left*="_xs-11"] {
margin-left: 91.66667%; }
[class~="grid"] > [data-push-right*="_xs-0"],
[class*="grid-"] > [data-push-right*="_xs-0"],
[class*="grid_"] > [data-push-right*="_xs-0"] {
margin-right: 0; }
[class~="grid"] > [data-push-right*="_xs-1"],
[class*="grid-"] > [data-push-right*="_xs-1"],
[class*="grid_"] > [data-push-right*="_xs-1"] {
margin-right: 8.33333%; }
[class~="grid"] > [data-push-right*="_xs-2"],
[class*="grid-"] > [data-push-right*="_xs-2"],
[class*="grid_"] > [data-push-right*="_xs-2"] {
margin-right: 16.66667%; }
[class~="grid"] > [data-push-right*="_xs-3"],
[class*="grid-"] > [data-push-right*="_xs-3"],
[class*="grid_"] > [data-push-right*="_xs-3"] {
margin-right: 25%; }
[class~="grid"] > [data-push-right*="_xs-4"],
[class*="grid-"] > [data-push-right*="_xs-4"],
[class*="grid_"] > [data-push-right*="_xs-4"] {
margin-right: 33.33333%; }
[class~="grid"] > [data-push-right*="_xs-5"],
[class*="grid-"] > [data-push-right*="_xs-5"],
[class*="grid_"] > [data-push-right*="_xs-5"] {
margin-right: 41.66667%; }
[class~="grid"] > [data-push-right*="_xs-6"],
[class*="grid-"] > [data-push-right*="_xs-6"],
[class*="grid_"] > [data-push-right*="_xs-6"] {
margin-right: 50%; }
[class~="grid"] > [data-push-right*="_xs-7"],
[class*="grid-"] > [data-push-right*="_xs-7"],
[class*="grid_"] > [data-push-right*="_xs-7"] {
margin-right: 58.33333%; }
[class~="grid"] > [data-push-right*="_xs-8"],
[class*="grid-"] > [data-push-right*="_xs-8"],
[class*="grid_"] > [data-push-right*="_xs-8"] {
margin-right: 66.66667%; }
[class~="grid"] > [data-push-right*="_xs-9"],
[class*="grid-"] > [data-push-right*="_xs-9"],
[class*="grid_"] > [data-push-right*="_xs-9"] {
margin-right: 75%; }
[class~="grid"] > [data-push-right*="_xs-10"],
[class*="grid-"] > [data-push-right*="_xs-10"],
[class*="grid_"] > [data-push-right*="_xs-10"] {
margin-right: 83.33333%; }
[class~="grid"] > [data-push-right*="_xs-11"],
[class*="grid-"] > [data-push-right*="_xs-11"],
[class*="grid_"] > [data-push-right*="_xs-11"] {
margin-right: 91.66667%; }
[class~="grid"] [class*="_xs-first"],
[class*="grid-"] [class*="_xs-first"],
[class*="grid_"] [class*="_xs-first"] {
order: -1; }
[class~="grid"] [class*="_xs-last"],
[class*="grid-"] [class*="_xs-last"],
[class*="grid_"] [class*="_xs-last"] {
order: 1; } }

/************************
HIDING COLS
*************************/
@media (max-width: 80em) {
[class*="lg-hidden"] {
display: none; } }

@media (max-width: 64em) {
[class*="md-hidden"] {
display: none; } }

@media (max-width: 48em) {
[class*="sm-hidden"] {
display: none; } }

@media (max-width: 36em) {
[class*="xs-hidden"] {
display: none; } }

/*# sourceMappingURL=gridlex.css.map */
.container{
    max-width: 90%;
    margin: 0 auto;
}

`;
