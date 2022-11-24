import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { IconButton, Paper } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import * as React from 'react';

import type { IPost } from '@/interfaces';

interface IProps {
  employeeData: IPost[];
}

export const CustomTable = ({ employeeData }: IProps) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <div className="table-responsive">
          <table className="table caption-top">
            {/* <caption>List of users</caption> */}
            <thead>
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Name </th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">DOB</th>
                <th scope="col">Branch</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeeData?.map((employee) => {
                return (
                  <tr key={employee?.id}>
                    <th scope="row">{employee?.id}</th>
                    <td>{employee?.name}</td>
                    <td>{employee?.email}</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                      <IconButton aria-label="edit">
                        <EditTwoToneIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteTwoToneIcon />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TableContainer>
    </Paper>
  );
};
