import { Store } from 'pullstate'
import { report_data } from '../types/reportData'


export const formStore = new Store<report_data>({
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
    }
    
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
   }}
   
)

   