import * as Styled from "./style";
import noUser from "../../assets/imagens/24.jpg";
import Reveal from "../Reveal";
import Hr from "../Hr";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../../config/firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";

export default function AboutMe() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    async function getData() {
      try {
        const getData = await getDoc(doc(db, "/data/aboutme"));
        const getPhoto = await getDownloadURL(ref(storage, "/data/aboutme"));
        setPhoto(getPhoto);
        setDescription(getData.data()?.description);
      } catch (e) {
        console.error("Error ", e);
      }
    }

    getData();
  }, []);

  return (
    <Styled.Container className="box" id="aboutme">
      <Hr directionX={true} />
      <Reveal>
        <article>
          {photo === null ? (
            <>
              <Styled.Loading />
            </>
          ) : (
            <>
              <img
                src={photo.trim().length > 0 ? photo : noUser}
                alt="foto sobre mim"
              />
            </>
          )}

          <div>
            <h3>Sobre mim</h3>
            <p>{description}</p>
          </div>
        </article>
      </Reveal>
    </Styled.Container>
  );
}
