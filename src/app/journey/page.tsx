import React from "react";
import "./timeline.css";
import { getJobs } from "../../lib/journey";
import { formatDateString } from "../../utils/dateFormat";
import { Journey } from "../../types/journey";

const TimelineComponent = async () => {
  const jobs = await getJobs();

  return (
    <>
      <div className="container-timeline">
        <div className="timeline">
          <ul>
            {jobs &&
              jobs.map((job: Journey) => (
                <li>
                  <div className="timeline-content">
                    <h3 className="date">{formatDateString(job.startDate)} to {formatDateString(job.endDate)}</h3>
                    <h1>{job.title}</h1>
                    <h1>{job.company}</h1>
                    <p>
                      {job.description}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TimelineComponent;
