import React from 'react';
import clsx from 'clsx';
import styles from './SponsorInfo.module.css';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import IconExternalLink from '@theme/Icon/ExternalLink';

import { type User, Users } from '../data/sponsors';

function SponsorUser({ user }: { user: User }) {
  return (
    <li key={user.title} className="card shadow--md">
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <Image img={user.image_url} alt={user.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <h4 className={styles.showcaseCardTitle}>
            <Link to={user.github} className={styles.showcaseCardLink}>
              {user.title}
              <IconExternalLink />
            </Link>
          </h4>
        </div>
      </div>
    </li>
  );
}

// function SponsorUser({ image_url, title, github }) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         {image_url && (
//           <img
//             className="featureSvg"
//             alt={title}
//             src={image_url}
//             height="80%"
//           />
//         )}
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>
//           <a href={github} alt={title}>
//             {title}
//           </a>
//         </h3>
//       </div>
//     </div>
//   );
// }

export default function SponsorInfo() {
  return (
    <section className={styles.features}>
      <div
        className="container"
        style={{
          textAlign: 'center',
        }}
      >
        <p className="hero__subtitle">Who sponsors boneIO?</p>
        <p
          style={{
            fontWeight: 'bold',
          }}
        >
          We're very grateful to all our sponsor. With their sponsorship we're
          able to develop our software and hardware! THANK YOU!
        </p>
        <div className={clsx(styles.row)}>
          {Users.map((props, idx) => (
            <SponsorUser key={idx} user={props} />
          ))}
        </div>
      </div>
    </section>
  );
}
