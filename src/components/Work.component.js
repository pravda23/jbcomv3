import workJobs from "./workJobs.json";

const Work = () => {
  return (
    <div className="single-page-container">
      <h1>WORK</h1>
      <p className="center" style={{ margin: 30 }}>
        A wide range of creative work for teams, brands and people.
      </p>
      {workJobs.map((job) => {
        return (
          <>
            <a href={job.link} target="_blank">
              <div className="card-container" key={job.id}>
                <div className="card-title">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                </div>
              </div>
            </a>
          </>
        );
      })}

      <br />
    </div>
  );
};

export default Work;
