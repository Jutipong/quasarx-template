export interface MainLayout {
  DrawerOpen: boolean;
  Menus: Menu[];
}

// export interface Menu {
//   Icon: string;
//   Label: string;
//   To: string;
//   Separator: boolean;
// }

export interface Menu {
  Path: string;
  Name: string;
  Meta?: Meta;
  Component: string;
  Children?: Child[];
}

export interface Meta {
  Title: string;
  Icon: string;
  IsActive: boolean;
}

export interface Child {
  Path: string;
  Name: string;
  Meta?: Meta;
  Component: string;
  component: string;
}
