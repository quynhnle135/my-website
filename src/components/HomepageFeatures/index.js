import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Me',
    description: (
      <>
        - Hi, I'm Quinn Le, a graduate with a B.S. in Computer Science from UoPeople. I love technology and solving problems. I'm excited to use my skills in modern development frameworks to help tackle challenges in the tech world. I'm looking for a team where I can keep growing and make a real difference. <br/>
        - This website is not only a personal technology archive, chronicling my evolution as a software engineer, but also a reflective space where I store and revisit the tech articles and research that have influenced my journey <br/>
        - You can view my projects <b><i><a href="docs/intro">here</a>.</i></b>
        <br/>
      </>
    ),
  },
  {
    title: "What's Inside?",
    description: (
      <>
        <b>1. Book Reviews:</b> Join me on a literary journey through the tech world. In this section, I share my personal thoughts on various tech books I've read and coded along with. Whether you're looking for inspiration or technical guidance, these reviews provide a comprehensive look at each book's content and practical applications. <br/>

        <b>2. Journals</b>: Follow my day-to-day coding adventure! My journals are updated daily to track my progress in the coding landscape. In each entry, I discuss what I learned, lingering questions, challenges I faced, and snippets of code I wrote. It's a raw, unfiltered look at the life of a coder. <br/>

        <b>3. Research Topics</b>: This is where my curiosity meets exploration. Here, I compile notes from my research conducted online as I navigate the programming world. It's a collection of discoveries, theories, and insights that have shaped my understanding of various programming concepts. <br/>

        <b>4. Tech Blogs</b>: Discover a curated archive of amazing tech blog sources and articles. After reading each one, I provide summaries and key takeaways, making it easier for you to absorb the essence of these insightful resources. It's a goldmine for anyone interested in the latest tech trends and discussions. <br/>

       <b>5. Troubleshooting</b>: Encounter the challenges and triumphs of coding projects. In this section, I document the issues I've faced during coding and project development, along with the strategies I employed to overcome them. It's a practical guide filled with real-world problem-solving techniques. <br/>
      </>
    ),
  },
];

function Feature({title, description }) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
