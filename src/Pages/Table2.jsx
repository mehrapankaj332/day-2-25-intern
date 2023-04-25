import React,{useState} from "react";
import TableData2 from "../components/TableData2";
import TableHeder2 from '../components/TableHeader2';

const Table2=({data2})=>{

    const [selectedRow, setSelectedRow] = useState(null);
    const [tableData, setTableData] = useState(data2);
  
    const handleDelete=(Id)=>{
      setTableData(tableData.filter(el => el.Id !== Id));
      
    }
  
    const handleEdit = (Id) => {
      const editRow = tableData.find((i) => i.Id === Id);
      setSelectedRow(editRow);
    };
  
    
    const handleSave = () => {
      const updatedData = tableData.map((row) => {
        if (row.Id === selectedRow.Id) {
          return selectedRow;
        }
        return row;
      });
      setTableData(updatedData);
      setSelectedRow(null);
    };

return (
    <>
         <table className="table table-dark table-hover">
          <TableHeder2 />
          <TableData2 handleEdit={handleEdit}
          handleDelete={handleDelete}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow} Data={tableData}/>
        </table>
        {selectedRow && (
        <div>
          <input
            type="number"
            value={selectedRow.Id}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, Id: e.target.value })
            }
            placeholder='Id'
          />
           <input
            type="text"
            value={selectedRow.OrgKey}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, OrgKey: e.target.value })
            }
            placeholder='OrgKey'
          />
           <input
            type="number"
            value={selectedRow.ActionId}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, ActionId: e.target.value })
            }
            placeholder='ActionId'
          />
           <input
            type="MethodName"
            value={selectedRow.phone}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, MethodName: e.target.value })
            }
            placeholder='MethodName'
          />
           <input
            type="text"
            value={selectedRow.LogType}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, LogType: e.target.value })
            }
            placeholder='LogType'
          />
           <input
            type="text"
            value={selectedRow.LogMessage}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, LogMessage: e.target.value })
            }
            placeholder='LogMessage'
          />
           <input
            type="text"
            value={selectedRow.DateCreatedUtc}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, DateCreatedUtc: e.target.value })
            }
            placeholder='DateCreatedUtc'
          />
          <button type="button" class="btn btn-info" onClick={handleSave}>Save</button>
        </div>
        )}
    </>
)
}
export default Table2;