import Head from 'next/head';
import Events from '../components/event/Events';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';

function About() {
  return (
    <Screen>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Code HIves or GDSC and Coding Club is the official club of GEC PATAN that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="Code Hives, ReactJS, NextJS, GEC Patan, Patan ,Code Hives,Programming tutorials, Web development,Software development,Coding resources,Programming languages,JavaScript,Python,HTML-CSS,Java,C++,Front-end development,Back-end development,Frameworks,Coding community,Coding tips,Code snippets,Debugging techniques."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property= "og:title" content="CodeHives GECP" />

      </Head>
      <section className="container-70 pt-28 md:pt-16 sm:pt-12">
        <div className="hidden">
          <p className="px-6">
          <span> Code Hives</span>
              began with a mindset of encouraging beginner hackers to build
              unique projects regardless of the tech or field; the only focus
              was to create something meaningful and enjoy building while also
              solving the shared struggles of our surroundings.
              <br />
              <br />
              The community encourages
              <span>
                Inclusion and Diversity</span>
              at its core and has various events and happenings around the same
              as well to keep hackers engaged in a meaningful way. All in all,
              we want hackers to not just participate but experience a a good use of git and github
              in a true sense.
            
          </p>
          <h2 className="text-xl mt-6 mb-3 px-10">- Dinesh Prabhakar</h2>
          <h4 className="pl-12">Prof. In-Charge, Information Technology</h4>
        </div>
        <div className="mt-12 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="About Code Hives" />
          <div className="mt-6">
            <p className="text-lg">
            <b>Code Hives  </b> 
                 began with a mindset of encouraging beginner hackers to build
              unique projects regardless of the tech or field; the only focus
              was to create something meaningful and enjoy building while also
              solving the shared struggles of our surroundings.
              <br />
              <br />
              The community encourages<span>
                Inclusion and Diversity</span>
              at its core and has various events and happenings around the same
              as well to keep hackers engaged in a meaningful way. All in all,
              we want hackers to not just participate but experience a a good use of git and github
              in a true sense.
            
            </p>
          </div>
        </div>
      

        <Events />
      </section>
    </Screen>
  );
}

export default About;
