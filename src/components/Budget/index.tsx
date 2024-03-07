import React, { useEffect, useState } from "react";
import Hr from "../Hr";
import Reveal from "../Reveal";
import * as Styled from "./style";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";

export default function SectionBudget() {
  const [description, setDescription] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  /*
  
  boa noite, dentro da minha pagina tem um campo de texto, e botão que redirecionara para uma conversa do whatsapp, quero que o texto fique ali para ser envido pelo usuario, ou que já seja enviado assim q entre no link
  
  */

  useEffect(() => {
    async function getPhoneNumber() {
      try {
        const getPhone = await getDoc(doc(db, "/data/socialmidia"));
        setPhoneNumber(getPhone.data()?.whatsapp);

        phoneNumber;
      } catch (e) {
        console.error(e);
      }
    }

    getPhoneNumber();
  }, []);

  function handleBudget(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    const msg = encodeURIComponent(description);
    const url = `https://wa.me/${phoneNumber}?text=${msg}`

    window.open(url);
  }

  return (
    <>
      {phoneNumber !== null && (
        <Styled.Container id="budget">
          <Hr />
          <Styled.ContainerContent onSubmit={handleBudget} className="box">
            <Reveal>
              <h3>Orçamento</h3>
              <strong>Peça seu orçamento agora</strong>

              <label htmlFor="Descrição">
                Descreva seu projeto
                <span>e entraremos em contato com você</span>
                <textarea
                  placeholder="Descrição do projeto"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </label>

              <button type="submit">Enviar</button>
            </Reveal>
          </Styled.ContainerContent>
        </Styled.Container>
      )}
    </>
  );
}
