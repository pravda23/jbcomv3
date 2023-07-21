import Card from "./Card.component";
import { useState } from "react";

const Writing = () => {
  const jobs = [
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
      title: "WeGoTrip",
      description: "GPS audio tour script writing",
      link: "https://wegotrip.com/boston-4930956-d275/boston-downtown-explore-the-citys-highlights-and-hidden-gems-p4304/",
    },
    {
      title: "Sleepiest",
      description: "Public domain literature adaptation",
      link: "https://sleepiest.com",
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
      description: "Blog contentwriting",
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
      title: "Peghead Nation",
      description: "Blog content writing",
      link: "https://www.pegheadnation.com/learning-lab/advice/keep-going/",
    },
  ];

  return (
    <div className="single-page-container">
      <h1>WRITING</h1>
      {jobs.map((job) => {
        return Card(job.title, job.description, job.link);
      })}

      <br />
    </div>
  );
};

export default Writing;
