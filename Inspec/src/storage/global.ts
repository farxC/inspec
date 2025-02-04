import { Store } from 'pullstate'
import { report_data } from '../types/report_data'



const dateToString = (date: Date) => {
    let day = date.getDate(); 
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    return `${day}/${month}/${year} ${hour}:${min}:${sec}`
}


export const formStore = new Store<report_data>({
    date: dateToString(new Date),
    os: undefined,
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

   