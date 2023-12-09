import Card from "./Card.component";

const Work = () => {
  const workList = [
    {
      title: "Sleepiest",
      description: "iOS app literature adaptation",
      link: "https://sleepiest.com",
    },
    {
      title: "The International Platform on Sport and Development",
      description: "Technical consultant/content management",
      link: "https://sportanddev.org/about-us/our-team",
    },
    {
      title: "Kaspersky/LogrusIT",
      description: "Cybersecurity marketing copy",
      link: "https://docs.google.com/document/d/114UaQVx4eTB-OsWYptu28hATnOZw6HG8U_0lGQeIq5M/edit?usp=sharing",
    },
    {
      title: "VoiceMap",
      description: "GPS audio tour script writing ",
      link: "https://voicemap.me/theatreland",
    },
    {
      title: "The Playground",
      description: "Press officer",
      link: "https://theplayground.co.uk/",
    },
    {
      title: "How I Make Music podcast",
      description: "Podcast show creator and host",
      link: "https://howimakemusic.com",
    },
    {
      title: "WeGoTrip",
      description: "GPS audio tour script writing",
      link: "https://wegotrip.com/boston-4930956-d275/boston-downtown-explore-the-citys-highlights-and-hidden-gems-p4304/",
    },
    {
      title: "John Bartmann Music",
      description: "YouTube channel and Creative Commons music library",
      link: "https://youtube.com/johnbartmannmusic",
    },
    {
      title: "Immersive Podcasting",
      description: "Educational podcasting guidebook",
      link: "https://gum.co/HIKdu",
    },
    {
      title: "Think, African",
      description: "Podcast script editing",
      link: "https://za.boell.org/en/2021/05/25/think-african",
    },
    {
      title: "One Night In Snake Park",
      description: "Podcast script editing",
      link: "https://onenightinsnakepark.com",
    },
    {
      title: "Alibi",
      description: "Podcast script editing",
      link: "https://www.volume.africa/alibi",
    },
    {
      title: "Saw and Sine",
      description: "Blog content writing",
      link: "https://sawandsine.co.uk/blog",
    },
    {
      title: "DJ Courses Online",
      description: "Blog content writing",
      link: "https://djcoursesonline.com/dj-blog",
    },
    {
      title: "Music Industry Online",
      description: "Blog content writing",
      link: "https://www.pegheadnation.com/learning-lab/advice/keep-going/",
    },
    {
      title: "Pravda",
      description: "Music production and performance alias",
      link: "https://pravdaofficial.com/",
    },
    {
      title: "Peghead Nation",
      description: "Blog content writing",
      link: "https://www.pegheadnation.com/learning-lab/advice/keep-going/",
    },
  ];

  return (
    <div className="single-page-container">
      <h1>WORK</h1>
      <h3>A wide range of creative work for teams, brands and people.</h3>
      {workList.map((job) => {
        return Card(job.title, job.description, job.link);
      })}

      <br />
    </div>
  );
};

export default Work;
