import { createGlobalStyle } from 'styled-components'
import { ThemeTypes } from './theme';

type GlobalProps = {
  theme: ThemeTypes
}

export default createGlobalStyle<GlobalProps>`
    html, body {
        width: 100%;
        margin: 0;
        background-color: ${({ theme }) => theme.colors.colorWhite};
        font-family: 'Lato', sans-serif;
        font-size: 12px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.colorDarkGray};
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        position: relative;
    }
    
    a, a:visited {
        color: ${({ theme }) => theme.colors.colorWhite};
    }
    
    button {
        font-family: 'Lato', sans-serif;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    hr[role="separator"] {
        border: 0 none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.colorLightGray};
        margin: 1.5rem 0;
    }

    main {
        padding: 0 1rem;
        margin-top: 2rem;
        overflow: hidden;
    }
    
    main h2,
    main h3,
    main h4 {
        color: var(--color-dark-gray);
        font-weight: 300;
    }
    
    main h2 {
        margin: 0 0 2rem;
        font-size: 2rem;
    }
    
    @media (${({ theme }) => theme.device.tablet}) {
        html, body {
            font-size: 14px;
        }
    }

    @media (${({ theme }) => theme.device.desktop}) {
        html, body {
            font-size: 14px;
        }

        main h2 {
            font-size: 2.5rem;
        }
    }
`