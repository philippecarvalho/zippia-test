import React, { useState } from 'react'
import { JobCard } from '../JobCard'
import { JobType } from '../../types/Job'
import * as S from './styles'
import { HiSearch } from "react-icons/hi";

interface props {
  jobs: JobType[];
}

export const JobList: React.FC<props> = ({ jobs }) => {
  const [shouldFilterByDate, setShouldFilterByDate] = useState(false)
  const [companyNameInput, setCompanyNameInput] = useState('')

  const filterJobsLastSevenDays = (job: JobType) => {
    if (!shouldFilterByDate) return true;
    const date1 = new Date();
    const date2 = new Date(job.OBJpostingDate);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const differenceInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (differenceInDays <= 7) return true
    else return false;
  }

  const filterJobsByCompanyName = (job: JobType) => {
    if (!companyNameInput) return true;
    if (job.companyName.toLowerCase().includes(companyNameInput.toLowerCase())) return true
    else return false;
  }

  const filterJobs = () => {
    setShouldFilterByDate(!shouldFilterByDate)
  }

  return (
    <>
      <S.Wrapper>
        <S.SearchWrapper>
          <S.SearchBar value={companyNameInput} onChange={e => setCompanyNameInput(e.target.value)} placeholder='Company name' />
          <HiSearch color='#9ea5a9' />
        </S.SearchWrapper>

        <S.FilterButton onClick={filterJobs} shouldFilter={shouldFilterByDate}>
          <S.FilterButtonText shouldFilter={shouldFilterByDate}>Posted in the last 7 days</S.FilterButtonText>
        </S.FilterButton>
      </S.Wrapper>


      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {jobs.filter(filterJobsLastSevenDays).filter(filterJobsByCompanyName).map((job) => (
          <JobCard key={job.jobId} job={job} />
        ))}
      </div>
    </>
  )
}
