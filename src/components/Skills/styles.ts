import { styled } from "styled-components";

export const ContainerSkills = styled.section`
    display: flex;
    flex-direction: column;

    h1 {
        color: white;

        font-size: 3rem;
        font-weight: 500;

        margin-top: 10rem;

        text-align: center;
    }
`

export const CardsSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 2rem;

    margin-top: 2rem;
`

export const CardSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    background-color: rgb(63, 63, 63);
    border: 1px solid rgb(63, 63, 63);
    border-radius: 0.5rem;

    padding: 1.5rem 2.5rem;

    svg {
        color: white;
        font-size: 4rem;
    }

    p {
        color: var(--text-color);

        font-size: 1.5rem;
        font-weight: 500;
    }
`