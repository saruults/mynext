import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
const Div = styled.div`
            overflow: auto;
            padding: 10px;
           
        .floating{
        right: 30px;
        padding: 0;
        position: fixed;
        flex-direction: row;
        width: 110px;
        height: 50px;
        display: flex;
        justify-content: space-evenly;
        background:  ${props=> props.theme.floatingbg};
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); 
        transition: all 0.3s; 
        border-radius: 20px 20px 20px 20px;
        }
        .floating .svg1{
          margin-top: 5px;
          color: var(--mypink);   
          cursor: pointer;
          width: 2rem;
          min-width: 2rem;
          display: ${props=> props.theme.sunicon};
        }
        .floating .svg2{
          cursor: pointer;
          margin-top: 5px;
          color: yellow;
          width: 2rem;
          min-width: 2rem;
          display: ${props=> props.theme.moonicon};
        }
        .floating .svg3{
          cursor: pointer;
          margin-top: 5px;
          width: 2rem;
          min-width: 2rem;
        }
        `
const TopNavbar = () => { 
  const darkMode = useDarkMode(false);
  return (
    <Div>
    <div className="floating" >
    <svg    onClick={darkMode.toggle} 
            aria-hidden="true" 
            focusable="false" 
            data-prefix="fas" 
            data-icon="moon" 
            className="svg-inline--fa fa-moon fa-w-16 svg1" 
            role="img" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"><path 
            fill="currentColor" 
            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
    <svg    onClick={darkMode.toggle} 
            aria-hidden="true" 
            focusable="false" 
            data-prefix="fas" 
            data-icon="sun" 
            className="svg-inline--fa fa-sun fa-w-16 svg2" 
            role="img" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"><path 
            fill="currentColor" 
            d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
    <svg    aria-hidden="true" 
            focusable="false" 
            data-prefix="fas" 
            data-icon="search" 
            className="svg-inline--fa fa-search fa-w-16 svg3" 
            role="img" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"><path 
            fill="currentColor" 
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
    </div>
    </Div>
  );
};

export default TopNavbar;