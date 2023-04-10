import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import { menter,Director, Core,Team2k22 } from '../lib/data/TeamData';

function Teams() {
  return (
    <Screen>
      <Head>
        <title>Our Amazing Team ✨</title>
        <meta
          name="description"
          content="Teams of Code Hives (git-github & Coding Club), Gec Patan, Patan"
        />
        <meta
          name="keywords"
          content="Code Hives, ReactJS, NextJS, GEC Patan, Patan ,Code Hives,Programming tutorials, Web development,Software development,Coding resources,Programming languages,JavaScript,Python,HTML-CSS,Java,C++,Front-end development,Back-end development,Frameworks,Coding community,Coding tips,Code snippets,Debugging techniques."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property= "og:title" content="CodeHives GECP" />

      </Head>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <BottomGlitter text="Our Team" />
          <h3 className="text-lg mt-8">
            The strength of the team is each individual member. The strength of
            each member is the team.
            <br />- Phil Jackson
          </h3>
        </div>
        <h2 className={Styles.postHead}>Mentor</h2>
        <div className={Styles.cardContainer}>
          {menter.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
              />
            );
          })}
        </div>

       
        <h2 className={Styles.postHead}>Mentor</h2>
        <div className={Styles.cardContainer}>
          {Director.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
                socials={item.url}
              />

            );
          })}
        </div>
        
        <h2 className={Styles.postHead}>Core Team</h2>
        <div className={Styles.cardContainer}>
          {Core.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.pos}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
                socials={item.url}
              />

            );
          })}
        </div>
          
        <h2 className={Styles.postHead}> Team 2K23</h2>
        <div className={Styles.cardContainer}>
          {Team2k22.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.pos}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
                socials={item.url}
              />

            );
          })}
        </div>

      </section>
    </Screen>
  );
}

export default Teams;
