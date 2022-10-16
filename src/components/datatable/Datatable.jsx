import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton" style={{ textDecoration: "none" }}>
                View
              </div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: "500px", width: "100%" }} className="datatable">
      <div className="datatableTitle">
        Add new User{" "}
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add User
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
