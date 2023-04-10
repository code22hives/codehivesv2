import { useEffect } from 'react';
import Head from 'next/head';

import Screen from '@/components/screen/Screen';
import Button from '@/components/button/Button';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import styles from '@/styles/events.module.css';
import AnimatedScrollButton from '@/components/AnimatedScrollButton';
import EventsData from '../lib/data/EventsData';

function Events() {
  useEffect(() => {
    const handleClipping = () => {
      if (document.documentElement.clientWidth > 300) {
        const allElements = [
          ...document.querySelectorAll(`.${styles.contentWrapper}`),
        ];
        allElements.forEach((element) => {
          const circle =
            element.previousSibling.previousSibling.firstChild.firstChild
              .firstChild;
          const currentImageBox = element.previousSibling;
          const boundingBox = element.getBoundingClientRect();
          const clippedBoxHeight = boundingBox.height;
          const windowHeight = document.documentElement.clientHeight;
          const distanceFromTop = boundingBox.top + clippedBoxHeight / 13;
          let percentageOfElementVisible;
          let opacityRelativeToPosition;

          if (distanceFromTop > windowHeight) {
            percentageOfElementVisible = 0;
            opacityRelativeToPosition = 0;
          } else if (distanceFromTop > 0) {
            percentageOfElementVisible =
              (windowHeight - distanceFromTop) / clippedBoxHeight;
            // Setting the upper limit of percentage to 1
            percentageOfElementVisible = Math.min(
              percentageOfElementVisible,
              1
            );
            opacityRelativeToPosition = 1;
          } else {
            percentageOfElementVisible = 1;
          }
          if (
            element.parentNode.previousSibling &&
            percentageOfElementVisible > 0
          ) {
            const previousImageBox =
              element.parentNode.previousSibling.childNodes[1];
            previousImageBox.style.opacity = Math.max(
              1 - percentageOfElementVisible * 1.5,
              0
            );
          }
          currentImageBox.style.opacity = opacityRelativeToPosition;
          circle.setAttribute('r', percentageOfElementVisible * 1.5);
        });
      }
    };
    document.addEventListener('scroll', handleClipping);
    return () => document.removeEventListener('scroll', handleClipping);
  }, []);

  return (
    <Screen>
      <Head>
        <title>Our Events</title>
        <meta
          name="description"
          content="Code HIves or GDSC and Coding Club is the official club of BIT Sindri that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="Code Hives, ReactJS, NextJS, GEC Patan, Patan ,Code Hives,Programming tutorials, Web development,Software development,Coding resources,Programming languages,JavaScript,Python,HTML-CSS,Java,C++,Front-end development,Back-end development,Frameworks,Coding community,Coding tips,Code snippets,Debugging techniques."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property= "og:title" content="CodeHives GECP" />

      </Head>
      
       <div>
        <div className="text-center mt-10 mb-8 sm:my-8">
          <div className="flex flex-col justify-between h-[calc(100vh-100px-3rem)] items-center sm:h-[calc(90vh-100px-1rem)]">
            <BottomGlitter text="Our Events" />
            <AnimatedScrollButton
              onClick={() =>
                document.getElementById('scrolled-to').scrollIntoView()
              }
            />
          </div>
        </div>

        <div className={styles.wrapper} id="scrolled-to">
          {EventsData.map(({   name, description,  image, link,venue,date,time }, index) => (
            <EventBox
                name={  name}
              description={description}
              src={image}
              link={link}
              venue={venue}
              date={date}
              time={time}
              id={`event-${index}`}
              key={  name}
            />
          ))}
        </div>
      </div>
    </Screen>
  );
}

function EventBox({ name, description, src, link,venue,date,time, id }) {
  return (
    <div className="contents lg:grid lg:gap-8 lg:justify-items-center">
      <svg width="0" height="0">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            <circle
              cx="0.5"
              cy="1.2"
              r="0"
              transform="translate(0.5 1.2) scale(0.8806584362139918 1) translate(-0.5 -1.2)"
            />
          </clipPath>
        </defs>
      </svg>

      <div className={styles.banner}>
        <div
          className="relative w-full h-full"
          style={{ clipPath: `url(#${id})` }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 lg:static">
            <img
              src={src}
              alt="abc"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h2 className="text-5xl font-bold sm:text-3xl">{  name}</h2>
          <p className="text-xl leading-normal sm:text-lg sm:font-light">
            {description}
          </p>
          <p className="text-s leading-normal sm:text-s sm:font-light">
            {venue}
          </p>
          <p className="text-s leading-normal sm:text-s sm:font-light">
            {date}
          </p>
          <p className="text-s leading-normal sm:text-s sm:font-light">
            {time}
          </p>  
          <a
            href={link}
            target="_blank"
            className="flex w-[fit-content] rounded-full"
            rel="noreferrer"
          >
             
          <br />
            <Button>
              <span className="z-150 block">View More</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Events;
