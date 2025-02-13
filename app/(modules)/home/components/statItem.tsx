"use client";
import React from "react";
import CountUp from "react-countup";

interface IStatItemProps {
  value: number;
  label: string;
  isPercentage?: boolean;
}

const StatItem: React.FC<IStatItemProps> = ({
  value,
  label,
  isPercentage = false,
}) => (
  <div className="text-white text-center">
    <div className="text-4xl font-bold mb-2">
      <CountUp start={0} end={value} duration={2} separator="," />
      {isPercentage ? "%" : "+"}
    </div>
    <div className="text-sm font-medium uppercase tracking-wide">{label}</div>
  </div>
);

export default StatItem;
