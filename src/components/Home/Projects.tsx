/** @jsxImportSource @emotion/react */
import { ProjectsSection } from "./Home.styles";

import ScrollFloat from "@/effects/ScrollFloat";


export function Projects() {

  
  return (
    <ProjectsSection id="projetos">

      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
        Projetos
      </ScrollFloat>

    

    </ProjectsSection>
  );
}
