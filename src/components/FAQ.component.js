import { useState, useEffect } from "react";
import Faq from "react-faq-component";
import "../styles/App.styles.css";

const data = {
  rows: [
    {
      title:
        "If I use your music, will I get flagged for copyright on YouTube?",
      content:
        "Not if you comply with the terms of the Creative Commons license. If you credit me correctly, you won't get flagged. Most of my releases are CC-BY.",
    },
    {
      title:
        "Can I use your music for free in my non-commercial video, film, promotional video, podcast, game, app, branded video on YouTube, TikTok, Instagram, Facebook or anywhere else online?",
      content:
        "Yes, when you add this link to the description section of your production: Music by John Bartmann https://youtube.com/johnbartmannmusic",
    },
    {
      title: "Can I monetize my YouTube videos?",
      content:
        "Yes, when you add this link to the description section of your production: Music by John Bartmann https://youtube.com/johnbartmannmusic",
    },
    {
      title: "When can I NOT use your music for free?",
      content:
        "When you're being hired to produce something with it. In that case, you'll need to get a license. View the ratecard.",
    },
    {
      title:
        "Do I need to ask pay to use your music in my commercial or sponsored projects?",
      content:
        "Yes, and I'll send you a license document and official email within 24 hours of payment. View the ratecard.",
    },
    {
      title: "What is the license type of your music?",
      content:
        "Creative Commons CC-BY 4.0 or public domain. Do credit me when you use them in your productions.",
    },
    {
      title: "Do you own the rights to reproduce this music?",
      content:
        "Yes. All the music was written and recorded by me or someone I’ve hired.",
    },
    {
      title: "Can I resell your music?",
      content: "No.",
    },
    {
      title: "Can I add your music to my own music-related website?",
      content:
        "Yes, when you add this link to the description section of every track on your website: Music by John Bartmann https://youtube.com/johnbartmannmusic",
    },
    {
      title: "If I want to credit you, how exactly do I do it?",
      content:
        "Add this link to the description section of your production: Music by John Bartmann https://youtube.com/johnbartmannmusic",
    },
    {
      title: "Do I need to credit you if I purchase the music?",
      content:
        "No. If you have paid and received a copyright notification, contact me with the email address you used during the paid download and I'll whitelist you.",
    },
    {
      title: "How do I download MIDI, sheet music or MusicXML?",
      content: "Contact me directly for any of the above.",
    },
    {
      title: "Am I able to re-use the music multiple times?",
      content:
        "Yes, when you add this link to the description section of every episode your production: https://youtube.com/johnbartmannmusic",
    },
    {
      title:
        "Can I please have a written license documentation with my purchase?",
      content: "Yes. Contact me to acquire your license.",
    },
    {
      title: "Am I able to specify a license holder other than myself?",
      content: "Yes.",
    },
    {
      title: "Can you compose new music specifically for my project?",
      content: "Sure. Contact me with a proposal to write some original music.",
    },
    {
      title: "How much do you charge to write original music?",
      content:
        "Commissions start at US$200 and depend on how urgently you need the composition, how sophisticated it needs to be and what the intended usage is. Contact me.",
    },
    {
      title: "Can I submit my own music to be published on your site?",
      content: "No",
    },
    {
      title: "How do I pay you or buy something from you?",
      content:
        "Your options are: 1. Purchase the files directly on Gumroad, Bandcamp, Patreon or wherever else you find them. You will then have unlimited access to the files. 2. Pay me directly via PayPal, Wise or bank transfer. I will send you the files in a zip folder.",
    },
    {
      title: "Am I able to download music on an iPad or iPhone?",
      content:
        "No, you’ll need to use a desktop computer, laptop or Android device.",
    },
    {
      title:
        "Can I use your music in my commercial, sponsored, promotional or otherwise licensed production?",
      content:
        "Yes, but not for free. For example, if you're making a TV show for a web streaming service, you'll need to get a license. Here's the ratecard.",
    },
    {
      title: "Can I sell or re-sell your music?",
      content:
        "No. All tracks have their own ISRC numbers, and are copyright protected for unauthorized use. For business inquiries, contact me.",
    },
    {
      title: "Can I release your music as part of my own song?",
      content: "Yes, but you can't release it on streaming services.",
    },
    {
      title: "Can I edit your music in my production?",
      content:
        "Yes. You can cut, loop, and use additional effects on any of the downloaded tracks in your production. For example, you might want to loop a track to fit the length of your video or podcast segment.",
    },
    {
      title: "I have a question you didn’t answer here",
      content: "OK, contact me directly.",
    },
  ],
};

const styles = {
  bgColor: "none",
  titleTextColor: "var(--white)",
  rowTitleColor: "var(--white)",
  // titleTextSize: '48px',
  rowTitleTextSize: "1.2rem",
  rowContentColor: "var(--color-dark)",
  rowContentTextSize: "1rem",
  // rowContentPaddingTop: '10px',
  rowTitlePaddingLeft: "1rem",
  rowContentPaddingBottom: "10px",
  // rowContentPaddingLeft: "1rem",
  // rowContentPaddingRight: '150px',
  // arrowColor: "red",
  //transitionDuration: "1s",
  // timingFunc: "ease"
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
  openOnload: 0,
};

const Contact = () => {
  return (
    <div className="single-page-container">
      <div className="hero-title">
        <h1>FAQ</h1>
        <div>
          <Faq data={data} styles={styles} config={config} />
        </div>
        <p className="cta-btn">
          <a href="https://johnbartmann.com/ratecard.pdf" target="_blank">
            View the music license ratecard
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
