import * as Styled from "./style";
import noUser from "../../assets/imagens/24.jpg";
import Reveal from "../Reveal";
import Hr from "../Hr";

export default function AboutMe() {
  return (
    <Styled.Container className="box">
      {/* <hr /> */}
      <Hr directionX={true} />
      <Reveal>
        <article>
          <img src={noUser} alt="foto sobre mim" />
          <div>
            <h3>Sobre mim</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quidem sint possimus similique. Deserunt consequuntur vel culpa
              animi, rerum optio numquam accusamus architecto. ipsum nihil in
              delectus. Error quae debitis aliquid numquam laudantium nesciunt
              aut cumque recusandae! Debitis fuga vitae repellat fugiat nisi
              exercitationem aut voluptatum laudantium, adipisci iste a.
            </p>
          </div>
        </article>
      </Reveal>
    </Styled.Container>
  );
}
