const Work = () => {
  const workList = [
    {
      title: "Sleepiest",
      description: "iOS app literature adaptation",
      link: "https://sleepiest.com",
      id: 0,
    },
    {
      title: "The International Platform on Sport and Development",
      description: "Technical consultant",
      link: "https://sportanddev.org/about-us/our-team",
      id: 1,
    },
    {
      title: "Kaspersky/LogrusIT",
      description: "Cybersecurity marketing copy",
      link: "https://docs.google.com/document/d/114UaQVx4eTB-OsWYptu28hATnOZw6HG8U_0lGQeIq5M/edit?usp=sharing",
      id: 2,
    },
    {
      title: "VoiceMap",
      description: "GPS audio tour script writing ",
      link: "https://voicemap.me/theatreland",
      id: 3,
    },
    {
      title: "The Playground",
      description: "Press officer",
      link: "https://theplayground.co.uk/",
      id: 4,
    },
    {
      title: "How I Make Music podcast",
      description: "Podcast show creator and host",
      link: "https://howimakemusic.com",
      id: 5,
    },
    {
      title: "WeGoTrip",
      description: "GPS audio tour script writing",
      link: "https://wegotrip.com/boston-4930956-d275/boston-downtown-explore-the-citys-highlights-and-hidden-gems-p4304/",
      id: 6,
    },
    {
      title: "John Bartmann Music",
      description: "YouTube channel and Creative Commons music library",
      link: "https://youtube.com/johnbartmannmusic",
      id: 7,
    },
    {
      title: "Immersive Podcasting",
      description: "Educational podcasting guidebook",
      link: "https://gum.co/HIKdu",
      id: 8,
    },
    {
      title: "Think, African",
      description: "Podcast script editing",
      link: "https://za.boell.org/en/2021/05/25/think-african",
      id: 9,
    },
    {
      title: "One Night In Snake Park",
      description: "Podcast script editing",
      link: "https://onenightinsnakepark.com",
      id: 10,
    },
    {
      title: "Alibi",
      description: "Podcast script editing",
      link: "https://www.volumepodcasts.com/portfolio/alibi-laduma-high",
      id: 11,
    },
    {
      title: "Saw and Sine",
      description: "Blog content writing",
      link: "https://sawandsine.co.uk/blog",
      id: 12,
    },
    {
      title: "DJ Courses Online",
      description: "Blog content writing",
      link: "https://djcoursesonline.com/dj-blog",
      id: 13,
    },
    {
      title: "Music Industry Online",
      description: "Blog content writing",
      link: "https://www.pegheadnation.com/learning-lab/advice/keep-going/",
      id: 14,
    },
    {
      title: "Pravda",
      description: "Music production and performance alias",
      link: "https://pravdaofficial.com/",
      id: 15,
    },
    {
      title: "Peghead Nation",
      description: "Blog content writing",
      link: "https://www.pegheadnation.com/learning-lab/advice/keep-going/",
      id: 16,
    },
  ];

  return (
    <div className="single-page-container">
      <h1>WORK</h1>
      <p className="center" style={{ margin: 30 }}>
        A wide range of creative work for teams, brands and people.
      </p>
      {workList.map((job) => {
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
