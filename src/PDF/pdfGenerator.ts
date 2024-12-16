import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { report_data } from '../types/report_data';
import { clearAllItems } from '../storage/clearItems';
import { createHTML } from './createHTML';

export const PdfGenerator = async (data: report_data, firebaseDoc?: boolean ) => {

     

      const htmlContent = createHTML(data)  
      const relatoryName = 'Relatorio_de_Reparo-'+ data.date.replaceAll('/', '.')
  
      try {
        const options = {
          html: htmlContent,
          fileName: relatoryName,
          directory: 'Documents',
          
        }
      
        const file = await RNHTMLtoPDF.convert(options);
        clearAllItems()
        
        return file.filePath?.toString()
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    
   
     
}


