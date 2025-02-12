import React from "react";

interface Statistic {
  id: number;
  value: string;
  label: string;
}

interface StatisticsProps {
  stats: Statistic[];
}

const Statistics: React.FC<StatisticsProps> = ({ stats }) => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 px-10 py-6 text-white border-b border-gray-700">
      {stats.map((stat, index) => (
        <div key={stat.id} className="flex items-center space-x-2">
          <h3 className="text-2xl font-bold">{stat.value}</h3>
          <p className="text-gray-400 uppercase text-sm">{stat.label}</p>
          {index < stats.length - 1 && <span className="hidden lg:block text-gray-600">|</span>}
        </div>
      ))}
    </div>
  );
};

export default Statistics;
