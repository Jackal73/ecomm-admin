import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { userRows } from "../../dummyData";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import "./userList.css";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">EDIT</button>
            </Link>
            <DeleteOutlined className="userListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="userList">
        <div className="userTitleContainer">
          <h1 className="userTitle">User List</h1>
        </div>
        <DataGrid
          className="dGrid"
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}
