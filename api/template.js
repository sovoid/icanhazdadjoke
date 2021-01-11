/* eslint-disable max-len */
module.exports = (joke) => {
  const jokeCard = `
    <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">
                <style>
                    body {
                    padding: 3rem;
                    line-height: 1.314;
                    }

                    ::-moz-selection {
                    background: rgba(195, 239, 143, 0.5);
                    }

                    ::selection {
                    background: rgba(195, 239, 143, 0.5);
                    }

                    .glitch {
                    min-height: 100vh;
                    background: #252926;
                    color: #c3ef8f;
                    font-family: Monaco, "Courier New", Courier, monospace;
                    -webkit-animation: crt 5ms infinite;
                            animation: crt 5ms infinite;
                    text-shadow: 0 0 1px #c3ef8f, 1px 1px 1px blue, -1px -1px 1px red;
                    }
                    .glitch::after {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background: repeating-linear-gradient(top, transparent 0px, transparent 2px, rgba(0, 0, 0, 0.2) 2px, rgba(0, 0, 0, 0.2) 4px);
                    background-size: 100% 4px;
                    box-shadow: inset 0 0 10em rgba(0, 0, 0, 0.5), inset 0 0 2em rgba(0, 0, 0, 0.1);
                    z-index: -1;
                    content: "";
                    }
                    .glitch h2, .glitch h3, .glitch h4 {
                    font-weight: 400;
                    color: #c3ef8f;
                    }
                    .glitch a {
                    color: #c3ef8f;
                    background: rgba(195, 239, 143, 0.5);
                    border-color: rgba(195, 239, 143, 0.5);
                    }
                    .glitch a:hover {
                    border-color: transparent !important;
                    }

                    .container {
                    position: relative;
                    z-index: 99999;
                    width: 100%;
                    height: 100 .container;
                    }
                    .container * {
                    filter: blur(3px);
                    -webkit-animation: 5s distort 6s infinite alternate, blur 30ms infinite, flick 50ms infinite, jump 50ms infinite;
                            animation: 5s distort 6s infinite alternate, blur 30ms infinite, flick 50ms infinite, jump 50ms infinite;
                    }

                    @-webkit-keyframes crt {
                    28% {
                        background: #232624;
                    }
                    30% {
                        background: #272c28;
                    }
                    33% {
                        background: #232624;
                    }
                    34% {
                        background: #272c28;
                    }
                    35% {
                        background: #202421;
                    }
                    }

                    @keyframes crt {
                    28% {
                        background: #232624;
                    }
                    30% {
                        background: #272c28;
                    }
                    33% {
                        background: #232624;
                    }
                    34% {
                        background: #272c28;
                    }
                    35% {
                        background: #202421;
                    }
                    }
                    @-webkit-keyframes blur {
                    0% {
                        filter: blur(1px);
                        opacity: 0.8;
                    }
                    50% {
                        filter: blur(1px);
                        opacity: 1;
                    }
                    100% {
                        filter: blur(1px);
                        opacity: 0.8;
                    }
                    }
                    @keyframes blur {
                    0% {
                        filter: blur(1px);
                        opacity: 0.8;
                    }
                    50% {
                        filter: blur(1px);
                        opacity: 1;
                    }
                    100% {
                        filter: blur(1px);
                        opacity: 0.8;
                    }
                    }
                    @-webkit-keyframes flick {
                    50% {
                        left: 2px;
                    }
                    51% {
                        left: 0;
                    }
                    }
                    @keyframes flick {
                    50% {
                        left: 2px;
                    }
                    51% {
                        left: 0;
                    }
                    }
                    @-webkit-keyframes jump {
                    30% {
                        top: 10px;
                    }
                    31% {
                        top: 0;
                    }
                    }
                    @keyframes jump {
                    30% {
                        top: 10px;
                    }
                    31% {
                        top: 0;
                    }
                    }
                    @-webkit-keyframes distort {
                    10% {
                        opacity: 1;
                        top: 0;
                        left: 0;
                        transform: scale(1, 1);
                        transform: skew(0, 0);
                    }
                    11% {
                        opacity: 0.8;
                        top: 0px;
                        left: -100px;
                        transform: scale(1, 1.2);
                        transform: skew(50deg, 0);
                    }
                    12% {
                        opacity: 0.2;
                        top: 0px;
                        left: 100px;
                        transform: scale(1, 1.2);
                        transform: skew(-80deg, 0);
                    }
                    13% {
                        opacity: 1;
                        top: 0;
                        left: 0;
                        transform: scale(1, 1);
                        transform: skew(0, 0);
                    }
                    }
                    @keyframes distort {
                    10% {
                        opacity: 1;
                        top: 0;
                        left: 0;
                        transform: scale(1, 1);
                        transform: skew(0, 0);
                    }
                    11% {
                        opacity: 0.8;
                        top: 0px;
                        left: -100px;
                        transform: scale(1, 1.2);
                        transform: skew(50deg, 0);
                    }
                    12% {
                        opacity: 0.2;
                        top: 0px;
                        left: 100px;
                        transform: scale(1, 1.2);
                        transform: skew(-80deg, 0);
                    }
                    13% {
                        opacity: 1;
                        top: 0;
                        left: 0;
                        transform: scale(1, 1);
                        transform: skew(0, 0);
                    }
                    }
                    @-webkit-keyframes appear {
                    0% {
                        filter: blur(5px);
                        opacity: 0.85;
                    }
                    50% {
                        filter: blur(3px);
                        opacity: 0.85;
                    }
                    100% {
                        filter: blur(4px);
                        opacity: 0.85;
                    }
                    }
                    @keyframes appear {
                    0% {
                        filter: blur(5px);
                        opacity: 0.85;
                    }
                    50% {
                        filter: blur(3px);
                        opacity: 0.85;
                    }
                    100% {
                        filter: blur(4px);
                        opacity: 0.85;
                    }
                    }
                    @-webkit-keyframes snapped {
                    0% {
                        filter: blur(5px);
                        opacity: 0.85;
                    }
                    50% {
                        filter: blur(3px);
                        opacity: 0.85;
                    }
                    100% {
                        filter: blur(4px);
                        opacity: 0.85;
                    }
                    }
                    @keyframes snapped {
                    0% {
                        filter: blur(5px);
                        opacity: 0.85;
                    }
                    50% {
                        filter: blur(3px);
                        opacity: 0.85;
                    }
                    100% {
                        filter: blur(4px);
                        opacity: 0.85;
                    }
                    }
                    @-webkit-keyframes beersip {
                    0% {
                        top: 0;
                    }
                    10% {
                        top: -10%;
                    }
                    12% {
                        top: 0;
                    }
                    54% {
                        top: 0;
                    }
                    55% {
                        top: -30%;
                    }
                    56% {
                        top: 0;
                    }
                    86% {
                        top: 0;
                    }
                    87% {
                        top: -60%;
                    }
                    88% {
                        top: 0;
                    }
                    }
                    @keyframes beersip {
                    0% {
                        top: 0;
                    }
                    10% {
                        top: -10%;
                    }
                    12% {
                        top: 0;
                    }
                    54% {
                        top: 0;
                    }
                    55% {
                        top: -30%;
                    }
                    56% {
                        top: 0;
                    }
                    86% {
                        top: 0;
                    }
                    87% {
                        top: -60%;
                    }
                    88% {
                        top: 0;
                    }
                    }
                </style>
                <body class="glitch hacktheplanet">
                    <div class="container">
                        <h1>> Joke of the Day</h1>
                        <h2>> Joke of the Day</h2>
                        <a href="">test</a>
                        <hr />
                        <p>${joke}</p>
                    </div>
                </body>
            </div>
    </foreignObject>
</svg>



    `;

  return jokeCard;
};
