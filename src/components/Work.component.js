import workJobs from "./workJobs.json";

const Work = () => {
  return (
    <div className="single-page-container">
      <h1> WORK </h1>{" "}
      <p className="center" style={{ margin: 30 }}>
        A wide range of creative work for teams, brands and people.{" "}
      </p>{" "}
      {workJobs.map((job) => {
        return (
          <div key={job.id}>
            <a href={job.link} target="_blank">
              <div className="card-container">
                <div className="card-title">
                  <h3> {job.title} </h3> <p> {job.description} </p>
                </div>
              </div>
            </a>
          </div>
        );
      })}
      <br />
    </div>
  );
};

export default Work;
