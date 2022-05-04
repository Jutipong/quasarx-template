export interface MainLayout {
  Menus: Menu[];
}

export interface Menu {
  Icon: string;
  Label: string;
  To: string;
  Separator: boolean;
}
