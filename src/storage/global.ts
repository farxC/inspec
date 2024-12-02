import { Store } from 'pullstate'
import { report_data } from '../types/reportData'



const dateToString = (date: Date) => {
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    return day + "/" + month + "/" + year
}


export const formStore = new Store<report_data>({
    date: dateToString(new Date),
    images_report: {
    failureEvidence:'',
    identifier: '',
    overview: '',
    optionalImages: {
        "1": '',
        "2": '',
        "3": '',
        "4": '',
        "5": '',
        "6": '',
        "7": '',
        "8": '',
        "9": '',
    },
   },
    images_subtitles:{
        "3": '',
        "4": '',
        "5": '',
        "6": '',
        "7": '',
        "8": '',
        "9": '',
        "10": '',
        "11": ''
    }
        }
   
)

   