import React from "react";
import { SWRConfig } from "swr";

const SWRProvider = ({ children }: { children: React.ReactNode }) => {

  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    return response.json();
  };

  return <SWRConfig value={{ fetcher, refreshInterval: 3000 }}>{children}</SWRConfig>;
};

export default SWRProvider;
