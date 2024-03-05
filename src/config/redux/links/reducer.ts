import ActionsType from "../../ActionsType";
import { IActionLinksAndIcon, ILinksAndIcon } from "../../interface";

const initialState: ILinksAndIcon = {
  icon: '',
  instagram: '',
  linkedin: '',
  whatsapp: '',
};

const useLinks = (state = initialState, action: IActionLinksAndIcon) => {
  switch (action.type) {
    case ActionsType.icon: {
      return { ...state, icon: action.payload };
    }

    case ActionsType.link_insta: {
      return { ...state, instagram: action.payload };
    }

    case ActionsType.link_linkedin: {
      return { ...state, linkedin: action.payload };
    }

    case ActionsType.link_whatsapp: {
      return { ...state, whatsapp: action.payload };
    }

    case ActionsType.link_and_icon_all: {
      return {
        ...state,
        icon: action.payload.icon,
        instagram: action.payload.instagram,
        linkedin: action.payload.linkedin,
        whatsapp: action.payload.whatsapp,
      };
    }

    default: {
      return state;
    }
  }
};

export default useLinks;
