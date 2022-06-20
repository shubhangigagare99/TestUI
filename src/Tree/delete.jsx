import React, { useState,} from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  DialogActions,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import * as axios from 'axios'; 

 const DeleteUser = (props) => {
  const {
    onClose, userRemoveDialog, data, onSubmit,
  } = props;

  const deletedUser = ()=>{
  axios({
    method: 'DELETE',
    url: 'http://localhost:8000/api/test/',
    data: {
     originalId:data?.originalId
    },
    
  })
}

console.log("dddel",data?.originalId);
 const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (originalId) => {
    try {
      setLoading(true);
      const response = await deletedUser({
        variables: {
          input: {
            originalId,
          },
        },
      });
     // if (response?.status === 'success') {
      //  console.log('You have deleted trainee successfully',response?.data);
      alert("Deleted Successfully....!!");
   //   }
      onSubmit();
    //   setLoading(false);
    } catch (err) {
      console.log('CATCH BLOCK : in RemoveDialog.jsx .then => ', err);
    }
  };
  return (
    <Dialog open={userRemoveDialog} onClose={onClose}>
      <DialogTitle>Delete User</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you really want to delete User?
        </DialogContentText>
        <br />
        <DialogActions>
          <LoadingButton
            variant="contained"
            loading={loading}
            onClick={() => handleOnSubmit(data)}
          >
            Delete
          </LoadingButton>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

DeleteUser.propTypes = {
  userRemoveDialog: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.objectOf.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default DeleteUser;