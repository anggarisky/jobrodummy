import { useParams } from "react-router-dom";
import { Job } from "./types/type";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

// Helper function to format date
function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

export default function JobDetails() {

    const { slug } = useParams<{ slug: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/jobs/${slug}`)
      .then(response => {
        setJob(response.data.data); // Adjust based on your API response structure
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading job: {error}</p>;
  }

  if (!job) {
    return <p>Job not found</p>;
  }

  // Define the base URL for images
  const baseURL = "http://127.0.0.1:8000/storage/";


    return(
        <div className="font-poppins text-[#0E0140] pb-[100px] overflow-x-hidden">
  <div
    id="page-background"
    className="absolute h-[533px] w-full top-0 -z-10 overflow-hidden"
  >
    <img
      src="/assets/backgrounds/Group 2009.png"
      className="w-full h-full object-fill"
      alt="background"
    />
  </div>
  <Navbar/>
  <article
    id="Details"
    className="max-w-[900px] mx-auto flex flex-col rounded-[20px] bg-white border border-[#E8E4F8] p-[30px] gap-10 shadow-[0_8px_30px_0_#0E01400D] mt-[70px]"
  >
    <div id="Cover" className="w-full relative">
      <div className="w-full aspect-[840/300] bg-[#D9D9D9] rounded-[20px] overflow-hidden">
        <img
            src={`${baseURL}/${job.thumbnail}`}
          className="object-cover w-full h-full"
          alt="cover image"
        />
      </div>
      <div className="absolute transform translate-y-1/2 bottom-0 left-5 w-[120px] h-[120px] p-5 flex shrink-0 items-center justify-center bg-white rounded-[20px] border border-[#E8E4F8] shadow-[0_8px_30px_0_#0E01400D]">
        <img
          src={`${baseURL}/${job.companyLogo}`}
          className="object-contain w-full h-full"
          alt="logo"
        />
      </div>
      <div className="absolute transform translate-y-1/2 bottom-0 right-5">
        {/* <p id="ClosedBadge" class="rounded-full p-[8px_20px] bg-[#FF2C39] font-bold text-white w-fit">CLOSED</p> */}
        <p
          id="HiringBadge"
          className="rounded-full p-[8px_20px] bg-[#7521FF] font-bold text-white w-fit"
        >
          WE’RE HIRING!
        </p>
      </div>
    </div>
    <div id="Title" className="flex flex-col mt-[90px] gap-[10px]">
      <h1 className="font-bold text-[32px] leading-[48px]">
        {job.name}
      </h1>
      <p>{job.category ? job.category.name : 'unknown'} • Posted at {job.created_at ? formatDate(job.created_at) : 'Date not available'}</p>
    </div>
    <div id="Feature" className="flex items-center gap-6">
      <div className="flex items-center gap-[6px]">
        <div className="flex shrink-0 w-[38px] h-[38px]">
          <img src="/assets/icons/note-favorite-orange.svg" alt="icon" />
        </div>
        <p className="font-semibold text-lg leading-[27px]">Full-Time</p>
      </div>
      <div className="flex items-center gap-[6px]">
        <div className="flex shrink-0 w-[38px] h-[38px]">
          <img src="/assets/icons/personalcard-yellow.svg" alt="icon" />
        </div>
        <p className="font-semibold text-lg leading-[27px]">Intermediate</p>
      </div>
      <div className="flex items-center gap-[6px]">
        <div className="flex shrink-0 w-[38px] h-[38px]">
          <img src="/assets/icons/moneys-cyan.svg" alt="icon" />
        </div>
        <p className="font-semibold text-lg leading-[27px]">Rp 18.500.000/mo</p>
      </div>
      <div className="flex items-center gap-[6px]">
        <div className="flex shrink-0 w-[38px] h-[38px]">
          <img src="/assets/icons/location-purple.svg" alt="icon" />
        </div>
        <p className="font-semibold text-lg leading-[27px]">Bali, Indonesia</p>
      </div>
    </div>
    <div id="Overview" className="flex flex-col gap-[10px]">
      <h2 className="font-semibold text-xl leading-[30px]">Overview</h2>
      <p className="text-lg leading-[34px]">
        We are seeking a talented and passionate Front-End Developer to join our
        dynamic team the ideal candidate will have a keen eye for design, a deep
        understanding of modern web technologies, and a passion for creating
        engaging user experiences a Front-End Developer, you will work closely
        with our design and back-end teams to build responsive, user-friendly.
      </p>
    </div>
    <div id="Responsibilities" className="flex flex-col gap-[10px]">
      <h2 className="font-semibold text-xl leading-[30px]">Responsibilities</h2>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <div className="flex shrink-0">
            <img src="/assets/icons/tick-circle.svg" alt="tick icon" />
          </div>
          <p>Lorem dolor quick interview ipsum amet never nego</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex shrink-0">
            <img src="/assets/icons/tick-circle.svg" alt="tick icon" />
          </div>
          <p>Powerful AI filtering job based on resume to create stunning</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex shrink-0">
            <img src="/assets/icons/tick-circle.svg" alt="tick icon" />
          </div>
          <p>Lorem dolor quick interview ipsum amet never nego</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex shrink-0">
            <img src="/assets/icons/tick-circle.svg" alt="tick icon" />
          </div>
          <p>Powerful AI filtering job based on resume to create stunning</p>
        </div>
      </div>
    </div>
    <div id="Qualifications" className="flex flex-col gap-[10px]">
      <h2 className="font-semibold text-xl leading-[30px]">Qualifications</h2>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <div className="flex shrink-0">
            <img src="/assets/icons/tick-circle.svg" alt="tick icon" />
          </div>
          <p>Lorem dolor quick interview ipsum amet never nego</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex shrink-0">
            <img src="/assets/icons/tick-circle.svg" alt="tick icon" />
          </div>
          <p>Powerful AI filtering job based on resume to create stunning</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex shrink-0">
            <img src="/assets/icons/tick-circle.svg" alt="tick icon" />
          </div>
          <p>Lorem dolor quick interview ipsum amet never nego</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex shrink-0">
            <img src="/assets/icons/tick-circle.svg" alt="tick icon" />
          </div>
          <p>Powerful AI filtering job based on resume to create stunning</p>
        </div>
      </div>
    </div>
    <div id="Company" className="flex flex-col gap-[10px]">
      <h2 className="font-semibold text-xl leading-[30px]">Company</h2>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div className="company-logo w-[70px] flex shrink-0">
            <img
              src="/assets/logos/grab.svg"
              className="object-contain"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="CompanyName font-semibold flex items-center gap-[2px]">
              <p className="font-semibold">Grab Singapore</p>
              <div className="w-6 h-6 flex shrink-0">
                <img src="/assets/icons/verify.svg" alt="verified" />
              </div>
            </div>
            <p className="text-sm leading-[21px]">13,493 Jobs</p>
          </div>
        </div>
        <p className="leading-[28px]">
          We are born to help people working faster and better in a daily
          productivity dolor si amet cheaper price more secure friendly lorem
          ipsum dolor si inna terus bangun tumbuh.
        </p>
      </div>
    </div>
    <hr className="border-[#E8E4F8]" />
    <div id="CTA" className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex shrink-0">
          <img src="/assets/icons/security-user.svg" alt="icon" />
        </div>
        <p className="font-semibold">We use Angga to secure your data 100%</p>
      </div>
      <div className="flex items-center gap-3">
        <a
          href=""
          className="rounded-full border border-[#0E0140] p-[14px_24px] font-semibold text-[#0E0140]"
        >
          Bookmark
        </a>
        <a
          href="apply.html"
          className="rounded-full p-[14px_24px] bg-[#FF6B2C] font-semibold text-white hover:shadow-[0_10px_20px_0_#FF6B2C66] transition-all duration-300"
        >
          Apply Now
        </a>
      </div>
    </div>
  </article>
  
</div>

    );
}