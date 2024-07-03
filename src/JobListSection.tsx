import { useEffect, useState } from "react";
import { Job } from "./types/type";
import axios from "axios";
import JobCard from "./components/JobCard";

export default function JobListSection() {

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
    return(
        <section id="Latest" className="flex flex-col mt-[70px] gap-y-10 mx-auto max-w-6xl">
          <h2 className="container max-w-[1130px] mx-auto font-bold text-black text-2xl leading-[36px]">
            Latest Jobs <br /> Get Them Now
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job}  />
            ))}
          </div>
        </section>
    );
}