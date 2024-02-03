import { toBlob, toJpeg, toPng } from 'html-to-image';
import { useToast } from '@chakra-ui/react';

import { ExportImageAsProps } from './types';

export const useExportImageAs = () => {
  const toast = useToast();

  const copyToClipboard = async ({ element }: ExportImageAsProps) => {
    if (element) {
      try {
        const blob = await toBlob(element);
        if (blob) {
          const item = new ClipboardItem({ 'image/png': blob });

          navigator.clipboard.write([item]);

          toast({
            title: 'Image copied to clipboard.',
            status: 'success',
          });
        }
      } catch (err: any) {
        toast({
          title: 'Request Error.',
          description: `Please try again or contact a system admin. Error: ${err}`,
          status: 'error',
        });
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
        toast({
          title: 'Request Error.',
          description: `Please try again or contact a system admin. Error: ${err}`,
          status: 'error',
        });
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
        toast({
          title: 'Request Error.',
          description: `Please try again or contact a system admin. Error: ${err}`,
          status: 'error',
        });
      });
  };

  return { copyToClipboard, exportAsPng, exportAsJpg };
};
