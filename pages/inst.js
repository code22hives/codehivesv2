import Head from 'next/head';
import EventCard from '../components/event/EventCard';
import { EventX } from '../lib/data/EventimgData';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';
import Styles from '../components/event/event.module.css';

function inst() {
  return (
    <Screen>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Code HIves or GDSC and Coding Club is the official club of GEC Patan that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
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
      <BottomGlitter text="Our Events" />
      <div className={Styles.cardContainer}>
        {EventX.map((item, index) => {
          return (
            <EventCard
              title={item.title}
              description={item.description}
              link={item.link}
              image={item.src}
              key={`${index + item.title}`}
            />
          );
        })}
      </div>
    
      </section>
    </Screen>
  );
}

export default inst;
