export interface Category {
  id: string;
  title: string;
  date: any;
  location: String;
  img: String;
  item?: any;
  type?: String;
}

export interface CategoryTypes {
  id: string;
  title: string;
  icon: string;
}

export interface Dates {
  id: string;
  date: any;
}

export interface dateState {
  date: any;
}
