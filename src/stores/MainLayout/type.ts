export interface MainLayout {
  DrawerOpen: boolean;
  Menus: Menu[];
}

export interface Menu {
  Icon: string;
  Label: string;
  To: string;
  Separator: boolean;
}
