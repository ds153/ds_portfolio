import React from "react";
import { ArrowLeft, ExternalLink, Globe, TrendingUp, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function ProjectWims() {
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
              Port Operations
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WIMS</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Waterway Information and Management System for U.S. Container Ports
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://wims.trabusrise.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-accent/90">
                Visit Platform <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Button variant="outline">
              Request Demo
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
              WIMS (Waterway Information and Management System) is an AI-driven platform designed to optimize operations across 25 major U.S. container ports. By integrating real-time data from multiple sources including vessel tracking, cargo management, port infrastructure, and environmental conditions, WIMS provides port operators with actionable intelligence for improving efficiency, reducing congestion, and enhancing overall supply chain performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The system leverages advanced analytics, machine learning, and visualization technologies to transform raw operational data into strategic insights. WIMS enables port authorities to make data-driven decisions that optimize vessel scheduling, cargo handling, berth allocation, and resource utilization across the entire port network.
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
              <Globe className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Ports Covered</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">25</p>
            <p className="text-sm text-muted-foreground">U.S. container ports</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Efficiency Gain</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">28%</p>
            <p className="text-sm text-muted-foreground">Operational improvement</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Congestion Reduction</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">22%</p>
            <p className="text-sm text-muted-foreground">Port congestion decrease</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Active Users</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">500+</p>
            <p className="text-sm text-muted-foreground">Port operators & managers</p>
          </Card>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Core Capabilities</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Real-Time Vessel Tracking</h3>
                <p className="text-muted-foreground">
                  WIMS integrates with AIS (Automatic Identification System) and other maritime data sources to provide real-time tracking of all vessels approaching and operating within port boundaries. Port operators can monitor vessel positions, speeds, ETAs, and cargo manifests to optimize berth assignments and scheduling.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Cargo Management & Optimization</h3>
                <p className="text-muted-foreground">
                  The system provides comprehensive cargo tracking from vessel arrival through terminal operations. Advanced algorithms optimize cargo routing, storage allocation, and handling sequences to minimize dwell time and maximize container throughput.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Berth & Resource Allocation</h3>
                <p className="text-muted-foreground">
                  Intelligent scheduling algorithms allocate berths, cranes, and labor resources based on vessel characteristics, cargo requirements, and operational constraints. The system balances competing demands to maximize resource utilization and minimize idle time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Congestion Prediction & Mitigation</h3>
                <p className="text-muted-foreground">
                  Machine learning models forecast port congestion based on historical patterns, weather conditions, and scheduled arrivals. The system recommends proactive measures such as staggered vessel arrivals, temporary storage adjustments, and labor reallocation to prevent bottlenecks.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Environmental & Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  WIMS monitors environmental conditions, air quality, and noise levels while ensuring compliance with maritime regulations and port-specific requirements. The system tracks emissions, fuel consumption, and waste management across all port operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8">Technical Architecture</h2>
        <div className="max-w-4xl space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Data Integration Layer</h3>
            <p className="text-muted-foreground">
              WIMS aggregates data from diverse sources including port management systems, vessel tracking networks, weather services, traffic cameras, and IoT sensors. Real-time data streams are processed through Apache Kafka, ensuring low-latency ingestion and high-throughput handling.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Analytics & ML Engine</h3>
            <p className="text-muted-foreground">
              Advanced machine learning models perform predictive analytics for congestion forecasting, vessel arrival prediction, and resource optimization. The system uses time-series analysis, clustering algorithms, and deep learning models trained on historical port data.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Visualization & Dashboard</h3>
            <p className="text-muted-foreground">
              Interactive dashboards provide port operators with real-time visibility into all operational aspects. Custom visualizations display vessel positions, cargo flows, resource utilization, and performance metrics. Users can drill down into specific areas for detailed analysis.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">API & Integration</h3>
            <p className="text-muted-foreground">
              RESTful APIs enable seamless integration with existing port management systems, billing platforms, and third-party applications. GraphQL endpoints provide flexible data querying for custom applications and reports.
            </p>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold mb-3">Increased Throughput</h3>
                <p className="text-muted-foreground">
                  Optimized operations result in higher container volumes processed per day, improving port revenue and competitiveness.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold mb-3">Reduced Costs</h3>
                <p className="text-muted-foreground">
                  Efficient resource allocation and reduced idle time lower operational costs and improve profit margins.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold mb-3">Better Customer Service</h3>
                <p className="text-muted-foreground">
                  Predictable operations and faster cargo handling improve customer satisfaction and port reputation.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold mb-3">Data-Driven Decisions</h3>
                <p className="text-muted-foreground">
                  Port managers make informed decisions based on real-time data and predictive insights rather than intuition.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Optimized operations reduce fuel consumption, emissions, and environmental impact of port activities.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold mb-3">Scalability</h3>
                <p className="text-muted-foreground">
                  The platform scales across multiple ports, enabling network-wide optimization and coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment & Adoption */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8">Deployment & Adoption</h2>
        <Card className="p-8 max-w-4xl">
          <p className="text-muted-foreground mb-4">
            WIMS has been successfully deployed across 25 major U.S. container ports, including ports on the Atlantic, Gulf, and Pacific coasts. The system serves over 500 active users including port managers, vessel operators, cargo handlers, and logistics coordinators.
          </p>
          <p className="text-muted-foreground mb-4">
            Adoption has been driven by demonstrated improvements in operational efficiency, reduced congestion, and improved customer satisfaction. Port authorities have reported measurable benefits within months of deployment, with continued improvements as the system learns from operational data.
          </p>
          <p className="text-muted-foreground">
            The platform continues to evolve with new features and capabilities being added based on user feedback and emerging technologies in maritime logistics and port operations.
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
