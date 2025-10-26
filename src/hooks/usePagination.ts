import { useState } from "react";
import { IEvent } from "../interfaces/Event";
interface PanginationProps {
  events: IEvent[];
  itemsPerPage: number;
}

export const usePagination = ({ events, itemsPerPage }: PanginationProps) => {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = [...events].slice(startIndex, endIndex);
  
  const handleChange = ( value:number) => {
    setPage(value);
  };

  return {
    itemsPerPage,
    currentItems,
    handleChange,
    page,
  };
};
