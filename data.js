// ===============================================
// DATA.JS - Google Sheets Integration & Data Management
// ===============================================

// Google Sheets Configuration with your URL
const GOOGLE_SHEETS_CONFIG = {
    SHEET_ID: '1vS_yksZGD5Q8Azt0oY4GveWIcrglKO-W167sbMW8Ao8pJXh6g1klQVdlfWPT-XG9Vyoja4Hqad72y3K',
    BASE_URL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_yksZGD5Q8Azt0oY4GveWIcrglKO-W167sbMW8Ao8pJXh6g1klQVdlfWPT-XG9Vyoja4Hqad72y3K/pub?output=csv'
};

// Sample data structure (backup if Google Sheets fails)
const SAMPLE_DATA = {
    exams: [
        {
            id: 1,
            name: 'SSC CGL',
            code: 'SSC_CGL',
            fullName: 'Staff Selection Commission Combined Graduate Level',
            category: 'SSC',
            icon: 'fa-user-tie',
            pattern: {
                phases: 'Tier 1, Tier 2, Tier 3',
                totalMarks: '200 (Tier 1)',
                duration: '60 minutes',
                sections: 'Quantitative, Reasoning, English, GK'
            },
            importantDetails: {
                eligibility: "Bachelor's Degree",
                ageLimit: '18-32 years',
                examFrequency: 'Once a year',
                officialWebsite: 'https://ssc.nic.in'
            }
        },
        {
            id: 2,
            name: 'UPSC CSE',
            code: 'UPSC_CSE',
            fullName: 'Union Public Service Commission Civil Services Examination',
            category: 'UPSC',
            icon: 'fa-landmark',
            pattern: {
                phases: 'Prelims, Mains, Interview',
                totalMarks: '2025',
                duration: '2 hours (Prelims)',
                sections: 'GS, CSAT, Optional Subject'
            },
            importantDetails: {
                eligibility: "Bachelor's Degree",
                ageLimit: '21-32 years',
                examFrequency: 'Once a year',
                officialWebsite: 'https://upsc.gov.in'
            }
        },
        {
            id: 3,
            name: 'Bank PO',
            code: 'BANK_PO',
            fullName: 'Banking Personnel Selection - Probationary Officer',
            category: 'Banking',
            icon: 'fa-building-columns',
            pattern: {
                phases: 'Prelims, Mains, Interview',
                totalMarks: '100 (Prelims)',
                duration: '60 minutes',
                sections: 'Reasoning, Quantitative, English'
            },
            importantDetails: {
                eligibility: "Bachelor's Degree",
                ageLimit: '20-30 years',
                examFrequency: 'Multiple times a year',
                officialWebsite: 'https://ibps.in'
            }
        },
        {
            id: 4,
            name: 'RRB NTPC',
            code: 'RRB_NTPC',
            fullName: 'Railway Recruitment Board Non-Technical Popular Categories',
            category: 'Railway',
            icon: 'fa-train',
            pattern: {
                phases: 'Stage 1, Stage 2, Skill Test',
                totalMarks: '100',
                duration: '90 minutes',
                sections: 'Mathematics, Reasoning, GK'
            },
            importantDetails: {
                eligibility: '12th Pass / Graduate',
                ageLimit: '18-33 years',
                examFrequency: 'Twice a year',
                officialWebsite: 'https://rrbonlinereg.co.in'
            }
        }
    ],
    
    syllabus: {
        'SSC_CGL': [
            {
                subject: 'Quantitative Aptitude',
                topics: [
                    { name: 'Number System', hours: 8, subtopics: ['HCF & LCM', 'Divisibility', 'Prime Numbers', 'Decimal Fractions'] },
                    { name: 'Algebra', hours: 10, subtopics: ['Linear Equations', 'Quadratic Equations', 'Polynomials'] },
                    { name: 'Geometry', hours: 12, subtopics: ['Triangles', 'Circles', 'Mensuration'] },
                    { name: 'Data Interpretation', hours: 8, subtopics: ['Tables', 'Bar Graphs', 'Pie Charts'] }
                ]
            },
            {
                subject: 'General Intelligence & Reasoning',
                topics: [
                    { name: 'Logical Reasoning', hours: 10, subtopics: ['Syllogism', 'Statement & Conclusions', 'Blood Relations'] },
                    { name: 'Verbal Reasoning', hours: 8, subtopics: ['Analogies', 'Coding-Decoding', 'Series'] },
                    { name: 'Non-Verbal Reasoning', hours: 8, subtopics: ['Pattern Completion', 'Figure Matrix'] }
                ]
            },
            {
                subject: 'English Language',
                topics: [
                    { name: 'Grammar', hours: 12, subtopics: ['Tenses', 'Voice', 'Narration', 'Articles'] },
                    { name: 'Vocabulary', hours: 10, subtopics: ['Synonyms', 'Antonyms', 'Idioms'] },
                    { name: 'Comprehension', hours: 8, subtopics: ['Reading Passages', 'Inference'] }
                ]
            },
            {
                subject: 'General Awareness',
                topics: [
                    { name: 'Current Affairs', hours: 15, subtopics: ['National', 'International', 'Sports', 'Awards'] },
                    { name: 'History', hours: 10, subtopics: ['Ancient India', 'Medieval India', 'Modern India'] },
                    { name: 'Geography', hours: 10, subtopics: ['Physical', 'Indian Geography', 'World Geography'] },
                    { name: 'Polity', hours: 10, subtopics: ['Constitution', 'Fundamental Rights', 'Government'] }
                ]
            }
        ],
        'UPSC_CSE': [
            {
                subject: 'General Studies - I',
                topics: [
                    { name: 'Indian Heritage', hours: 20, subtopics: ['Art Forms', 'Literature', 'Architecture'] },
                    { name: 'Modern History', hours: 25, subtopics: ['Freedom Struggle', 'Social Reform'] },
                    { name: 'Geography', hours: 30, subtopics: ['Physical Geography', 'Indian Geography'] }
                ]
            }
        ],
        'BANK_PO': [
            {
                subject: 'Reasoning Ability',
                topics: [
                    { name: 'Logical Reasoning', hours: 12, subtopics: ['Puzzles', 'Seating Arrangement'] },
                    { name: 'Verbal Reasoning', hours: 10, subtopics: ['Syllogism', 'Statement & Assumptions'] }
                ]
            }
        ],
        'RRB_NTPC': [
            {
                subject: 'Mathematics',
                topics: [
                    { name: 'Number System', hours: 8, subtopics: ['HCF & LCM', 'Fractions'] },
                    { name: 'Algebra', hours: 8, subtopics: ['Basic Equations', 'Simplification'] }
                ]
            }
        ]
    },

    studyMaterials: {
        'SSC_CGL': [
            {
                subject: 'Quantitative Aptitude',
                materials: [
                    { type: 'video', title: 'Number System Complete Course', url: 'https://www.youtube.com/results?search_query=SSC+CGL+Number+System', provider: 'YouTube' },
                    { type: 'website', title: 'Quantitative Practice', url: 'https://www.indiabix.com/aptitude/questions-and-answers/', provider: 'IndiaBix' },
                    { type: 'website', title: 'Algebra Concepts', url: 'https://en.wikipedia.org/wiki/Algebra', provider: 'Wikipedia' }
                ]
            },
            {
                subject: 'Reasoning',
                materials: [
                    { type: 'video', title: 'Logical Reasoning Complete', url: 'https://www.youtube.com/results?search_query=SSC+CGL+Logical+Reasoning', provider: 'YouTube' },
                    { type: 'website', title: 'Reasoning Practice', url: 'https://www.indiabix.com/logical-reasoning/', provider: 'IndiaBix' }
                ]
            },
            {
                subject: 'English',
                materials: [
                    { type: 'video', title: 'English Grammar Full Course', url: 'https://www.youtube.com/results?search_query=SSC+CGL+English+Grammar', provider: 'YouTube' },
                    { type: 'website', title: 'Grammar Rules', url: 'https://en.wikipedia.org/wiki/English_grammar', provider: 'Wikipedia' }
                ]
            },
            {
                subject: 'General Awareness',
                materials: [
                    { type: 'video', title: 'Current Affairs 2024', url: 'https://www.youtube.com/results?search_query=Current+Affairs+2024', provider: 'YouTube' },
                    { type: 'website', title: 'GK Current Affairs', url: 'https://www.google.com/search?q=current+affairs+india', provider: 'Google' }
                ]
            }
        ],
        'UPSC_CSE': [
            {
                subject: 'General Studies',
                materials: [
                    { type: 'video', title: 'Indian Polity Complete', url: 'https://www.youtube.com/results?search_query=UPSC+Indian+Polity', provider: 'YouTube' },
                    { type: 'website', title: 'UPSC Official', url: 'https://upsc.gov.in/', provider: 'UPSC' }
                ]
            }
        ],
        'BANK_PO': [
            {
                subject: 'Reasoning',
                materials: [
                    { type: 'video', title: 'Banking Reasoning', url: 'https://www.youtube.com/results?search_query=Bank+PO+Reasoning', provider: 'YouTube' },
                    { type: 'website', title: 'IBPS Official', url: 'https://ibps.in/', provider: 'IBPS' }
                ]
            }
        ],
        'RRB_NTPC': [
            {
                subject: 'Mathematics',
                materials: [
                    { type: 'video', title: 'RRB Math Complete', url: 'https://www.youtube.com/results?search_query=RRB+NTPC+Mathematics', provider: 'YouTube' },
                    { type: 'website', title: 'RRB Official', url: 'https://rrbonlinereg.co.in/', provider: 'RRB' }
                ]
            }
        ]
    }
};

// RSS Feed URLs for News
const NEWS_RSS_FEEDS = {
    bbc: 'https://feeds.bbci.co.uk/news/rss.xml',
    hindustanTimes: 'https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml',
    indiaToday: 'https://www.indiatoday.in/rss/1206614',
    timesOfIndia: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms',
    theHindu: 'https://www.thehindu.com/news/national/feeder/default.rss'
};

// Function to parse CSV data from Google Sheets
function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '') continue;
        const values = lines[i].split(',').map(v => v.trim());
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index] || '';
        });
        data.push(row);
    }
    
    return data;
}

// Fetch data from Google Sheets
async function fetchGoogleSheetData() {
    try {
        showLoading(true);
        const response = await fetch(GOOGLE_SHEETS_CONFIG.BASE_URL);
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        
        console.log('Google Sheets Data Loaded:', parsedData);
        
        // Process and merge with APP_DATA
        if (parsedData && parsedData.length > 0) {
            processGoogleSheetData(parsedData);
        }
        
        showLoading(false);
        return parsedData;
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
        console.log('Using sample data instead');
        showLoading(false);
        return null;
    }
}

// Process Google Sheets data and update APP_DATA
function processGoogleSheetData(data) {
    // You can customize this function based on your Google Sheets structure
    console.log('Processing Google Sheets data...');
    // Add your custom processing logic here
}

// Initialize app data
let APP_DATA = SAMPLE_DATA;

// Load Google Sheets data on app start
fetchGoogleSheetData();

// Export functions
function getExamData() {
    return APP_DATA.exams;
}

function getSyllabusData(examCode) {
    return APP_DATA.syllabus[examCode] || [];
}

function getStudyMaterials(examCode) {
    return APP_DATA.studyMaterials[examCode] || [];
}

function getAllExams() {
    return APP_DATA.exams;
}

// Helper function to show loading spinner
function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        if (show) {
            spinner.classList.remove('hidden');
        } else {
            spinner.classList.add('hidden');
        }
    }
}