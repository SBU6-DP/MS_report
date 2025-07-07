import React from 'react'
import Layouts from '../Layouts/Layouts'
import './filter.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Filter() {
    const navigate = useNavigate()
    const location = useLocation()
    const { xcelData } = useSelector((state) => state.criteria)
  return (
   <Layouts>
         <>
         <div className="excel-breadcrumb">
          <div className="left-head">
            <div className="left-arrow" onClick={()=>navigate('/doc')}>Back to Home</div>
            <div className="left-content">
              {xcelData?.name}
            </div>
          </div>
          <div></div>
        </div>
            <div className='customize-box'>
                <h3>{xcelData?.filterHead}</h3>
                <p>{xcelData?.filterSubHead}</p>
            </div>


            <div className='Forecast-category-box'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='d-flex'>
                            <div>
                                <p className='Period'>Period</p>
                                <p className='selection'>Select the Period</p>

                                <div className='month-selector'>
                                   <div className='d-flex align-items-center'>
                                     <input type='radio'  className='Month-selector-button' />
                                    <span className='ps-2'>Month</span>
                                   </div>

                                    <div className='Month-Dropdown'>
                                        <div class="Month-select">
                                            <label>Select the Month</label>
                                            <div className='Month-options'>
                                                <select class="select">
                                                    <option>January 2025</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='quater-selection'>
                                    <input type='radio'  className='Month-selector-button' />
                                    <span>Quarter</span>
                                </div>
                            </div>
                            <div className='Divider'>
                            </div>
                        </div>
                    </div>


                    <div className='col-4'>
                        <div className='Products-Forecast'>
                            <div className='d-flex'>
                                <div className='products-categories'>
                                    <p>Products</p>
                                    {/* <p className='period-selection'>2 Products Selected</p> */}

                                    <div className='select-box'>
                                        <input type='checkbox' />
                                        <span>Select All</span>
                                    </div>

                                    <div className='select-box'>
                                        <input type='checkbox' />
                                        <span>Aminomix 1 Novum</span>
                                    </div>

                                    <div className='select-box'>
                                        <input type='checkbox' />
                                        <span>Aminosteril N-Hepa 8%</span>
                                    </div>


                                    <div className='select-box'>
                                        <input type='checkbox' />
                                        <span>Cladrim</span>
                                    </div>


                                    <div className='select-box'>
                                        <input type='checkbox' />
                                        <span>Kabimustine</span>
                                    </div>

                                    <div className='select-box'>
                                        <input type='checkbox' />
                                        <span>Kabisulfan</span>
                                    </div>

                                    <div className='select-box'>
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
                                    </div>
                                </div>
                                <div className='Divider'>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-4'>
                        <div className='Wholesale-forecast'>
                            <div className='d-flex'>
                                <div className='Wholesale-categories'>
                                    <p>Wholesalers</p>
                                    {/* <p className='Wholesale-selection'>2 Wholesalers Selected</p> */}

                                    <div className='wholesale-select-box'>
                                        <div className='select-box-wholesale'>
                                            <input type='checkbox' />
                                            <span>Select All</span>
                                        </div>

                                        <div className='select-box-wholesale'>
                                            <input type='checkbox' />
                                            <span>AmerisourceBergen</span>
                                        </div>

                                        <div className='select-box-wholesale'>
                                            <input type='checkbox'className='checkbox-wholesale' />
                                            <span>Cardinal Health</span>
                                        </div>

                                        <div className='select-box-wholesale'>
                                            <input type='checkbox' />
                                            <span>McKesson</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='apply-btn-bar'>
                <div className='text-end'>
                    <button className='cacl'>Cancel</button>
                    <button className='aply-btn' onClick={()=>navigate('/doc/result')}>Apply Filter</button>
                </div>
            </div>

        </>
   </Layouts>
  )
}

export default Filter