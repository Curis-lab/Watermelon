import { useState } from "react";

interface PanginationProps {
  events: Event[];
  itemsPerPage: number;
}

export const usePagination = ({ events, itemsPerPage }: PanginationProps) => {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //! big calculation
  const currentItems = [...events].slice(startIndex, endIndex);
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  return {
    itemsPerPage,
    currentItems,
    handleChange,
    page,
  };
};
