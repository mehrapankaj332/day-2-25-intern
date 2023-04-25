import React,{useState} from "react";
import TableData from "../components/TableData";
import TableHeder from '../components/TableHeader';

const Table1=({data1})=>{

    const [selectedRow, setSelectedRow] = useState(null);
    const [tableData, setTableData] = useState(data1);
  
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
          <TableHeder />
          <TableData handleEdit={handleEdit}
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
            value={selectedRow.LookupContactType}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, LookupContactType: e.target.value })
            }
            placeholder='LookupContactType'
          />
           <input
            type="text"
            value={selectedRow.NameFormatIndividual}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, NameFormatIndividual: e.target.value })
            }
            placeholder='NameFormatIndivdual'
          />
           <input
            type="text"
            value={selectedRow.NameFormatCompany}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, NameFormatCompany: e.target.value })
            }
            placeholder='NameFormatCompany'
          />
          <button type="button" class="btn btn-info" onClick={handleSave}>Save</button>
        </div>
        )}
    </>
)
}
export default Table1;