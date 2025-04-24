import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color:rgb(0, 0, 0);
    color: white;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Nav = styled.nav`
    display: flex;
    gap: 1em;
`;

const StyledLink = styled(Link)`
    color: #BADA55;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <StyledLink to="/palpite">Palpite</StyledLink>
                <StyledLink to="/historico">Histórico</StyledLink>
            </Nav>
        </HeaderContainer>
    );
};