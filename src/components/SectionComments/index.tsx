import * as Styled from "./styled";

// import noUser from "../../assets/imagens/24.jpg";
import Reveal from "../Reveal";
import Hr from "../Hr";
import { useEffect, useState } from "react";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";

interface IComment {
  name: string;
  avatar: string;
  description: string;
}

export default function SectionComments() {
  const [listComments, setListComments] = useState<IComment[] | null>(null);

  useEffect(() => {
    async function getCommit() {
      try {
        const getData = await getDocs(collection(db, "/data/mt/comments"));
        const list: IComment[] = [];
        getData.docChanges().forEach((doc: DocumentData) => {
          list.push(doc.doc.data());
        });
        setListComments(list);
      } catch (e) {
        console.error("Error ", e);
      }
    }

    getCommit();
  }, []);

  return (
    <>
      {listComments === null && (
        <Styled.LoadingCommentsContainer>
          <Hr directionX={true} />

          <section className="box">
            <div />
            <div />
            <div />
          </section>
        </Styled.LoadingCommentsContainer>
      )}
      {listComments !== null && listComments.length > 0 && (
        <Styled.Container>
          <Hr directionX={true} />

          <Styled.ContainerContent className="box">
            {listComments.map((resp) => (
              <Reveal delay={0.05}>
                <article>
                  <p>
                    "{resp.description}"
                  </p>

                  <div>
                    <img src={resp.avatar} alt="foto de usuário" />
                    <strong>{resp.name}</strong>
                  </div>
                </article>
              </Reveal>
            ))}

          </Styled.ContainerContent>
        </Styled.Container>
      )}
    </>
  );
}
