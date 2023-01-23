import styled from 'styled-components'

export const FilterWrapper = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.colorLightGray};
  position: relative;
  display: flex;
  align-items: center;
  input {
    -webkit-appearance: none;
    border: none;
    outline: none;
    line-height: 25px;
    padding: 3px;
    &:focus {
      outline: none;
    }
  }
  button {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB80lEQVR4nMWWPS9EURCGH1rLP5D42FhaCQ0qhY5GNj7iRwgKCoUIfwVZkSg0Vqi2VFAoJD4SUSg2JAh2ZeUkcxMZs+vsvWd5k2lu3nln7jlzZgb80A+sA4fAJfAKFIErIA+sAkMERhMwCVwAFU87BWaA5qTBO4BCHYG1nQDtcYOPAA8Jgkfmrmg0TvA3Q+wd2AKmgQzQIpaRb9vC0X7PwHA9x/5giOSALg//bmDX8H8E0j4FV1COZWCB+rEIfCqtI4lRFZNG5nGCR1gy9OZqOVwYx54Ue8YTrdpkKqrg3H0mRadRmAMWcV2RXLWHwo7SXrNIh4o0FTCBWaV9YJEuFaknYAIZpX1nkV4UqTVgAq1Gd/yBoiKlAibQprSfLNJ1A6+gV2nfWKS8IrneHgpzPkW4qkhusIRCTmlvWqShBjUid5UfSts1PROniuimWhK4wbOvNM9qOcwYw8NNtbhYMfRcjKpoljXqu8OnTLV6/3zZGMfHv41jZIfTPaEiUy3teef62CObxxOjskZpgQ8ZLLPytlNiffLUckbBfbcSkPVNYljWqEpgK8sPeCEta1TcYMdy7KUkJ9Ekx6ufaC07l2qPCi6bNIkIg7JMuFZ6L8ValN7uvm3UaDLBkkiCaklM/HcSt3+ZgJWEOZ4bjXH5cxd87AvRwlNa6C4bOgAAAABJRU5ErkJggg==');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60%;
    -webkit-appearance: none;
    border: none;
    background-color: transparent;
    width: 25px;
    height: 25px;
    padding: 0;
    font-size: 0;
    cursor: pointer;
  }
`
