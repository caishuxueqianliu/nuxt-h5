import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';

export default {
  install(Vue, options) {
    Vue.prototype.getPdf = function (title, isShowPreviewFullTime) {
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
        }
      )
    }
  }
}
