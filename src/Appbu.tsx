import { useEffect, useState } from "react";
import JobCard from "./components/JobCard"
import { Job } from "./types/type"
import axios from "axios";

function App() {

  const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

  // const jobs: Job[] = [
  //     {
  //       id: 1,
  //       name: 'Burger Grilled',
  //       type: 'Burger Grilled',
  //       companyName: 'Burger Grilled',
  //       location: 'Burger Grilled',
  //       thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  //       companyLogo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  //       salary: 280000,
  //     },
  //     {
  //       id: 2,
  //       name: 'Burger Grilled',
  //       type: 'Burger Grilled',
  //       companyName: 'Burger Grilled',
  //       location: 'Burger Grilled',
  //       thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  //       companyLogo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  //       salary: 280000,
  //     },
  //     {
  //       id: 3,
  //       name: 'Burger Grilled',
  //       type: 'Burger Grilled',
  //       companyName: 'Burger Grilled',
  //       location: 'Burger Grilled',
  //       thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  //       companyLogo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  //       salary: 280000,
  //     },
  // ];

  return (
    <>
      <div className="font-poppins text-[#0E0140] pb-[100px] overflow-x-hidden">
        <div
          id="page-background"
          className="absolute h-[1330px] w-full top-0 -z-10 overflow-hidden"
        >
          <img
            src="assets/backgrounds/Group 2009.png"
            className="w-full h-full object-fill"
            alt="background"
          />
        </div>
        <nav className="container max-w-[1130px] mx-auto flex items-center justify-between pt-10">
          <a href="index.html" className="flex shrink-0">
            <img src="assets/logos/Logo.svg" alt="Logo" />
          </a>
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="index.html"
                className="transition-all duration-300 hover:font-semibold hover:text-[#FF6B2C] font-semibold text-[#FF6B2C]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="transition-all duration-300 hover:font-semibold hover:text-[#FF6B2C] font-medium text-white"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="transition-all duration-300 hover:font-semibold hover:text-[#FF6B2C] font-medium text-white"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="transition-all duration-300 hover:font-semibold hover:text-[#FF6B2C] font-medium text-white"
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="transition-all duration-300 hover:font-semibold hover:text-[#FF6B2C] font-medium text-white"
              >
                About
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="signin.html"
              className="rounded-full border border-white p-[14px_24px] font-semibold text-white"
            >
              Sign In
            </a>
            <a
              href="signup.html"
              className="rounded-full p-[14px_24px] bg-[#FF6B2C] font-semibold text-white hover:shadow-[0_10px_20px_0_#FF6B2C66] transition-all duration-300"
            >
              Sign up
            </a>
          </div>
        </nav>
        <header className="container max-w-[1130px] mx-auto flex items-center justify-between gap-[50px] mt-[70px]">
          <div className="flex flex-col justify-center w-full gap-10">
            <div className="badge flex items-center rounded-full py-2 pl-4 pr-6 gap-[10px] bg-white w-fit">
              <div className="flex shrink-0">
                <img src="assets/icons/crown-orange.svg" alt="icon" />
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
              src="assets/backgrounds/hero illustration v2.png"
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

export default App
