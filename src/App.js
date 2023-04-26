import { Route, Routes } from 'react-router-dom';
import './App.css';
import Table1 from './Pages/Table1';
import Table2 from './Pages/Table2';
import Layout from './Pages/Layout';
const data1 = [
  { Id: 1, OrgKey: 'John',LookupContactType: 25, NameFormatIndividual: 'john@example.com',NameFormatCompany: '123-456-7890', DateCreatedUtc: '123 Main St',LastUpdatedUtc:'323ddf'},
  { Id: 2, OrgKey: 'Jane',LookupContactType: 30, NameFormatIndividual: 'jane@example.com',NameFormatCompany: '123-456-7890', DateCreatedUtc: '456 Second St',LastUpdatdeUtc:'323ddf' },
  { Id: 3, OrgKey: 'Bob',LookupContactType: 35, NameFormatIndividual: 'bob@example.com',NameFormatCompany: '123-456-7890', DateCreatedUtc: '789 Third St',LastUpdatedUtc:'323ddf' },
  { Id: 4, OrgKey: 'Alice',LookupContactType: 40, NameFormatIndividual: 'alice@example.com',NameFormatCompany: '123-456-7890', DateCreatedUtc: '012 Fourth St',LastUpdatdeUtc:'323ddf' }
];

const data2 = [
  { Id: 1, OrgKey: 'John',ActionId: 25,MethodName: 'john@example.com',LogType: '123-456-7890',LogMessage:'chamuni', DateCreatedUtc: '123 Main St',LastUpdatedUtc:'323ddf'},
  { Id: 2, OrgKey: 'Jane',ActionId: 30,MethodName: 'jane@example.com',LogType: '123-456-7890',LogMessage:'chamuni', DateCreatedUtc: '456 Second St',LastUpdatdeUtc:'323ddf' },
  { Id: 3, OrgKey: 'Bob',ActionId: 35,MethodName: 'bob@example.com',LogType: '123-456-7890',LogMessage:'chamuni', DateCreatedUtc: '789 Third St',LastUpdatedUtc:'323ddf' },
  { Id: 4, OrgKey: 'Alice',ActionId: 40,MethodName: 'alice@example.com',LogType: '123-456-7890',LogMessage:'chamuni', DateCreatedUtc: '012 Fourth St',LastUpdatdeUtc:'323ddf' }
];

function App() {
 
  

  return (
    <>
        <Routes>
            <Route path="/" element={<div className='container' style={{display:"flex",justifyContent:"space-between",marginTop:"40px"}}><Layout/></div>}>
                <Route path="table1" element={<div><Table1 data1={data1} /></div>} />
                <Route path="table2" element={<div><Table2 data2={data2} /></div>} />
            </Route>
        </Routes>
  </>
  );
}

export default App;
