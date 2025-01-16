
export interface ImagesReportField{
    identifier: string;
    overview: string;
    failureEvidence: string;
    optionalImages?: {
        [key: string]: string;
    }
}

export interface Report {
    os: number;
    date: string;
    images_report: ImagesReportField;
    images_subtitles?: {
        [key: string]: string;
    }
}