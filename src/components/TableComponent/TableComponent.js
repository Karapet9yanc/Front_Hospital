import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../TableComponent/TableComponent.scss";

const TableComponent = () => {
  const [problem, setProblem] = useState([])
  const nameOfHeadTable = ['Имя', 'Врач', 'Дата', 'Жалобы']

  useEffect(() => {
    axios
      .get("http://localhost:8000/allProblems", {
        // headers: {
        //   // token: localStorage.getItem("token"),
        // },
      })
      .then((res) => {
        setProblem(res.data.data);
      })
  }, []);

  return (
    <div className="div-table">
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
                {nameOfHeadTable.map((element, index) => {
                  return <TableCell key={`table-${index}`} align="center">{element}</TableCell>
                })}
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {problem.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.doctor}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.problem}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default TableComponent