"use client"
import { HeaderContainer } from "./styles";

export function Header() {
    return(
        <HeaderContainer>
            <a href="#">Sobre mim</a>
            <a href="#experiencies">Minhas Experiências</a>
            <a href="#myProjects">Projetos</a>
            <a href="#skills">Conhecimentos</a>
        </HeaderContainer>
    );
}