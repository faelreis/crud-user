import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: #F0F0F0;
        color: #101010;
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }
`

export default Global;