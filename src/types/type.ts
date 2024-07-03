export interface Job {
    id: number,
    name: string,
    slug: string,
    category: string,
    keypoints: JobKeypoints[],
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

export interface JobKeypoints {
    id: number,
    name: string
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