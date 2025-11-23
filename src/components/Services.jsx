import React from "react";
import ServiceCard from "./ServiceCard";

const FinanceIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" d="M3 21h18M4 17h16M6 13h12M9 9h6M11 5h2" />
  </svg>
);

const GraphIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" d="M3 3v18h18" />
    <path strokeLinecap="round" d="M7 14l3-3 4 4 6-6" />
  </svg>
);

const HandshakeIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" d="M3 8l7 7 4-4 7 7" />
    <path strokeLinecap="round" d="M14 3l7 7" />
  </svg>
);

const ShieldIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7z" />
  </svg>
);

const DatabaseIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
);

const ChartIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" d="M4 20h16M6 16v-5M12 20V8M18 20v-8" />
  </svg>
);

function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-center mb-12">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          title="Financial Planning"
          desc="Retirement, wealth allocation & tax planning."
          icon={FinanceIcon}
        />
        <ServiceCard
          title="Mutual Funds Advisory"
          desc="Fund selection, SIP strategy and risk evaluation."
          icon={GraphIcon}
        />
        <ServiceCard
          title="Client Relationship"
          desc="CRM, onboarding and retention improvement."
          icon={HandshakeIcon}
        />
        <ServiceCard
          title="Stock Market Insurance"
          desc="Hedging, downside protection & risk modeling."
          icon={ShieldIcon}
        />
        <ServiceCard
          title="SQL & Data Engineering"
          desc="ETL pipelines, data modeling & optimization."
          icon={DatabaseIcon}
        />
        <ServiceCard
          title="Power BI Reporting"
          desc="Interactive dashboards & automated reporting."
          icon={ChartIcon}
        />
      </div>
    </section>
  );
}
export default Services;
