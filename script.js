document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburgerMenu.classList.toggle("open");
    });

    navLinks.classList.add("active");
    setTimeout(() => {
        navLinks.classList.remove("active");
    }, 3000);

    // Skills Section Animation
    const skillContainers = document.querySelectorAll(".skills-container");
    const skillsSection = document.querySelector(".skills-section");
    const navLinksItems = document.querySelectorAll(".nav-links li a");
    const navBarHeight = document.querySelector(".nav-links-bar").offsetHeight;

    const observerSkills = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        },
        { threshold: 0.2 }
    );

    skillContainers.forEach((container) => observerSkills.observe(container));
    observerSkills.observe(skillsSection);

    navLinksItems.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const sectionTop = targetSection.offsetTop;
                const scrollOffset = sectionTop - navBarHeight;

                window.scrollTo({
                    top: scrollOffset,
                    behavior: "smooth",
                });

                if (targetId === "skills") {
                    setTimeout(() => {
                        skillsSection.classList.add("animate");
                    }, 300);
                }
            }
        });
    });

    // Exposure Section Fade-In
    const exposureSection = document.querySelector(".exposure-section");
    const observerExposure = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    exposureSection.classList.add("fade-in");
                } else {
                    exposureSection.classList.remove("fade-in");
                }
            });
        },
        { threshold: 0.2 }
    );
    observerExposure.observe(exposureSection);

    // Exposure Section Modal
    const details = {
        "ai-consultant": {
        title: "AI Creative Learning Consultant",
        date: "Present, 2025",
        company: "Learning Experience Design Tech Hub, Arizona State University (Tempe, AZ)",
        description: [
            "Drive the development of AI-powered learning innovations at ASU’s Creativity Commons, shaping the future of education across the university.",
            "Lead collaborations with the Enterprise Technology Learning Experience Design team to scale generative AI solutions for students, faculty, and staff.",
            "Pioneer responsible and inclusive AI applications, positioning ASU at the forefront of creativity, accessibility, and digital transformation in higher education."
            ]
        },
        "tech-consulting": {
            title: "Tech Consulting Intern",
            date: "June - July, 2025",
            company: "Capgemini (Atlanta & Virginia Offices)",
            description: [
                 "Designed and implemented Agentic AI solutions that boosted workflow efficiency by 30% across client data operations.",
                "Collaborated on enterprise-scale AI and cloud transformation projects, contributing to data-driven strategies with 40% higher decision accuracy.",
                "Supported agile teams in building autonomous agents and integrating LLMs into analytics platforms for enhanced client insights."
             ]
        },
        "writing-coach": {
            title: "Writing Coach",
            date: "July, 2023 - April, 2025",
            company: "Arizona State University",
            description: [
                "Assisted more than 500 students in improving writing skills and grades.",
                "Spearheaded discussions and played a pivotal role in the AI writing tools workshop.",
                "Organized bi-weekly seminars on writing techniques, research methodologies, and citation standards.",
                "Received positive feedback for explaining complex concepts clearly to students, peers, and faculty."
            ]
        },
        "marketing-designer": {
            title: "Marketing Designer Intern",
            date: "May - August, 2024",
            company: "DineLocal",
            description: [
                "Collaborated with restaurant owners to design and create marketing assets tailored to their needs.",
                "Developed engaging visual content for the Dine Local app, enhancing brand visibility and customer engagement.",
                "Addressed and resolved restaurant owners' concerns with professional and timely communication.",
                "Ensured consistent branding and messaging across all marketing channels through team collaboration."
            ]
        },
        "cloud-infrastructure": {
            title: "Cloud Infrastructure Intern",
            date: "April - May, 2024",
            company: "Verizon",
            description: [
                "Engineered and optimized a VPN product with redundancy, resiliency, and least-privilege principles using advanced Python.",
                "Executed rigorous cloud-native infrastructure testing focused on security and performance.",
                "Delivered in-depth presentations on cloud security strategies to enhance team expertise and collaboration."
            ]
        },
        "data-analyst": {
            title: "Data Analyst Intern",
            date: "June - July, 2023",
            company: "LTIMindtree",
            description: [
                "Proficient in data extraction using REST APIs and RDBMS with a strong analytical mindset.",
                "Experienced with Kafka, microservices vs monolithic architectures, and AngularJS for web interfaces.",
                "Worked with H2 Database, Java APIs, and JPA for CRUD operations, demonstrating technical adeptness.",
                "Showcased dedication in database and software evaluation for coding viability."
            ]
        },
        "uiux-designer": {
            title: "UI/UX Designer Intern",
            date: "May - June, 2023",
            company: "Centre for Railway Information Systems",
            description: [
                "Led cross-functional projects, integrating ticket systems with the national digital payment gateway.",
                "Leveraged Tableau and Google Analytics for UI enhancements in the Freight Operations System.",
                "Proficient in Adobe XD and Sketch for high-fidelity prototyping.",
                "Expertise in comprehensive user research to inform design decisions."
            ]
        }
    };

    const modal = document.getElementById("job-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDate = document.getElementById("modal-date");
    const modalCompany = document.getElementById("modal-company");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.querySelector(".close-button");

    document.querySelectorAll(".timeline-item").forEach((item) => {
        item.addEventListener("click", () => {
            const key = item.dataset.key;
            const data = details[key];

            modalTitle.textContent = data.title;
            modalDate.textContent = data.date;
            modalCompany.textContent = data.company;
            modalDescription.innerHTML = data.description.map((desc) => `<li>${desc}</li>`).join("");

            modal.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Certifications Section Animation
    const certificationsSection = document.querySelector("#certifications");
    const observerCertifications = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    certificationsSection.classList.add("active");
                }
            });
        },
        { threshold: 0.2 }
    );
    observerCertifications.observe(certificationsSection);

    document.querySelectorAll("a[href='#certifications']").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            certificationsSection.classList.remove("active");
            certificationsSection.style.opacity = "0";
            certificationsSection.style.transform = "translateY(50px)";
            certificationsSection.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                certificationsSection.classList.add("active");
                certificationsSection.style.opacity = "1";
                certificationsSection.style.transform = "translateY(0)";
            }, 500);
        });
    });

    // Awards Section Animation and Interaction
    const awardsSection = document.querySelector("#awards");
    const tvScreen = document.querySelector("#tv-screen");

    function setDefaultContent() {
        tvScreen.innerHTML = `
            <img src="images/default.jpeg" alt="Default Display" class="award-image" style="max-width: 100%; height: auto; border-radius: 5px;">
        `;
    }

    const observerAwards = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    awardsSection.classList.add("active");
                    if (!tvScreen.innerHTML.trim()) {
                        setDefaultContent();
                    }
                }
            });
        },
        { threshold: 0.2 }
    );
    observerAwards.observe(awardsSection);

    document.querySelectorAll("a[href='#awards']").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            awardsSection.classList.remove("active");
            awardsSection.style.opacity = "0";
            awardsSection.style.transform = "translateY(50px)";
            awardsSection.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                awardsSection.classList.add("active");
                awardsSection.style.opacity = "1";
                awardsSection.style.transform = "translateY(0)";
                if (!tvScreen.innerHTML.trim()) {
                    setDefaultContent();
                }
            }, 500);
        });
    });

    const awardDetails = {
        "zoom-hackathon": {
            title: "Zoom AI Hackathon",
            description: "Won Second Place and $2000, representing ASU, for an innovative AI solution praised by the jury for creativity and alignment with Zoom, AI, and Responsible Innovation.",
            image: "images/zoom1.jpeg",
            links: [
                { url: "https://youtu.be/AFuW202jkCY?si=TA9qptxNmLIiKMDo", text: "Watch on YouTube" },
                { url: "https://tech.asu.edu/features/Zoom-AI-pitch", text: "Read Article" }
            ]
        },
        "sun-award": {
            title: "SUN Award - ASU",
            description: "Recognized for Exemplary Service, Leadership, and Supporting Student Success as a Writing Tutor with the Academic Support Network (ASN) at ASU.",
            image: "images/sunaward.jpeg"
        },
        "deans-list": {
            title: "Dean's List",
            description: "Recognized on the Dean's List for all semesters, including Fall 2022, Spring 2023, and Fall 2023, Spring 2024, Spring 2025 a testament to dedication towards academic success and commitment to maintaining high standards of academic performance.",
            image: "images/deanslist.jpeg"
        },
        "scholarship": {
            title: "Scholarship Recipient",
            description: "Receiving this prestigious scholarship is more than just a financial award—it is a testament to exceptional academic excellence, leadership, and dedication to community involvement. It represents the ability to excel in challenging academic environments while demonstrating strong leadership and a commitment to making a meaningful impact. This scholarship acknowledges perseverance, integrity, and the drive to contribute beyond the classroom through mentorship, event organization, and advocacy. Valued at $14,500 annually for four years, it serves as both recognition and encouragement, reinforcing the potential to thrive academically and professionally.",
        },
        "pageant-titles": {
            title: "Ms. Phoenix 2023, Ms. Arizona 2024",
            description: "Awarded prestigious Miss Phoenix 2023 title, competitive beauty pageant, assessing physical beauty, personality, and talent.",
            image: "images/pageant.jpeg"
        }
    };

    const planets = document.querySelectorAll(".award-planet");
    planets.forEach((planet) => {
        const ring = planet.querySelector(".ring");
        ring.addEventListener("click", (e) => {
            e.stopPropagation();
            const awardId = planet.getAttribute("data-award");
            const award = awardDetails[awardId];

            tvScreen.innerHTML = "";
            const content = document.createElement("div");
            content.innerHTML = `
                <h4>${award.title}</h4>
                <p>${award.description}</p>
                ${award.image ? `<img src="${award.image}" alt="${award.title} Award" class="award-image zoomable">` : ""}
                ${award.links ? `<div class="links">${award.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join("")}</div>` : ""}
            `;
            tvScreen.appendChild(content);
            tvScreen.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    setDefaultContent();

    // Passion Section Animation
    const passionSection = document.querySelector("#passion");
    const observerPassion = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    passionSection.classList.add("active");
                }
            });
        },
        { threshold: 0.2 }
    );
    observerPassion.observe(passionSection);

    document.querySelectorAll("a[href='#passion']").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            passionSection.classList.remove("active");
            passionSection.style.opacity = "0";
            passionSection.style.transform = "translateY(50px)";
            passionSection.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                passionSection.classList.add("active");
                passionSection.style.opacity = "1";
                passionSection.style.transform = "translateY(0)";
            }, 500);
        });
    });

    // Three.js Particle Cursor
    try {
        console.log("Initializing Three.js particle cursor...");
        const canvas = document.getElementById("particle-canvas");
        if (!canvas) {
            console.error("Canvas element #particle-canvas not found!");
            return;
        }

        // Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        camera.position.z = 50; // Adjusted for better visibility

        // Particle System
        const particleCount = 50; // Reduced for performance
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        const lifespans = new Float32Array(particleCount);
        const sizes = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = 0;
            positions[i * 3 + 1] = 0;
            positions[i * 3 + 2] = 0;
            velocities[i * 3] = (Math.random() - 0.5) * 0.5; // Increased velocity
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
            velocities[i * 3 + 2] = 0; // 2D effect
            lifespans[i] = 0;
            sizes[i] = Math.random() * 10 + 5; // Larger particles
        }

        particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        particles.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

        // Vegas Gold Material with Fallback
        let particleMaterial;
        try {
            particleMaterial = new THREE.PointsMaterial({
                color: 0xCFB53B, // Vegas Gold
                size: 0.5, // Increased size
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending,
                map: new THREE.TextureLoader().load(
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmEDAAAAtklEQVRYCe2VQQoCMRBFX9b3v1o/gKNvYGU/gE0W4v9kkmxZmZ2dmdG0J8k+wzB8MwnoT2COfW4gO76LKBcA1tV7eYDzA8G7+wRABx+Aru7jA9DOfQJggg9AM/dxAGiGD0Az93EAaIYPQDP3cQBo5r6B7Piug+w4PoDs+C6C7Dgugew4LoLsOC6C7Dgugew4LoLsOC6C7Dgugew4LoLsOC6C7Dgugew4LoLsOC6C7Dgugew4LoLsOC6C7PgHEDXgKk4cW7IAAAAASUVORK5CYII="
                ),
                depthWrite: false,
            });
            console.log("Particle material loaded successfully.");
        } catch (e) {
            console.warn("Texture load failed, using fallback material.", e);
            particleMaterial = new THREE.PointsMaterial({
                color: 0xCFB53B,
                size: 0.5,
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });
        }

        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        // Mouse Position
        let mouseX = 0,
            mouseY = 0;
        let spawnTimer = 0;
        const spawnInterval = 0.1; // Slower spawn for visibility

        document.addEventListener("mousemove", (event) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = ((event.clientX - rect.left) / window.innerWidth) * 2 - 1;
            mouseY = -((event.clientY - rect.top) / window.innerHeight) * 2 + 1;
        });

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);

            // Update Particles
            spawnTimer += 0.016;
            if (spawnTimer >= spawnInterval) {
                for (let i = 0; i < particleCount; i++) {
                    if (lifespans[i] <= 0) {
                        // Convert mouse coords to world coords
                        const vector = new THREE.Vector3(mouseX, mouseY, 0);
                        vector.unproject(camera);
                        const dir = vector.sub(camera.position).normalize();
                        const distance = -camera.position.z / dir.z;
                        const pos = camera.position.clone().add(dir.multiplyScalar(distance));

                        positions[i * 3] = pos.x;
                        positions[i * 3 + 1] = pos.y;
                        positions[i * 3 + 2] = 0;
                        velocities[i * 3] = (Math.random() - 0.5) * 0.5;
                        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
                        velocities[i * 3 + 2] = 0;
                        lifespans[i] = 1;
                        sizes[i] = Math.random() * 10 + 5;
                    } else {
                        positions[i * 3] += velocities[i * 3];
                        positions[i * 3 + 1] += velocities[i * 3 + 1];
                        lifespans[i] -= 0.03; // Faster fade
                        sizes[i] *= 0.95; // Faster shrink
                    }
                }
                particles.attributes.position.needsUpdate = true;
                particles.attributes.size.needsUpdate = true;
                spawnTimer = 0;
            }

            renderer.render(scene, camera);
        }
        animate();
        console.log("Particle animation started.");

        // Handle Window Resize
        window.addEventListener("resize", () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            console.log("Canvas resized.");
        });
    } catch (error) {
        console.error("Failed to initialize particle cursor:", error);
    }
});