/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { ProjectsSection, InfiniteMenuWrapper, HoverOverlay, HoverText } from "./Home.styles";

import ScrollFloat from "@/effects/ScrollFloat";
import InfiniteMenu from "@/effects/InfiniteMenu";

interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

export function Projects() {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const items: MenuItem[] = [
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
      link: 'https://google.com/',
      title: 'Item 1',
      description: 'Descrição do Projeto 1'
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

      <InfiniteMenuWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <InfiniteMenu 
          items={items} 
          onActiveItemChange={setActiveItem} // Passa callback para pegar o item ativo
        />

        {isHovered && activeItem && (
          <HoverOverlay>
            <HoverText>
              {activeItem.description || 'Projeto sem descrição.'}
            </HoverText>
          </HoverOverlay>
        )}
      </InfiniteMenuWrapper>

    </ProjectsSection>
  );
}
