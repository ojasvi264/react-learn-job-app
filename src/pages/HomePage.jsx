import Topbar from '../components/Topbar'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>  
        <Topbar />
        <HomeCards />
        < JobListing isHome = { true }/>
        < ViewAllJobs />
    </>
  )
}

export default HomePage