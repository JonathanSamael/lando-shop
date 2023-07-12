import { styled } from "styled-components";

export const MenuBar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
    height: 8vh;
    position: fixed;
    top: 0;
    background-color: #9afbda47;
`;

export const NavBarItem = styled.li`
    list-style: none;
    letter-spacing: .1rem;
`;