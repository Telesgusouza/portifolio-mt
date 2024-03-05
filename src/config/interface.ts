export interface IActionLinksAndIcon {
  type: string;
  payload: ILinksAndIcon;
}

export interface ILinksAndIcon {
  icon: string;
  instagram: string;
  linkedin: string;
  whatsapp: string;
}

export interface IRootReducer {
  useLinks: { state: ILinksAndIcon; action: IActionLinksAndIcon };
}

export interface IDesign {
  date: Date;
  filter: string;
  id?: string;
  design: null | string;
  title: string;
  decription: string;
}
