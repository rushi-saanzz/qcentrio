"use client";

import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/blog-arrow.svg";
import triWhite from "@/public/up-tri-white.svg";
import whatNew from "@/public/bi-andsql-analytics.png";
import { useEffect, useRef, useState } from "react";

export function MegaMenu({ setServiceHovered, servicesHovered }) {
  const [index, setIndex] = useState(0);
  const container = useRef(null);
  const links = [
    {
      column1: [
        {
          title: "Generative AI Solutions and Offerings",
          link: "/offerings/business-value-enhancement-services/generative-ai-solutions-and-offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
          link: "/offerings/business-value-enhancement-services/artificial-intelligence-machine-learning-offerings",
        },
        {
          title: "Robotic Process Automation Services",
          link: "/offerings/business-value-enhancement-services/robotic-process-automation-services",
        },
      ],
    },
    {
      column1: [
        {
          title: "ERP Solutions Support",
          link: "/offerings/advanced-technology-solutions/erp-solutions-support",
        },
        {
          title: "Comprehensive SAP Services",
          link: "/offerings/advanced-technology-solutions/comprehensive-sap-services",
        },
        {
          title: "Product Engineering Services",
          link: "/offerings/advanced-technology-solutions/product-engineering-services",
        },
      ],
      column2: [
        {
          title: "Custom Software / Application Development",
          link: "/offerings/advanced-technology-solutions/custom-software-application-development",
        },
        {
          title: "Internet of Things (IoT) Solutions",
          link: "/offerings/advanced-technology-solutions/internet-of-things-solutions",
        },
        {
          title: "Big Data Services and Solutions",
          link: "/offerings/advanced-technology-solutions/big-data-services-and-solutions",
        },
      ],
    },
    {
      column1: [
        {
          title: "EPIC Advisory Services",
          link: "/offerings/advisory-and-strategic-services/epic-advisory-services",
        },
        {
          title: "Oracle Cerner Advisory Services",
          link: "/offerings/advisory-and-strategic-services/oracle-cerner-advisory-services",
        },
        {
          title: "Audit and Assurance Services",
          link: "/offerings/advisory-and-strategic-services/audit-and-assurance-services",
        },
      ],
      column2: [
        {
          title: "Risk Advisory Services",
          link: "/offerings/advisory-and-strategic-services/risk-advisory-services",
        },
        {
          title: "Specialty Services",
          link: "/offerings/advisory-and-strategic-services/specialty-services",
        },
      ],
    },
    {
      column1: [
        {
          title: "Data Analytics and Business Intelligence",
          link: "/offerings/business-optimization-and-analytics-services/data-analytics-and-business-intelligence",
        },
        {
          title: "Collaboration and Productivity Solutions",
          link: "/offerings/business-optimization-and-analytics-services/collaboration-and-productivity-solutions",
        },
        {
          title: "CRM System Solutions",
          link: "/offerings/business-optimization-and-analytics-services/crm-system-solutions",
        },
      ],
    },
    {
      column1: [
        {
          title: "Blockchain Strategy and Advisory",
          link: "/offerings/blockchain-advisory-and-offerings/blockchain-strategy-and-advisory",
        },
        {
          title: "Blockchain Solution Development",
          link: "/offerings/blockchain-advisory-and-offerings/blockchain-solution-development",
        },
        {
          title: "Blockchain Integration and Deployment",
          link: "/offerings/blockchain-advisory-and-offerings/blockchain-integration-and-deployment",
        },
      ],
      column2: [
        {
          title: "Blockchain Security and Compliance",
          link: "/offerings/blockchain-advisory-and-offerings/blockchain-security-and-compliance",
        },
      ],
    },
    {
      column1: [
        {
          title: "Cloud Infrastructure Services",
          link: "/offerings/cloud-infra-and-security-services/cloud-infrastructure-services",
        },
        {
          title: "Salesforce Services",
          link: "/offerings/cloud-infra-and-security-services/salesforce-services",
        },
        {
          title: "Azure Services and Offerings",
          link: "/offerings/cloud-infra-and-security-services/azure-services-and-offerings",
        },
        {
          title: "AWS Services and Offerings",
          link: "/offerings/cloud-infra-and-security-services/aws-services-and-offerings",
        },
      ],
      column2: [
        {
          title: "GCP Services and Offerings",
          link: "/offerings/cloud-infra-and-security-services/gcp-services-and-offerings",
        },
        {
          title: "Cybersecurity Solutions",
          link: "/offerings/cloud-infra-and-security-services/cybersecurity-solutions",
        },
        {
          title: "Continuous IT Support and Managed Services",
          link: "/offerings/cloud-infra-and-security-services/continuous-it-support-and-managed-services",
        },
        {
          title: "Offshore Development Centre (ODC) Services",
          link: "/offerings/cloud-infra-and-security-services/offshore-development-centre-services",
        },
      ],
    },
  ];

  const caseStudies = [
    {
      image: whatNew,
      title:
        "Automating Vehicle Aerodynamics Simulations for a Major Automotive Design Company",
      link: "/case-study/automating-vehicle-aerodynamics-simulations-for-a-major-automotive-design-company",
    },
    {
      image: whatNew,
      title:
        "Automating Vehicle Aerodynamics Simulations for a Major Automotive Design Company",
      link: "/case-study/automating-vehicle-aerodynamics-simulations-for-a-major-automotive-design-company",
    },
    {
      image: whatNew,
      title: "Enhancing Patient Care with BI and SQL Analytics",
      link: "/case-study/enhancing-patient-care-with-bi-and-sql-analytics",
    },
    {
      image: whatNew,
      title:
        "Automating Vehicle Aerodynamics Simulations for a Major Automotive Design Company",
      link: "/case-study/automating-vehicle-aerodynamics-simulations-for-a-major-automotive-design-company",
    },
    {
      image: whatNew,
      title:
        "Transforming Land Management in India’s Leading State with a Blockchain Platform",
      link: "/case-study/transforming-land-management-in-india-leading-state-with-a-blockchain-platform",
    },
    {
      image: whatNew,
      title:
        "Transforming Pharmaceutical Major’s Sharepoint Ecosystem with Azure Migration",
      link: "/case-study/transforming-pharmaceutical-major-sharepoint-ecosystem-with-azure-migration",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setServiceHovered((prevState) => prevState == false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setServiceHovered]);

  return (
    <div
      data-option="mega-menu-container"
      onClick={(e) => {
        if (e.target.getAttribute("data-option") == "mega-menu-container") {
          setServiceHovered(!servicesHovered);
        }
      }}
      ref={container}
      className="menu-menu-container">
      <div className="nav-options mega-menu">
        <div className="mega-menu-column border-r border-[#707070]/20">
          <h2 className="mega-menu-heading">Our Offerings</h2>
          <div
            data-index="0"
            className={`mega-menu-main-nav-link ${
              index == 0 ? "bg-[#089768] text-white" : "bg-white text-[#404040]"
            }`}
            onClick={() => setIndex(0)}>
            Business Value Enhancement
            {index == 0 && (
              <span>
                <Image alt="" src={triWhite} />
              </span>
            )}
          </div>
          <div
            data-index="1"
            className={`mega-menu-main-nav-link ${
              index == 1 ? "bg-[#089768] text-white" : "bg-white text-[#404040]"
            }`}
            onClick={() => setIndex(1)}>
            Advanced Technology Solutions
            {index == 1 && (
              <span>
                <Image alt="" src={triWhite} />
              </span>
            )}
          </div>
          <div
            data-index="2"
            className={`mega-menu-main-nav-link ${
              index == 2 ? "bg-[#089768] text-white" : "bg-white text-[#404040]"
            }`}
            onClick={() => setIndex(2)}>
            Advisory and Strategic Services
            {index == 2 && (
              <span>
                <Image alt="" src={triWhite} />
              </span>
            )}
          </div>
          <div
            data-index="3"
            className={`mega-menu-main-nav-link ${
              index == 3 ? "bg-[#089768] text-white" : "bg-white text-[#404040]"
            }`}
            onClick={() => setIndex(3)}>
            Business Optimization and Analytics
            {index == 3 && (
              <span>
                <Image alt="" src={triWhite} />
              </span>
            )}
          </div>
          <div
            data-index="4"
            className={`mega-menu-main-nav-link ${
              index == 4 ? "bg-[#089768] text-white" : "bg-white text-[#404040]"
            }`}
            onClick={() => setIndex(4)}>
            Blockchain Services & Solutions
            {index == 4 && (
              <span>
                <Image alt="" src={triWhite} />
              </span>
            )}
          </div>
          <div
            data-index="5"
            className={`mega-menu-main-nav-link ${
              index == 5 ? "bg-[#089768] text-white" : "bg-white text-[#404040]"
            }`}
            onClick={() => setIndex(5)}>
            Cloud Infrastructure & Security Services
            {index == 5 && (
              <span>
                <Image alt="" src={triWhite} />
              </span>
            )}
          </div>
        </div>
        <div className="mega-menu-column mega-menu-middle-column border-r border-[#707070]/20">
          <h2 className="mega-menu-heading ">Sub Services</h2>
          <div className="mega-menu-middle-columns-container">
            <div>
              {links[index].column1.map((link, i) => {
                return (
                  <Link key={i} href={link.link}>
                    <div className="mega-menu-sub-nav-link">{link.title}</div>
                  </Link>
                );
              })}
            </div>
            <div>
              {links[index].column2 &&
                links[index].column2.map((link, i) => {
                  return (
                    <Link key={i} href={link.link}>
                      <div key={i} className="mega-menu-sub-nav-link">
                        {link.title}
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="mega-menu-column">
          <h2 className="mega-menu-heading ">What's New?</h2>
          <div className="what-new-col-container">
            <Image className="mb-[10px]" src={whatNew} alt="" />
            <div className="what-new-title">{caseStudies[index].title}</div>
            <Link
              className="w-fit mt-auto"
              href="/case-study/enhancing-patient-care-with-bi-and-sql-analytics">
              <div className="what-new-btn">
                Learn More
                <span>
                  <Image src={arrow} alt="" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
