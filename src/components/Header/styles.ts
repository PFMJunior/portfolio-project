import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    background-color: rgb(63, 63, 63);

    padding: 20px 0;

    width: 100%;

    a {
        color: var(--text-color);
        cursor: pointer;

        font-size: 20px;
        font-weight: 400;

        text-decoration: none;
    }
`