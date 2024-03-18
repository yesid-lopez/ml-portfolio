import { getJobs } from "../../lib/journey";
import { Journey } from "../../types/journey";
import { formatDateString } from "../../utils/dateFormat";
import { JourneyTitle } from "./journey-title";
import "./timeline.css";

const Page = () => {
  return (
    <>
      <div className="bg-black bg-dot-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full">
          <JourneyTitle></JourneyTitle>
          <div className="container-timeline">
            <Timeline></Timeline>
          </div>
        </div>
      </div>
    </>
  );
};

const Timeline = async () => {
  const jobs = await getJobs();

  return (
    <div className="timeline">
      <ul>
        {jobs &&
          jobs.map((job: Journey) => (
            <li key={job._id}>
              <div className="timeline-content">
                <h3 className="date">
                  {formatDateString(job.startDate)} to{" "}
                  {formatDateString(job.endDate)}
                </h3>
                <h1>{job.title}</h1>
                <h1>{job.company}</h1>
                <p>{job.description}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Page;
