import { useEffect, useState } from "react";
import JobCard from "./components/JobCard"
import { Job } from "./types/type"
import axios from "axios";
import Navbar from "./Navbar";

function Jobs() {

    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/jobs')
        .then(response => {
            setJobs(response.data.data); // Adjust based on your API response structure
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
}, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading jobs: {error}</p>;
  }

  

  return (
    <>
      <div className="font-poppins text-[#0E0140] pb-[100px] overflow-x-hidden">
        <div
          id="page-background"
          className="absolute h-[1330px] w-full top-0 -z-10 overflow-hidden"
        >
          <img
            src="/assets/backgrounds/Group 2009.png"
            className="w-full h-full object-fill"
            alt="background"
          />
        </div>
        <Navbar/>
        <header className="container max-w-[1130px] mx-auto flex items-center justify-between gap-[50px] mt-[70px]">
          <div className="flex flex-col justify-center w-full gap-10">
            <div className="badge flex items-center rounded-full py-2 pl-4 pr-6 gap-[10px] bg-white w-fit">
              <div className="flex shrink-0">
                <img src="/assets/icons/crown-orange.svg" alt="icon" />
              </div>
              <p className="font-semibold text-sm leading-[21px] text-[#0C0039]">
                Helped 5 Million People Worldwide Grow Career
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-black text-[60px] leading-[70px] text-white">
                We Help You
                <br />
                Get Dream Job
              </h1>
              <p className="text-lg leading-[34px] text-white">
                Must trusted platform to build new career and
                <br />
                get an happy job better than befooore
              </p>
            </div>
          </div>
          <div className="flex shrink-0 w-[548px]">
            <img
              src="/assets/backgrounds/hero illustration v2.png"
              className="object-contain"
              alt="banner"
            />
          </div>
        </header>   
        <section id="Latest" className="flex flex-col mt-[70px] gap-y-10 mx-auto max-w-6xl">
          <h2 className="container max-w-[1130px] mx-auto font-bold text-white text-2xl leading-[36px]">
            Latest Jobs <br /> Get Them Now
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job}  />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Jobs
