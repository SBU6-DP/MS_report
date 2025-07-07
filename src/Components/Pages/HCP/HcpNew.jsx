import React, { useContext, useEffect, useState } from "react";
import Layouts from "../Layouts/Layouts";
import "./hcpnew.css";
import Select from "react-select";

import filterFunel from "../../../images/icons/filter-funnel.svg";
import searchImg from "../../../images/icons/search.svg";
import star from "../../../images/icons/star.svg";
import filterFunelWhite from "../../../images/icons/filter-funnel-white.svg";
import profile from "../../../images/icons/profile-1.jpg";
import xclose from "../../../images/icons/x-close.svg";
import xcloseWhite from "../../../images/icons/x-close-white.svg";
import { ThemeContext } from "../../../ThemContent";
import CardData from "../../Skeleton-loading/CardData";
import toast from "react-hot-toast";
import { Table } from "reactstrap";

const colourStyles = {
  container: (styles) => ({
    ...styles,
    width: "100%",
    marginRight: "20px",
    fontSize: "16px",
    color: "var(--text)",
  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "var(--white-bg)",
    cursor: "pointer",
    minHeight: "40px",
    borderRadius: "8px",
    borderColor: isFocused
      ? "var(--input-border-active)"
      : "var(--input-border)",
    boxShadow: "none",
    ":hover": {
      borderColor: "var(--input-border-active)",
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--bg)",
    border: "1px solid var(--input-border)",
    zIndex: 9999,
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    cursor: "pointer",
    backgroundColor: isFocused ? "grey" : "#1f2935",
    color: "var(--text)",
    ":hover": {
      backgroundColor: "grey",
    },
    fontSize: "14px",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "var(--placeholder-text)",
    fontSize: "14px",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "var(--text)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--dropdown-arrow)",
    ":hover": {
      color: "var(--dropdown-arrow)",
    },
  }),
};

function HcpNew() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState({
    loading: true,
    result: [],
    isSearch: false,
  });

  const handleOnSearch = () => {
    showResult.loading = true;
    if (search === "") {
      return toast.error("Please Enter Doctor Name");
    }
    setShowResult({ ...showResult, isSearch: true });
  };

  useEffect(() => {
    if (search !== "") {
      setTimeout(() => {
        setShowResult({ ...showResult, loading: false, isSearch: true });
      }, 2000);
    }
  }, [search]);

 const removeSearch =()=>{
    setShowResult({...showResult,loading: true,
    result: [],
    isSearch: false,})
    setSearch('')
 }
  return (
    <Layouts>
      <>
        <div className="container hcp-main">
          <div className="hcp-search">
            <div className="search-box">
              <h3 className="search-name">Search health Professional</h3>
              <div className="row search-box-input">
                <div className="col-4">
                  <div>
                    <label>Doctor Name</label>
                    <div>
                      <input
                        className="hcp-search-control"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    <label>Therapuetic area (Optional)</label>
                    <div>
                      <Select
                        styles={colourStyles}
                        placeholder="Select therapeutic area"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    <label>Max Publication (Optional)</label>
                    <div>
                      <Select
                        styles={colourStyles}
                        placeholder="Select maximum no. of publications"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hcp-search-btn">
                <button className="add">
                  <img
                    src={theme === "dark" ? filterFunelWhite : filterFunel}
                  />
                  Add more Filter
                </button>
                <button className="search" onClick={() => handleOnSearch()}>
                  <img src={searchImg} />
                  Search Health Professional
                </button>
              </div>
            </div>
          </div>
        </div>
        {!showResult?.isSearch ? (
          <>
            <div className="container recent-doc">
              <h5 className="recent-doc-head">Recently Viewed Doctor</h5>
              <div className="row">
                <div className="col-3">
                  <div className="doc-card">
                    <div className="doc-profile-img">
                      <img src={profile} className="doc-img" />
                    </div>
                    <div>
                      <h5 className="doc-name">Dr. Sarah Johnson</h5>
                      <h5 className="doc-dep">Cardiologist</h5>
                      <h5 className="doc-spc">
                        Specializing in Interventional Cardiology
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="doc-card">
                    <div className="doc-profile-img">
                      <img src={profile} className="doc-img" />
                    </div>
                    <div>
                      <h5 className="doc-name">Dr. Sarah Johnson</h5>
                      <h5 className="doc-dep">Cardiologist</h5>
                      <h5 className="doc-spc">
                        Specializing in Interventional Cardiology
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="doc-card">
                    <div className="doc-profile-img">
                      <img src={profile} className="doc-img" />
                    </div>
                    <div>
                      <h5 className="doc-name">Dr. Sarah Johnson</h5>
                      <h5 className="doc-dep">Cardiologist</h5>
                      <h5 className="doc-spc">
                        Specializing in Interventional Cardiology
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="doc-card">
                    <div className="doc-profile-img">
                      <img src={profile} className="doc-img" />
                    </div>
                    <div>
                      <h5 className="doc-name">Dr. Sarah Johnson</h5>
                      <h5 className="doc-dep">Cardiologist</h5>
                      <h5 className="doc-spc">
                        Specializing in Interventional Cardiology
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container saved-doc-list">
              <h5 className="saved-doc-head">Saved Doctor Profiles</h5>
              <div>
                <table>
                  <tr className="saved-doc-row">
                    <td style={{ width: "50px" }}>
                      <input type="checkbox" className="save-doc-check" />
                    </td>
                    <td style={{ width: "500px" }}>
                      <div className="saved-doc-profile">
                        <div>
                          <img src={profile} className="doc-img" />
                        </div>
                        <div className="doc-save-detail">
                          <h6 className="save-doc-name">Dr. Michael Johnson</h6>
                          <h6 className="save-doc-dep">Orthopedic Surgeon</h6>
                        </div>
                      </div>
                    </td>
                    <td style={{ width: "600px" }}>
                      <div className="text-start save-doc-info">
                        <h6 className="save-doc-foc">
                          {" "}
                          Focus on Sports Medicine and Arthroscopic Procedures
                        </h6>
                        <h6 className="save-doc-uni">
                          University medical Center
                        </h6>
                      </div>
                    </td>
                    <td style={{ width: "200px" }}>
                      <div>
                        <img src={star} />
                      </div>
                    </td>
                  </tr>
                  <tr className="saved-doc-row">
                    <td style={{ width: "50px" }}>
                      <input type="checkbox" className="save-doc-check" />
                    </td>
                    <td style={{ width: "500px" }}>
                      <div className="saved-doc-profile">
                        <div>
                          <img src={profile} className="doc-img" />
                        </div>
                        <div className="doc-save-detail">
                          <h6 className="save-doc-name">Dr. Michael Johnson</h6>
                          <h6 className="save-doc-dep">Orthopedic Surgeon</h6>
                        </div>
                      </div>
                    </td>
                    <td style={{ width: "600px" }}>
                      <div className="text-start save-doc-info">
                        <h6 className="save-doc-foc">
                          {" "}
                          Focus on Sports Medicine and Arthroscopic Procedures
                        </h6>
                        <h6 className="save-doc-uni">
                          University medical Center
                        </h6>
                      </div>
                    </td>
                    <td style={{ width: "200px" }}>
                      <div>
                        <img src={star} />
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </>
        ) : showResult.loading ? (
          <div className="container p-0">
            <div className="text-center my-5">Loading....</div>
          </div>
        ) : (
          <div className="container p-0">
            <div className="d-flex">
              <h5 className="doc-result-head">
                15 Health professionals found for <span>“{search}”</span>
              </h5>
              <div>
                <button className="close" onClick={()=>removeSearch()}>
                  <img src={theme==='dark'?xcloseWhite:xclose} /> Close
                </button>
              </div>
            </div>
            <div className="row filter-result">
              <div className="col-4">
                <div className='contents'>
                        <h3 className='Heading'>Filters</h3>
 
                        <div className='first-one'>
                            <p className='cate'>Filter Catergory 1</p>
                            <ul className='list'>
                                <li> <input type='checkbox' className='chckbx-1' />
                                    Category name 1</li>
 
                                <li> <input type='checkbox' className='chckbx-1' />
                                    Category name 2</li>
 
                                <li> <input type='checkbox' className='chckbx-1' />
                                    Category name 3</li>
 
                                <li> <input type='checkbox' className='chckbx-1' />
                                    Category name 4</li>
                            </ul>
                        </div>
 
                        <div className='second-two'>
 
                            <p className='cate'>Filter Category 2</p>
                            <ul className='list-2'>
                                <li> <input type='radio' className='chckbx-2' />
                                Category name 1</li>
 
                                <li> <input type='radio' className='chckbx-2' />
                                Category name 2</li>
 
                                <li> <input type='radio' className='chckbx-2' />
                                Category name 3</li>
 
                                <li> <input type='radio' className='chckbx-2' />
                                Category name 4</li>
                            </ul>
                        </div>
                    </div>
              </div>
              <div className="col-8">
                <div className="doc-search-list">
                  <Table className="hcp-doc-table">
                    <tr>
                      <th style={{ width: "40%" }}>Profile Name</th>
                      <th style={{ width: "60%" }}>Profile Description</th>
                    </tr>
                    <tbody>
                      <tr className="hcp-doc-row">
                        <td>
                          <div className="doc-info">
                            <div>
                              <img src={profile} className="doc-img" />
                            </div>
                            <div className="doc-name-info">
                              <h5 className="name">Dr. Michael Johnson</h5>
                              <h5 className="desg">Family Medicine</h5>
                            </div>
                          </div>
                        </td>
                        <td className="doc-desc">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </td>
                      </tr>
                      <tr className="hcp-doc-row">
                        <td>
                          <div className="doc-info">
                            <div>
                              <img src={profile} className="doc-img" />
                            </div>
                            <div className="doc-name-info">
                              <h5 className="name">Dr. Michael Johnson</h5>
                              <h5 className="desg">Family Medicine</h5>
                            </div>
                          </div>
                        </td>
                        <td className="doc-desc">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </Layouts>
  );
}

export default HcpNew;
