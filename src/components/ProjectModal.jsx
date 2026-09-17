import { useState } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Monitor,
  Tablet,
  Smartphone,
  RotateCw,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';

import {
  playClick,
  playClose,
  playHover,
} from '../utils/sound';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'details'
  const [viewportMode, setViewportMode] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [iframeKey, setIframeKey] = useState(0);

  const getViewportWidth = () => {
    switch (viewportMode) {
      case 'mobile':
        return 'max-w-[390px]';
      case 'tablet':
        return 'max-w-[768px]';
      case 'desktop':
      default:
        return 'w-full';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        playClose();
        onClose();
      }}
    >
      <div
        className="relative w-full max-w-5xl bg-white border border-gray-300 shadow-2xl text-left overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL TOP HEADER */}
        <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-[10px] font-mono tracking-widest uppercase bg-black text-white px-2.5 py-1 font-semibold">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-black truncate max-w-xs sm:max-w-md">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                onMouseEnter={playHover}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider bg-black text-white hover:bg-blue-600 transition-colors"
              >
                <span>OPEN LIVE SITE</span>
                <ArrowUpRight size={13} />
              </a>
            )}

            <button
              onMouseEnter={playHover}
              onClick={() => {
                playClose();
                onClose();
              }}
              className="w-9 h-9 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* TAB SWITCHER & VIEWPORT CONTROLS */}
        <div className="px-4 sm:px-6 py-2.5 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Tabs */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              onMouseEnter={playHover}
              onClick={() => {
                playClick();
                setActiveTab('preview');
              }}
              className={`px-3 py-1.5 font-semibold transition-all border ${activeTab === 'preview'
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-white text-gray-500 border-gray-200 hover:text-black'
                }`}
            >
              LIVE LANDING PAGE
            </button>

            <button
              onMouseEnter={playHover}
              onClick={() => {
                playClick();
                setActiveTab('details');
              }}
              className={`px-3 py-1.5 font-semibold transition-all border ${activeTab === 'details'
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-white text-gray-500 border-gray-200 hover:text-black'
                }`}
            >
              SPECIFICATIONS & STACK
            </button>
          </div>

          {/* Responsive Viewport Mode Switcher (Visible on preview tab) */}
          {activeTab === 'preview' && project.liveUrl && (
            <div className="flex items-center gap-1 bg-white p-1 border border-gray-200 text-xs font-mono">
              <span className="text-[10px] text-gray-400 px-1 hidden md:inline">VIEWPORT:</span>

              <button
                onMouseEnter={playHover}
                onClick={() => {
                  playClick();
                  setViewportMode('desktop');
                }}
                title="Desktop View (Full Width)"
                className={`flex items-center gap-1 px-2.5 py-1 transition-colors ${viewportMode === 'desktop'
                    ? 'bg-black text-white font-bold'
                    : 'text-gray-400 hover:text-black'
                  }`}
              >
                <Monitor size={12} />
                <span className="hidden sm:inline text-[10px]">DESKTOP</span>
              </button>

              <button
                onMouseEnter={playHover}
                onClick={() => {
                  playClick();
                  setViewportMode('tablet');
                }}
                title="Tablet View (768px)"
                className={`flex items-center gap-1 px-2.5 py-1 transition-colors ${viewportMode === 'tablet'
                    ? 'bg-black text-white font-bold'
                    : 'text-gray-400 hover:text-black'
                  }`}
              >
                <Tablet size={12} />
                <span className="hidden sm:inline text-[10px]">TABLET</span>
              </button>

              <button
                onMouseEnter={playHover}
                onClick={() => {
                  playClick();
                  setViewportMode('mobile');
                }}
                title="Mobile View (390px)"
                className={`flex items-center gap-1 px-2.5 py-1 transition-colors ${viewportMode === 'mobile'
                    ? 'bg-black text-white font-bold'
                    : 'text-gray-400 hover:text-black'
                  }`}
              >
                <Smartphone size={12} />
                <span className="hidden sm:inline text-[10px]">MOBILE</span>
              </button>

              <button
                onMouseEnter={playHover}
                onClick={() => setIframeKey((prev) => prev + 1)}
                title="Reload Page"
                className="p-1 text-gray-400 hover:text-black transition-colors ml-1 border-l border-gray-200 pl-2"
              >
                <RotateCw size={12} />
              </button>
            </div>
          )}
        </div>

        {/* TAB CONTENT AREA */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-3 sm:p-6 flex flex-col items-center">
          {/* TAB 1: LIVE LANDING PAGE VIEWER */}
          {activeTab === 'preview' && (
            <div className="w-full flex flex-col items-center flex-1">
              {project.liveUrl ? (
                <div
                  className={`w-full ${getViewportWidth()} transition-all duration-300 flex flex-col bg-white border border-gray-300 shadow-xl overflow-hidden`}
                  style={{ height: viewportMode === 'mobile' ? '640px' : '580px' }}
                >
                  {/* Browser Chrome Bar */}
                  <div className="px-4 py-2.5 bg-gray-100 border-b border-gray-200 flex items-center justify-between gap-3 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    </div>

                    <div className="flex-1 max-w-md bg-white rounded border border-gray-200 px-3 py-1 flex items-center justify-between text-[11px] font-mono text-gray-600 truncate">
                      <span className="truncate">{project.liveUrl}</span>
                      <ShieldCheck size={12} className="text-gray-400 shrink-0 ml-1.5" />
                    </div>

                    <a
                      onMouseEnter={playHover}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black transition-colors shrink-0"
                      title="Open in new tab"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Responsive Iframe Container */}
                  <div className="relative flex-1 bg-white">
                    <iframe
                      key={iframeKey}
                      src={project.liveUrl}
                      title={project.title}
                      className="w-full h-full border-0"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center text-gray-500 font-mono text-xs">
                  No live preview URL available for this project.
                </div>
              )}

              {/* Bottom Quick Help Note */}
              <div className="mt-3 flex items-center justify-between w-full max-w-xl text-[10px] font-mono text-gray-500 px-2">
                <span>⚡ Interactive iframe — scroll and interact directly</span>
                {project.liveUrl && (
                  <a
                    onMouseEnter={playHover}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black underline flex items-center gap-1"
                  >
                    <span>Open in full browser window</span>
                    <ArrowUpRight size={10} />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: SPECIFICATIONS & STACK */}
          {activeTab === 'details' && (
            <div className="w-full max-w-3xl bg-white border border-gray-200 p-6 sm:p-10 shadow-sm text-left">
              {/* Description */}
              <h4 className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase font-semibold mb-2">
                PROJECT OVERVIEW
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                {project.fullDescription || project.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase font-semibold mb-3">
                  KEY FEATURES & ARCHITECTURE
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features?.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 border border-gray-100 bg-gray-50 text-xs text-gray-700 font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase font-semibold mb-3">
                  TECHNOLOGIES USED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-3 py-1 border border-gray-200 text-gray-700 bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-200">
                {project.liveUrl && (
                  <a
                    onMouseEnter={playHover}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono tracking-wider bg-black text-white hover:bg-blue-600 transition-all duration-300"
                  >
                    <span>OPEN LIVE APPLICATION</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}

                <button
                  onMouseEnter={playHover}
                  onClick={() => {
                    alert(`Source code repository available upon request: ${project.title}`);
                  }}
                  className="flex items-center gap-2 px-6 py-3.5 text-xs font-mono tracking-wider border border-gray-300 hover:bg-gray-100 text-black transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>REPOSITORY</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
