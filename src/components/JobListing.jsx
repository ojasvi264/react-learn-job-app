import { useState, useEffect } from "react";
import Job from "./Job";
import Spinner from "./Spinner";

const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome ? '/api/jobs?_limit=3' : '/api//jobs'
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {
          loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <Job key={index} job={job} />
              ))}
            </div>
          )
        }
      </div>
    </section>
  );
};

export default JobListing;
