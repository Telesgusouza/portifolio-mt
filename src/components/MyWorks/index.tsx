import * as Styled from "./styled";

import img1 from "../../assets/imagens/sun.jpg";
import img2 from "../../assets/imagens/arte_rosas.jpg";
import img3 from "../../assets/imagens/astronauta dia chuvoso.jpg";
import img4 from "../../assets/imagens/casa_no_mato.jpg";
import img5 from "../../assets/imagens/caveira_de_tim.jpg";
import img6 from "../../assets/imagens/briga_de_dog.jpg";

import icon from "../../assets/icons/iconM_6.png";
import Reveal from "../Reveal";
import { useState } from "react";
import Hr from "../Hr";

export default function MyWorks() {
  const [showDesign, setShowDesign] = useState(false);

  return (
    <Styled.Container className="box">
      <Hr />
      {showDesign && (
        <Styled.ShowDesign>
          <Styled.ContainerButton>
            <button onClick={() => setShowDesign(false)}>Voltar</button>
          </Styled.ContainerButton>

          <Reveal duration={.2} >
            <Styled.ShowDesignContent>
              <img src={img1} alt="design" />
              <div>
                <h4>titulo</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit accusamus in consequatur hic asperiores, iusto quod
                  quia? Incidunt obcaecati nobis nam eos error, officiis fugiat
                  sunt explicabo asperiores quasi inventore!
                </p>
              </div>
            </Styled.ShowDesignContent>
          </Reveal>
        </Styled.ShowDesign>
      )}
      <Styled.Filters>
        <ul>
          <li>todos</li>
          <li>Banner</li>
          <li>icone</li>
          <li>menu</li>
          <li>post</li>
        </ul>
      </Styled.Filters>
      <h4>todos</h4>

      <Styled.ContainerWorks>
        <ul>
          <Reveal initialY={50} delay={0.1} duration={0.3}>
            <li onClick={() => setShowDesign(true)}>
              <img src={img1} alt="design" />
            </li>
          </Reveal>
          <Reveal initialY={50} delay={0.1} duration={0.3}>
            <li onClick={() => setShowDesign(true)}>
              <img src={img4} alt="design" />
            </li>
          </Reveal>
        </ul>
        <ul>
          <Reveal initialY={50} delay={0.1} duration={0.3}>
            <li onClick={() => setShowDesign(true)}>
              <img src={img2} alt="design" />
            </li>
          </Reveal>
          <Reveal initialY={50} delay={0.1} duration={0.3}>
            <li onClick={() => setShowDesign(true)}>
              <img src={img4} alt="design" />
            </li>
          </Reveal>
          <Reveal initialY={50} delay={0.1} duration={0.3}>
            <li onClick={() => setShowDesign(true)}>
              <img src={img5} alt="design" />
            </li>
          </Reveal>
        </ul>
        <ul>
          {" "}
          <Reveal initialY={50} delay={0.1} duration={0.3}>
            <li onClick={() => setShowDesign(true)}>
              <img src={img3} alt="design" />
            </li>
          </Reveal>
          <Reveal initialY={50} delay={0.1} duration={0.3}>
            <li onClick={() => setShowDesign(true)}>
              <img src={icon} alt="design" />
            </li>
          </Reveal>
          <Reveal initialY={50} delay={0.1} duration={0.3}>
            <li onClick={() => setShowDesign(true)}>
              <img src={img6} alt="design" />
            </li>
          </Reveal>
        </ul>
      </Styled.ContainerWorks>

      <Styled.ForwardOrBack>
        <ul>
          <li>Todos</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Styled.ForwardOrBack>
    </Styled.Container>
  );
}
