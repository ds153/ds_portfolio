import React from "react";
import { Mail, MapPin, Github, Linkedin, ExternalLink, ChevronDown, Download, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useLocation } from "wouter";

export default function Home() {
  const [, navigate] = useLocation();
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold">
                DS
              </div>
              <span className="font-semibold hidden sm:inline">David Sathiaraj</span>
            </div>
            <div className="flex gap-2 sm:gap-4 flex-wrap justify-end">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm hover:text-accent transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("research")}
                className="text-sm hover:text-accent transition-colors"
              >
                Research
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm hover:text-accent transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm hover:text-accent transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">David Sathiaraj</h1>
          <p className="text-xl text-muted-foreground mb-2">
            CEO & Co-founder, Bristol AI Corporation
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Data Scientist | AI/ML Leader | Entrepreneur
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            With a PhD in Computer Science and over two decades of experience in AI, machine learning, and data science, I've led transformative projects across defense, government, healthcare, and environmental sectors. Currently building the future of AI-native technology at Bristol AI.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/resume.pdf" download="David_Sathiaraj_Resume.pdf">
              <Button className="bg-accent hover:bg-accent/90">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </a>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I hold a PhD in Computer Science and Engineering from Louisiana State University, with specializations in AI, Machine Learning, Data Visualization, and Big Data Analytics. My career spans academia, government research, startups, and enterprise technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My work has focused on building scalable AI/ML systems for predictive analytics, environmental informatics, and transportation optimization. I'm passionate about translating complex data into actionable insights and leading teams to solve real-world problems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-semibold">PhD, Computer Science and Engineering</p>
                  <p className="text-sm text-muted-foreground">Louisiana State University, 2013</p>
                  <p className="text-sm text-muted-foreground">Specialization: AI, ML, Data Visualization</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-semibold">MS, Computer Science</p>
                  <p className="text-sm text-muted-foreground">Louisiana State University</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-semibold">MS, Industrial Engineering</p>
                  <p className="text-sm text-muted-foreground">Louisiana State University</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-semibold">B.E., Mechanical Engineering</p>
                  <p className="text-sm text-muted-foreground">Osmania University, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-20">
        <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-accent pl-6 pb-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-xl font-semibold">CEO and Co-founder</h3>
                <p className="text-accent font-medium">Bristol AI Corporation</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Oct 2025–Present</span>
            </div>
            <p className="text-muted-foreground mb-3">San Diego, CA</p>
            <p className="text-muted-foreground">
              Co-founded an AI-Native Technology firm focused on defense, government, healthcare, and insurance verticals.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 pb-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-xl font-semibold">Director of Data Science</h3>
                <p className="text-accent font-medium">Trabus Technologies</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Jan 2020–Oct 2025</span>
            </div>
            <p className="text-muted-foreground mb-3">San Diego, CA</p>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>• Founded and scaled the AI/ML division to 10+ engineers, securing $2.5M in annual contracts</li>
              <li>• Led development of ORCA, an AI/ML ecosystem for predictive maintenance of U.S. Navy COLUMBIA-class submarines</li>
              <li>• Directed AI-driven Waterway Information and Management System (WIMS) for 25 U.S. container ports</li>
              <li>• Spearheaded AI-based gunshot detection system for Texas public schools</li>
              <li>• Guided development of RippleGo, an AI-based voyage planner for U.S. inland waterways</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 pb-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-xl font-semibold">Adjunct Professor</h3>
                <p className="text-accent font-medium">Point Loma Nazarene University & San Diego State University</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Jun 2022–Present</span>
            </div>
            <p className="text-muted-foreground">
              Designed and taught senior-level data science courses covering Python, databases, web frameworks, and ML/DL technologies.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 pb-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-xl font-semibold">Assistant Professor</h3>
                <p className="text-accent font-medium">Louisiana State University</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Apr 2015–Aug 2020</span>
            </div>
            <p className="text-muted-foreground mb-3">Baton Rouge, LA</p>
            <p className="text-muted-foreground text-sm">
              Developed computational geosciences curriculum, managed NOAA climate data warehouse, and created AI/ML platforms for predictive analytics.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-xl font-semibold">Founder and CEO</h3>
                <p className="text-accent font-medium">Pecan Analytics</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Jun 2015–Dec 2019</span>
            </div>
            <p className="text-muted-foreground mb-3">Baton Rouge, LA</p>
            <p className="text-muted-foreground text-sm">
              Founded a data analytics startup, secured $43,930 LIFT2 grant, and developed ML platforms for political campaigns and healthcare analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-accent">Languages</h3>
              <p className="text-muted-foreground text-sm">
                Python, JavaScript, C, PHP, Go, R, SQL, Bash/Zsh
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-accent">Databases</h3>
              <p className="text-muted-foreground text-sm">
                AWS Redshift, AWS RDS, MongoDB, Redis, InfluxDB, PostgreSQL, MySQL
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-accent">ML & Data Science</h3>
              <p className="text-muted-foreground text-sm">
                Keras, TensorFlow, scikit-learn, pandas, NumPy, SciPy, SQLAlchemy
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-accent">Web & APIs</h3>
              <p className="text-muted-foreground text-sm">
                Django, Flask, Tornado, React, REST, GraphQL, Apache, Nginx
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-accent">Visualization</h3>
              <p className="text-muted-foreground text-sm">
                D3.js, Mapbox/Leaflet.js, Matplotlib, Plotly, GDAL
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-accent">DevOps & Cloud</h3>
              <p className="text-muted-foreground text-sm">
                AWS (Lambda, RDS, S3, EC2), GitHub Runner, Ansible, Docker, Kubernetes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications Section */}
      <section id="research" className="container py-20">
        <h2 className="text-3xl font-bold mb-12">Research & Publications</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Patents</h3>
          <div className="space-y-4">
            <Card className="p-4">
              <p className="font-semibold mb-2">
                Artificial-intelligence-based prediction of storage capacities in water reservoirs
              </p>
              <p className="text-sm text-muted-foreground">
                U.S. Patent App. 18/439,496, 2024
              </p>
            </Card>
            <Card className="p-4">
              <p className="font-semibold mb-2">
                Artificial-intelligence-based waterway information system
              </p>
              <p className="text-sm text-muted-foreground">
                U.S. Patent 11,620,523, 2023
              </p>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Selected Publications</h3>
            <a href="https://scholar.google.com/citations?hl=en&user=M8pdgtQAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Google Scholar
              </Button>
            </a>
          </div>
          <div className="space-y-4">
            <Card className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold mb-2">
                    RippleGo: An AI-based voyage planner for U.S. inland waterways
                  </p>
                  <p className="text-sm text-muted-foreground">
                    D. Sathiaraj et al. 2023 IEEE Conference on Artificial Intelligence, 2023
                  </p>
                </div>
                <a href="https://scholar.google.com/citations?hl=en&user=M8pdgtQAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors whitespace-nowrap">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold mb-2">
                    Near-term forecasting of water reservoir storage capacities using long short-term memory
                  </p>
                  <p className="text-sm text-muted-foreground">
                    E. Rohli, N. Woolsey, D. Sathiaraj. Environmental Data Science, 2, e30, 2023
                  </p>
                  <a href="https://doi.org/10.1017/eds.2023.25" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm mt-2 inline-block">
                    https://doi.org/10.1017/eds.2023.25
                  </a>
                </div>
                <a href="https://scholar.google.com/citations?hl=en&user=M8pdgtQAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors whitespace-nowrap">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold mb-2">
                    Predicting climate types for the continental United States using unsupervised clustering techniques
                  </p>
                  <p className="text-sm text-muted-foreground">
                    D. Sathiaraj, X. Huang, J. Chen. Environmetrics, 30:e2524, 2019
                  </p>
                </div>
                <a href="https://scholar.google.com/citations?hl=en&user=M8pdgtQAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors whitespace-nowrap">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold mb-2">
                    Data-driven analysis on the effects of extreme weather on traffic volume in Atlanta, GA, USA
                  </p>
                  <p className="text-sm text-muted-foreground">
                    D. Sathiaraj et al. Computers, Environment and Urban Systems, 72, 212–220, 2018
                  </p>
                </div>
                <a href="https://scholar.google.com/citations?hl=en&user=M8pdgtQAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors whitespace-nowrap">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">Selected Conferences</h3>
          <div className="space-y-3">
            <p className="text-muted-foreground">
              • Prediction of river stages along U.S. inland waterways using deep neural nets - 101st American Meteorological Society Annual Meeting, 2021
            </p>
            <p className="text-muted-foreground">
              • Interactive climate data analytics for hazards mitigation, planning, and emergency management - Climate Informatics, 2013
            </p>
            <p className="text-muted-foreground">
              • Storm surge return periods for the U.S. Gulf Coast - ATC-SEI Advances in Hurricane Engineering Conference, 2012
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Notable Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/projects/orca")}>
              <h3 className="text-xl font-semibold mb-2">ORCA System</h3>
              <p className="text-accent text-sm font-medium mb-3">U.S. Navy</p>
              <p className="text-muted-foreground mb-4">
                AI/ML ecosystem for predictive maintenance of COLUMBIA-class submarines, enabling rapid decision-making during maintenance periods.
              </p>
              <button className="text-accent hover:underline text-sm flex items-center gap-1">
                Learn more <ExternalLink className="w-4 h-4" />
              </button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/projects/wims")}>
              <h3 className="text-xl font-semibold mb-2">WIMS</h3>
              <p className="text-accent text-sm font-medium mb-3">Port Analytics</p>
              <p className="text-muted-foreground mb-4">
                AI-driven Waterway Information and Management System for 25 U.S. container ports, providing real-time logistical insights.
              </p>
              <button className="text-accent hover:underline text-sm flex items-center gap-1">
                Learn more <ExternalLink className="w-4 h-4" />
              </button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/projects/ripplego")}>
              <h3 className="text-xl font-semibold mb-2">RippleGo</h3>
              <p className="text-accent text-sm font-medium mb-3">Voyage Planning</p>
              <p className="text-muted-foreground mb-4">
                AI-based voyage planner for U.S. inland waterways, optimizing routes and reducing operational costs.
              </p>
              <button className="text-accent hover:underline text-sm flex items-center gap-1">
                Learn more <ExternalLink className="w-4 h-4" />
              </button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Gunshot Detection</h3>
              <p className="text-accent text-sm font-medium mb-3">School Safety</p>
              <p className="text-muted-foreground mb-4">
                AI-based detection system for Texas public schools, integrating edge models and mobile app for rapid response.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">RISE</h3>
              <p className="text-accent text-sm font-medium mb-3">River Management</p>
              <p className="text-muted-foreground mb-4">
                River Information Services Enterprise for U.S. Army Corps of Engineers, analyzing lock status and river levels.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">ACIS</h3>
              <p className="text-accent text-sm font-medium mb-3">Climate Data</p>
              <p className="text-muted-foreground mb-4">
                Applied Climate Information System, a nationwide climate data service with APIs for government and industry.
              </p>
              <a href="http://www.rcc-acis.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm flex items-center gap-1">
                Visit site <ExternalLink className="w-4 h-4" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Grants Section */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold mb-12">Grants & Contracts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-accent pl-4 py-2">
            <p className="font-semibold">U.S. Navy Contract - AI-based Submarine Maintenance</p>
            <p className="text-sm text-muted-foreground">2023–Present | $2,250,000/year</p>
          </div>
          <div className="border-l-4 border-accent pl-4 py-2">
            <p className="font-semibold">U.S. Department of Transportation - Port Analytics</p>
            <p className="text-sm text-muted-foreground">2024–Present | $125,000/year</p>
          </div>
          <div className="border-l-4 border-accent pl-4 py-2">
            <p className="font-semibold">Gunshot Detection System Contract</p>
            <p className="text-sm text-muted-foreground">$400,000/year</p>
          </div>
          <div className="border-l-4 border-accent pl-4 py-2">
            <p className="font-semibold">U.S. Army Corps of Engineers - RISE Program</p>
            <p className="text-sm text-muted-foreground">2017–Present | $5,000,000</p>
          </div>
          <div className="border-l-4 border-accent pl-4 py-2">
            <p className="font-semibold">NOAA Southern Regional Climate Center Sub-contract</p>
            <p className="text-sm text-muted-foreground">2021–2026 | $1,400,000</p>
          </div>
          <div className="border-l-4 border-accent pl-4 py-2">
            <p className="font-semibold">NOAA RISA Grant</p>
            <p className="text-sm text-muted-foreground">2018–2022 | $2,600,000</p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Awards & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <p className="font-semibold mb-2">Professional Scrum Master</p>
              <p className="text-sm text-muted-foreground">Scrum.org, Jan 2022</p>
            </Card>
            <Card className="p-6">
              <p className="font-semibold mb-2">Amazon Research Award</p>
              <p className="text-sm text-muted-foreground">AWS Cloud Credits, Fall 2018</p>
            </Card>
            <Card className="p-6">
              <p className="font-semibold mb-2">LIFT2 Grant</p>
              <p className="text-sm text-muted-foreground">Louisiana Technology and Research Foundation, Fall 2015</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-20">
         <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="max-w-2xl">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always interested in discussing new projects, research collaborations, or opportunities to work on impactful problems. Feel free to reach out through any of the channels below.
          </p>
          <div className="mb-8">
            <a href="/resume.pdf" download="David_Sathiaraj_Resume.pdf">
              <Button className="bg-accent hover:bg-accent/90">
                <Download className="w-4 h-4 mr-2" />
                Download My Resume
              </Button>
            </a>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:david@bristol-ai.com" className="hover:text-accent transition-colors">
                david@bristol-ai.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-accent" />
              <span>3547 Camino Del Rio South, Suite A, San Diego, CA 92108</span>
            </div>
            <div className="flex items-center gap-4">
              <Github className="w-5 h-5 text-accent" />
              <a href="https://github.com/ds153" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                github.com/ds153
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="w-5 h-5 text-accent" />
              <a href="https://www.trabus.com/ai" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Trabus AI Division
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 David Sathiaraj. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/ds153" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="https://scholar.google.com/citations?hl=en&user=0GnfFPIAAAAJ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                Google Scholar
              </a>
              <a href="mailto:david@bristol-ai.com" className="text-muted-foreground hover:text-accent transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent hover:bg-accent/90 text-white rounded-full p-3 shadow-lg transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}


