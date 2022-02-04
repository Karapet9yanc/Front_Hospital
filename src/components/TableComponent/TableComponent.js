import React, { useState } from "react";
import moment from "moment";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteFunctionComponent from "../../DeleteFunctionComponent/DeleteFunctionComponent";
import EditeFunctionComponent from "../../EditeFunctionComponent/EditeFunctionComponent";
import "./TableComponent.scss";

const TableComponent = ({ problems, setProblem }) => {
  const [modalWindow, setModalWimdow] = useState(false);
  const [modalWindowEdit, setModalWimdowEdit] = useState(false);
  const [visit, setVisit] = useState(-1);
  const nameOfHeadTable = ['Имя', 'Врач', 'Дата', 'Жалобы'];

  const deleteModal = (index) => {
    setVisit(index);
    setModalWimdow(true);
  };

  const editModal = (index) => {
    setVisit(index);
    setModalWimdowEdit(true);
  };

  const closeModal = () => {
    setModalWimdowEdit(false);
    setModalWimdow(false);
    setVisit(-1);
  };

  return (
    <div className="div-table">
      <div className="table">
        <TableContainer component={Paper} className='class'>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
                {nameOfHeadTable.map((element) => <TableCell key={`table-${element}`} align="center">{element}</TableCell>)}
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="div-appeal">
              {problems.map((row, index) => (
                <TableRow key={`row ${index}`}>
                  <TableCell component="th" scope="row" className="div-appeal">{row.name}</TableCell>
                  <TableCell className="div-appeal" align="center">{row.doctor}</TableCell>
                  <TableCell className="div-appeal" align="center">{moment(row.date).format("DD.MM.YYYY")}</TableCell>
                  <TableCell className="div-appeal" align="center">{row.problem}</TableCell>
                  <TableCell className="div-appeal-function">
                    <DeleteOutlineIcon onClick={() => deleteModal(index)}></DeleteOutlineIcon>
                    <EditIcon onClick={() => editModal(index)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {modalWindow && (<DeleteFunctionComponent visitId={problems[visit]._id}
          setProblem={setProblem} closeModal={closeModal} />)}
        {modalWindowEdit && (<EditeFunctionComponent setProblem={setProblem} visit={problems[visit]} closeModal={closeModal} />)}
      </div>
    </div>
  );
};

export default TableComponent;