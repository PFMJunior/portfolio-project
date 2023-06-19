import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    img {
        max-width: 20rem;
        height: auto;
        border-radius: 50%;
    }
`

export const IconsContacts = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    svg {
        color: var(--text-color);
        cursor: pointer;
        font-size: 3.5rem;
    }
`

export const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h1 {
        color: white;
        font-size: 3rem;
    }

    p {
        color: white;
        font-size: 1.5rem;
        font-weight: 300;

        line-height: 2.4rem;

        text-align: center;
        width: 55%;
    }
`