import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

// Helper function to create table rows
function createData(name, trackingId, price, status, date) {
  return { name, trackingId, price, status, date };
}

// Sample data for 22 commodities
const rows = [
  createData("Rice", 100123, "₹3200/quintal", "Approved", "9 Sep 2024"),
  createData("Wheat", 100124, "₹2900/quintal", "Pending", "9 Sep 2024"),
  createData("Corn", 100125, "₹2200/quintal", "Delivered", "9 Sep 2024"),
  createData("Barley", 100126, "₹2100/quintal", "Approved", "9 Sep 2024"),
  createData("Millet", 100127, "₹2000/quintal", "Pending", "9 Sep 2024"),
  createData("Soybeans", 100128, "₹4200/quintal", "Delivered", "9 Sep 2024"),
  createData("Peas", 100129, "₹3600/quintal", "Approved", "9 Sep 2024"),
  createData("Cotton", 100130, "₹5900/quintal", "Pending", "9 Sep 2024"),
  createData("Sugarcane", 100131, "₹400/quintal", "Approved", "9 Sep 2024"),
  createData("Coffee", 100132, "₹26000/quintal", "Delivered", "9 Sep 2024"),
  createData("Tea", 100133, "₹24000/quintal", "Approved", "9 Sep 2024"),
  createData("Tobacco", 100134, "₹15000/quintal", "Pending", "9 Sep 2024"),
  createData("Groundnut", 100135, "₹5500/quintal", "Delivered", "9 Sep 2024"),
  createData("Sunflower", 100136, "₹5100/quintal", "Approved", "9 Sep 2024"),
  createData("Potato", 100137, "₹1000/quintal", "Pending", "9 Sep 2024"),
  createData("Tomato", 100138, "₹1400/quintal", "Delivered", "9 Sep 2024"),
  createData("Onion", 100139, "₹1800/quintal", "Approved", "9 Sep 2024"),
  createData("Carrot", 100140, "₹1200/quintal", "Pending", "9 Sep 2024"),
  createData("Garlic", 100141, "₹12000/quintal", "Delivered", "9 Sep 2024"),
  createData("Ginger", 100142, "₹8000/quintal", "Approved", "9 Sep 2024"),
  createData("Chili", 100143, "₹15000/quintal", "Pending", "9 Sep 2024"),
  createData("Turmeric", 100144, "₹7000/quintal", "Delivered", "9 Sep 2024"),

];

// Function to handle dynamic row styles based on status
const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(rows);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = rows.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
    setFilteredData(filtered);
  };

  return (
    <div className="Table">
      <h2>Daily Prices of Commodities</h2>

      {/* Search input and button */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: "8px",
            width: "250px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSearchClick}
          style={{
            padding: "8px 16px",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {/* Table */}
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell align="left" className="Details">
                    Details
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} style={{ textAlign: "center" }}>
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
