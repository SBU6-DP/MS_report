import React, { useEffect, useState } from "react";
import Layouts from "../Layouts/Layouts";
import "./filter.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";

const monthOptions = [
  { label: "January", short: "Jan", value: 0 },
  { label: "February", short: "Feb", value: 1 },
  { label: "March", short: "Mar", value: 2 },
  { label: "April", short: "Apr", value: 3 },
  { label: "May", short: "May", value: 4 },
  { label: "June", short: "Jun", value: 5 },
  { label: "July", short: "Jul", value: 6 },
  { label: "August", short: "Aug", value: 7 },
  { label: "September", short: "Sep", value: 8 },
  { label: "October", short: "Oct", value: 9 },
  { label: "November", short: "Nov", value: 10 },
  { label: "December", short: "Dec", value: 11 },
];

const quaterOption = [
  { label: "Q1", value: "Q1" },
  { label: "Q2", value: "Q2" },
  { label: "Q3", value: "Q3" },
  { label: "Q4", value: "Q4" },
];

const yearOption = [
  { label: "2024", value: "2024" },
  { label: "2025", value: "2025" },
];

const customStyles = {
  container: (styles) => ({
    ...styles,
    width: "100%",
    marginRight: "0px",
    fontSize: "16px",
    color: "var(--text)",
  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "white",
    cursor: "pointer",
    minHeight: "40px",
    borderRadius: "8px",
    borderColor: isFocused ? "#597EF7" : "#597EF7",
    boxShadow: "none",
    ":hover": {
      borderColor: "#597EF7",
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "white",
    border: "1px solid #344054",
    zIndex: 9999,
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    cursor: "pointer",
    backgroundColor: isFocused ? "#D6E4FF" : "white",
    color: "black",
    ":hover": {
      backgroundColor: "#D6E4FF",
    },
    fontSize: "14px",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#85888E",
    fontSize: "14px",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "black",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "#85888E",
    ":hover": {
      color: "#85888E",
    },
  }),
};

function Filter() {
  const navigate = useNavigate();
  const location = useLocation();
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const { xcelData } = useSelector((state) => state.criteria);
  const [selectedPeriod, setSelectedPeriod] = useState(""); // 'month' | 'quarter'
  console.log(xcelData)

  useEffect(() => {
  const radios = document.querySelectorAll(".Month-selector-button");
  const dropdowns = document.querySelectorAll(".Month-Dropdown");

  if (radios.length < 3 || dropdowns.length < 3) return;

  const [dateRadio, monthRadio, quarterRadio] = radios;
  const [dateDropdown, monthDropdown, quarterDropdown] = dropdowns;

  const handleClick = (selected) => {
    dateDropdown.style.display = selected === "date" ? "block" : "none";
    monthDropdown.style.display = selected === "month" ? "block" : "none";
    quarterDropdown.style.display = selected === "quarter" ? "block" : "none";
  };

  const handleDateClick = () => handleClick("date");
  const handleMonthClick = () => handleClick("month");
  const handleQuarterClick = () => handleClick("quarter");

  dateRadio.addEventListener("click", handleDateClick);
  monthRadio.addEventListener("click", handleMonthClick);
  quarterRadio.addEventListener("click", handleQuarterClick);

  // Initial state
  handleClick(""); // hide all

  return () => {
    dateRadio.removeEventListener("click", handleDateClick);
    monthRadio.removeEventListener("click", handleMonthClick);
    quarterRadio.removeEventListener("click", handleQuarterClick);
  };
}, []);

const applyfilter =()=>{
    navigate("/doc/result",{state:{period:selectedPeriod}})
}

  return (
    <Layouts>
      <>
        <div className="excel-breadcrumb">
          <div className="left-head">
            <div className="left-arrow" onClick={() => navigate("/doc")}>
              Back to Home
            </div>
            <div className="left-content">{xcelData?.name}</div>
          </div>
          <div></div>
        </div>
        <div className="customize-box">
          <h3>{xcelData?.filterHead}</h3>
          <p>{xcelData?.filterSubHead}</p>
        </div>

        <div className="Forecast-category-box">
          <div className="row">
            <div className="col-3 ">
              <div className="d-flex justify-content-between filter-height">
                <div>
                  <p className="Period">Period</p>

                  {/* Date Radio */}
                  {xcelData?.id===2 || xcelData?.id===4 ? (
                    <div className="month-selector mt-4">
                      <div className="d-flex align-items-center">
                        <input
                          type="radio"
                          className="Month-selector-button"
                          onChange={() => setSelectedPeriod("date")}
                          checked={selectedPeriod === "date"}
                        />
                        <span className="ps-2" id="month">
                          Date
                        </span>
                      </div>

                      <div
                        className="Month-Dropdown"
                        style={{
                          display: selectedPeriod === "date" ? "block" : "none",
                        }}
                      >
                        <div className="Month-select">
                          <label className="mb-2">Select From Date</label>
                          <DatePicker
                            placeholderText="Select From Date"
                            dateFormat="MM/dd/yyyy"
                            className="styled-datepicker"
                            calendarClassName="calendar-style"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            selected={fromDate}
                            onChange={(date) => setFromDate(date)}
                          />

                          <label className="mb-2 mt-3">Select To Date</label>
                          <DatePicker
                            placeholderText="Select To Date"
                            dateFormat="MM/dd/yyyy"
                            className="styled-datepicker"
                            calendarClassName="calendar-style"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            selected={toDate}
                            onChange={(date) => setToDate(date)}
                          />
                        </div>
                      </div>
                    </div>
                  ):''}

                  {/* Month Radio */}
                  <div className="month-selector mt-4">
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        className="Month-selector-button"
                        onChange={() => setSelectedPeriod("month")}
                        checked={selectedPeriod === "month"}
                      />
                      <span className="ps-2" id="month">
                        Month
                      </span>
                    </div>

                    {xcelData?.id === 2 ||xcelData?.id===3|| xcelData?.id===4 ? (
                      <>
                        <div
                          className="Month-Dropdown"
                          style={{
                            display:
                              selectedPeriod === "month" ? "block" : "none",
                          }}
                        >
                          <div className="Month-select">
                            <label>{`Select ${xcelData?.id===3? '' :'From'} Month & Year`}</label>
                            <div className="Month-options">
                              <Select
                                styles={customStyles}
                                options={monthOptions}
                                placeholder="Select Month"
                              />
                              <Select
                                styles={customStyles}
                                options={yearOption}
                                placeholder="Select Year"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="Month-Dropdown"
                          style={{
                            display:
                              selectedPeriod === "month" ? "block" : "none",
                          }}
                        >
                          <div className="Month-select">
                            <label>{`Select ${xcelData?.id===3? '' :'To'} Month & Year`}</label>
                            <div className="Month-options">
                              <Select
                                styles={customStyles}
                                options={monthOptions}
                                placeholder="Select Month"
                              />
                              <Select
                                styles={customStyles}
                                options={yearOption}
                                placeholder="Select Year"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                      {
                        xcelData?.id!==3 &&  <div
                          className="Month-Dropdown"
                          style={{
                            display:
                              selectedPeriod === "month" && xcelData?.id!==3 ? "block" : "none",
                          }}
                        >
                          <div className="Month-select">
                            <label>Select Month & Year</label>
                            <div className="Month-options">
                              <Select
                                styles={customStyles}
                                options={monthOptions}
                                placeholder="Select Month"
                              />
                              <Select
                                styles={customStyles}
                                options={yearOption}
                                placeholder="Select Year"
                              />
                            </div>
                          </div>
                        </div>
                      }
                       
                      </>
                    )}
                  </div>

                  {/* Quarter Radio */}
                  <div className="quater-selection mt-4">
                    <input
                      type="radio"
                      className="Month-selector-button"
                      onChange={() => setSelectedPeriod("quarter")}
                      checked={selectedPeriod === "quarter"}
                    />
                    <span className="">Quarter</span>
                  </div>

                  <div
                    className="Month-Dropdown"
                    style={{
                      display: selectedPeriod === "quarter" ? "block" : "none",
                    }}
                  >
                    {xcelData?.id === 2 || xcelData?.id===3 || xcelData?.id===4 ? (
                      <>
                        <div className="Month-select mb-2">
                          <label>{`Select ${xcelData?.id===3? '' :'From'} Quater & Year`}</label>
                          <div className="Month-options">
                            <Select
                              styles={customStyles}
                              options={quaterOption}
                              placeholder="Select Quarter"
                            />
                            <Select
                              styles={customStyles}
                              options={yearOption}
                              placeholder="Select Year"
                            />
                          </div>
                        </div>
                        <div className="Month-select">
                          <label>{`Select ${xcelData?.id===3? '' :'To'} Quater & Year`}</label>
                          <div className="Month-options">
                            <Select
                              styles={customStyles}
                              options={quaterOption}
                              placeholder="Select Quarter"
                            />
                            <Select
                              styles={customStyles}
                              options={yearOption}
                              placeholder="Select Year"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="Month-select">
                        <label>Select Quarter & Year</label>
                        <div className="Month-options">
                          <Select
                            styles={customStyles}
                            options={quaterOption}
                            placeholder="Select Quarter"
                          />
                          <Select
                            styles={customStyles}
                            options={yearOption}
                            placeholder="Select Year"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Year Radio */}
                  {xcelData?.id === 2 || xcelData?.id ===3 || xcelData?.id===4 ? (
                    <div className="quater-selection mt-4">
                      <input
                        type="radio"
                        className="Month-selector-button"
                        onChange={() => setSelectedPeriod("year")}
                        checked={selectedPeriod === "year"}
                      />
                      <span className="">Year</span>
                    </div>
                  ):''}

                  <div
                    className="Month-Dropdown"
                    style={{
                      display: selectedPeriod === "year" ? "block" : "none",
                    }}
                  >
                    <div className="Month-select">
                      <label>Select From Year and To Year</label>
                      <div className="Month-options">
                        <Select
                          styles={customStyles}
                          options={yearOption}
                          placeholder="Select Year"
                        />
                        <Select
                          styles={customStyles}
                          options={yearOption}
                          placeholder="Select To Year"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Divider">

                </div>
                
              </div>
            </div>


            {
                xcelData?.id!==4 && xcelData?.id!==5 ? <div className="col-3">
              <div className="Products-Forecast">
                <div className="d-flex justify-content-between filter-height">
                  <div className="products-categories">
                    <p className="">Products</p>
                    {/* <p className='period-selection'>2 Products Selected</p> */}

                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Select All
                    </label>

                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Aminomix 1 Novum
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Aminosteril N-Hepa 8%
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Cladrim
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Kabimustine
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Bevacizumab
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Kabisulfan
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Kemocarb
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Omegaven
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Zocitab
                    </label>
                  </div>
                  <div className="Divider">

                </div>
                  
                </div>
              </div>
            </div> :''
            }

            {
                xcelData?.id===4 ||xcelData?.id===5 ?<>
                <div className='col-3'>
                        <div className='Contract-Forecast'>
                            <div className='d-flex justify-content-between filter-height'>
                                <div className='Contract-categories'>
                                    <p>Contracts</p>
                                    {/* <p className='Contract-selection'>1 Contract ID Selected</p> */}

                                    <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          Select All 
                        </label>

                                    <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          00128765 - Premier Oncology
                        </label>

                                    <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          00133678 - Premier Nephrology
                        </label>


                                   <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                         00143689 - Vizient Nephrology
                        </label>


                                    <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          00153217 - FSS Primary
                        </label>

                                    <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                         00178654 - PHS Subceiling
                        </label> 
                                    <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                        00213452 - Newark Primary
                        </label> 
                                    <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                         00256438 - Alameda Primary
                        </label> 

                                    {/* <div className='select-box'>
                                        <input type='checkbox' />
                                        <span>Kemocarb</span>
                                    </div>

                                    <div className='select-box'>
                                        <input type='checkbox' />
                                        <span>Omegaven</span>
                                    </div>

                                    <div className='select-box'>
                                        <input type='checkbox' />
                                        <span>Zocitab</span>
                                    </div> */}
                                </div>
                                <div className="Divider">

                </div>
                        
                            </div>
                        </div>
                    </div>
                </> :''
            }


            {
             xcelData?.id===5 ? <div className="col-3">
              <div className="Products-Forecast">
                <div className="d-flex justify-content-between filter-height">
                  <div className="products-categories">
                    <p className="">Program</p>
                    {/* <p className='period-selection'>2 Products Selected</p> */}

                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Select All
                    </label>

                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Aminomix Rebate 2025
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Aminosteril N-Hepa Rebate 2025
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Omegaven Rebate 2025
                    </label>
                  </div>
                  <div className="Divider">

                </div>
                 
                </div>
              </div>
            </div> :''
            }

            
            
            {xcelData?.id === 1||xcelData?.id===4 ? (
              <div className="col-3">
                <div className="Wholesale-forecast">
                  <div className="d-flex justify-content-between filter-height">
                    <div className="Wholesale-categories">
                      <p>Wholesalers</p>
                      {/* <p className='Wholesale-selection'>2 Wholesalers Selected</p> */}

                      <div className="wholesale-select-box">
                        <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          Select All
                        </label>
                        <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          AmerisourceBergen
                        </label>

                        <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          Cardinal Health
                        </label>

                        <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          McKesson
                        </label>
                      </div>
                    </div>
                    <div className="Divider">

                </div>
                  </div>
                </div>
              </div>
            ):''}

            {xcelData?.id === 2 && (
              <div className="col-3">
                <div className="Wholesale-forecast">
                  <div className="d-flex">
                    <div className="Wholesale-categories">
                      <p>GPO</p>
                      {/* <p className='Wholesale-selection'>2 Wholesalers Selected</p> */}

                      <div className="wholesale-select-box">
                        <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          Select All
                        </label>
                        <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          Premier
                        </label>

                        <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          Vizient Supply
                        </label>

                        <label class="checkbox-container select-box-wholesale">
                          <input type="checkbox" />
                          <span class="custom-checkbox m-0"></span>
                          Asembia
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {
             xcelData?.id===5 ? <div className="col-3">
              <div className="Products-Forecast">
                <div className="d-flex filter-height">
                  <div className="products-categories">
                    <p className="">Payment ID</p>
                    {/* <p className='period-selection'>2 Products Selected</p> */}

                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      Select All
                    </label>

                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      05847-001-01
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      07823-001-01
                    </label>
                    <label class="checkbox-container select-box">
                      <input type="checkbox" />
                      <span class="custom-checkbox m-0"></span>
                      08428-001-01
                    </label>
                  </div>
                 
                </div>
              </div>
            </div> :''
            }

            
          </div>
        </div>

        <div className="apply-btn-bar">
          <div className="text-end">
            <button className="cacl">Cancel</button>
            <button
              className="aply-btn"
              onClick={() => applyfilter()}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </>
    </Layouts>
  );
}

export default Filter;
