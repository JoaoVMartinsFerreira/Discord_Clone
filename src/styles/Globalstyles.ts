import { createGlobalStyle } from 'styled-components';
import Aksara from '../font/font';

export default createGlobalStyle`
${Aksara};
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html, border-style, #root {
    max-height: 100vh;
    max-width:100vw;

    height: 100%;
    width: 100%;

}*, button, input {
    border: 0;
    background: none;
     font-family:${Aksara};
}
html {
    background: var(--icon-wrapper);
}
:root {
    --primary: #2E3036;
    --gray: #8E9297;
    --white: #FFFFFF;
    --green: #43B581;
    --dark-gray:#202225;
    --icon-wrapper:#36393F;
    --light-gray:#4F545C;
    --fadded-gray:#B9BBBE;
    --medium-gray:#292B2F;
    --solid-gray:  #72767D;

}
`;
