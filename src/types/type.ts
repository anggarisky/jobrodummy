export interface Job {
    id: number,
    name: string,
    slug: string,
    category: Category,
    thumbnail: string,
    about: string,
    companyName: string,
    companyLogo: string,
    location: string,
    type: string,
    salary: number
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    icon: string;
    jobs_count: number;
    jobs: Job[];
    created_at: string;
    updated_at: string;
}