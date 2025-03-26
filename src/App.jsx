import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import HomeCards from './components/HomeCards'
import JobListing from './components/JobListing'

const App = () => {
  return (
    <> 
    <Navbar /> 
    <Topbar/>    
    <HomeCards />
    <JobListing />

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  )
}

export default App