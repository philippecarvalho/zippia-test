import React from 'react'
import { JobType } from '../../types/Job'
import * as S from './styles'
import ReactHtmlParser from 'react-html-parser';
import { HiOutlineOfficeBuilding, HiOutlineLocationMarker } from "react-icons/hi";


interface props {
  job: JobType;
}

export const JobCard: React.FC<props> = ({ job }) => {
  return (
    <S.Card>
      <S.CardTitle>
        <div style={{ gap: 10, display: 'flex', flexDirection: 'column' }}>
          <S.Title>{job.jobTitle}</S.Title>
          <S.CompanyName>
            <HiOutlineOfficeBuilding />
            {job.companyName}
          </S.CompanyName>

          <S.Location>
            <HiOutlineLocationMarker />
            {job.location}
          </S.Location>
        </div>
        <S.CompanyLogo src={job.companyLogo} alt="" />
      </S.CardTitle>

      <S.Description>{ReactHtmlParser(job.jobDescription)} </S.Description>

      <div>
        {job.jobLevels.map((level, index) => (
          <S.JobLevel key={index}>{level}</S.JobLevel>
        ))}
      </div>

      <S.Salary>{job.estimatedSalary}</S.Salary>
      <S.PostedDate>{job.postedDate}</S.PostedDate>


      <a href={job.OBJurl} target="_blank">
        <S.ActionButton>View or Apply</S.ActionButton>
      </a>


    </S.Card>
  )
}
