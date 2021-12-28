import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';
import {ImagePreview, Toast} from 'vant'
export default {
  install(Vue, options) {
    Vue.prototype.getImg = function (title, isShowPreviewFullTime) {
      return new Promise((resolve, reject) => {
        //1.toImg
        try {
          html2Canvas(document.querySelector('#container'), {
            useCORS: true,
            // backgroundColor: null
            // backgroundColor: null
            scale: 2
          }).then((canvas) => {
            const exportImgEle = document.querySelector('#exportImg');
            // const exportImgLinkEle = document.querySelector('#exportImgLink');
            exportImgEle.src = canvas.toDataURL('image/png');
            // exportImgLinkEle.href = canvas.toDataURL('image/png');
            // exportImgLinkEle.download = title
            // console.log(exportImgLinkEle)
           // exportImgLinkEle.click();  // 执行 <a> 元素的下载
           // ImagePreview(canvas.toDataURL('image/png'))
            resolve('ok')
          });

        } catch (e) {
          reject(e)
        }

      })


    },
      Vue.prototype.getPdf = function (title, isShowPreviewFullTime) {
        return new Promise((resolve, reject) => {
          try {
            // 2.toPdf
            html2Canvas(document.querySelector('#container'), {
              allowTaint: false,
              useCORS: true,
              x: 0,
              y: 0
            }).then(function (canvas) {
              let pageWidth = 750
              let pageHeight = canvas.height / (canvas.width / 750)
              let pageData = canvas.toDataURL('image/jpeg', 1.0)
              let PDF = new JsPDF('', 'pt', [pageWidth, pageHeight])
              PDF.addImage(pageData, 'JPEG', 0, 0, pageWidth, pageHeight)
              PDF.save(title + '.pdf')
              resolve('ok')
            });

          } catch (e) {
            reject(e)
          }

        })
          }

  }
}
