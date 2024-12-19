
export interface ImagesReportField{
    identifier: string;
    overview: string;
    failureEvidence: string;
    optionalImages?: {
        [key: string]: string;
    }
}

type images_subtitle = {
    [key: string]: string;
}

export type ReportData = {
    date: string;
    os: number | undefined;
    images_report: ImagesReportField;
    images_subtitles?: images_subtitle
}