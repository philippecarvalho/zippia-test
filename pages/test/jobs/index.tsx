import type { NextPage } from 'next'
import { JobType } from '../../../types/Job';
import { JobList } from '../../../components/JobList';

interface props {
  jobs: JobType[];
}

const Jobs: NextPage<props> = ({ jobs }) => {
  return (
    <div>
      <h1 style={{ margin: 14 }}>Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const getJobs = await fetch('https://www.zippia.com/api/jobs/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Business Analyst",
      locations: [],
      numJobs: 20,
      previousListingHashes: []
    })
  })

  const data = await getJobs.json();
  const jobs = data.jobs;

  // Pass data to the page via props
  return { props: { jobs } }
}

export default Jobs
