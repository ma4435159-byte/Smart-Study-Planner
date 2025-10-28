// ===============================================
// DATA.JS - Google Sheets Integration & Data Management
// ===============================================

// Google Sheets Configuration
const GOOGLE_SHEETS_CONFIG = {
   https://docs.google.com/spreadsheets/d/e/2PACX-1vS_yksZGD5Q8Azt0oY4GveWIcrglKO-W167sbMW8Ao8pJXh6g1klQVdlfWPT-XG9Vyoja4Hqad72y3K/pubhtml // Replace these with your actual Google Sheets URLs after publishing
    EXAM_LIST_URL: 'YOUR_EXAM_LIST_SHEET_URL',
    EXAM_SYLLABUS_URL: 'YOUR_EXAM_SYLLABUS_SHEET_URL',
    STUDY_MATERIALS_URL: 'YOUR_STUDY_MATERIALS_SHEET_URL'
};

// Sample data structure (will be replaced by Google Sheets data)
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
                    { name: 'Polity', hours: 10, subtopics: ['Constitution', 'Fundamental Rights', 'Government'] },
                    { name: 'Economics', hours: 8, subtopics: ['Basic Concepts', 'Indian Economy', 'Banking'] },
                    { name: 'Science', hours: 12, subtopics: ['Physics', 'Chemistry', 'Biology'] }
                ]
            }
        ],
        'UPSC_CSE': [
            {
                subject: 'General Studies - I',
                topics: [
                    { name: 'Indian Heritage', hours: 20, subtopics: ['Art Forms', 'Literature', 'Architecture'] },
                    { name: 'Modern History', hours: 25, subtopics: ['Freedom Struggle', 'Social Reform', 'Nationalism'] },
                    { name: 'World History', hours: 20, subtopics: ['Industrial Revolution', 'World Wars', 'Colonization'] },
                    { name: 'Geography', hours: 30, subtopics: ['Physical Geography', 'Indian Geography', 'World Geography'] }
                ]
            },
            {
                subject: 'General Studies - II',
                topics: [
                    { name: 'Indian Polity', hours: 30, subtopics: ['Constitution', 'Parliament', 'Judiciary'] },
                    { name: 'Governance', hours: 25, subtopics: ['Transparency', 'E-Governance', 'RTI'] },
                    { name: 'Social Justice', hours: 20, subtopics: ['Welfare Schemes', 'Rights Issues'] },
                    { name: 'International Relations', hours: 25, subtopics: ['India & Neighbors', 'Global Issues'] }
                ]
            },
            {
                subject: 'General Studies - III',
                topics: [
                    { name: 'Indian Economy', hours: 30, subtopics: ['Economic Development', 'Planning', 'Reforms'] },
                    { name: 'Science & Technology', hours: 25, subtopics: ['Biotechnology', 'Space', 'IT'] },
                    { name: 'Environment', hours: 20, subtopics: ['Climate Change', 'Conservation', 'Pollution'] },
                    { name: 'Security', hours: 20, subtopics: ['Internal Security', 'Defense', 'Cyber Security'] }
                ]
            },
            {
                subject: 'General Studies - IV',
                topics: [
                    { name: 'Ethics', hours: 20, subtopics: ['Moral Philosophy', 'Ethical Theories'] },
                    { name: 'Integrity', hours: 15, subtopics: ['Public Service Values', 'Probity'] },
                    { name: 'Aptitude', hours: 15, subtopics: ['Emotional Intelligence', 'Case Studies'] }
                ]
            },
            {
                subject: 'CSAT',
                topics: [
                    { name: 'Comprehension', hours: 15, subtopics: ['Reading Skills', 'Logical Reasoning'] },
                    { name: 'Logical Reasoning', hours: 15, subtopics: ['Analytical Ability', 'Problem Solving'] },
                    { name: 'Basic Numeracy', hours: 15, subtopics: ['Mathematics', 'Data Interpretation'] }
                ]
            }
        ],
        'BANK_PO': [
            {
                subject: 'Reasoning Ability',
                topics: [
                    { name: 'Logical Reasoning', hours: 12, subtopics: ['Puzzles', 'Seating Arrangement', 'Blood Relations'] },
                    { name: 'Verbal Reasoning', hours: 10, subtopics: ['Syllogism', 'Statement & Assumptions'] },
                    { name: 'Data Sufficiency', hours: 8, subtopics: ['Problem Solving', 'Decision Making'] }
                ]
            },
            {
                subject: 'Quantitative Aptitude',
                topics: [
                    { name: 'Arithmetic', hours: 15, subtopics: ['Percentage', 'Profit & Loss', 'SI & CI', 'Time & Work'] },
                    { name: 'Algebra', hours: 10, subtopics: ['Equations', 'Series', 'Progressions'] },
                    { name: 'Data Interpretation', hours: 12, subtopics: ['Tables', 'Graphs', 'Charts'] }
                ]
            },
            {
                subject: 'English Language',
                topics: [
                    { name: 'Reading Comprehension', hours: 10, subtopics: ['Passages', 'Vocabulary'] },
                    { name: 'Grammar', hours: 10, subtopics: ['Error Spotting', 'Sentence Improvement'] },
                    { name: 'Verbal Ability', hours: 8, subtopics: ['Para Jumbles', 'Fill in the Blanks'] }
                ]
            },
            {
                subject: 'General Awareness',
                topics: [
                    { name: 'Banking Awareness', hours: 12, subtopics: ['Banking Terms', 'RBI Functions', 'Banking News'] },
                    { name: 'Current Affairs', hours: 15, subtopics: ['National', 'International', 'Economy'] },
                    { name: 'Static GK', hours: 10, subtopics: ['Capitals', 'Important Days', 'Awards'] }
                ]
            }
        ],
        'RRB_NTPC': [
            {
                subject: 'Mathematics',
                topics: [
                    { name: 'Number System', hours: 8, subtopics: ['HCF & LCM', 'Fractions', 'Decimals'] },
                    { name: 'Algebra', hours: 8, subtopics: ['Basic Equations', 'Simplification'] },
                    { name: 'Geometry', hours: 10, subtopics: ['Lines & Angles', 'Triangles', 'Areas'] },
                    { name: 'Arithmetic', hours: 12, subtopics: ['Percentage', 'Profit Loss', 'Time & Work'] }
                ]
            },
            {
                subject: 'General Intelligence',
                topics: [
                    { name: 'Analogies', hours: 6, subtopics: ['Number Analogies', 'Letter Analogies'] },
                    { name: 'Coding-Decoding', hours: 6, subtopics: ['Letter Coding', 'Number Coding'] },
                    { name: 'Series', hours: 8, subtopics: ['Number Series', 'Letter Series'] },
                    { name: 'Logical Reasoning', hours: 10, subtopics: ['Syllogism', 'Statement & Conclusions'] }
                ]
            },
            {
                subject: 'General Awareness',
                topics: [
                    { name: 'Current Affairs', hours: 15, subtopics: ['National Events', 'International News', 'Sports'] },
                    { name: 'Indian History', hours: 10, subtopics: ['Freedom Movement', 'Important Personalities'] },
                    { name: 'Geography', hours: 10, subtopics: ['Indian Geography', 'World Geography'] },
                    { name: 'Science', hours: 10, subtopics: ['Physics', 'Chemistry', 'Biology'] }
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
                    { type: 'website', title: 'Quantitative Aptitude Practice', url: 'https://www.indiabix.com/aptitude/questions-and-answers/', provider: 'IndiaBix' },
                    { type: 'video', title: 'Algebra for SSC', url: 'https://www.youtube.com/results?search_query=SSC+CGL+Algebra', provider: 'YouTube' },
                    { type: 'website', title: 'Data Interpretation Guide', url: 'https://en.wikipedia.org/wiki/Data_analysis', provider: 'Wikipedia' }
                ]
            },
            {
                subject: 'Reasoning',
                materials: [
                    { type: 'video', title: 'Logical Reasoning Masterclass', url: 'https://www.youtube.com/results?search_query=SSC+CGL+Logical+Reasoning', provider: 'YouTube' },
                    { type: 'website', title: 'Reasoning Practice Questions', url: 'https://www.indiabix.com/logical-reasoning/questions-and-answers/', provider: 'IndiaBix' },
                    { type: 'video', title: 'Blood Relations Tricks', url: 'https://www.youtube.com/results?search_query=Blood+Relations+Tricks', provider: 'YouTube' }
                ]
            },
            {
                subject: 'English',
                materials: [
                    { type: 'video', title: 'English Grammar Complete', url: 'https://www.youtube.com/results?search_query=SSC+CGL+English+Grammar', provider: 'YouTube' },
                    { type: 'website', title: 'Vocabulary Builder', url: 'https://www.vocabulary.com/', provider: 'Vocabulary.com' },
                    { type: 'website', title: 'Grammar Rules', url: 'https://en.wikipedia.org/wiki/English_grammar', provider: 'Wikipedia' }
                ]
            },
            {
                subject: 'General Awareness',
                materials: [
                    { type: 'video', title: 'Current Affairs Monthly', url: 'https://www.youtube.com/results?search_query=Current+Affairs+2024', provider: 'YouTube' },
                    { type: 'website', title: 'GK & Current Affairs', url: 'https://www.google.com/search?q=current+affairs', provider: 'Google Search' },
                    { type: 'video', title: 'Indian Polity Complete', url: 'https://www.youtube.com/results?search_query=Indian+Polity', provider: 'YouTube' }
                ]
            }
        ],
        'UPSC_CSE': [
            {
                subject: 'General Studies',
                materials: [
                    { type: 'video', title: 'Indian Polity by Study IQ', url: 'https://www.youtube.com/results?search_query=UPSC+Indian+Polity', provider: 'YouTube' },
                    { type: 'website', title: 'UPSC Syllabus & Strategy', url: 'https://upsc.gov.in/', provider: 'UPSC Official' },
                    { type: 'video', title: 'Modern History Complete', url: 'https://www.youtube.com/results?search_query=UPSC+Modern+History', provider: 'YouTube' },
                    { type: 'website', title: 'Geography Notes', url: 'https://en.wikipedia.org/wiki/Geography_of_India', provider: 'Wikipedia' }
                ]
            },
            {
                subject: 'Current Affairs',
                materials: [
                    { type: 'website', title: 'The Hindu Editorial Analysis', url: 'https://www.thehindu.com/opinion/editorial/', provider: 'The Hindu' },
                    { type: 'video', title: 'Monthly Current Affairs', url: 'https://www.youtube.com/results?search_query=UPSC+Current+Affairs+2024', provider: 'YouTube'