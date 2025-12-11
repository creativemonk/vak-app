import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, 
  Menu, X, BookOpen, Layers, Search, 
  Flower, AlertCircle, AlertTriangle, Music, ChevronDown, ChevronRight
} from 'lucide-react';

// --- DATABASE (Inlined for Preview) ---
// NOTE: For your local/GitHub setup, keep this in 'vak_data.js' 
// and import it using: import DATA from './vak_data';

const DATA = [
  {
    "id": "daily",
    "name": "Daily Chants",
    "icon": <Volume2 size={18}/>,
    "scripts": [
      {
        "id": "gayatri",
        "title": "Gayatri Mantra",
        "meaning": "We meditate on the glory of that being who has produced this universe; may He enlighten our minds.",
        "sources": [
          {
            "src": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Gayatri_Mantra.ogg",
            "type": "audio/ogg"
          }
        ],
        "content": [
          { "word": "ॐ", "trans": "Om", "start": 0, "end": 0.8 },
          { "word": "भूर्भुवः", "trans": "bhūr bhuvaḥ", "start": 0.8, "end": 2.5 },
          { "word": "स्वः", "trans": "svaḥ", "start": 2.5, "end": 3.5 },
          { "word": "तत्", "trans": "tat", "start": 3.5, "end": 4.2 },
          { "word": "सवितुर्", "trans": "savitur", "start": 4.2, "end": 5.5 },
          { "word": "वरेण्यं", "trans": "vareṇyaṃ", "start": 5.5, "end": 7.2 },
          { "word": "भर्गो", "trans": "bhargo", "start": 7.2, "end": 8.5 },
          { "word": "देवस्य", "trans": "devasya", "start": 8.5, "end": 10 },
          { "word": "धीमहि", "trans": "dhīmahi", "start": 10, "end": 11.5 },
          { "word": "धियो", "trans": "dhiyo", "start": 11.5, "end": 12.8 },
          { "word": "यो", "trans": "yo", "start": 12.8, "end": 13.5 },
          { "word": "नः", "trans": "naḥ", "start": 13.5, "end": 14.2 },
          { "word": "प्रचोदयात्", "trans": "pracodayāt", "start": 14.2, "end": 17 }
        ]
      }
    ]
  },
  {
    "id": "vedic",
    "name": "Vedic Suktams",
    "icon": <BookOpen size={18}/>,
    "scripts": [
      {
        "id": "purusha",
        "title": "Purusha Suktam (Intro)",
        "meaning": "The Purusha Suktam is a hymn dedicated to the Cosmic Being.",
        "sources": [
          {
            "src": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Gayatri_Mantra.ogg",
            "type": "audio/ogg"
          }
        ],
        "content": [
          { "word": "सहस्रशीर्षा", "trans": "sahasra-śīrṣā", "start": 0, "end": 2 },
          { "word": "पुरुषः", "trans": "puruṣaḥ", "start": 2, "end": 3.5 },
          { "word": "सहस्राक्षः", "trans": "sahasrākṣaḥ", "start": 3.5, "end": 5.5 },
          { "word": "सहस्रपात्", "trans": "sahasrapāt", "start": 5.5, "end": 8 }
        ]
      }
    ]
  },
  {
    "id": "shiva",
    "name": "Shiva Stotras",
    "icon": <Layers size={18}/>,
    "scripts": [
      {
        "id": "panchakshari",
        "title": "Panchakshari Mantra",
        "meaning": "I bow to Shiva. The five syllables Na-Ma-Śi-Vā-Ya represent the five elements.",
        "sources": [
          {
            "src": "https://upload.wikimedia.org/wikipedia/commons/2/23/Om_Namah_Shivaya_Mantra_Chanting.ogg",
            "type": "audio/ogg"
          }
        ],
        "content": [
          { "word": "ॐ", "trans": "Om", "start": 0, "end": 3 },
          { "word": "नमः", "trans": "namaḥ", "start": 3, "end": 4.5 },
          { "word": "शिवाय", "trans": "śivāya", "start": 4.5, "end": 8 }
        ]
      }
    ]
  },
  {
    "id": "guru",
    "name": "Guru Stotras",
    "icon": <Flower size={18}/>,
    "scripts": [
      {
        "id": "guru_ashtakam",
        "title": "Guru Ashtakam",
        "meaning": "Even if one has a beautiful body, a beautiful spouse, fame, and wealth like Mount Meru, if the mind is not surrendered to the Guru's lotus feet, what is the use?",
        "sources": [
          {
            // USING RELATIVE PATH - This expects 'GuruAshtakam.mp3' in 'public/audio/'
            "src": "audio/GuruAshtakam.mp3", 
            "type": "audio/mpeg"
          }
        ],
        "content": [
          { "word": "शरीरं", "trans": "śarīraṁ", "start": 0, "end": 2 },
          { "word": "सुरूपं", "trans": "surūpaṁ", "start": 2, "end": 4 },
          { "word": "तथा", "trans": "tathā", "start": 4, "end": 5 },
          { "word": "वा", "trans": "vā", "start": 5, "end": 5.5 },
          { "word": "कलत्रं", "trans": "kalatraṁ", "start": 5.5, "end": 8 },
          { "word": "यशश्चारु", "trans": "yaśaś cāru", "start": 8, "end": 11 },
          { "word": "चित्रं", "trans": "citraṁ", "start": 11, "end": 13 },
          { "word": "धनं", "trans": "dhanaṁ", "start": 13, "end": 15 },
          { "word": "मेरुतुल्यम्", "trans": "merutulyam", "start": 15, "end": 18 },
          { "word": "मनश्चेन्न", "trans": "manaś cen na", "start": 18, "end": 21 },
          { "word": "लग्नं", "trans": "lagnaṁ", "start": 21, "end": 23 },
          { "word": "गुरोरङ्घ्रिपद्मे", "trans": "guroraṅghripadme", "start": 23, "end": 28 },
          { "word": "ततः किं", "trans": "tataḥ kiṁ", "start": 28, "end": 30 },
          { "word": "ततः किं", "trans": "tataḥ kiṁ", "start": 30, "end": 32 },
          { "word": "ततः किं", "trans": "tataḥ kiṁ", "start": 32, "end": 34 },
          { "word": "ततः किम्", "trans": "tataḥ kim", "start": 34, "end": 37 }
        ]
      }
    ]
  }
];

// --- APP COMPONENT ---

const VakClientApp = () => {
  // Navigation State
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeScriptId, setActiveScriptId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [errorMsg, setErrorMsg] = useState(null);
  
  const audioRef = useRef(null);
  const stopTimeRef = useRef(null);

  // --- Logic ---

  // 1. Initialize Default Selection
  useEffect(() => {
      if (DATA.length > 0 && DATA[0].scripts.length > 0) {
          setExpandedCategory(DATA[0].id);
          setActiveScriptId(DATA[0].scripts[0].id);
      }
  }, []);

  // 2. Flatten list for Next/Prev logic
  const allScripts = useMemo(() => {
      return DATA.flatMap(cat => cat.scripts);
  }, []);

  // 3. Resolve current script
  const currentScript = useMemo(() => {
      return allScripts.find(s => s.id === activeScriptId) || null;
  }, [allScripts, activeScriptId]);

  // 4. Audio Source Helper - Strict checking
  const getAudioSrc = () => {
    if (!currentScript?.sources?.length) return "";
    // Prefer mp3, fallback to whatever is first
    const mp3 = currentScript.sources.find(s => s.type === 'audio/mpeg');
    const src = mp3 ? mp3.src : currentScript.sources[0].src;
    return src;
  };

  const activeAudioSrc = getAudioSrc();

  // --- Effects ---

  // Handle Script Change (Segment Setup)
  useEffect(() => {
    setIsPlaying(false);
    setActiveWordIndex(-1);
    stopTimeRef.current = null;
    setErrorMsg(null);

    // Force reload on script change
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; 
        audioRef.current.load(); // Vital for switching tracks without 'key'
    }

    // SEGMENT LOGIC: Jump to start of this chant (only visual for now)
    if (currentScript?.content?.length > 0) {
        const startTime = currentScript.content[0].start;
        setCurrentTime(startTime);
    }
  }, [currentScript]);

  // --- Handlers ---

  const handleEnded = () => {
      setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    // Retry logic if previously errored
    if (errorMsg) {
        setErrorMsg(null);
        audioRef.current.load();
    }
    
    if (isPlaying) {
      audioRef.current.pause();
      stopTimeRef.current = null;
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
          playPromise
            .then(() => { 
                setIsPlaying(true); 
                setErrorMsg(null); 
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.error("Playback prevented:", err);
                    setIsPlaying(false);
                    // Don't show error immediately on auto-play prevention
                }
            });
      }
    }
  };

  const playWord = (start, end) => {
    if (!audioRef.current) return;

    if (errorMsg) {
        setErrorMsg(null);
        audioRef.current.load();
    }
    
    // Ensure accurate seek
    const performSeekAndPlay = () => {
        audioRef.current.currentTime = start;
        stopTimeRef.current = end;
        
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise
            .then(() => setIsPlaying(true))
            .catch(e => console.error(e));
        }
    };

    if(audioRef.current.readyState > 0) {
        performSeekAndPlay();
    } else {
        const onMeta = () => {
            performSeekAndPlay();
            audioRef.current.removeEventListener('loadedmetadata', onMeta);
        };
        audioRef.current.addEventListener('loadedmetadata', onMeta);
        // Ensure it's loading
        if (audioRef.current.networkState === audioRef.current.NETWORK_NO_SOURCE || audioRef.current.networkState === audioRef.current.NETWORK_EMPTY) {
             audioRef.current.load();
        }
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current || !currentScript) return;
    const curr = audioRef.current.currentTime;
    setCurrentTime(curr);

    // 1. Single Word Stop Logic
    if (stopTimeRef.current !== null && curr >= stopTimeRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      stopTimeRef.current = null;
      return;
    }

    // 2. Global Script Stop Logic
    if (currentScript.content?.length > 0) {
        const lastWordEnd = currentScript.content[currentScript.content.length - 1].end;
        if (curr > lastWordEnd + 0.5) {
            audioRef.current.pause();
            setIsPlaying(false);
            return;
        }
    }

    // 3. Karaoke Highlighting Logic
    if (currentScript.content) {
      const index = currentScript.content.findIndex(w => curr >= w.start && curr < w.end);
      if (index !== -1) setActiveWordIndex(index);
    }
  };

  // Handle Metadata Load (Initial Seek)
  const onLoadedMetadata = () => {
      setErrorMsg(null); 
      if (currentScript?.content?.length > 0) {
          const startTime = currentScript.content[0].start;
          // Only seek if we are at 0 (initial load) to avoid jumping during playback
          if(audioRef.current.currentTime === 0) {
             audioRef.current.currentTime = startTime;
             setCurrentTime(startTime);
          }
      }
  };

  const handleAudioError = (e) => {
      // Very strict error filtering. 
      // If src is valid and error occurs, then report.
      if (!e.target.currentSrc || e.target.currentSrc === window.location.href) return;

      if (e.target.error) {
        console.warn("Audio Load Failed:", e.target.error);
        // code 4 is MEDIA_ELEMENT_ERROR: Format not supported
        if(e.target.error.code === 4) {
             setErrorMsg("Format Not Supported");
        } else {
             setErrorMsg("Audio Unavailable");
        }
        setIsPlaying(false);
      }
  };

  if (!currentScript) return <div className="h-screen bg-slate-950 flex items-center justify-center text-slate-500">Loading Content...</div>;

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-80 bg-slate-900 border-r border-white/5 flex flex-col transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 shadow-2xl md:shadow-none`}>
        
        {/* Header */}
        <div className="p-6 flex items-center justify-between shrink-0 border-b border-white/5">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-orange-500/20">ॐ</div>
             <div className="flex flex-col">
                <span className="font-bold text-xl tracking-wide leading-tight">Vāk</span>
                <span className="text-[10px] text-slate-500 font-mono">parabrahma.in</span>
             </div>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="md:hidden text-slate-400 hover:text-white"><X size={24}/></button>
        </div>

        {/* Search */}
        <div className="px-4 py-4 shrink-0">
            <div className="relative group">
                <Search className="absolute left-3 top-2.5 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={16}/>
                <input 
                    type="text" 
                    placeholder="Search chants..." 
                    className="w-full bg-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder-slate-600"
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); if(e.target.value) setExpandedCategory('ALL'); }}
                />
            </div>
        </div>

        {/* Vertical Menu */}
        <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2 no-scrollbar">
            {DATA.map((cat) => {
                const visibleScripts = searchQuery 
                    ? cat.scripts.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    : cat.scripts;
                
                if (visibleScripts.length === 0 && searchQuery) return null;

                const isOpen = expandedCategory === cat.id || searchQuery !== "";

                return (
                    <div key={cat.id} className="overflow-hidden">
                        <button 
                            onClick={() => setExpandedCategory(isOpen ? null : cat.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${isOpen ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
                        >
                            <div className="flex items-center gap-3 font-semibold text-sm">
                                {cat.icon}
                                <span>{cat.name}</span>
                            </div>
                            {isOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
                        </button>

                        {isOpen && (
                            <div className="mt-1 ml-3 pl-3 border-l border-white/5 space-y-1">
                                {visibleScripts.map(script => (
                                    <button
                                        key={script.id}
                                        onClick={() => { setActiveScriptId(script.id); setIsMenuOpen(false); }}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center justify-between group ${activeScriptId === script.id ? 'bg-amber-500/10 text-amber-400 font-medium' : 'text-slate-500 hover:text-slate-300'}`}
                                    >
                                        <span className="truncate">{script.title}</span>
                                        {activeScriptId === script.id && <Music size={12} className="text-amber-500"/>}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full relative bg-slate-950">
        
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
            <button onClick={() => setIsMenuOpen(true)} className="p-2 -ml-2 text-slate-300"><Menu size={24}/></button>
            <span className="font-bold text-lg truncate text-slate-100">{currentScript.title}</span>
            <div className="w-8"></div>
        </header>

        {/* Content Scroll */}
        <div className="flex-1 overflow-y-auto p-4 md:p-10 pb-40">
            <div className="max-w-4xl mx-auto">
                
                <div className="mb-10 text-center md:text-left">
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-3 block">
                        {DATA.find(c => c.scripts.some(s => s.id === currentScript.id))?.name}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">{currentScript.title}</h1>
                    <div className="bg-slate-900/50 border border-white/5 p-4 rounded-xl inline-block text-left">
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl italic">
                            "{currentScript.meaning}"
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="flex flex-wrap gap-3 md:gap-4 leading-loose">
                        {currentScript.content?.map((segment, index) => {
                            const isActive = index === activeWordIndex;
                            return (
                                <button
                                    key={index}
                                    onClick={() => playWord(segment.start, segment.end)}
                                    className={`group flex flex-col items-start px-3 py-2 rounded-xl transition-all duration-300 text-left border 
                                        ${isActive 
                                            ? 'bg-slate-800 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.15)] scale-105 z-10' 
                                            : 'bg-transparent border-transparent hover:bg-white/5'
                                        }`}
                                >
                                    <span className={`block text-2xl md:text-4xl font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>
                                        {segment.word}
                                    </span>
                                    {segment.trans && (
                                        <span className={`block text-xs md:text-sm font-mono mt-1 transition-colors ${isActive ? 'text-amber-400' : 'text-slate-600 group-hover:text-slate-500'}`}>
                                            {segment.trans}
                                        </span>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className="h-20"></div>
            </div>
        </div>

        {/* Player Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-slate-900/90 border-t border-white/10 p-4 md:px-8 md:py-5 backdrop-blur-xl z-20">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                
                <div className="hidden md:block w-1/4">
                    <div className="text-sm font-bold text-white truncate">{currentScript.title}</div>
                    <div className="text-xs text-slate-500 truncate mt-0.5">{errorMsg || (activeWordIndex >= 0 ? 'Playing...' : 'Paused')}</div>
                </div>

                <div className="flex-1 w-full flex flex-col items-center gap-3">
                    <div className="flex items-center gap-8">
                        <button onClick={() => { const idx = allScripts.findIndex(s => s.id === currentScript.id); if(idx>0) setActiveScriptId(allScripts[idx-1].id); }} className="text-slate-400 hover:text-white transition"><SkipBack size={24}/></button>
                        
                        <button 
                            onClick={togglePlay} 
                            className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg shadow-white/10"
                        >
                            {errorMsg ? <AlertTriangle size={24}/> : (isPlaying ? <Pause size={24} fill="currentColor"/> : <Play size={24} fill="currentColor" className="ml-1"/>)}
                        </button>
                        
                        <button onClick={() => { const idx = allScripts.findIndex(s => s.id === currentScript.id); if(idx<allScripts.length-1) setActiveScriptId(allScripts[idx+1].id); }} className="text-slate-400 hover:text-white transition"><SkipForward size={24}/></button>
                    </div>
                    
                    <div className="w-full flex items-center gap-3 text-xs text-slate-500 font-mono">
                         <span className="w-8 text-right">{formatTime(currentTime)}</span>
                         <div 
                             className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden relative group cursor-pointer"
                             onClick={(e) => {
                                 const rect = e.currentTarget.getBoundingClientRect();
                                 const pct = (e.clientX - rect.left) / rect.width;
                                 if(audioRef.current) audioRef.current.currentTime = pct * audioRef.current.duration;
                             }}
                         >
                            <div className="absolute top-0 left-0 h-full bg-amber-500 transition-all duration-100 group-hover:bg-amber-400" style={{ width: `${(currentTime / (audioRef.current?.duration || 1)) * 100}%` }}></div>
                         </div>
                         <span className="w-8">{formatTime(audioRef.current?.duration || 0)}</span>
                    </div>
                </div>

                <div className="hidden md:flex w-1/4 justify-end">
                    <button 
                        onClick={() => { const r = playbackRate === 1 ? 0.75 : 1; setPlaybackRate(r); if(audioRef.current) audioRef.current.playbackRate = r; }} 
                        className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 transition"
                    >
                        {playbackRate}x Speed
                    </button>
                </div>
            </div>
        </div>

        {/* Audio Element */}
        <audio 
            key={activeScriptId} // Critical: forces re-render on script change
            ref={audioRef}
            src={activeAudioSrc || ""} 
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            onLoadedMetadata={onLoadedMetadata} 
            onError={handleAudioError}
        />
      </div>
    </div>
  );
};

const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default VakClientApp;
