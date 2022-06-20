import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material';
import DeleteUser from './delete'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const GenericTable = (props) => {
  const {
    data,
    actions = [],
    columns,
    handler,
    userRemoveDialog,
    userRemoveDialogClose,
    handleOnUserRemoveDialogSubmit
  } = props;

  const [oldData, setOldData] = useState({});

  const handleOnOldData = (dataItem) => {
    setOldData(dataItem);
  };

  return (
    <>
     <DeleteUser
        userRemoveDialog={userRemoveDialog}
        onClose={userRemoveDialogClose}
        onSubmit={handleOnUserRemoveDialogSubmit}
        data={oldData}
      />
      <TableContainer
        component={Paper}
        sx={{
          marginTop: '10px',
          minWidth: 700,
          width: '97%',
          marginLeft: 'auto',
          marginRight: 'auto',
          flexGrow: 1,
        }}
      >
        <Paper>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {columns.map(({ label, field }) => (
                  <StyledTableCell align="center" key={columns[field]}>
                    {label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
              .map((dataitem, index) => (
                <StyledTableRow
                  key={dataitem[index]}
                  onClick={() => {
                  }}
                >
                  {columns.map(({ field, format }) => (
                    <StyledTableCell key={dataitem[field]} align="center">
                      {format ? format(dataitem[field]) : dataitem[field]}
                    </StyledTableCell>
                  ))}
                  {actions.map(({ icon, handler }) => (
                    <StyledTableCell
                      key={dataitem[icon]}
                      align="center"
                      onClick={() => {
                        handler();
                        handleOnOldData(dataitem);
                      }}
                    >
                      {icon}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </TableContainer>
    </>
  );
};

GenericTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  columns: PropTypes.arrayOf(PropTypes.any),
  actions: PropTypes.arrayOf(PropTypes.array),
  checks: PropTypes.arrayOf(PropTypes.array),
  userRemoveDialog: PropTypes.bool,
  userRemoveDialogClose: () => { },
  handleOnUserRemoveDialogSubmit: () => { },
  handler: PropTypes.func,
};

GenericTable.defaultProps = {
  data: [],
  columns: [],
  actions: [],
  checks: [],
  userRemoveDialog: false,
  userRemoveDialogClose: () => { },
  handleOnUserRemoveDialogSubmit: () => { },
};
export default GenericTable;
