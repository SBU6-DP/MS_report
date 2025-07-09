import React, { useState } from 'react'
import './documents.css'
import Layouts from '../Layouts/Layouts'
import noteimg from '../../../images/icons/Green-note.svg'
import xcl from '../../../images/icons/xlsx.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setXcelData } from '../../redux/features/criteriaSlice'
import { useMsal } from '@azure/msal-react'
import { format } from 'date-fns'

function Documents() {
     const { instance, accounts } = useMsal();
    const navigate = useNavigate()
    const dispatch =useDispatch()
    const [data, setData] = useState([
      {
        name: "Future Rebate Chargeback Accrual Forecast",
        id:1,
        type: "xlsx",
        path: "/data/Future Rebate Chargeback Accrual Forecast Report v2.xlsx",
        monthPath:"/data/Future Rebate Chargeback Accrual Forecast Report - Month.xlsx",
        quarterPath:"/data/Future Rebate Chargeback Accrual Forecast Report - Quarter.xlsx",
        filterHead:'Customize Your Forecast View',
        filterSubHead:'Apply filters to focus on the most relevant rebate and accrual data.',
        resultHead:'Filtered Forecast Results',
        resultSubHead:'Here’s your updated rebate accrual forecast based on the selected filters.',
        description:'Here’s your updated rebate accrual forecast based on the selected filters.',
        monthPathData:{
            products:"Aminomix 1 Novum, Aminosteril N-Hepa 8%, Omegaven, Kabimustine, Bevacizumab",
            wholesaler:'AmerisourceBergen, Cardinal Health, McKesson',
            periodType:'Month',
            period:'April 2025',
            runBy:'Admin'
        },
        quarterPathData:{
             products:"Aminomix 1 Novum, Aminosteril N-Hepa 8%, Omegaven, Kabimustine, Bevacizumab",
            wholesaler:'AmerisourceBergen, Cardinal Health, McKesson',
            periodType:'Quarter',
            period:'Q2 2025',
            runBy:'Admin'
        },
        customerData:{
            products:"ALL",
            customer:'AmerisourceBergen, Cardinal Health, McKesson',
            period:'Q3 2025',
            runBy:'Admin'
        }
      },
      {
        name: "Gross-to-Net Impact Analysis",
        id:2,
        type: "xlsx",
        path: "/data/Gross-to-Net Impact Analysis.xlsx",
        filterHead:'Customize Your GTN View',
        filterSubHead:'Apply filters to focus on key variables affecting gross-to-net performance across segments.',
        resultHead:'Filtered GTN Analysis',
        resultSubHead:'These results highlight how specific factors are impacting your net revenue.',
        customerData:{
            products:"Aminomix 1 Novum",
            periodType:'Q12025',
            period:'Q12025',
            runBy:'Admin',
            GPO:'Premier'
        }
      },
      {
        name: "Historical Performance Trend",
        type: "xlsx",
        id:3,
        path: "/data/Historical Performance Trend Report (1).xlsx",
        filterHead:'Customize Your Trend View',
        filterSubHead:'Apply filters to analyze historical patterns relevant to your business goals.',
        resultHead:'Filtered Trend Insights',
        resultSubHead:'Here’s the historical performance data based on your selected filters.',
        customerData:{
            products:"ALL",
            periodType:'Quarter',
            period:'Q12025 - Q22025',
            runBy:'Admin'
        }
      },
      {
        name: "Chargeback Discrepancy",
        type: "xlsx",
        id:4,
        path: "/data/Chargeback Discrepancy Report 3.xlsx",
        filterHead:'Customize Your Report',
        filterSubHead:'Apply filters to isolate specific chargeback variances for detailed reconciliation.',
        resultHead:'Filtered Chargeback Variances',
        resultSubHead:'These filtered results help you identify patterns and root causes behind chargeback discrepancies.',
        description:'Here’s your updated Report Names and Prompts v2 based on the selected filters.',
        customerData:{
            contract:'Vizient Nephrology',
            wholesaler:'AmerisourceBergen, McKesson',
            periodType:'Date Range',
            products:"ALL",
            customer:'AmerisourceBergen, Cardinal Health, McKesson',
            period:'06/01/2025 - 06/15/2025',
            runBy:'Admin'
        }
      },
      {
        name: "Accrual vs. Actual Variance",
        type: "xlsx",
        id:5,
        path: "/data/Accrual vs. Actual Variance Report.xlsx",
         filterHead:'Customize Variance View',
        filterSubHead:'Apply filters to focus on specific accrual and actual performance data for deeper variance analysis.',
        resultHead:'Filtered Variance Report',
        resultSubHead:'Review how your selected parameters affect the gap between accruals and actuals.',
        customerData:{
            contractId:'00143689',
            program:'Aminomix Rebate 2025',
            period:'Q12025',
            runBy:'Admin'
        }
      },
    ]);

    const onView =(data)=>{
        dispatch(setXcelData(data))
        navigate('/doc/filter')
    }

  return (
    <Layouts>
             <div className='container-fluid'>
        <div className='doc-contain'>
            <div className='Name-Description'>
                <h3 className='Greet-Name'>Hi, {accounts[0]?.name}</h3>
                <p className='Description'>Your reports are ready. Dive in to uncover key insights.</p>
            </div>

            <div className='row doc-row'>
                {
                    data?.map((result)=>{
                        return <div className='col-4 p-0'>
                    <div className='Files-MS' onClick={()=>onView(result)}>
                        <div className='Future-rebate'>
                            <div>
                                <img src={xcl} className='Green-noteimg' />
                            </div>
                            <div className='Future-rebate-para-content'>
                                <p className='Future-rebate-content'>{result?.name}</p>
                                <p className='Future-rebate-lastseen'>Last Opened - {format(new Date(),"dd MMM yyyy, HH:mm a")}</p>
                            </div>
                        </div>

                    </div>
                </div>
                    })
                }
            </div>
        </div>
    </div>
    </Layouts>
   
  )
}

export default Documents