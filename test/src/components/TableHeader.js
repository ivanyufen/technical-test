import useTableState from "@/CustomHooks/UseTableState";

const TableHeader = () => {
  const { sortBy, filter, changeSortBy, changeFilter } = useTableState();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div>
        <label htmlFor="sort">Sort by: </label>
        <select
          name="sort"
          value={sortBy}
          onChange={(e) => changeSortBy(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div>
        <input
          placeholder="Search.."
          onChange={(e) => changeFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TableHeader;
