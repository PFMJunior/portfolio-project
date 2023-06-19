import { AboutMe, Container, IconsContacts } from "./styles";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Photo from "../../assets/perfil.jpg";
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export function Contact() {
    return(
        <Container>
            <Image src={Photo} alt="Minha Foto de Perfil" />
            <Typewriter
                options={{
                strings: ['Paulo Montefusco', 'Desenvolvedor Front-End'],
                autoStart: true,
                loop: true,
                skipAddStyles: false
                }}
            />

            <IconsContacts>
                <MdOutlineEmail />
                <FaLinkedinIn onClick={() => window.open("https://www.linkedin.com/in/paulo-montefusco/")} />
                <AiFillGithub onClick={() => window.open("https://github.com/PFMJunior")} />
            </IconsContacts>

            <AboutMe>
                <h1>Sobre Mim</h1>
                <p>
                    Desenvolvedor Front-end com experiência em React.js, Next.js, Redux, JavaScript, TypeScript, Styled Components, Material UI e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis. Também possui experiência em projetos gerenciados por Metodologias Ágeis. Formado em Sistemas de Informação e cursando Especialização em Front-End na Digital House Brasil.
                </p>
            </AboutMe>
        </Container>
    )
}