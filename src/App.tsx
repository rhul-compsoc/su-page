import React, { useState } from 'react';
import '@/index.css';
import { Link } from 'react-router-dom';
import { Section } from '@/components/Section';
import { Buttons } from '@/components/Buttons';
import { Button } from '@/components/Button';
import ClickyButton from '@/components/ClickyButton';

const App = () => {
  const [calendarDownloaded, setCalendarDownloaded] = useState(false);

  return (
    <div className="rhulcompsoc">
      <Buttons>
        <Button
          className="border-compsoc-red bg-compsoc-red text-white hover:bg-transparent hover:text-compsoc-red"
          href="https://computingsociety.co.uk/"
          target="_blank"
        >
          computingsociety.co.uk
        </Button>
        <Button
          className="border-compsoc-red bg-transparent text-compsoc-red hover:bg-compsoc-red hover:text-white"
          href="mailto:hello@computingsociety.co.uk"
        >
          E-mail Us!
        </Button>
        <Button
          className="border-discord-blurple bg-discord-blurple text-white hover:bg-transparent hover:text-discord-blurple"
          href="https://dc.cmpsc.uk/"
          target="_blank"
        >
          Join Discord
        </Button>
      </Buttons>

      <Section title="Events" tag="Our upcoming events">
        <iframe
          src="https://outlook.office365.com/owa/calendar/8ec001cdff644d9d8e0e63646602a521@computingsociety.co.uk/339d3bf686dc471e9fcbcfd8fc5448497927031125383392704/calendar.html"
          width="100%"
          height="500"
          frameBorder="0"
          title="Calendar"
          className="mt-3"
        />
      </Section>

      <ClickyButton
        text="Save The Calendar!"
        url="https://outlook.office.com/calendar/addcalendar?url=https%3A%2F%2Foutlook.office365.com%2Fowa%2Fcalendar%2F8ec001cdff644d9d8e0e63646602a521%40computingsociety.co.uk%2F339d3bf686dc471e9fcbcfd8fc5448497927031125383392704%2Fcalendar.ics&name=Computing%20Society%20Events!"
        clickAction={() => {
          setCalendarDownloaded(true);
        }}
        className={calendarDownloaded ? 'display-none w-0 h-0 cursor-default' : ''}
      />
      <hr />
      <Section title="About Us" tag="What we do">
        <p>
          CompSoc exists to create a setting where like-minded computing
          enthusiasts can interact and socialise. Our core aim is to make the
          student experience more enjoyable for those with any interest in
          Computing and Computer Science. We run and arrange events such as
          beginner workshops, Capture The Flag events, Hackathons, and social
          events. With a keen openness to collaborating with other societies and
          external companies in order to increase the diversity of the
          activities that we offer.
        </p>
        <p>
          We support the academics of not only Computer Science, but also
          Physics, Economics, and any other subjects that have a computing
          component. Our support includes hosting workshops in such topics as
          Java, Python, C, and computing-related mathematics, running drop-in
          sessions for questions, and much more. As well as supplementary talks
          from students, we also invite guests from industry to host talks and
          events that allow students to learn and ask questions about graduate
          schemes, jobs, and other opportunities.
        </p>
        <p>
          As well as academic events, we host a number of socials for our
          members to get together. From our weekly Friday pub social, cliché
          Minecraft survival games and other gaming activities, events on our
          discord server, to getting involved with SU club nights with 80s 90s
          00s. There is always some type of social to get our members involved.
        </p>
      </Section>
      <hr />
      <Section
        title="Membership"
        tag="Our members always come first. We aim to provide great experiences for everyone."
      >
        <p>
          We have a standard membership fee of £8, which goes directly to
          funding the events and activities we run throughout the year. By
          purchasing a member you not only support the events we run but also
          guarantees you will be able to attend all of the events we run, along
          with picking up the merchandise we give out throughout the year.
        </p>
      </Section>
      <hr />
      <Section
        title="Contact Us"
        tag="Talk to us with ideas, questions and comments"
      >
        <p>
          There are numerous ways to contact us. For general enquiries to the
          committee you can email us at hello@computingsociety.co.uk.
        </p>
        <p>
          If you want to join our online Discord community and talk to our
          members of past and present, you can join it using the link below.
        </p>
        <ul className="list-inside list-disc text-blue-600 underline underline-offset-1">
          <li>
            <a target="_blank" href="https://dc.cmpsc.uk/" rel="noreferrer">
              Discord
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/rhul-compsoc"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/rhulcompsoc"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/rhulcompsoc"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a href="mailto:hello@computingsociety.co.uk">Email</a>
          </li>
        </ul>
      </Section>
      <hr />
      <Section
        title="Support"
        tag="All of what we do is generously supported by our partners in industry."
      >
        <p>Interested in supporting us?</p>
        <Button
          className="border-compsoc-red bg-compsoc-red text-white hover:bg-transparent hover:text-compsoc-red"
          href="https://cmpsc.uk/sponsor"
          target="_blank"
        >
          Find out more
        </Button>
      </Section>
      <hr />
      <Section>
        <a href="https://github.com/rhul-compsoc/su-page">
          made with ❤ in Egham
        </a>
      </Section>
    </div>
  );
};

export default App;
