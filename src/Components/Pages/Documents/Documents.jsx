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
        name: "Future Rebate Chargeback Accrual Forecast Report",
        type: "xlsx",
        path: "/data/Future Rebate Chargeback Accrual Forecast Report v2.xlsx",
        filterHead:'Customize Your Forecast View',
        filterSubHead:'Apply filters to focus on the most relevant rebate and accrual data.',
        resultHead:'Filtered Forecast Results',
        resultSubHead:'Here’s your updated rebate accrual forecast based on the selected filters.',
        description:'Here’s your updated rebate accrual forecast based on the selected filters.',
        customerData:{
            products:"ALL",
            customer:'AmerisourceBergen, Cardinal Health, McKesson',
            period:'Q3 2025',
            runBy:'Admin'
        }
      },
      {
        name: "Gross-to-Net Impact Analysis",
        type: "xlsx",
        path: "/data/Gross-to-Net Impact Analysis.xlsx",
        filterHead:'Customize Your Trend View',
        filterSubHead:'Apply filters to analyze historical patterns relevant to your business goals.',
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
        name: "Historical Performance Trend Report",
        type: "xlsx",
        path: "/data/Historical Performance Trend Report (1).xlsx",
        filterHead:'Customize Your Trend View',
        filterSubHead:'Apply filters to analyze historical patterns relevant to your business goals.',
        resultHead:'Filtered Trend Insights',
        resultSubHead:'Here’s the historical performance data based on your selected filters.',
        customerData:{
            products:"ALL",
            periodType:'Quater',
            period:'Q1,2025 - Q2,2025',
            runBy:'Admin'
        }
      },
      {
        name: "Report Names and Prompts",
        type: "xlsx",
        path: "/data/Report Names and Prompts v2.xlsx",
        filterHead:'Customize Your Report',
        filterSubHead:'Apply filters to focus on the reports.',
        resultHead:'Report Names and Prompts v2 Results',
        resultSubHead:'Here’s your updated Report Names and Prompts v2 based on the selected filters.',
        description:'Here’s your updated Report Names and Prompts v2 based on the selected filters.',
        customerData:{
            products:"ALL",
            customer:'AmerisourceBergen, Cardinal Health, McKesson',
            period:'Q3 2025',
            runBy:'Admin'
        }
      },
      {
        name: "Accrual vs. Actual Variance Report",
        type: "xlsx",
        path: "/data/Accrual vs. Actual Variance Report.xlsx",
         filterHead:'Customize Variance View',
        filterSubHead:'Apply filters to focus on specific accrual and actual performance data for deeper variance analysis.',
        resultHead:'Filtered Variance Report',
        resultSubHead:'Review how your selected parameters affect the gap between accruals and actuals.',
        customerData:{
            products:"ALL",
            periodType:'Quater',
            period:'Q1,2025 - Q2,2025',
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

            <div className='row'>
                {
                    data?.map((result)=>{
                        return <div className='col-4'>
                    <div className='Files-MS' onClick={()=>onView(result)}>
                        <div className='Future-rebate'>
                            <div>
                                <img src={xcl} className='Green-noteimg' />
                            </div>
                            <div className='Future-rebate-para-content'>
                                <p className='Future-rebate-content'>{result?.name}</p>
                                <p className='Future-rebate-lastseen'>Last Opened - {format(new Date(),"dd-MMM-yyyy HH:mm")}</p>
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