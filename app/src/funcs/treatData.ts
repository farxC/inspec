import { report_data } from "../types/reportData";

export const treatData = (data: report_data) => {
    if (data !== undefined ||  data !== null){
        const typedReceivedData = data as report_data
        return typedReceivedData
    }
}