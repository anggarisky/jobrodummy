import { Category } from "./types/type";

export default function CategoryCard({category}: CategoryCardProps) {
    return(
        <a href="" className="card">
      <div className="flex flex-col rounded-[20px] border border-[#E8E4F8] p-5 gap-[30px] bg-white shadow-[0_8px_30px_0_#0E01400D] hover:ring-2 hover:ring-[#FF6B2C] transition-all duration-300">
        <div className="w-[60px] h-[60px] flex shrink-0">
          <img
            src="assets/icons/Web Development 1.png"
            className="object-contain"
            alt="icon"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <p className="font-bold text-lg leading-[27px]">{category.name}</p>
            <p className="font-medium">{category.jobs_count} Jobs</p>
          </div>
          <img src="assets/icons/arrow-circle-right.svg" alt="icon" />
        </div>
      </div>
    </a>
    );
}

interface CategoryCardProps {
    category: Category
}