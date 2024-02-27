import * as Styled from './styled';

import noUser from '../../assets/imagens/24.jpg';

export default function SectionComments() {

    return (
        <Styled.Container>
            <hr />

            <Styled.ContainerContent className='box' >
                <article>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea culpa architecto qui obcaecati labore ipsum debitis quaerat, vero deleniti aut, aliquam hic quasi impedit praesentium. Totam illo id culpa?"</p>
                    
                    <div>
                        <img src={noUser} alt="foto de usuário" />
                        <strong>Leticia Andrade Almeida</strong>
                    </div>
                </article>

                <article>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea culpa architecto qui obcaecati labore ipsum debitis quaerat, vero deleniti aut, aliquam hic quasi impedit praesentium. Totam illo id culpa?"</p>
                    
                    <div>
                        <img src={noUser} alt="foto de usuário" />
                        <strong>Leticia Andrade Almeida</strong>
                    </div>
                </article>

                <article>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea culpa architecto qui obcaecati labore ipsum debitis quaerat, vero deleniti aut, aliquam hic quasi impedit praesentium. Totam illo id culpa?"</p>
                    
                    <div>
                        <img src={noUser} alt="foto de usuário" />
                        <strong>Leticia Andrade Almeida</strong>
                    </div>
                </article>
            </Styled.ContainerContent>

        </Styled.Container>
    )
}