import React from 'react';
import { AccessTime, Code, Cloud, Security, Speed, Support } from '@mui/icons-material';

const features = [
  {
    title: "Clean Code",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quam nihil.",
    icon: <Code />,
  },
  {
    title: "Object Oriented",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quam nihil.",
    icon: <Security />,
  },
  {
    title: "24/7 Service",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quam nihil.",
    icon: <AccessTime />,
  },
  {
    title: "Value for Money",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quam nihil.",
    icon: <Support />,
  },
  {
    title: "Faster Response",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quam nihil.",
    icon: <Speed />,
  },
  {
    title: "Cloud Support",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quam nihil.",
    icon: <Cloud />
  },
];

const Features = () => {
  return (
    <div className="container mx-auto p-6 bg-blue-100 h-full">
      <h2 className="text-3xl font-bold mb-6 text-center ">Something You Need To Know</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 px-16">
        {features.map((feature, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md flex flex-col items-center">
            <div className="text-5xl text-teal-700 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
