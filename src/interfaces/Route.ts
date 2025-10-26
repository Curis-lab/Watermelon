
import type { LazyExoticComponent } from "react";
import React from "react";
export  interface IRoute {
  path: string;
  title: string;
  component: LazyExoticComponent<() => React.ReactNode>;
  type: "protected" | "unproteted";
  menu: object;
  isStandalone: boolean;
}

