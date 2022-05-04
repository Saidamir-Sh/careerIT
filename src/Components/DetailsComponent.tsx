import React from 'react'
import { useParams } from 'react-router'

function DetailsComponent() {

    const params = useParams()
    const jobId = params.job_id
    console.log(jobId)
  return (
    <div>DetailsComponent</div>
  )
}

export default DetailsComponent