/** @jsxImportSource @emotion/react */
import { ProjectsSection } from "./Home.styles";

import ScrollFloat from "@/effects/ScrollFloat";
import InfiniteMenu from "@/effects/InfiniteMenu";

import analyzerImg from '@assets/imgRight.png';

interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

export function Projects() {

  const items: MenuItem[] = [
    {
      image: analyzerImg,
      link: 'https://analyzer-sage.vercel.app/',
      title: 'Analyzer',
      description: 'Projeto com foco em análise de sites para melhor perfomance.'
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'Descrição do Projeto 2'
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'Descrição do Projeto 3'
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'Descrição do Projeto 4'
    }
  ];

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

     
        <InfiniteMenu 
          items={items}
        />

    </ProjectsSection>
  );
}
