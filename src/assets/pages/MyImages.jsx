import { useEffect, useState } from "react";
import { DataTableWrapper, MainContainer, Page } from "../components/Elements"
import Nav from "../components/Nav"
import axios from "axios";
import DataTable from 'react-data-table-component';


function MyImages() {
  const [loading,SetLoading] = useState(true)
  const columns = [
    {
      name: 'Image Title',
      selector: row => row.name,
    },
    {
      name: 'View Original',
      selector: row => <a href={`${row.original}`} target="_blank">Click here</a>
    },
    {
      name: 'View Processed',
      selector: row => <a href={`${row.processed}`} target="_blank">Click here</a>
    },
  ];
  

  const [response,SetResponse] = useState({})
  
  const url = 'http://127.0.0.2:5000/api/listdata';

  function get_data(){
    axios.get(url).then((response) => {
      SetLoading(false)
      SetResponse(response.data.data)
  
    });
  }

  useEffect(()=>{
    get_data();
  },[])

  return (
    <Page>
      <Nav></Nav>
      <MainContainer>
        {
          loading?(
            <div>Loading...</div>
          ):(
            <DataTableWrapper>
              <h3>Uploaded Files</h3>
              <DataTable
                columns={columns}
                data={response}
              />
            </DataTableWrapper>
            
          )
        }
      </MainContainer>
    </Page>
  )
}

export default MyImages