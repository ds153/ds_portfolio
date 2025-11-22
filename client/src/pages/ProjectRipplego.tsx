import React from "react";
import { ArrowLeft, ExternalLink, Map, TrendingUp, Zap, Award, Navigation, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function ProjectRipplego() {
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
              Voyage Planning
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RippleGo</h1>
          <p className="text-xl text-muted-foreground mb-8">
            AI-Based Voyage Planner for U.S. Inland Waterways
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://ripplego.com" target="_blank" rel="noopener noreferrer">
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
              RippleGo is Trabus Technologies' first commercial AI-based voyage planning system designed specifically for the U.S. inland waterways transportation network. The platform revolutionizes how barge operators, fleet managers, and logistics coordinators plan routes, optimize schedules, and manage operations across America's complex network of rivers, canals, and locks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By integrating real-time hydrological data, lock schedules, weather conditions, and operational constraints, RippleGo generates optimal voyage plans that minimize transit time, reduce fuel consumption, and improve operational efficiency. The system represents a significant advancement in inland waterway logistics, enabling operators to make data-driven decisions in a traditionally experience-based industry.
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
              <Map className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Waterway Coverage</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">12,000+</p>
            <p className="text-sm text-muted-foreground">Miles of U.S. inland waterways</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Fuel Savings</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">18%</p>
            <p className="text-sm text-muted-foreground">Average fuel consumption reduction</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Time Optimization</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">24%</p>
            <p className="text-sm text-muted-foreground">Average transit time reduction</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">IEEE Recognition</h3>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">2023</p>
            <p className="text-sm text-muted-foreground">AI Conference Publication</p>
          </Card>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Core Features</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Intelligent Route Optimization</h3>
                <p className="text-muted-foreground">
                  RippleGo analyzes thousands of potential routes across the inland waterway network, considering factors such as water depth, current conditions, lock availability, and weather forecasts. Advanced algorithms identify optimal routes that minimize fuel consumption, reduce transit time, and avoid operational hazards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Real-Time Hydrological Data</h3>
                <p className="text-muted-foreground">
                  The platform integrates real-time water level data, current speeds, and flow rates from USGS monitoring stations across the waterway network. This information is continuously updated and factored into route calculations, ensuring that voyage plans remain optimal as conditions change.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Lock Scheduling & Coordination</h3>
                <p className="text-muted-foreground">
                  RippleGo coordinates with lock operations to predict availability and minimize wait times. The system recommends optimal lock transits based on current schedules, helping operators plan voyages that avoid congestion and reduce delays.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Weather Integration</h3>
                <p className="text-muted-foreground">
                  Real-time and forecast weather data is integrated into voyage planning. The system alerts operators to severe weather conditions, recommends safe harbors, and adjusts route recommendations based on wind, precipitation, and visibility forecasts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Fuel & Cost Optimization</h3>
                <p className="text-muted-foreground">
                  The system calculates fuel consumption for different route options and vessel configurations, enabling operators to make cost-effective decisions. Detailed cost analysis includes fuel, labor, and time considerations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Compliance & Safety</h3>
                <p className="text-muted-foreground">
                  RippleGo ensures all recommended routes comply with Coast Guard regulations, environmental requirements, and operational safety standards. The system identifies hazardous areas and recommends safe navigation practices.
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
            <h3 className="text-lg font-semibold mb-3">Geospatial Data Processing</h3>
            <p className="text-muted-foreground">
              RippleGo utilizes PostGIS for geospatial data management and GDAL for processing waterway topology. The system maintains detailed maps of the entire inland waterway network including channel depths, lock locations, and navigational hazards.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Route Optimization Engine</h3>
            <p className="text-muted-foreground">
              Advanced graph algorithms and machine learning models power the route optimization engine. The system considers multiple optimization objectives including fuel consumption, transit time, safety, and regulatory compliance, using multi-objective optimization techniques.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Data Integration Pipeline</h3>
            <p className="text-muted-foreground">
              Real-time data from USGS, NOAA, Coast Guard, and lock operations are continuously ingested through automated pipelines. Data is validated, normalized, and integrated into the system's operational models within minutes of collection.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Interactive Visualization</h3>
            <p className="text-muted-foreground">
              The platform provides interactive maps using Mapbox and Leaflet.js, displaying waterway conditions, vessel positions, recommended routes, and real-time alerts. Users can visualize alternative routes and compare optimization metrics.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Mobile & API Access</h3>
            <p className="text-muted-foreground">
              RippleGo offers both web and mobile applications, allowing operators to access voyage plans and receive updates from anywhere. RESTful APIs enable integration with vessel management systems and third-party logistics platforms.
            </p>
          </Card>
        </div>
      </section>

      {/* Business Impact */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Business Impact</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Operational Efficiency</h3>
                <p className="text-muted-foreground">
                  By reducing transit times by an average of 24% and fuel consumption by 18%, RippleGo delivers substantial operational savings. Barge operators report significant improvements in fleet utilization and profitability.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Environmental Benefits</h3>
                <p className="text-muted-foreground">
                  The fuel consumption reductions translate directly to lower CO2 emissions and reduced environmental impact. RippleGo helps the inland waterway industry meet sustainability goals while improving economic performance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Market Recognition</h3>
                <p className="text-muted-foreground">
                  RippleGo was presented at the 2023 IEEE Conference on Artificial Intelligence, receiving recognition as an innovative application of AI in transportation. The publication has generated significant industry interest and adoption.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Scalability & Growth</h3>
                <p className="text-muted-foreground">
                  The platform's success has positioned it as a model for AI-driven optimization in transportation and logistics. Plans for expansion include additional waterway networks and integration with broader supply chain systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Benefits */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8">Key User Benefits</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-semibold mb-3">Fleet Operators</h3>
            <p className="text-muted-foreground">
              Reduce operational costs, improve fleet utilization, and make data-driven decisions about vessel deployment and scheduling.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-semibold mb-3">Logistics Coordinators</h3>
            <p className="text-muted-foreground">
              Plan shipments more efficiently, provide accurate delivery estimates, and optimize cargo consolidation across routes.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-semibold mb-3">Port Operators</h3>
            <p className="text-muted-foreground">
              Better forecast vessel arrivals, coordinate with lock operations, and optimize port resource allocation.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-semibold mb-3">Environmental Advocates</h3>
            <p className="text-muted-foreground">
              Support sustainable transportation by reducing fuel consumption and emissions in the inland waterway sector.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Research & Publications</h2>
            <Card className="p-6 mb-6">
              <p className="font-semibold mb-2">
                RippleGo: An AI-based voyage planner for U.S. inland waterways
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                D. Sathiaraj et al. 2023 IEEE Conference on Artificial Intelligence, 372–373, 2023
              </p>
              <p className="text-muted-foreground text-sm">
                This peer-reviewed publication presents the RippleGo system architecture, optimization algorithms, and real-world performance results. The paper demonstrates how machine learning and advanced optimization techniques can revolutionize inland waterway logistics.
              </p>
            </Card>

            <Card className="p-6">
              <p className="font-semibold mb-2">
                Predictive analytics-based U.S. inland waterways voyage planning analysis tool (VPAT)
              </p>
              <p className="text-sm text-muted-foreground">
                J. Celano, D. Sathiaraj. Technical Report, Department of Energy, 2021
              </p>
            </Card>
          </div>
        </div>
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
