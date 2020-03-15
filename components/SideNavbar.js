import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); 
        background-color: ${(props) => props.theme.snavbg};
        position: fixed;
        transition: width 50ms ease;
        .navbar-nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }

        .nav-item {
          width: 100%;
        }

        .nav-item:last-child {
          margin-top: auto;
        }

        .nav-link {
          display: flex;
          align-items: center;
          height: 4rem;
          color: ${(props) => props.theme.navlinkclr};
          text-decoration: none;
          filter: grayscale(100%);
          transition: var(--transition-speed);
        }

        .nav-link:hover {
          filter: grayscale(0%) opacity(1);
          background: ${(props) => props.theme.navlinkhoverbg};
          color: ${(props) => props.theme.navlinkhoverclr};
        }

        .link-text {
          display: none;
          margin-left: 1rem;
        }

        .nav-link svg {
          width: 2rem;
          min-width: 2rem;
          margin: 0 1rem;
        }

        .fa-primary {
          color: var(--mypink);
        }

        .fa-primary{
          transition: var(--transition-speed);
        }

        .logo {
          background: ${(props) => props.theme.navlinkhoverbg};
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.3ch;
          width: 100%;
        }

        .logo svg {
          transform: rotate(0deg);
          transition: transform var(--transition-speed);
        }

        :hover .logo svg {
          transform: ;
        }
        /* Small screens */
        @media only screen and (max-width: 600px) {
            bottom: 0;
            width: 100vw;
            height: 4rem;
          .navbar-nav {
            flex-direction: row;
          }

          .nav-link {
            justify-content: center;
          }

          main {
            margin: 0;
          }
        }

        /* Large screens */
        @media only screen and (min-width: 600px) {
        
            top: 0;
            width: 4rem;
            height: 100vh;

          :hover {
            width: 11rem;
          }

          :hover .link-text {
            display: inline;
          }
        }
  }
`;

const SideNavbar = () => (
	<Nav className="">
		<ul className="navbar-nav">
			<li className="logo">
				<Link href="/">
					<a className="nav-link">
						<span className="link-text">ggmn</span>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="dragon"
							className="svg-inline--fa fa-dragon fa-w-20"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 512"
							className="fa-primary"
						>
							<path
								fill="currentColor"
								d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z"
							/>
						</svg>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/news">
					<a className="nav-link">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="far"
							data-icon="newspaper"
							className="svg-inline--fa fa-newspaper fa-w-18"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512"
							className="fa-primary"
						>
							<path
								fill="currentColor"
								d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"
							/>
						</svg>
						<span className="link-text">Мэдээ</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/games">
					<a className="nav-link">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="steam-symbol"
							className="svg-inline--fa fa-steam-symbol fa-w-14"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							className="fa-primary"
						>
							<path
								fill="currentColor"
								d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z"
							/>
						</svg>
						<span className="link-text">Тоглоом</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<Link href="/software">
					<a className="nav-link">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="desktop"
							className="svg-inline--fa fa-desktop fa-w-18"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512"
							className="fa-primary"
						>
							<path
								fill="currentColor"
								d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"
							/>
						</svg>
						<span className="link-text">Софтвер</span>
					</a>
				</Link>
			</li>
			<li className="nav-item">
				<a className="nav-link">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="at"
						className="svg-inline--fa fa-at fa-w-16"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="fa-primary"
					>
						<path
							fill="currentColor"
							d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"
						/>
					</svg>
					<span className="link-text">Холбоо барих</span>
				</a>
			</li>
		</ul>
	</Nav>
);

export default SideNavbar;
