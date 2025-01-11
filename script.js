
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const text = "Biomedical Engineer & AI Enthusiast";
    const typedTextSpan = document.querySelector("#typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const typingDelay = 50;
    const erasingDelay = 100;
    const newTextDelay = 1000; // Delay between current and next text
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            // Remove cursor after typing is complete
            setTimeout(() => {
                cursorSpan.style.display = 'none';
            }, newTextDelay);
        }
    }

    if(typedTextSpan) {
        setTimeout(type, newTextDelay);
    }
});


// Define the Rosenbrock function
function rosenbrock(x, y, a = 1, b = 100) {
    return Math.pow((a - x), 2) + b * Math.pow((y - Math.pow(x, 2)), 2);
}

// Function to generate 3D plot surface data for Rosenbrock
function generateSurfaceData() {
    const x = [];
    const y = [];
    const z = [];

    for (let i = -2; i <= 2; i += 0.1) {
        for (let j = -1; j <= 3; j += 0.1) {
            x.push(i);
            y.push(j);
            z.push(rosenbrock(i, j));
        }
    }
    
    return { x, y, z };
}

// Function to initialize the 3D plot
function initializePlot() {
    const surfaceData = generateSurfaceData();

    Plotly.newPlot('optimizer-plot', [
        {
            type: 'mesh3d',
            x: surfaceData.x,
            y: surfaceData.y,
            z: surfaceData.z,
            opacity: 0.5,
            color: 'blue'
        },
        {
            type: 'scatter3d',
            mode: 'markers',
            x: [-2],
            y: [2],
            z: [rosenbrock(-2, 2)],
            marker: { size: 5, color: 'red' }
        }
    ], {
        title: 'Rosenbrock Function Optimization',
        scene: {
            xaxis: { title: 'X' },
            yaxis: { title: 'Y' },
            zaxis: { title: 'Z' }
        }
    });
}



// Project pop-up functionality
const projects = [
    {
        id: 1,
        title: "Classifying Blood Clot Origin using DeepLearning",
        github: "https://github.com/MohamedMandour10/Image-Classification-of-Stroke-Blood-Clot-Origin",
        image: "Assets/clot-origin-graphs.png",
        technologies: ["Python", "Hugging Face", "Computer Vision", "Transfer learning"],
        features: [
            "Developed an efficient preprocessing pipeline that processed 200GB+ of pathology data and filtered 124,800 patches to 118,600 high-quality samples",
            "Created a MobileNetV3-based background classifier and utilized Otsu's thresholding to ensure optimal image quality for analysis",
            "Applied transfer learning and weighted multi-class logarithmic loss to handle limited data constraints and class imbalances effectively",
            "Implemented PoolFormer and CCT models achieving 87.52% accuracy and 0.8691 F1-score, improving upon existing solutions for stroke clot classification"
        ],
    },
    {
        id: 2,
        title: "AI-Driven Appointment Scheduler",
        github: "https://github.com/MohamedMandour10/AI-Driven-Appointment-Scheduling-System",
        image: "Assets\\MediSchedule.webp",
        technologies: ["Machine Learning pipeline", "Feature Selection", "Data Synthesis", "Boosting"],
        features: [
            "Automatically categorizes appointments based on patient disease reports to optimize scheduling.",
            "Leverages detailed patient health profiles and performs extensive data pre-processing and analysis.",
            "Uses a decision tree classifier for accurate and interpretable scheduling, supported by thorough performance evaluation and visualization."
        ],
    },
    {
        id: 3,
        title: "VisionaryID",
        github: "https://github.com/MohamedMandour10/VisionaryID",
        image: "Assets\\FINAL-PROJECT.webp",
        technologies: ["OpenCV", "Eigenfaces", "Real Time Data Processing"],
        features: [
            "Offline Face Detection: Uses Haar cascades to detect faces in uploaded images.",
            "Real-Time Face Detection: Real-time face detection using your computer's webcam.",
            "Face Recognition: Identify faces using the EigenFace method.",
            "Customizable Parameters: Adjust detection parameters such as window size, scale factor, and number of neighbors."
        ],
    },
    {
        id: 4,
        title: "Obesity Risk Prediction with Diet Plans",
        github: "https://github.com/MohamedMandour10/Likelihood_of_obesity_provided_with_diet_plans",
        image: "Assets\\mockup.webp",
        technologies: ["Flutter", "Firebase", "Machine Learning", "Model deployment"],
        features: [
            "A project developed during the 16th UGRF Special Edition, 2023 Competition.",
            "Users input personal details (weight, height, age, lifestyle) to receive customized calorie requirements, meal suggestions, and exercise plans through a user-friendly mobile app developed using Flutter.",
            "Combines multiple datasets to predict obesity types, provide diverse meal recommendations, and expand exercise options for comprehensive user insights."
        ],
    },
    {
        id: 5,
        title: "Security Voice-code Access",
        github: "https://github.com/MohamedMandour10/Voice-Recognation-Security-System",
        image: "Assets\\A_futuristic_security_interface_combining_voice_and_fi_1.webp",
        technologies: ["Speech recognition", "Voice fingerprint", "Shazam Algorithm", "pyAudioAnalysis"],
        features: [
            "Operates in Security Voice Code mode (requires specific passcode sentences) and Security Voice Fingerprint mode (recognizes voice patterns of authorized individuals).",
            "Utilizes speech-to-text conversion, spectrogram visualization, and voice fingerprinting technology to authenticate users",
            "Includes real-time spectrogram display, voice recording controls, matching score tables for passcodes and individuals, and clear access indicators."
        ],
    },
    {
        id: 6,
        title: "DICOM Viewer with Volume Rendering",
        github: "https://github.com/MohamedMandour10/GFX-DICOM-Viewer",
        image: "Assets\\DICOM-Demo.webp",
        technologies: ["vtk", "Computer Graphics", "PyQt6"],
        features: [
            "Users can load DICOM series data by selecting a folder through a file dialog, utilizing vtkDICOMImageReader for data loading.",
            "In surface rendering adjust iso values to control surface appearance. Real-time rendering updates are facilitated via a checkbox.",
            "In ray casting rendering and adjust ambient, diffuse, and specular properties using sliders."
        ],
    },
    {
        id: 7,
        title: "The Guide Book",
        github: "https://github.com/MohamedMandour10/The.Guide.Book",
        image: "Assets\\TheGuideBook.webp",
        technologies: ["Adobe Photoshop", "Adobe Illustrator", "MS Powerpoint"],
        features: [
            "A Comprehensive Roadmap for each course in each year",
            "Extra-resources for further knowledge expanding and learning",
            "Real experince from older students for the more benifits"
        ],
    },
    {
        id: 8,
        title: "Signal Studio Pro",
        github: "https://github.com/MohamedMandour10/Sampling-Studio",
        image: "Assets\\task2.webp",
        technologies: ["PyQt6", "DSP", "Scipy"],
        features: [
            "Load signal data, add/configure components (frequency, amplitude, phase), and generate mixed signals with noise.",
            "Adjust sampling rates, perform signal reconstruction with sinc interpolation, and analyze reconstruction errors.",
            "Built with PyQt6, featuring interactive elements (buttons, sliders, radio buttons) for controlling tasks."
        ],
    }
];

const popupOverlay = document.querySelector('.popup-overlay');
const popupContent = document.querySelector('.popup-content');
const popupImage = document.querySelector('.popup-image');
const popupDetails = document.querySelector('.popup-details');
const popupClose = document.querySelector('.popup-close');
const navLinks = document.querySelector('nav');
const educationLink = document.createElement('a');


let scrollPosition = 0;

function disableBodyScroll() {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

function enableBodyScroll() {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const projectId = parseInt(project.getAttribute('data-project'));
        const projectData = projects.find(p => p.id === projectId);

        popupImage.src = projectData.image;
        popupImage.alt = projectData.title;

        popupDetails.innerHTML = `
            <div class="popup-header">
                <h3>${projectData.title}</h3>
                <a href="${projectData.github}" target="_blank" class="github-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <h4>Technologies Used:</h4>
            <ul>
                ${projectData.technologies.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
            <h4>Key Features:</h4>
            <ul>
                ${projectData.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;

        popupOverlay.classList.add('active');
        disableBodyScroll();
    });
});

popupClose.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
    enableBodyScroll();
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active');
        enableBodyScroll();
    }
});

popupClose.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxCbzbccj_oJFPR7kYl4k6nLZvWUjnKjWPr0y9-VutVHua9jo2eQ4HbzzCHZuTLBCsS/exec'; // Replace with your deployed script URL

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response);
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Oops! There was an error sending your message. Please try again later.');
            });
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;

// Check for saved theme preference or default to dark theme
const currentTheme = localStorage.getItem('theme') || 'dark';
body.classList.toggle('light-theme', currentTheme === 'light');
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}


