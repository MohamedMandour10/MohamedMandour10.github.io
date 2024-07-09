// Banner text rotation
const bannerTexts = [
    "Welcome to My Portfolio",
    "Innovating in Biomedical Engineering",
    "Passionate about AI & Machine Learning",
    "Solving Problems with Technology"
];
let currentTextIndex = 0;

function rotateBannerText() {
    const bannerTextElement = document.querySelector('.banner-text');
    currentTextIndex = (currentTextIndex + 1) % bannerTexts.length;
    bannerTextElement.style.opacity = 0;
    setTimeout(() => {
        bannerTextElement.textContent = bannerTexts[currentTextIndex];
        bannerTextElement.style.opacity = 1;
    }, 500);
}

setInterval(rotateBannerText, 3000); // Change text every 5 seconds

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.animated-banner');
    const bannerText = document.querySelector('.banner-text');
    const bannerIcons = document.querySelectorAll('.banner-icons i');

    banner.addEventListener('mousemove', (e) => {
        const rect = banner.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width - 0.5) * 2;
        const yPercent = (y / rect.height - 0.5) * 2;

        bannerText.style.transform = `translate(${xPercent * 10}px, ${yPercent * 10}px)`;

        bannerIcons.forEach((icon, index) => {
            const factor = (index + 1) * 5;
            icon.style.transform = `translate(${xPercent * factor}px, ${yPercent * factor}px)`;
        });

        const gradientAngle = Math.atan2(yPercent, xPercent) * (180 / Math.PI) + 90;
        banner.style.background = `linear-gradient(${gradientAngle}deg, var(--color-secondary), var(--color-primary))`;
    });

    banner.addEventListener('mouseleave', () => {
        bannerText.style.transform = 'translate(0, 0)';
        bannerIcons.forEach(icon => {
            icon.style.transform = 'translate(0, 0)';
        });
        banner.style.background = 'linear-gradient(45deg, var(--color-secondary), var(--color-primary))';
    });
});

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

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Project pop-up functionality
const projects = [
    {
        id: 1,
        title: "ICU Monitor Viewer",
        github: "https://github.com/MohamedMandour10/Vital-Signals-Multichannel-Viewer",
        image: "Assets\\task1.jpg",
        technologies: ["Python", "PyQt6", "FPDF"],
        features: [
            "File Handling: Support for browsing and opening signal files in multiple formats, including CSV and DAT.",
            "Graph Display: Present signals in two identical graphs, each with controls for zoom, pan, and play/pause.",
            "Cine Mode: Display signals in a continuous running mode, similar to ICU monitors.",
            "Signal Manipulation: Allow users to change color, control cine speed, zoom, pan, and move signals between graphs.",
            "Report Export: Allow exporting reports to PDF, including graph snapshots and data statistics for displayed signals."
        ],
    },
    {
        id: 2,
        title: "AI-Driven Appointment Scheduler",
        github: "https://github.com/MohamedMandour10/AI-Driven-Appointment-Scheduling-System",
        image: "Assets\\MediSchedule.png",
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
        image: "Assets\\FINAL-PROJECT.jpg",
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
        image: "Assets\\mockup.jpg",
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
        image: "Assets\\A_futuristic_security_interface_combining_voice_and_fi_1.jpg",
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
        image: "Assets\\DICOM-Demo.jpg",
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
        image: "Assets\\TheGuideBook.png",
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
        image: "Assets\\task2.jpg",
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
const resumeButton = document.querySelector('.view-resume');
const resumePopup = document.createElement('div');

educationLink.href = '#education';
educationLink.textContent = 'Education';
navLinks.insertBefore(educationLink, document.querySelector('nav a[href="#resume"]'));

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
    });
});

popupClose.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active');
    }
});

resumePopup.id = 'resume-popup';
resumePopup.innerHTML = `
    <iframe src="Assets\\Mohamed AboMandor-CV.pdf"></iframe>
    <span id="resume-close">&times;</span>
`;
document.body.appendChild(resumePopup);

resumeButton.addEventListener('click', (e) => {
    e.preventDefault();
    resumePopup.classList.add('active');
});

document.getElementById('resume-close').addEventListener('click', () => {
    resumePopup.classList.remove('active');
});

resumePopup.addEventListener('click', (e) => {
    if (e.target === resumePopup) {
        resumePopup.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if the form exists
    const form = document.getElementById('contact-form');
    if (!form) {
        console.error('Contact form not found');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        console.log('Form data:', data); // Debug: Log form data

        // Send email using EmailJS
        emailjs.send("service_j9w46hq", "template_r83jeia", {
            from_name: data.name,
            user_email: data.email,
            message: data.message,
            to_email: "mhmdabomandour11@gmail.com"
        }).then(function(response) {
            console.log('EmailJS response:', response); // Debug: Log EmailJS response
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }, function(error) {
            console.error('EmailJS error:', error); // Debug: Log EmailJS error
            alert('Oops! There was an error sending your message. Please try again later.');
        });
    });

    // Add EmailJS SDK
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = function() {
        // Initialize EmailJS after the SDK has loaded
        emailjs.init({
            publicKey: 'ixfz79Le2MWyB0Rth',
            // Do not allow headless browsers
            blockHeadless: true,
            limitRate: {
                // Set the limit rate for the application
                id: 'app',
                // Allow 1 request per 10s
                throttle: 10000,
            },
        });
        console.log('EmailJS initialized'); // Debug: Confirm initialization
    };
    script.onerror = function() {
        console.error('Error loading EmailJS SDK'); // Debug: Log script loading error
    };
    document.head.appendChild(script);
});
