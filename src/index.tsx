import ReactDOM from "react-dom";
import React from "react";
import { Helmet } from "react-helmet";
import { Section } from "./components/Section";
import { Buttons } from "./components/Buttons";
import { Button } from "./components/Button";

class Component extends React.Component {
  render() {
    return (
      <div className="rhulcompsoc">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <Buttons>
          <Button
            className="rhulcompsoc-button-red"
            href="https://computingsociety.co.uk/"
            target="_blank"
          >
            computingsociety.co.uk
          </Button>
          <Button
            className="rhulcompsoc-button-white"
            href="mailto:hello@computingsociety.co.uk"
          >
            E-mail Us!
          </Button>
          <Button
            className="rhulcompsoc-button-discord"
            href="https://dc.cmpsc.uk/"
            target="_blank"
          >
            Join Discord
          </Button>
        </Buttons>

        <Section className="rhulcompsoc-section-hackaway">
          <img className="rhulcompsoc-hackaway-logo" src="https://su.rhul.ac.uk/asset/Organisation/7306/rh-white-montserrat-v5.svg" />
          <p>
            Windsor Building, Royal Holloway, University of London<br />
            Saturday 5th February - Sunday 6th February 2022
          </p>
          <Buttons>
            <Button className="rhulcompsoc-button-hackaway" href="https://royalhackaway.com/">
              Royal Hackaway v5
            </Button>
          </Buttons>
        </Section>
        <Section title="Events" tag="Our upcoming events">
          <iframe
            src="https://outlook.office365.com/owa/calendar/c7e1f5e07db149d6aba796592271f23b@computingsociety.co.uk/4a31afa127d440e18dcf3a5a529f0b492292299079619492672/calendar.html"
            width="100%"
            height="800"
            frameBorder="0"
          ></iframe>
        </Section>
        <hr />
        <Section title="About Us" tag="What we do">
          <p>
            CompSoc exists to create a setting where like-minded computing
            enthusiasts can interact and socialise. Our core aim is to make the
            student experience more enjoyable for those with any interest in
            Computing and Computer Science. We run and arrange events such as
            beginner workshops, Capture The Flag events, Hackathons, and social
            events. With a keen openness to collaborating with other societies
            and external companies in order to increase the diversity of the
            activities that we offer.
          </p>
          <p>
            We support the academics of not only Computer Science, but also
            Physics, Economics, and any other subjects that have a computing
            component. Our support includes hosting workshops in such topics as
            Java, Python, C, and computing-related mathematics, running drop-in
            sessions for questions, and much more. As well as supplementary
            talks from students, we also invite guests from industry to host
            talks and events that allow students to learn and ask questions
            about graduate schemes, jobs, and other opportunities.
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
            guarantees you will be able to attend all of the events we run,
            along with picking up the merchandise we give out throughout the
            year.
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
          <ul>
            <li>
              <a target="_blank" href="https://dc.cmpsc.uk/">Discord</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/rhul-compsoc">GitHub</a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/rhulcompsoc">Facebook</a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/rhulcompsoc">Twitter</a>
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
            className="rhulcompsoc-button-red"
            href="https://cmpsc.uk/sponsor"
            target="_blank"
          >
            Find out more
          </Button>
        </Section>
      </div>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("compsoc"));

const emailField = document.getElementById(
  "ctl00_ctl39_rptContactInfo_ctl00_hlEmailAddress"
) as HTMLAnchorElement;

if (emailField) {
  emailField.innerText = "hello@computingsociety.co.uk";
  emailField.href = "mailto:hello@computingsociety.co.uk";
}
