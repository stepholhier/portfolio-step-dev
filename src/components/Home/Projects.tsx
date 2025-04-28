import { ProjectsSection } from "./Home.styles";

import ScrollFloat from "@/effects/ScrollFloat";
import InfiniteMenu from "@/effects/InfiniteMenu";

export function Projects(){
    
    const items = [
        {
          image: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
          link: 'https://google.com/',
          title: 'Item 1',
          description: 'This is pretty cool, right?'
        },
        {
          image: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
          link: 'https://google.com/',
          title: 'Item 2',
          description: 'This is pretty cool, right?'
        },
        {
          image: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
          link: 'https://google.com/',
          title: 'Item 3',
          description: 'This is pretty cool, right?'
        },
        {
          image: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
          link: 'https://google.com/',
          title: 'Item 4',
          description: 'This is pretty cool, right?'
        }
      ];
      

    return(

        <ProjectsSection>

            <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            >
            Projetos
            </ScrollFloat>

            <InfiniteMenu items={items}/>


        </ProjectsSection>
    );
}