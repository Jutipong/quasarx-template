export interface MainLayout {
  DrawerOpen: boolean;
  dense: boolean;
  Menus: Menu[];
}

// export interface Menu {
//   Icon: string;
//   Label: string;
//   To: string;
//   Separator: boolean;
// }
export interface Menu {
  path: string;
  label: string;
  meta: Meta;
  children?: Menu[];
}

export interface Meta {
  title: string;
  icon: string;
  active: boolean;
}

// export interface Child {
//   Path: string;
//   Name: string;
//   Meta: Meta;
//   Component: string;
//   component: string;
//   children?: Child[];
// }
