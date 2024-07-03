import { Link } from "react-router-dom";
import { Job } from "../types/type";
import Button from "./Button";

export default function JobCard({job}: JobCardProps) {


  // Define the base URL for images
  const baseURL = "http://127.0.0.1:8000/storage/";

    return(
        <div className="card  px-[15px] py-[2px]">
              <div className="w-[350px] flex flex-col shrink-0 rounded-[20px] border border-[#E8E4F8] p-5 gap-5 bg-white shadow-[0_8px_30px_0_#0E01400D] hover:ring-2 hover:ring-[#FF6B2C] transition-all duration-300">
                <div className="company-info flex items-center gap-3">
                  <div className="w-[70px] flex shrink-0 overflow-hidden">
                    <img
                      src={`${baseURL}/${job.companyLogo}`}
                      className="object-contain w-full h-full"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">{job.companyName}</p>
                    <p className="text-sm leading-[21px]">Posted at 22 Jan 2024</p>
                  </div>
                </div>
                <hr className="border-[#E8E4F8]" />
                <p className="job-title font-bold text-lg leading-[27px] h-[54px] flex shrink-0 line-clamp-2">
                  {job.name}
                </p>
                <div className="job-info flex flex-col gap-[14px]">
                  <div className="flex items-center gap-[6px]">
                    <div className="flex shrink-0 w-6 h-6">
                      <img src="assets/icons/note-favorite-orange.svg" alt="icon" />
                    </div>
                    <p className="font-medium">{job.type}</p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div className="flex shrink-0 w-6 h-6">
                      <img src="assets/icons/moneys-cyan.svg" alt="icon" />
                    </div>
                    <p className="font-medium">Guaranteed</p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div className="flex shrink-0 w-6 h-6">
                      <img src="assets/icons/location-purple.svg" alt="icon" />
                    </div>
                    <p className="font-medium">{job.location}</p>
                  </div>
                </div>
                <hr className="border-[#E8E4F8]" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg leading-[27px]">Rp {job.salary.toLocaleString('id')}</p>
                    <p className="text-sm leading-[21px]">/month</p>
                  </div>
                  <Link to={`/jobs/${job.slug}`}>
                    <Button />
                  </Link>
                </div>
              </div>
            </div>
    );
}

interface JobCardProps {
    job: Job
}