import React, { useEffect, useState } from "react";
import "./excel.css";
import Layouts from "../Layouts/Layouts";
import { Card, CardBody, CardHeader, Container, Table } from "reactstrap";
import ReactPaginate from "react-paginate";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {format} from 'date-fns'
import { saveAs } from "file-saver";

const currencyColumns = [
  "Gross Sales - <Period>",
  "Chargeback $ (Period)",
  "Rebates $ (Period)",
  "Fees $ (Period)",
  "Net Sales $ Period",
  "Best Case (5% Uplift)",
  "Average",
  "Worst Case (3% Less)",
];

const ITEMS_PER_PAGE = 40;

function Excel() {
    const navigate = useNavigate()
 const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
const { xcelData } = useSelector((state) => state.criteria)

console.log(xcelData)

  useEffect(() => {
    fetch(`${xcelData?.path}`)
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const workbook = XLSX.read(ab, {
          type: "array",
          cellStyles: true,
          cellNF:true
        });

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const range = XLSX.utils.decode_range(worksheet["!ref"]);

        const rows = [];

       for (let R = range.s.r; R <= range.e.r; ++R) {
  const row = [];
  for (let C = range.s.c; C <= range.e.c; ++C) {
    const cellRef = XLSX.utils.encode_cell({ r: R, c: C });
    const cell = worksheet[cellRef];

    let value = "";
    let bgColor = "transparent";
    let symbol = "";

    if (cell) {
      value = cell.v ?? "";

      // ✅ Detect symbol from format string
      const format = cell.z || "";
      if (format.includes("$")) symbol = "$";
      else if (format.includes("%")) symbol = "%";
      else if (format.includes("₹")) symbol = "₹";

      const fill = cell?.s?.fill?.fgColor?.rgb;
      if (fill) bgColor = `#${fill}`;
    }

    row.push({ value, bgColor, symbol });
  }
  rows.push(row);
}

        setData(rows);
      });
  }, []);

  const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);
  const handlePageClick = ({ selected }) => setCurrentPage(selected);

  const paginatedData = data.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  console.log(paginatedData)
  console.log(data)

  const downloadAsExcel = (filePath, fileName) => {
  const link = document.createElement("a");
  link.href = filePath;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <Layouts>
      <div className="container-fluid p-0">
        <div className="excel-breadcrumb">
          <div className="left-head">
            <div className="left-arrow" onClick={()=>navigate('/doc/filter')}>Back to Home</div>
            <div className="left-content">
             {xcelData?.name}
            </div>
          </div>
          <div></div>
        </div>
        <div className="excel-result">
          <div className="excel-filter">
            <div>
              <div className="desc">
                <h3>Filtered Forecast Results</h3>
                <h6>
                  Here’s your updated rebate accrual forecast based on the
                  selected filters.
                </h6>
              </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="me-3" style={{color:'#475467'}}>Confidential Information of Fresenius Kabi.  Do not copy or distribute.</div>
              <button className="export-xl" onClick={()=>downloadAsExcel(xcelData?.path,xcelData?.name)}>Export as Excel</button>
            </div>
          </div>
          <div>
            <Container className="mt-4" fluid>
              <Card>
                <CardHeader>
                    <div className="container-fluid">
                        <div className="d-flex gap-5">
                            <div>
                                <h5>Products</h5>
                                <h4>{xcelData?.customerData?.products}</h4>
                            </div>
                            {
                                xcelData?.customerData?.customer ? <div>
                                <h5>Customer</h5>
                                <h4>{xcelData?.customerData?.customer}</h4>
                            </div> : xcelData?.customerData?.GPO ? <div>
                                <h5>GPO</h5>
                                <h4>{xcelData?.customerData?.GPO}</h4>
                            </div>  :''
                            }
                            
                            <div>
                                <h5>Period</h5>
                                <h4>{xcelData?.customerData?.period}</h4>
                            </div>
                            <div>
                                <h5>Run Date</h5>
                                <h4>{format(new Date(),'dd MMM yyyy')}</h4>
                            </div>
                            <div>
                                <h5>Run By</h5>
                                <h4>{xcelData?.customerData?.runBy}</h4>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardBody>
                  {data.length > 0 ? (
                    <Table bordered responsive className="custom-table">
                      <thead>
                        <tr>
                          {/* {Object.keys(data[0]).map((key) => (
                            <th key={key}>{key}</th>
                          ))} */}
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedData.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                              <td
                                key={colIndex}
                                style={{ backgroundColor: cell.bgColor }}
                              >
                                {typeof cell.value === "number"
                                  ? `${cell.symbol}${cell.value.toLocaleString(
                                      "en-US",
                                      { minimumFractionDigits: 2 }
                                    )}`
                                  : cell.value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    <p>Loading...</p>
                  )}

                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="<"
                    containerClassName="pagination justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    activeClassName="active"
                  />
                </CardBody>
              </Card>
            </Container>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default Excel;
