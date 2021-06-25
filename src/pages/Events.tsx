import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";

const columns = [
    {
      name: "Sl.No",
      selector: "slno",
      sortable: true,
      cell: (movies:any) => 
        <div style={
          { fontWeight : 500,
            fontFamily : 'poppins',
            fontSize   :   'large'  
          }
        }>{movies.slno}</div>,
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
      cell: (movies:any) => 
      <div style={
        { fontWeight  : 500,
          fontFamily  : 'poppins',
          fontSize    :'large'  
        }
      }>{movies.title}</div>,
    },
    {
      name: "Date",
      selector: "date",
      sortable: true,
      right: false,
      cell: (movies:any) => 
      <div style={
        { fontWeight  : 500,
          fontFamily  : 'poppins',
          fontSize    :'large' 
        }
      }>{movies.date}</div>,
    }
];

const movies = [
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
    return (
        <div className="mt-20 py-5 px-8">
          <Card>
            <DataTable
              columns={columns}
              data={movies}
              defaultSortField="title"
              sortIcon={<SortIcon />}
              pagination
              selectableRows
              customStyles={customStyles}
            />
          </Card>
        </div>
      );
}