export interface Job {
    _id:                         string;
    url:                         string;
    title:                       string;
    company_name:                string;
    category:                    string;
    job_type:                    string;
    publication_date:            Date;
    candidate_required_location: string;
    salary:                      string;
    description:                 string;
}

export interface State {
    jobs: Job[],
    isLoading: boolean,
    savedJobs: Job[],
    saved: boolean
}