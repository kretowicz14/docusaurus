import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SponsorInfo from '../components/SponsorInfo';
import Link from '@docusaurus/Link';
import IconExternalLink from '@theme/Icon/ExternalLink';

function Header({ sponsorLink }) {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <span className={clsx(styles.bonePart)}>bone</span>
          <span className={clsx(styles.ioPart)}>IO</span>
          {/* {siteConfig.title} */}
        </h1>
        <p className="hero__subtitle">
          Sponsor Open Source Hardware and Software
        </p>
        <p>
          boneIO is an Open HSP initiative where everything is open on GPL-3.0
          License. We want to make great product for open source minded people.
          Your sponsorship will enable boneIO team to spend even more time on
          this project, make more prototypes available and in the end make final
          product with all features you'd imagine and all safety certificates
          required in Europe and United States.
        </p>
        <Link
          className="button button--secondary button--lg"
          href={sponsorLink}
        >
          Sponsor us! <IconExternalLink />
        </Link>
      </div>
    </header>
  );
}

const SponsorList = () => {
  return <></>;
};

export default function Sponsor() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Sponsor ${siteConfig.title}`}>
      <Header sponsorLink={siteConfig.customFields.sponsorLink} />
      <main>
        <SponsorInfo />
        <SponsorList />
      </main>
    </Layout>
  );
}
