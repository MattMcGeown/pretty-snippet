import { toBlob, toJpeg, toPng } from 'html-to-image';

import { ExportImageAsProps } from './types';

export const useExportImageAs = () => {
  const copyToClipboard = async ({ element }: ExportImageAsProps) => {
    if (element) {
      try {
        const blob = await toBlob(element);
        if (blob) {
          const item = new ClipboardItem({ 'image/png': blob });

          navigator.clipboard.write([item]);
        }
      } catch (error) {
        // TODO: Surface toast
        // eslint-disable-next-line no-console
        console.error('Error generating image or copying to clipboard:', error);
      }
    }
  };

  const exportAsPng = ({ element, fileName }: ExportImageAsProps) => {
    toPng(element, { cacheBust: true })
      .then((dataUrl) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = `ps_${fileName}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
      .catch((err: any) => {
        // TODO: Surface toast
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  const exportAsJpg = ({ element, fileName }: ExportImageAsProps) => {
    toJpeg(element, { cacheBust: true })
      .then((dataUrl) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = `ps_${fileName}.jpg`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
      .catch((err: any) => {
        // TODO: Surface toast
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return { copyToClipboard, exportAsPng, exportAsJpg };
};
