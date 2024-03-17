import * as Styled from "./styled";

import iconInstagrem from "../../assets/icons/instagram.svg";
import iconWhatsapp from "../../assets/icons/whatsapp.svg";
import iconLinkedin from "../../assets/icons/linkedin.svg";
import iconGitHub from "../../assets/icons/github.svg";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";

export default function Footer() {
  const [instagram, setInstagram] = useState<string | null>(null);
  const [linkedin, setLinkedin] = useState<string | null>(null);
  const [whatsapp, setWhatsapp] = useState<string | null>(null);

  const [viewPhoneNumberWhatsapp, setViewPhoneNumberWhatsapp] =
    useState<string>("");

  useEffect(() => {
    async function getSocialMidia() {
      try {
        const getData = await getDoc(doc(db, "/data/socialmidia"));

        setInstagram(
          getData.data()?.instagram ? getData.data()?.instagram : null
        );
        setLinkedin(getData.data()?.linkedin ? getData.data()?.linkedin : null);
        setWhatsapp(getData.data()?.whatsapp ? getData.data()?.whatsapp : null);

        setViewPhoneNumberWhatsapp(getData.data()?.whatsapp.slice(7));
      } catch (e) {
        console.error("Error ", e);
      }
    }

    getSocialMidia();
  }, []);

  function redirect(url: string) {
    window.open(url);
  }

  return (
    <Styled.Container>
      <hr />

      <Styled.ContainerContent className="box">
        <ul>
          <strong>Designer</strong>
          <span>Matheo Jecob</span>
          { instagram && instagram.length > 1 && (
            <li onClick={() => redirect(instagram)} >
              <img src={iconInstagrem} alt="icone instagram" /> Matheo Jacob
            </li>
          )}

          {whatsapp && whatsapp.length > 8 && (
            <li onClick={() => redirect("https://wa.me/" + whatsapp)} >
              <img src={iconWhatsapp} alt="icone whatsapp" /> (11) {viewPhoneNumberWhatsapp}
            </li>
          )}

          {linkedin && linkedin.length > 1 &&  (
            <li onClick={() => redirect(linkedin)} >
              <img src={iconLinkedin} alt="icone linkedin" /> Matheo Jacob
            </li>
          )}
        </ul>
        <ul>
          <strong>Desenvolvedor</strong>
          <span>Gustavo Teles</span>
          <li onClick={() => redirect("https://wa.me/5501511971108786")}  >
            <img src={iconWhatsapp} alt="icone whatsapp" /> (11) 971108786
          </li>
          <li onClick={() => redirect("https://www.linkedin.com/in/gustavo-teles-270a711a7/")}  >
            <img src={iconLinkedin} alt="icone linkedin" /> Gustavo Teles
          </li>
          <li onClick={() => redirect("https://github.com/Telesgusouza")} >
            <img src={iconGitHub} alt="icone github" /> Telesgusouza
          </li>
        </ul>
      </Styled.ContainerContent>
    </Styled.Container>
  );
}
