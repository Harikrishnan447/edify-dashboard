import { useState } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Icon from "@material-ui/core/Icon"

const columns = [
    {
      name: "Sl.No",
      selector: "slno",
      sortable: true,
      cell: (events:any) => 
        <div style={
          { fontWeight : 500,
            fontFamily : 'poppins',
            fontSize   :   'large'  
          }
        }>{events.slno}</div>,
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
      cell: (events:any) => 
      <div style={
        { fontWeight  : 500,
          fontFamily  : 'poppins',
          fontSize    :'large'  
        }
      }>{events.title}</div>,
    },
    {
      name: "Date",
      selector: "date",
      sortable: true,
      right: false,
      cell: (events:any) => 
      <div style={
        { fontWeight  : 500,
          fontFamily  : 'poppins',
          fontSize    :'large' 
        }
      }>{events.date}</div>,
    }
];

const events = [
    {
        slno: 1,
        title: "New Year",
        date: "January 1, 2021",
    },
    {
      slno: 2,
      title: "Republic Day",
      date: "January 26, 2021",
    },
    {
      slno: 3,
      title: "Shivarathri",
      date: "March 11, 2021",
    },
    {
      slno: 4,
      title: "Good Friday",
      date: "April 2, 2021",
    },
    {
      slno: 5,
      title: "Vishu",
      date: "April 14, 2021",
    },
    {
      slno: 6,
      title: "May Day",
      date: "May 1, 2021",
    },
    {
      slno: 7,
      title: "Ramzan",
      date: "May 13, 2021",
    },{
      slno: 8,
      title: "Onam",
      date: "August 20, 2021",
    },{
      slno: 9,
      title: "Christmas",
      date: "December 25, 2021",
    },
]
const customStyles = {
  
  headCells: {
    style: {
      fontSize: '25px',
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
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

export default function Events() {
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
        <div className="mt-3 py-2 px-3">
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
                        Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title"></input>
                    <label className="block text-gray-700 text-sm font-semibold font-poppins mt-6 mb-2">
                        Date
                    </label>
                    <input type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" placeholder="Date"></input>
                    <label className="block text-gray-700 text-sm font-semibold font-poppins mt-6 mb-2">
                        Please choose a category
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" placeholder="Please choose a category"></input>
                    <button className="w-1/2 bg-red-400 hover:bg-red-600 text-white font-semibold font-poppins mt-10 py-2 px-4 rounded-full">
                        Submit
                    </button>
                </div>
            </div>
        </div>
      </>
      );
}