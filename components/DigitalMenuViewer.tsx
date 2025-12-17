import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Download, Eye, X } from 'lucide-react';

interface DigitalMenuViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DigitalMenuViewer: React.FC<DigitalMenuViewerProps> = ({ isOpen, onClose }) => {
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pagesRendered, setPagesRendered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const menuPdfUrl = './Cartas%20Espan%CC%83ol%20ale%CC%81rgenos%20nuevo%202025%20traz.pdf';

  useEffect(() => {
    if (isOpen && !pdfDoc) {
      loadPDF();
    }
  }, [isOpen]);

  useEffect(() => {
    if (pdfDoc && !pagesRendered) {
      renderAllPages();
    }
  }, [pdfDoc, pagesRendered]);

  const loadPDF = async () => {
    try {
      setLoading(true);

      // Load PDF.js from CDN if not already loaded
      if (!(window as any).pdfjsLib) {
        await loadPDFJS();
      }

      const pdfjsLib = (window as any).pdfjsLib;
      const loadingTask = pdfjsLib.getDocument(menuPdfUrl);
      const pdf = await loadingTask.promise;

      setPdfDoc(pdf);
      setTotalPages(pdf.numPages);
      setLoading(false);
    } catch (error) {
      console.error('Error loading PDF:', error);
      setLoading(false);
    }
  };

  const loadPDFJS = () => {
    return new Promise((resolve) => {
      if ((window as any).pdfjsLib) {
        resolve((window as any).pdfjsLib);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
      script.onload = () => {
        (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        resolve((window as any).pdfjsLib);
      };
      document.head.appendChild(script);
    });
  };

  const renderAllPages = async () => {
    if (!pdfDoc || !containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = ''; // Clear previous content

    for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
      try {
        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale, rotation: 0 });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) continue;

        canvas.height = viewport.height;
        canvas.width = viewport.width;
        canvas.className = 'pdf-page border border-neutral-700 rounded-lg shadow-lg mb-4';

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        await page.render(renderContext).promise;

        // Create page container
        const pageContainer = document.createElement('div');
        pageContainer.className = 'pdf-page-container flex justify-center';
        pageContainer.appendChild(canvas);
        container.appendChild(pageContainer);
      } catch (error) {
        console.error(`Error rendering page ${pageNum}:`, error);
      }
    }

    setPagesRendered(true);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToPage(currentPage - 1);
    }
  };

  const scrollToPage = (pageNum: number) => {
    if (containerRef.current) {
      const pages = containerRef.current.querySelectorAll('.pdf-page-container');
      if (pages[pageNum - 1]) {
        pages[pageNum - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const zoomIn = () => {
    const newScale = Math.min(scale + 0.2, 2.0);
    setScale(newScale);
    setPagesRendered(false); // Re-render pages with new scale
  };

  const zoomOut = () => {
    const newScale = Math.max(scale - 0.2, 0.5);
    setScale(newScale);
    setPagesRendered(false); // Re-render pages with new scale
  };

  const rotate = () => {
    setRotation((rotation + 90) % 360);
    setPagesRendered(false); // Re-render pages with new rotation
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-neutral-900 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-700">
          <div>
            <h2 className="text-2xl font-serif font-bold text-white">Carta Digital</h2>
            <p className="text-gray-400 text-sm">Explora nuestro menú página por página</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={menuPdfUrl}
              download="Carta_Brasa_Negra_2025.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Download size={16} />
              Descargar
            </a>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative bg-neutral-800">
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <p className="text-white">Cargando carta digital...</p>
              </div>
            </div>
          ) : (
            <>
              {/* PDF Pages Container */}
              <div
                ref={containerRef}
                className="max-h-[70vh] overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-neutral-800"
                style={{ scrollBehavior: 'smooth' }}
              >
                {/* Pages will be rendered here by renderAllPages */}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between p-6 border-t border-neutral-700 bg-neutral-900">
                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevPage}
                    disabled={currentPage <= 1}
                    className="p-3 bg-neutral-700 hover:bg-neutral-600 disabled:bg-neutral-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                    title="Página anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex items-center gap-2 text-white">
                    <span className="text-sm">Página</span>
                    <span className="font-semibold text-orange-400">{currentPage}</span>
                    <span className="text-gray-400">de</span>
                    <span className="font-semibold">{totalPages}</span>
                  </div>

                  <button
                    onClick={nextPage}
                    disabled={currentPage >= totalPages}
                    className="p-3 bg-neutral-700 hover:bg-neutral-600 disabled:bg-neutral-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                    title="Página siguiente"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Zoom and Rotate Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={zoomOut}
                    className="p-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors"
                    title="Alejar"
                  >
                    <ZoomOut size={18} />
                  </button>

                  <span className="text-white text-sm px-3 py-1 bg-neutral-700 rounded min-w-[60px] text-center">
                    {Math.round(scale * 100)}%
                  </span>

                  <button
                    onClick={zoomIn}
                    className="p-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors"
                    title="Acercar"
                  >
                    <ZoomIn size={18} />
                  </button>

                  <button
                    onClick={rotate}
                    className="p-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors ml-4"
                    title="Rotar página"
                  >
                    <RotateCw size={18} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-neutral-900 border-t border-neutral-700">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <span>📄 Carta completa con información de alérgenos</span>
              <span>•</span>
              <span>🍽️ Restaurante Brasa Negra 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={14} />
              <span>Modo de visualización digital</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
