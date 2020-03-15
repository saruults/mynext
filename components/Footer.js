import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
const Div = styled.div`
	width: 95%;
	text-align: center;
	bottom: 0;
	margin: auto;
	p {
		font-size: 10px;
	}
	hr {
		border: none;
		border-bottom: 1.5px dashed;
	}
`;

const Footer = () => (
	<Div>
		<hr />
		<p>Copyright © 2020 GG.mn. All Rights Reserved</p>
		<p>
			Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated
			third parties. GG.mn is not responsible for the accuracy, compliance, copyright, legality, decency, or any
			other aspect of the content of other linked sites. If you have any legal issues please contact the
			appropriate media file owners or host sites.
		</p>
	</Div>
);
export default Footer;
