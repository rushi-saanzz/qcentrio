const blogs = {
  children: [
    {
      image: "http://localhost:3000/cloud-security.jpg",
      title:
        "7 effective ways to maximize your cloud security for enhanced protection",
      content:
        "In the cloud revolution, securing data against breaches is crucial for the 94% of enterprises using cloud services, as this blog will explore.",
      link: "/perspectives/7-ways-to-maximize-your-cloud-security",
    },
    {
      image: "http://localhost:3000/robotic-process.jpg",
      title: "Boost your enterprise innovation with robotic process automation",
      content:
        "In today's digital environment, innovation and robotic process automation are essential for streamlining procedures and driving growth.",
      link: "/perspectives/boost-your-enterprise-innovation-with-robotic-process-automation",
    },
    {
      image: "http://localhost:3000/block-chain-banking.jpg",
      title: "How blockchain redefines business and banking",
      content:
        "Since Satoshi Nakamoto introduced Blockchain, the term emphasizes its unalterable nature, offering security to financial moguls.",
      link: "/perspectives/how-blockchain-redefines-business-and-banking",
    },
    {
      image: "http://localhost:3000/cloud-computing.jpg",
      title:
        "Navigating the cloud landscape: 5 key strategies for effective cloud assessment",
      content: "Content",
      link: "/perspectives/navigating-the-cloud-landscape",
    },
  ],
  pageNumber: 0,
};

const caseStudies = {
  children: [
    {
      image: "http://localhost:3000/enhancing-patient-care.jpg",
      title: "Enhancing patient care with BI and SQL analytics at qcentrio",
      content:
        "The client aimed to enhance their Java app for better population health analytics and healthcare insights.",
      link: "/case-study/enhancing-patient-care-with-bi-and-sql-analytics",
    },

    {
      image: "http://localhost:3000/land-management.jpg",
      title:
        "Land Management in India Leading State with a Blockchain Platform",
      content:
        "Leading Indian state transforms land management with innovative Blockchain platform for streamlined processes and transparency.",
      link: "/case-study/transforming-land-management-in-india-leading-state-with-a-blockchain-platform",
    },
    {
      image: "http://localhost:3000/automatic-vehicle.jpg",
      title:
        "Automating Vehicle Aerodynamics Simulations for Automotive Company",
      content:
        "Automotive company automates vehicle aerodynamics simulations for enhanced efficiency and performance in product development.",
      link: "/case-study/automating-vehicle-aerodynamics-simulations-for-a-major-automotive-design-company",
    },
    {
      image: "http://localhost:3000/sharepoint-ecosystem.jpg",
      title:
        "Transforming pharmaceutical major’s sharepoint ecosystem with azure",
      content: "Content",
      link: "/case-study/transforming-pharmaceutical-major-sharepoint-ecosystem-with-azure-migration",
    },
  ],
  pageNumber: 0,
};

const thoughtLeadership = {
  children: [
    {
      title: "Enhancing patient care with bi and sql analytics at qcentrio",
      content: "Content",
      link: "/case-study/enhancing-patient-care-with-bi-and-sql-analytics",
    },
    {
      title:
        "Transforming pharmaceutical major’s sharepoint ecosystem with azure migration",
      content: "Content",
      link: "/case-study/transforming-pharmaceutical-major-sharepoint-ecosystem-with-azure-migration",
    },
  ],
  pageNumber: 0,
};

export async function search(type, item, page) {
  if (type == "perspectives") {
    if (item != "") {
      const data = prepareDataWithItem(blogs, item, page);
      return data;
    } else {
      const data = prepareData(blogs, page);
      return data;
    }
  } else if (type == "case-study") {
    if (item != "") {
      const data = prepareDataWithItem(caseStudies, item, page);
      return data;
    } else {
      const data = prepareData(caseStudies, page);
      return data;
    }
  } else if (type == "thought-leadership") {
    if (item != "") {
      const data = prepareDataWithItem(thoughtLeadership, item, page);
      return data;
    } else {
      const data = prepareData(thoughtLeadership, page);
      return data;
    }
  }
}

function prepareDataWithItem(type, item, page) {
  const startIndex = (page - 1) * 3;

  const results = type.children.filter((element) =>
    element.title.toLowerCase().includes(item.toLowerCase())
  );
  const sortedData = results.slice(startIndex, startIndex + 3);
  const pageNumber = Math.ceil(results.length / 3);
  const newData = {
    children: [...sortedData],
    pageNumber: pageNumber,
  };
  return newData;
}

function prepareData(type, page) {
  const startIndex = (page - 1) * 3;

  const pageNumber = Math.ceil(type.children.length / 3);
  const sortedData = type.children.slice(startIndex, startIndex + 3);
  const newData = {
    children: [...sortedData],
    pageNumber: pageNumber,
  };

  return newData;
}
