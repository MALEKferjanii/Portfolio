import { useEffect, useRef, useState } from 'react';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import profile from '../data/profile.json';
import { CV_OPEN_EVENT } from './cvEvents';

const fileName = profile.cv.split('/').pop();

export default function CvViewer() {
  const dialog = useRef<HTMLDialogElement>(null);
  // Load the PDF only after the first open, then keep it for instant reopening.
  const [requested, setRequested] = useState(false);
  const inline = navigator.pdfViewerEnabled !== false;
  useEffect(() => {
    const open = () => {
      setRequested(true);
      if (dialog.current?.open) return;
      dialog.current?.showModal();
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener(CV_OPEN_EVENT, open);
    return () => window.removeEventListener(CV_OPEN_EVENT, open);
  }, []);
  const close = () => dialog.current?.close();
  return <dialog ref={dialog} className="cv-viewer" aria-labelledby="cv-viewer-title"
    onClose={() => { document.body.style.overflow = ''; }}
    onClick={e => { if (e.target === dialog.current) close(); }}>
    <div className="cv-viewer-bar">
      <span id="cv-viewer-title"><FileText size={15} /> {fileName}<small>PDF · 2 pages</small></span>
      <div className="cv-viewer-actions">
        <a href={profile.cv} target="_blank" rel="noopener"><ExternalLink size={14} /><span>New tab</span></a>
        <a href={profile.cv} download><Download size={14} /><span>Download</span></a>
        <button onClick={close} aria-label="Close CV preview"><X size={16} /></button>
      </div>
    </div>
    {requested && (inline
      ? <iframe className="cv-viewer-frame" src={profile.cv + '#view=FitH'} title="Malek Ferjani CV" />
      : <div className="cv-viewer-fallback"><FileText size={40} /><p>This browser can’t preview PDFs inline.</p>
        <div className="actions"><a className="button primary" href={profile.cv} target="_blank" rel="noopener"><ExternalLink size={17} /> Open CV</a><a className="button secondary" href={profile.cv} download><Download size={17} /> Download</a></div></div>)}
  </dialog>;
}
