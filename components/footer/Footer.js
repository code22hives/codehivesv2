import Link from 'next/link';
import BottomGlitter from '../StyledText/BottomGlitter';
import Styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`${Styles.footer} container-70`}>
      <div className="py-12 mt-20 sm:mt-4 md:mt-12">
        <h4 className="text-2xl mb-10 pl-3">Contacts</h4>
        <BottomGlitter text="Get In Touch" />
      </div>

      <div className={Styles.linksContainer}>
        <div className="flex-2 md:flex-1">
          <div className="mb-3 flex flex-col">
            <h3 className="text-2xl">Write</h3>
            <h4 className="text-lg font-extralight">
              <a href="mailto:code.hives@gecpatan.ac.in">code.hives@gecpatan.ac.in</a>
            </h4>
          </div>
          <div className="my-3 flex flex-col">
            <h3 className="text-2xl">Meet</h3>
            <h4 className="text-lg font-extralight">
             Gecpatan,Katpur <br />
              Patan-pin <br />
Gujarat ,India
            </h4>
          </div>
        </div>
        <div className="flex-4 md:flex-1 md:mx-4 sm:mx-0 sm:mt-8">
          <h3 className="text-2xl">Other Pages</h3>
          <Link href="/events">
            <a className="pl-1 block text-lg my-1 font-extralight">Events</a>
          </Link>
          <a
            href="https://blog.hnccbits.com"
            className="pl-1 block text-lg my-1 font-extralight"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            href="https://bitsindri.ac.in"
            className="block pl-1 text-lg my-1 font-extralight"
            target="_blank"
            rel="noopener noreferrer"
          >
            BIT Sindri
          </a>
        </div>
        <div className="flex-4 md:flex-1 sm:mt-8">
          <h3 className="text-2xl">Get Help</h3>
          <a
            href="https://docs.google.com/forms/d/1eOZsO1X6qmqyS48nEw43RJnOhwEBuAvXpXZXMtOOLaY/closedform"
            className="block pl-1 text-lg my-1 font-extralight"
            target="_blank"
            rel="noreferrer"
          >
            Join Us
          </a>
          <Link href="/faqs">
            <a className="block pl-1 text-lg my-1 font-extralight">FAQs</a>
          </Link>
          <Link href="/contact">
            <a className="pl-1 block text-lg my-1 font-extralight">
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      <div className={Styles.copyrightBottom}>
        <h6>
          © {new Date().getFullYear()} Code HIves. All rights
          reserved.
        </h6>

        <h6 className="flex items-center">
          Crafted with&nbsp;<span className="text-2xl">♥</span>&nbsp;by Hiren Lalani.
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
