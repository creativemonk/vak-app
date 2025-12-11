const DATA = [
  {
    "id": "daily",
    "name": "Daily Chants",
    "icon": "Volume2",
    "scripts": [
      {
        "id": "gayatri",
        "title": "Gayatri Mantra",
        "meaning": "We meditate on the glory of that being who has produced this universe; may He enlighten our minds.",
        "sources": [
          { "src": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Gayatri_Mantra.ogg", "type": "audio/ogg" },
          { "src": "https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e5/Gayatri_Mantra.ogg/Gayatri_Mantra.ogg.mp3", "type": "audio/mpeg" }
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
      },
      {
        "id": "shanti",
        "title": "Shanti Mantra",
        "meaning": "Lead me from the unreal to the real, lead me from darkness to light, lead me from death to immortality.",
        "sources": [
           // Placeholder audio (replace with actual Shanti Mantra audio if available)
           { "src": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Gayatri_Mantra.ogg", "type": "audio/ogg" } 
        ],
        "content": [
          { "word": "ॐ", "trans": "Om", "start": 0, "end": 2 },
          { "word": "असतो", "trans": "asato", "start": 2, "end": 4 },
          { "word": "मा", "trans": "mā", "start": 4, "end": 5 },
          { "word": "सद्गमय", "trans": "sadgamaya", "start": 5, "end": 8 },
          { "word": "तमसो", "trans": "tamaso", "start": 8, "end": 10 },
          { "word": "मा", "trans": "mā", "start": 10, "end": 11 },
          { "word": "ज्योतिर्गमय", "trans": "jyotirgamaya", "start": 11, "end": 14 },
          { "word": "मृत्योर्मा", "trans": "mṛtyormā", "start": 14, "end": 17 },
          { "word": "अमृतं", "trans": "amṛtaṃ", "start": 17, "end": 20 },
          { "word": "गमय", "trans": "gamaya", "start": 20, "end": 22 }
        ]
      }
    ]
  },
  {
    "id": "vedic",
    "name": "Vedic Suktams",
    "icon": "BookOpen",
    "scripts": [
      {
        "id": "purusha",
        "title": "Purusha Suktam (Intro)",
        "meaning": "The Purusha Suktam is a hymn dedicated to the Cosmic Being.",
        "sources": [
          { "src": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Gayatri_Mantra.ogg", "type": "audio/ogg" }
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
    "icon": "Layers",
    "scripts": [
      {
        "id": "panchakshari",
        "title": "Panchakshari Mantra",
        "meaning": "I bow to Shiva. The five syllables Na-Ma-Śi-Vā-Ya represent the five elements.",
        "sources": [
          { "src": "https://upload.wikimedia.org/wikipedia/commons/2/23/Om_Namah_Shivaya_Mantra_Chanting.ogg", "type": "audio/ogg" },
          { "src": "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/23/Om_Namah_Shivaya_Mantra_Chanting.ogg/Om_Namah_Shivaya_Mantra_Chanting.ogg.mp3", "type": "audio/mpeg" }
        ],
        "content": [
          { "word": "ॐ", "trans": "Om", "start": 0, "end": 3 },
          { "word": "नमः", "trans": "namaḥ", "start": 3, "end": 4.5 },
          { "word": "शिवाय", "trans": "śivāya", "start": 4.5, "end": 8 }
        ]
      },
      {
        "id": "mahamrityunjaya",
        "title": "Mahamrityunjaya Mantra",
        "meaning": "We worship the Three-Eyed One (Lord Shiva), who is fragrant and nourishes all beings.",
        "sources": [
           { "src": "https://upload.wikimedia.org/wikipedia/commons/5/59/Mahamrityunjaya_Mantra.ogg", "type": "audio/ogg" },
           { "src": "https://upload.wikimedia.org/wikipedia/commons/transcoded/5/59/Mahamrityunjaya_Mantra.ogg/Mahamrityunjaya_Mantra.ogg.mp3", "type": "audio/mpeg" }
        ],
        "content": [
          { "word": "ॐ", "trans": "Om", "start": 0, "end": 2 },
          { "word": "त्र्यम्बकं", "trans": "tryambakaṃ", "start": 2, "end": 4 },
          { "word": "यजामहे", "trans": "yajāmahe", "start": 4, "end": 6 },
          { "word": "सुगन्धिं", "trans": "sugandhiṃ", "start": 6, "end": 8 },
          { "word": "पुष्टिवर्धनम्", "trans": "puṣṭi-vardhanam", "start": 8, "end": 12 },
          { "word": "उर्वारुकमिव", "trans": "urvārukam iva", "start": 12, "end": 15 },
          { "word": "बन्धनान्", "trans": "bandhanān", "start": 15, "end": 18 },
          { "word": "मृत्योर्मुक्षीय", "trans": "mṛtyor mukṣīya", "start": 18, "end": 22 },
          { "word": "मामृतात्", "trans": "māmṛtāt", "start": 22, "end": 25 }
        ]
      }
    ]
  },
  {
    "id": "guru",
    "name": "Guru Stotras",
    "icon": "Flower",
    "scripts": [
      {
        "id": "guru_ashtakam",
        "title": "Guru Ashtakam",
        "meaning": "Even if one has a beautiful body, a beautiful spouse, fame, and wealth like Mount Meru, if the mind is not surrendered to the Guru's lotus feet, what is the use?",
        "sources": [
          { "src": "vak-app/public/audio/Guru Ashtakam.mp3", "type": "audio/mpeg" }
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

export default DATA;
