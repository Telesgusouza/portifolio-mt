import * as Styled from "./styled";

import iconPhoto from "../../assets/icons/iconM__5.png";

import iconInstagrem from "../../assets/icons/instagram.svg";
import iconWhatsapp from "../../assets/icons/whatsapp.svg";
import iconLinkedin from "../../assets/icons/linkedin.svg";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../../config/firebase/firebase";
import { ILinksAndIcon } from "../../config/interface";
import { getDownloadURL, ref } from "firebase/storage";
import ActionsType from "../../config/ActionsType";

import { Link } from "react-scroll";

export default function Header() {
  const [linksAndIcon, setLinksAndIcon] = useState<ILinksAndIcon>({
    icon: "",
    instagram: "",
    linkedin: "",
    whatsapp: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    async function getLinksAndIcon() {
      try {
        const getDatas = await getDoc(doc(db, "/data/socialmidia"));
        const getPhoto = await getDownloadURL(ref(storage, "/data/icon"));
        const obj: ILinksAndIcon = {
          icon: getPhoto === undefined ? "" : getPhoto,
          instagram: getDatas.data()?.instagram,
          linkedin: getDatas.data()?.linkedin,
          whatsapp: getDatas.data()?.whatsapp,
        };

        dispatch({
          type: ActionsType.link_and_icon_all,
          payload: obj,
        });

        setLinksAndIcon(obj);
      } catch (e) {
        console.error("Error ", e);
      }
    }

    getLinksAndIcon();
  }, []);

  function handleReload(url: string) {
    window.open(url);
  }

  return (
    <Styled.Container>
      <header className="box">
        <img src={linksAndIcon.icon.length > 0 ? linksAndIcon.icon : iconPhoto} alt="icon" />
        <ul>
          {linksAndIcon.instagram.length > 1 && (
            <li onClick={() => handleReload(linksAndIcon.instagram)}>
              <img src={iconInstagrem} alt="icone instagram" />
            </li>
          )}

          {linksAndIcon.linkedin.length > 1 && (
            <li onClick={() => handleReload(linksAndIcon.linkedin)}>
              <img src={iconLinkedin} alt="icone linkedin" />
            </li>
          )}

          {linksAndIcon.whatsapp.length > 1 && (
            <li onClick={() => handleReload("https://wa.me/"+linksAndIcon.whatsapp)}>
              <img src={iconWhatsapp} alt="icone whatsapp" />
            </li>
          )}
          <li>
            <Link to="aboutme" spy={true} smooth={true} duration={500}>
              Sobre mim
            </Link>
          </li>

          <li>
            <Link to="works" spy={true} smooth={true} duration={500}>
              Trabalhos
            </Link>
          </li>
          <li>
            <Link to="budget" spy={true} smooth={true} duration={500}>
              Orçamento
            </Link>
          </li>
        </ul>
        <Styled.MenuMobile>
          <input type="checkbox" />
          <nav>
            <span></span>
            <span></span>
            <span></span>
          </nav>
          <ul>
            <li>Sobre mim</li>
            <li>Trabalhos</li>
            <li>Orçamento</li>

            <li>
              <img src={iconInstagrem} alt="icone ... " />
            </li>
            <li>
              <img src={iconLinkedin} alt="icone ... " />
            </li>
            <li>
              <img src={iconWhatsapp} alt="icone ... " />
            </li>
          </ul>
        </Styled.MenuMobile>
      </header>
      <hr />
    </Styled.Container>
  );
}
