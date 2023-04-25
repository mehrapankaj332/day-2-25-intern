const TableData2 = ({Data,handleDelete,handleEdit}) => {
    return Data.map((person) => {
      const { Id, OrgKey, ActionId, MethodName, LogType, LogMessage, DateCreatedUtc } = person;
     
      const onclickDelete=()=>{
         handleDelete(Id);
      }
      
      const onclickEdit=()=>{
        handleEdit(Id);
     }
  
     
  
      return (
       <>
        <tbody >
          <tr key={Id}>
            <td>{Id}</td>
            <td>{OrgKey}</td>
            <td>{ActionId}</td>
            <td>{MethodName}</td>
            <td>{LogType}</td>
            <td>{LogMessage}</td>
            <td>{DateCreatedUtc}</td>
            <td><button type="button" className="btn btn-info" onClick={onclickEdit}>Edit</button></td>
            <td><button type="button" className="btn btn-info" onClick={onclickDelete}>Delete</button></td>
          </tr>
        </tbody> 
       </>
      );
    });
  };
  
  export default TableData2;