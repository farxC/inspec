import { report_data } from "../types/report_data";


export const createHTML = (data: report_data): string => {

    const html: string = `<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <script>
        
            </script>
            <style> ${htmlStyles} </style>
        </head>
        <body>
            
      <div class="pagina2">
              <div class="header">
                <span class="texto_header">Relatório de Reparo</span>
              </div>
          
              <div class="grid_fotos">
                <span class="tit_obrigatorias">Fotos Obrigatórias</span>
                <div class="obrigatorias">
                  <div class="idequi">
                      <div class="img1">
                        <img class="img-container" src=${data.images_report.identifier} />
                        <div class="txt1">Identificação</div>
                      </div>
                  </div>

                  <div class="visgeral">
                      <div class="img1">
                        <img class="img-container" src=${data.images_report.overview} />
                        <div class="txt2">Visão geral</div>
                      </div>
                  </div>

                  <div class="evidefalha">
                        <div class="img1">
                          <img class="img-container" src=${data.images_report.failureEvidence} />
                        <div class="txt3">Evidencia de Falha</div>
                      </div>
                  </div>
                </div>

                <div class="tit_opcionais"> Fotos Opcionais </div>

                <div class="opcionais">   
                  <div class="op1">
                    <div class="img1">
                      <img class="img-container" src=${data.images_report.optionalImages?.["1"]} />
                      <div class="txtop">${data.images_subtitles?.["3"]}</div>
                    </div>
                  </div>

                  <div class="op2">
                    <div class="img1">
                      <img class="img-container" src=${data.images_report.optionalImages?.["2"]} />
                      <div class="txtop">${data.images_subtitles?.["4"]}</div>
                    </div>
                    
                  </div>

                  <div class="op3">
                    <div class="img1"/>
                      <img class="img-container" src=${data.images_report.optionalImages?.["3"]} />
                      <div class="txtop">${data.images_subtitles?.["5"]}</div>
                    </div>
                  </div>
                </div>

              </div>
      </div>

        `
        return html
}

const htmlStyles = `
`