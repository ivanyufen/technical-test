import useTableState from "@/CustomHooks/UseTableState";

const Table = () => {
  const { sortedData } = useTableState();

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        table {
          border-collapse: collapse;
          width: 100%;
        }
        tr,
        td {
          border: 1px solid black;
          padding: 5px;
        }
        thead {
          background-color: yellow;
        }
      `}</style>
    </>
  );
};

export default Table;
