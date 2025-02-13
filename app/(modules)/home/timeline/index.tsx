"use client";
import { Atom, Factory, FlaskConical, Recycle, StarIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  // Define soft, cohesive colors
  const colors = {
    secondary: "#0D9488", // Teal-600
    neutral: "#e5e7eb", // Grey-200
    light: "#F8FAFC",
    text: "#1F2937", // Dark text
  };

  return (
    <div className="section bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="md:py-24 py-12">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-700">
            The CASO technology
          </h2>
          <VerticalTimeline animate={true}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: colors.neutral,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.75rem",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${colors.neutral}`,
              }}
              date="2025"
              dateClassName="text-gray-600 font-semibold"
              iconStyle={{ background: colors.neutral, color: colors.text }}
              icon={<Factory className="w-5 h-5" />}
            >
              <div className="text-gray-800">
                <h3 className="text-xl font-bold mb-1">
                  1.6MW CASO Reactor Development
                </h3>
                <h4 className="text-lg opacity-90 mb-2">Major Milestone</h4>
                <p className="text-gray-700">
                  Development of 1.6MW CASO reactor and agreement with key JV
                  partners to roll-out technology.
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: colors.secondary,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.75rem",
              }}
              date="2024"
              dateClassName="text-gray-600 font-semibold"
              iconStyle={{ background: colors.secondary, color: colors.light }}
              icon={<Recycle className="w-5 h-5" />}
            >
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1">Business Refocus</h3>
                <h4 className="text-lg opacity-90 mb-2">Strategic Shift</h4>
                <p className="text-teal-50">
                  Re-establishment and refocus of business on Tyre processing to
                  develop business momentum.
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: colors.neutral,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.75rem",
              }}
              date="2012"
              dateClassName="text-gray-600 font-semibold"
              iconStyle={{ background: colors.neutral, color: colors.text }}
              icon={<FlaskConical className="w-5 h-5" />}
            >
              <div className="text-gray-800">
                <h3 className="text-xl font-bold mb-1">
                  Venezuela PDVA Commission
                </h3>
                <h4 className="text-lg opacity-90 mb-2">
                  Heavy Oil Processing
                </h4>
                <p className="text-gray-700">
                  Commissioned by PDVA in Venezuela to use reactor to process
                  heavy oil sludge.
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: colors.secondary,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.75rem",
              }}
              date="2012"
              dateClassName="text-gray-600 font-semibold"
              iconStyle={{ background: colors.secondary, color: colors.light }}
              icon={<FlaskConical className="w-5 h-5" />}
            >
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1">
                  Iraq North Oil Commission
                </h3>
                <h4 className="text-lg opacity-90 mb-2">Oil Spill Cleanup</h4>
                <p className="text-teal-50">
                  Commissioned by North Oil in Iraq to develop reactor to clear
                  desert oil spills.
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: colors.neutral,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.75rem",
              }}
              date="1998 - 2010"
              dateClassName="text-gray-600 font-semibold"
              iconStyle={{ background: colors.neutral, color: colors.text }}
              icon={<Atom className="w-5 h-5" />}
            >
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1 text-gray-600">
                  Early CASO Reactor Development
                </h3>
                <h4 className="text-lg opacity-90 mb-2 text-gray-600">
                  Technology Evolution
                </h4>
                <p className="text-gray-600">
                  Early development of CASO reactor technology as a 600kW
                  reactor, leading to current 1.6MW model.
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: colors.neutral, color: colors.text }}
              icon={<StarIcon className="w-5 h-5" />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
