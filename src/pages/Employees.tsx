import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";

const columns = [
    {
      name: "Sl.No",
      selector: "slno",
      sortable: true,
      cell: (events:any) => 
        <div style={
          { fontWeight : 500,
            fontFamily : 'poppins',
            fontSize   : '15px'  
          }
        }>{events.slno}</div>,
    },
    {
      name: "Employee Name",
      selector: "name",
      sortable: true,
      cell: (events:any) => 
      <div style={
        { fontWeight  : 500,
          fontFamily  : 'poppins',
          fontSize    : '15px'  
        }
      }>{events.name}</div>,
    },
    {
      name: "Employee ID",
      selector: "id",
      sortable: true,
      right: false,
      cell: (events:any) => 
      <div style={
        { fontWeight  : 500,
          fontFamily  : 'poppins',
          fontSize    : '15px' 
        }
      }>{events.id}</div>,
    },
    {
      name: "Role",
      selector: "role",
      sortable: true,
      right: false,
      cell: (events:any) => 
      <div style={
        { fontWeight  : 500,
          fontFamily  : 'poppins',
          fontSize    : '15px' 
        }
      }>{events.role}</div>,
    },
    {
      name: "Mobile",
      selector: "mobile",
      sortable: true,
      right: false,
      cell: (events:any) => 
      <div style={
        { fontWeight  : 500,
          fontFamily  : 'poppins',
          fontSize    : '15px' 
        }
      }>{events.mobile}</div>,
    },
    {
      name: "Joining Date",
      selector: "date",
      sortable: true,
      right: false,
      cell: (events:any) => 
      <div style={
        { fontWeight  : 500,
          fontFamily  : 'poppins',
          fontSize    : '15px' 
        }
      }>{events.date}</div>,
    }
];

const events = [
    {
      slno: 1,
      name: "Syam Sankaran",
      id: "XYZ-1001",
      role:"Software Engineer",
      mobile:"9020235645",
      date:""
    },
    {
      slno: 2,
      name: "Harikrishnan N",
      id: "XYZ-1002",
      role:"",
      mobile:"8086883436",
      date:""
    },
    {
      slno: 3,
      name: "",
      id: "",
      role:"",
      mobile:"",
      date:""
    },
    {
      slno: 4,
      name: "",
      id: "",
      role:"",
      mobile:"",
      date:""
    },
    {
      slno: 5,
      name: "",
      id: "",
      role:"",
      mobile:"",
      date:""
    },
    {
      slno: 6,
      name: "",
      id: "",
      role:"",
      mobile:"",
      date:""
    },
    {
      slno: 7,
      name: "",
      id: "",
      role:"",
      mobile:"",
      date:""
    },{
      slno: 8,
      name: "",
      id: "",
      role:"",
      mobile:"",
      date:""
    },{
      slno: 9,
      name: "",
      id: "",
      role:"",
      mobile:"",
      date:""
    },
]
const customStyles = {
  
  headCells: {
    style: {
      fontSize: '18px',
      fontWeight: '500',
    },
  },
  rows: {
    style: {
      minHeight: '52px', // override the row height
    }
  },
  cells: {
    style: {
      paddingLeft: '12px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

export default function Employees() {
    return (
        <div className="mt-6 py-5 px-8">
          <Card>
            <DataTable
              columns={columns}
              data={events}
              defaultSortField="slno"
              sortIcon={<SortIcon />}
              pagination
              selectableRows
              customStyles={customStyles}
            />
          </Card>
        </div>
      );
}
