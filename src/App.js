import { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import './App.css';

function App() {

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12')
      .then(res => res.json())
      .then(result => setRowData(result.data));
  }, []);

  const avatarFormatter = ({ value }) => {
    return <img src={value} width="50px" height="50px" />
  }

  return (
    <div className="App">
      <h2>Implement AG Grid in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h2>
      <div className="ag-theme-alpine ag-style">
        <AgGridReact
          defaultColDef={{ flex: 1 }}
          rowHeight={60}
          rowData={rowData} >
          <AgGridColumn field="first_name" headerName="First Name" sortable={true} filter={true} cellClass="vertical-middle" />
          <AgGridColumn field="last_name" headerName="Last Name" sortable={true} filter={true} cellClass="vertical-middle" />
          <AgGridColumn field="email" headerName="Email" sortable={true} filter={true} cellClass="vertical-middle" />
          <AgGridColumn field="avatar" headerName="Avatar" sortable={true} filter={true} cellRendererFramework={avatarFormatter} cellClass="vertical-middle" />
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
