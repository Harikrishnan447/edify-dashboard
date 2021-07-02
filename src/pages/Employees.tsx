import { useState } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Icon from "@material-ui/core/Icon"
import ImageUploader from 'react-images-upload';

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
    const [showSidebar, setShowSidebar] = useState("-left-80 md:-left-96");

    function onDrop(picture : any) {
        console.log(picture);
    }

    return (
      <>
        <div className="flex justify-end px-4 md:px-12">
            <button className="text-white text-base"
                onClick={() => setShowSidebar('right-0')}
            >
                <Icon color="primary">edit</Icon>
            </button>
        </div>
        <div className="mt-2 py-5 px-8">
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
        <div
                className={`h-screen fixed top-0 md:right-0 ${showSidebar} flex-row flex-nowrap shadow-xl bg-white w-80 md:w-96 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap pt-4 relative">
                    <div className="flex justify-end">
                        <button className=""  onClick={() => setShowSidebar('-left-80 md:-left-96')} >
                            <Icon color="primary">close</Icon>
                        </button>
                    </div>
                    <div className="mt-4">
                        <span className="text-lg font-bold font-poppins">Add an employee</span>
                    </div>
                    <div className="flex flex-col mt-8">
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mb-2">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"></input>
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mt-4 mb-2">
                            Employee ID
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Employee ID"></input>
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mt-4 mb-2">
                            Role
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Role"></input>
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mt-4 mb-2">
                            Mobile
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Mobile"></input>
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mb-2 mt-4">
                          Image
                        </label>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={onDrop}
                            maxFileSize={5242880}
                            accept="jpg/ gif/ png"
                        />
                        <button className="w-1/2 bg-red-400 hover:bg-red-600 text-white font-semibold font-poppins mt-10 py-2 px-4 rounded-full">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
       </> 
      );
}
