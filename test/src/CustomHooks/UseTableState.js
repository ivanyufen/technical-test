import { GlobalContext } from "@/GlobalContext";
import { useContext, useMemo } from "react";

export default function useTableState() {
  const GlobalState = useContext(GlobalContext);
  const { state, dispatch } = GlobalState;
  const { dataTable, sortBy, filter } = state;

  const changeSortBy = (value) => {
    dispatch({
      type: "SET_SORT_BY",
      sortBy: value,
    });
  };

  const changeFilter = (value) => {
    dispatch({
      type: "SET_FILTER",
      filter: value,
    });
  };
  const filteredData = useMemo(() => {
    if (!filter) {
      return [...dataTable];
    }

    return [...dataTable].filter((item) => {
      return item.name.toString().toLowerCase().includes(filter.toLowerCase());
    });
  }, [filter, dataTable]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) =>
      sortBy === "asc" ? a.id - b.id : b.id - a.id
    );
  }, [sortBy, filteredData]);

  return {
    sortedData,
    sortBy,
    filter,
    changeSortBy,
    changeFilter,
  };
}
