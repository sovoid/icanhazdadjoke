/* eslint-disable max-len */
module.exports = (joke) => {
  const jokeCard = `
    <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">
                <style>
                    @font-face {
                        font-family: 'VT323';
                        font-style: normal;
                        font-weight: 400;
                        src: url(https://fonts.gstatic.com/s/vt323/v12/pxiKyp0ihIEF2isfFJA.ttf) format('truetype');
                    }
                    * {
                        box-sizing: border-box;
                    }
                    body {
                        background: #383838;
                        color: #14fdce;
                        font-family: 'VT323';
                        font-size: 24px;
                        -webkit-font-smoothing: none;
                        line-height: 1.2;
                    }
                    h1 {
                        font-size: 4rem;
                        margin-bottom: 1rem;
                        text-transform: uppercase;
                    }
                    p {
                        margin-bottom: 2rem;
                    }
                    a,
                    a:visited {
                        border-bottom: 0.2rem solid #14fdce;
                        color: #14fdce;
                        text-decoration: none;
                    }
                    a:active,
                    a:focus,
                    a:hover {
                        background-color: #14fdce;
                        color: #031e11;
                    }
                    .piece {
                        display: block;
                        height: 100%;
                        left: 0;
                        top: 0;
                        width: 100%;
                    }
                    .noclick {
                        pointer-events: none;
                    }
                    .frame {
                        background-color: transparent;
                        border-radius: 2rem;
                        border: 1rem solid;
                        border-bottom-color: #121212;
                        border-left-color: #080808;
                        border-right-color: #080808;
                        border-top-color: #020202;
                        box-shadow: inset 0 0 18rem black,
                        inset 0 0 3rem black,
                        0 0 10rem black;
                        height: 96%;
                        position: absolute;
                        top: 2%;
                        left: 2%;
                        width: 96%;
                        pointer-events: none;
                    }
                    .emblem {
                        display: none;
                        position: absolute;
                        left: 50%;
                        bottom: 0;
                        font-size: 2rem;
                        height: 3rem;
                        width: 3rem;
                        text-align: center;
                        color: white;
                        background: -webkit-linear-gradient(#fff, #555);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        text-shadow: 0 0.1rem 0rem rgba(0, 0, 0, 0.4), 0 0 2rem rgba(0, 0, 0, 0.8);
                        transform: translate(-50%);
                    }
                    .output {
                        -webkit-animation: crt-output 10ms infinite;
                                animation: crt-output 10ms infinite;
                        background-color: #031e11;
                        overflow: scroll;
                        position: absolute;
                        padding: 3rem 2rem;
                        pointer-events: auto;
                        text-shadow: 0rem 0.2rem 1rem #0c7b46;
                        z-index: -1;
                    }
                    @-webkit-keyframes crt-output {
                        0% {
                        opacity: 0.9;
                        }
                        50% {
                        opacity: 1;
                        }
                    }
                    @keyframes crt-output {
                        0% {
                        opacity: 0.9;
                        }
                        50% {
                        opacity: 1;
                        }
                    }
                    .scanlines {
                        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.6));
                        background-size: 100% 0.3rem;
                        border-radius: 2rem;
                        position: absolute;
                    }
                    .glow {
                        -webkit-animation: crt-glow 60s infinite;
                                animation: crt-glow 60s infinite;
                        background: radial-gradient(circle at center, #1bd459 0%, rgba(27, 212, 89, 0.88) 58%, rgba(21, 235, 92, 0.57) 80%, rgba(19, 94, 29, 0.27) 93%, rgba(10, 23, 12, 0) 100%);
                        opacity: 0.15;
                        pointer-events: none;
                        position: fixed;
                    }
                    @-webkit-keyframes crt-glow {
                        0% {
                        opacity: 0.1;
                        }
                        50% {
                        opacity: 0.2;
                        }
                    }
                    @keyframes crt-glow {
                        0% {
                        opacity: 0.1;
                        }
                        50% {
                        opacity: 0.2;
                        }
                    }
                    ::-moz-selection {
                        background-color: #14fdce;
                        color: #031e11;
                    }
                    ::selection {
                        background-color: #14fdce;
                        color: #031e11;
                    }
                    @font-face {
                        font-family: 'uuxsl';
                        src: url('https://i.icomoon.io/public/188ac2dd2d/VOX/uuxsl.eot');
                    }
                    @font-face {
                        font-family: 'uuxsl';
                        src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SA1AAAAC8AAAAYGNtYXAaL8yjAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5ZiGj2jMAAAFwAAAA7GhlYWQEpbQaAAACXAAAADZoaGVhB6kDxgAAApQAAAAkaG10eAYAABkAAAK4AAAAFGxvY2EAKACKAAACzAAAAAxtYXhwAA0AMgAAAtgAAAAgbmFtZeGQWB4AAAL4AAABM3Bvc3QAAwAAAAAELAAAACAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADmJgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIOYm//3//wAAAAAAIOYm//3//wAB/+MZ3gADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAABwAZ/8YD5wO1AAUADQAVABsAIQAnAC8AABMVFzcnNQMFERcnNzU3ARElBxcVFwcvARUHFzcDJwcVNxcHFzc1JwcBBycHJxUFJeFVb1UZ/uJwAslVAkL+4m5VygJYcFVvVs1TU1NTplNTU1MBclXKylUBHwEfAbdnMUExZwG9pf61QWh04zH+UQFLpUEx4nVoNEFoMUExAcAwMHwxMNAxMWkvMP67MXV1MXympwAAAAABAAAAAQAAwDym7F8PPPUACwQAAAAAANDPt9EAAAAA0M+30QAA/8YD5wO1AAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAPnAAEAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAgAAAAQAABkAAAAAAAoAFAAeAHYAAQAAAAUAMAAHAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAoAAAABAAAAAAACAA4AOQABAAAAAAADAAoAIAABAAAAAAAEAAoARwABAAAAAAAFABYACgABAAAAAAAGAAUAKgABAAAAAAAKADQAUQADAAEECQABAAoAAAADAAEECQACAA4AOQADAAEECQADAAoAIAADAAEECQAEAAoARwADAAEECQAFABYACgADAAEECQAGAAoALwADAAEECQAKADQAUQB1AHUAeABzAGwAVgBlAHIAcwBpAG8AbgAgADEALgAwAHUAdQB4AHMAbHV1eHNsAHUAdQB4AHMAbABSAGUAZwB1AGwAYQByAHUAdQB4AHMAbABGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=) format('truetype'), url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASYAAsAAAAABEwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIDUGNtYXAAAAFoAAAATAAAAEwaL8yjZ2FzcAAAAbQAAAAIAAAACAAAABBnbHlmAAABvAAAAOwAAADsIaPaM2hlYWQAAAKoAAAANgAAADYEpbQaaGhlYQAAAuAAAAAkAAAAJAepA8ZobXR4AAADBAAAABQAAAAUBgAAGWxvY2EAAAMYAAAADAAAAAwAKACKbWF4cAAAAyQAAAAgAAAAIAANADJuYW1lAAADRAAAATMAAAEz4ZBYHnBvc3QAAAR4AAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5iYDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAA4AAAACgAIAAIAAgABACDmJv/9//8AAAAAACDmJv/9//8AAf/jGd4AAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAcAGf/GA+cDtQAFAA0AFQAbACEAJwAvAAATFRc3JzUDBREXJzc1NwERJQcXFRcHLwEVBxc3AycHFTcXBxc3NScHAQcnBycVBSXhVW9VGf7icALJVQJC/uJuVcoCWHBVb1bNU1NTU6ZTU1NTAXJVyspVAR8BHwG3ZzFBMWcBvaX+tUFodOMx/lEBS6VBMeJ1aDRBaDFBMQHAMDB8MTDQMTFpLzD+uzF1dTF8pqcAAAAAAQAAAAEAAMA8puxfDzz1AAsEAAAAAADQz7fRAAAAANDPt9EAAP/GA+cDtQAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAAD5wABAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAIAAAAEAAAZAAAAAAAKABQAHgB2AAEAAAAFADAABwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAKAAAAAQAAAAAAAgAOADkAAQAAAAAAAwAKACAAAQAAAAAABAAKAEcAAQAAAAAABQAWAAoAAQAAAAAABgAFACoAAQAAAAAACgA0AFEAAwABBAkAAQAKAAAAAwABBAkAAgAOADkAAwABBAkAAwAKACAAAwABBAkABAAKAEcAAwABBAkABQAWAAoAAwABBAkABgAKAC8AAwABBAkACgA0AFEAdQB1AHgAcwBsAFYAZQByAHMAaQBvAG4AIAAxAC4AMAB1AHUAeABzAGx1dXhzbAB1AHUAeABzAGwAUgBlAGcAdQBsAGEAcgB1AHUAeABzAGwARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('woff');
                        font-weight: normal;
                        font-style: normal;
                    }
                    ::-moz-selection [class^="icon-"], ::-moz-selection [class*=" icon-"] {
                        font-family: 'uuxsl';
                        speak: none;
                        font-style: normal;
                        font-weight: normal;
                        font-variant: normal;
                        text-transform: none;
                        line-height: 1;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                    ::selection [class^="icon-"],
                    ::selection [class*=" icon-"] {
                        font-family: 'uuxsl';
                        speak: none;
                        font-style: normal;
                        font-weight: normal;
                        font-variant: normal;
                        text-transform: none;
                        line-height: 1;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                    ::-moz-selection .icon-information:before {
                        content: "\e626";
                    }
                    ::selection .icon-information:before {
                        content: "\e626";
                    }
                    ::-moz-selection .noisy {
                        background-image: url(data:image/png;base64,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);
                    }
                    ::selection .noisy {
                        background-image: url(data:image/png;base64,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);
                    }
                </style>
                <body class="noisy"></body>
                    <div class="emblem"><span class="icon-information"></span></div>
                        <div class="frame">
                            <div class="piece output">
                                <h1>Joke of the Day</h1>
                                <p>${joke}</p>
                            </div>
                            <div class="piece scanlines noclick"></div>
                            <div class="piece glow noclick"></div>
                        </div>
                    </div>
        </foreignObject>
    </svg>
    `;

  return jokeCard;
};
