import Link from "next/link";
import styled from 'styled-components'
import Card from './Card'
const Main = styled.main`
              display: grid;
              grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
              grid-gap: 40px;
              padding: 60px 0;
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
              }
            .cards {
              grid-column: 2 / span 12;
              display: grid;
              grid-template-columns: repeat(12, minmax(auto, 60px));
              grid-gap: 40px;
            }
            .card {
              border-radius: 5px;
              grid-column-end: span 4;
              display: flex;
              flex-direction: column;
              cursor: pointer;
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            }
            .card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }
            .card img {
              border-radius: 5px 5px 0px 0px;
              width: 100%;
            }
            .card__content {
              padding: 15px;
            }
            .card__title {
              margin-bottom: 20px;
              font-weight:  700;
            }
            .card__info {
              padding-top: 15px;
              display: flex;
              align-self: end;
              align-items: center;
            }
            .card__tag{
              padding: 5px 20px;
              background-color: ${props => props.theme.snavbg};
              border-radius: 5px;
            }
            .card__price {
              margin-left: auto;
              padding: 5px 20px;
              background-color: ${props => props.theme.snavbg};
              border-radius: 20px;
            }
            @media only screen and (max-width: 1000px) {
              .card {
                grid-column-end: span 6;
              }
            }
            @media only screen and (max-width: 700px) {
                grid-gap: 20px;
              .card {
                grid-column-end: span 12;
              }
            }
            @media only screen and (max-width: 500px) {
                grid-template-columns: 10px repeat(6, 1fr) 10px;
                grid-gap: 10px;
              .cards {
                grid-column: 2 / span 6;
                grid-template-columns: repeat(6, 1fr);
                grid-gap: 20px;
              }
              .card {
                grid-column-end: span 6;
              }
    }
        `
const Cards = () => (
  <Main>
    <section className="cards">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
  </section>
  </Main>
);

export default Cards;