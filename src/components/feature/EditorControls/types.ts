export interface IEditorControlsProps {
  onExportCallback: (type: ExportAsProps) => void;
}

export type ExportAsProps = 'png' | 'jpg' | 'clipboard' | 'imgur';
