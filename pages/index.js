/* eslint-disable jsx-a11y/media-has-caption */
import Notice from '@/components/Notice';
import Head from 'next/head';
import GridGallery from '../components/gridGallery/GridGallery';
import HomeAbout from '../components/homeAbout/HomeAbout';
import Screen from '../components/screen/Screen';
import TechStack from '../components/techStack/TechStack';
import Video from '../components/video/Video';

export default function Home() {
  return (
    <Screen>
      <Notice />
      <Head>
        <title>Code Hives</title>
        <meta
          name="description"
          content="Code HIves or GDSC and Coding is the official club of GEC Patan that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="Code Hives, ReactJS, NextJS, GEC Patan, Patan ,Code Hives,Programming tutorials, Web development,Software development,Coding resources,Programming languages,JavaScript,Python,HTML-CSS,Java,C++,Front-end development,Back-end development,Frameworks,Coding community,Coding tips,Code snippets,Debugging techniques."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property= "og:title" content="CodeHives GECP" />

      </Head>
      <Video />
      <HomeAbout />
      <TechStack />
      <GridGallery />
     
    </Screen>
  );
}
