import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Me',
    description: (
      <>
        My name is Quinn Le and I am a proud graduate from UoPeople with a major in Computer Science. With a strong passion for technology and problem-solving, I aim to contribute innovative solutions to complex challenges in the tech industry. Leveraging my knowledge of modern development frameworks, I'm eager to join a team where I can continue to grow and make a meaningful impact.
        <br/>
        <br/>
        You can view my projects <a href="docs/intro">here</a>.
        <br/>
      </>
    ),
  },
  {
    title: "What's Inside?",
    description: (
      <>
        - <b>Daily Learnings</b>: Every entry is a candid reflection of the day's learning experiences, from mastering new algorithms to tackling complex coding problems. It's an honest account of the progress I make and the concepts I grapple with. <br/>
        <br/>
        - <b>Project Chronicles</b>: I document the development of my projects from mere ideas to fully functioning applications. These stories include moments of epiphany, instances of stumbling blocks, and the ultimate joy of creation. <br/>
        <br/>
        - <b>LeetCode Grind</b>: A special section dedicated to my preparations for the tech industry job market. It's a compilation of my attempts, solutions, and learnings as I solve LeetCode challenges, improving my coding skills and preparing for technical interviews. <br/>
        <br/>
        - <b>Reflections and Improvements</b>: This journal is also a space for introspection. I reflect on my approaches, strategies, and learning methods, assessing what works and where I need to pivot to enhance my understanding and efficiency.<br/>
        <br/>
      </>
    ),
  },
  {
    title: "Why Share My Journey?",
    description: (
      <>
        I believe in the power of sharing knowledge and experiences. By documenting my journey, I hope to: <br/>
          <br/>
          - <b>Track My Growth</b>: Seeing how far I've come is a powerful motivator. It's easy to forget yesterday's achievements; writing them down makes them tangible. <br/>
          <br/>
          - <b>Cultivate Discipline</b>: The commitment to daily updates encourages a consistent and disciplined approach to learning and problem-solving. <br/>
          <br/>
          - <b>Build a Community</b>: I invite fellow learners to engage, share their thoughts, and offer feedback. Together, we can learn and grow. <br/>
          <br/>
          - <b>Inspire Others</b>: If my journey can light the path for someone else, or provide the spark that someone needs to start their own journey, then sharing these experiences is all the more worthwhile. <br/>


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
