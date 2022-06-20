import React,{useState,useEffect} from 'react';
import * as axios from 'axios'; 
import Delete from '@mui/icons-material/Delete';
import GenericTable from './table';
import {column} from './constant';
const  Chield3 = (props) =>{
 
   const [data, setdata] = useState();
   const [userRemoveDialog, setuserRemoveDialog] = useState(false);

useEffect(() => {
   axios.get('http://localhost:8000/api/test')
      .then((res) => {
        setdata(res?.data?.data);
      })
  },[]);

    const actions = [
      {
        icon: <Delete />,
        handler: () => setuserRemoveDialog(true),
      },
    ];

  return(
    <div>
      <GenericTable
      data={data}
      columns={column}
      actions={actions}
       userRemoveDialog={userRemoveDialog}
       userRemoveDialogClose={() => setuserRemoveDialog(false)}
       handleOnUserRemoveDialogSubmit={() => setuserRemoveDialog(false)}
      />
      </div>
  )
}
export default Chield3;
