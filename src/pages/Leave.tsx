import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";

const columns = [
    {
      name: "Employees",
      selector: "slno",
      sortable: true,
      cell: (events:any) => 
        <div style={
          { fontWeight : 500,
            fontFamily : 'poppins',
            fontSize   : '15px'  
          }
        }>{events.name}</div>,
    },
    {
      name: "Dates",
      selector: "name",
      sortable: true,
      cell: (events:any) => 
      <div style={
        { fontWeight  : 500,
          fontFamily  : 'poppins',
          fontSize    : '15px'  
        }
      }>{events.date}</div>,
    },
    {
      name: "Reason",
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
      name: "Status",
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
      name: "Approved By",
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
    }
];
const events = [
    {
      slno: 1,
      name: "Syam Sankaran",
      id: "XYZ-1001",
      role:"Active",
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
    }
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
const leaves = [
    {
        title: "Annual Leaves",
        count:"18",
        background:"bg-blue-400"
    },
    {
        title: "Medical Leaves",
        count:"18",
        background:"bg-green-400"
    },
    {
        title: "Other Leaves",
        count:"18",
        background:"bg-pink-400"
    }
]

export default function Leave() {

    const [showSidebar, setShowSidebar] = useState("-left-80 md:-left-96");

    return (
        <>
            <div className="flex justify-end px-4 md:px-12">
                <button className="text-white text-base"
                    onClick={() => setShowSidebar('right-0')}
                >
                    <Icon color="primary">edit</Icon>
                </button>
            </div>
            <div className="px-3 md:px-2 mt-2">
                <div className="grid md:grid-flow-col md:grid-cols-3 gap-4 font-poppins">
                    {leaves.map((leave, index) => (
                    <div key={index}>
                        <div className={`max-w-md py-4 px-4 ${leave.background} rounded-lg h-44 overflow-hidden cursor-pointer`}>
                            <div className="flex flex-col items-center">
                                <h2 className="text-white text-lg font-bold mt-4">{leave.title}</h2>
                                <h1 className="mt-5 font-bold text-white text-4xl">{leave.count}</h1>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="mt-3 py-2 px-2">
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
                    <div className="flex flex-col mt-8">
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mb-2">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add a title"></input>
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mt-6 mb-2">
                            Date
                        </label>
                        <input type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" placeholder="Date"></input>
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mb-2 mt-4">
                            Reason
                        </label>
                        <textarea className="resize h-32 rounded-md shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Add a content.."></textarea>
                        <button className="w-1/2 bg-red-400 hover:bg-red-600 text-white font-semibold font-poppins mt-10 py-2 px-4 rounded-full">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}