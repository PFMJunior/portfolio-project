import { FiFigma } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiCss3, DiSass } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiJavascript, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { CardSkill, CardsSkills, ContainerSkills } from "./styles";

export function Skills() {
    return(
        <ContainerSkills id="skills">
            <h1>Conhecimentos</h1>

            <CardsSkills>
                <CardSkill>
                    <AiOutlineHtml5 />
                    <p>HTML5</p>
                </CardSkill>

                <CardSkill>
                    <DiCss3 />
                    <p>CSS3</p>
                </CardSkill>

                <CardSkill>
                    <DiSass />
                    <p>SASS</p>
                </CardSkill>

                <CardSkill>
                    <FiFigma />
                    <p>FIgma</p>
                </CardSkill>

                <CardSkill>
                    <SiStyledcomponents />
                    <p>CSS-IN-JS</p>
                </CardSkill>
                
                <CardSkill>
                    <SiTypescript />
                    <p>TypeScript</p>
                </CardSkill>

                <CardSkill>
                    <SiJavascript />
                    <p>JavaScript</p>
                </CardSkill>
                
                <CardSkill>
                    <FaReact />
                    <p>React.Js</p>
                </CardSkill>
                
                <CardSkill>
                    <TbBrandNextjs />
                    <p>Next.Js</p>
                </CardSkill>
            </CardsSkills>
        </ContainerSkills>
    );
}