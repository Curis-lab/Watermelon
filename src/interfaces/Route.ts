export  interface IRoute {
  path: string;
  title: string;
  component: React.ReactNode;
  type: "protected" | "unproteted";
  menu: object;
  isStandalone: boolean;
}

