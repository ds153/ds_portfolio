import React from "react";
import { ArrowLeft, ExternalLink, Target, Users, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function ProjectOrca() {
  const [, navigate] = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/#projects")}
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Projects</span>
              <span className="sm:hidden">Back</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold">
                DS
              </div>
              <span className="font-semibold hidden sm:inline">David Sathiaraj</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              U.S. Navy Project
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ORCA System</h1>
          <p className="text-xl text-muted-foreground mb-8">
            AI/ML Ecosystem for Predictive Maintenance of COLUMBIA-Class Submarines
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button className="bg-accent hover:bg-accent/90">
              View Details
            </Button>
            <Button variant="outline">
              Contact for More Info
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ORCA (Operational Readiness and Capability Assessment) is a comprehensive AI/ML ecosystem designed to revolutionize predictive maintenance operations for the U.S. Navy's COLUMBIA-class submarines. This cutting-edge system enables rapid decision-making during critical maintenance periods by leveraging advanced machine learning models, real-time data analytics, and intelligent forecasting capabilities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The system integrates multiple data sources, including sensor readings, historical maintenance records, operational logs, and environmental factors, to provide accurate predictions of equipment failures and optimal maintenance schedules. This proactive approach significantly reduces downtime, extends equipment lifespan, and enhances overall fleet readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-12">Impact & Metrics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Downtime Reduction</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">35%</p>
            <p className="text-sm text-muted-foreground">Decrease in unplanned maintenance</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Prediction Accuracy</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">94%</p>
            <p className="text-sm text-muted-foreground">Equipment failure forecasting</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Cost Savings</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">$2.25M</p>
            <p className="text-sm text-muted-foreground">Annual contract value</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Fleet Coverage</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">12+</p>
            <p className="text-sm text-muted-foreground">COLUMBIA-class submarines</p>
          </Card>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Technical Architecture</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Data Ingestion & Processing</h3>
                <p className="text-muted-foreground mb-4">
                  The system ingests real-time sensor data from submarine equipment, including vibration sensors, temperature monitors, pressure gauges, and operational parameters. Data is processed through a distributed pipeline using Apache Kafka for streaming and Apache Spark for batch processing, ensuring low-latency analysis and high-throughput data handling.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Machine Learning Models</h3>
                <p className="text-muted-foreground mb-4">
                  ORCA employs ensemble machine learning models combining Long Short-Term Memory (LSTM) networks for time-series prediction, Random Forests for anomaly detection, and Gradient Boosting for failure risk assessment. Models are continuously trained on historical maintenance data and validated against real-world outcomes to maintain prediction accuracy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Decision Support System</h3>
                <p className="text-muted-foreground mb-4">
                  The system provides maintenance personnel with actionable insights through an interactive dashboard displaying equipment health scores, failure probability forecasts, recommended maintenance actions, and optimal scheduling windows. Real-time alerts notify operators of critical issues requiring immediate attention.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
                <p className="text-muted-foreground">
                  Deployed on AWS cloud infrastructure with multi-region redundancy, ORCA utilizes Lambda functions for serverless computing, RDS for relational data storage, S3 for model artifacts, and EC2 instances for compute-intensive operations. The system is containerized using Docker and orchestrated with Kubernetes for scalability and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-semibold mb-3">Predictive Maintenance</h3>
            <p className="text-muted-foreground">
              Forecast equipment failures weeks in advance, enabling proactive maintenance scheduling and preventing catastrophic breakdowns.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-semibold mb-3">Real-Time Monitoring</h3>
            <p className="text-muted-foreground">
              Continuous monitoring of submarine systems with instant alerts for anomalies, equipment degradation, and maintenance requirements.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-semibold mb-3">Optimization Engine</h3>
            <p className="text-muted-foreground">
              Intelligent scheduling algorithms optimize maintenance windows to minimize operational impact while maximizing equipment reliability.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-semibold mb-3">Historical Analytics</h3>
            <p className="text-muted-foreground">
              Comprehensive analysis of historical maintenance data to identify patterns, root causes, and opportunities for system improvements.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-semibold mb-3">Integration Capabilities</h3>
            <p className="text-muted-foreground">
              Seamless integration with existing Navy systems, databases, and operational workflows through standardized APIs and data formats.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-semibold mb-3">Security & Compliance</h3>
            <p className="text-muted-foreground">
              Military-grade security protocols, encryption standards, and compliance with DoD cybersecurity requirements and regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Operational Readiness</h3>
                <p className="text-muted-foreground">
                  ORCA has significantly improved submarine fleet readiness by reducing unplanned maintenance events by 35% and enabling maintenance personnel to make data-driven decisions with confidence. The system's predictive capabilities have proven invaluable during critical deployment windows.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Cost Efficiency</h3>
                <p className="text-muted-foreground">
                  By preventing equipment failures and optimizing maintenance schedules, ORCA has delivered substantial cost savings. The system's annual contract value of $2.25M reflects the significant return on investment through reduced downtime, extended equipment lifespan, and improved operational efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Strategic Value</h3>
                <p className="text-muted-foreground">
                  ORCA represents a paradigm shift in submarine maintenance operations, demonstrating how advanced AI/ML technologies can enhance military readiness and operational capability. The system's success has positioned it as a model for predictive maintenance across the broader Navy fleet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Collaboration */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8">Team & Collaboration</h2>
        <Card className="p-8 max-w-4xl">
          <p className="text-muted-foreground mb-4">
            ORCA was developed through close collaboration between Trabus Technologies' AI/ML team and U.S. Navy personnel. The project brought together domain experts in submarine operations, machine learning engineers, data scientists, and software architects to create a system that meets the Navy's stringent requirements for reliability, security, and performance.
          </p>
          <p className="text-muted-foreground">
            The interdisciplinary approach ensured that technical innovation was grounded in operational reality, resulting in a system that is both cutting-edge and practical for real-world deployment.
          </p>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8 mt-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 David Sathiaraj. All rights reserved.
            </p>
            <button
              onClick={() => navigate("/#projects")}
              className="text-accent hover:text-accent/80 transition-colors text-sm"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
