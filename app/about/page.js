import styles from './about.module.css';

export const metadata = {
  title: 'About | vinhweb',
  description: 'A sample introduction to vinhweb and the ideas behind this website.',
};

export default function About() {
  return (
    <main className={styles.about}>
      <header>
        <p className="eyebrow">ABOUT VINHWEB</p>
        <h1>Small ideas.<br />Thoughtful experiences.</h1>
        <p className="intro">A space to build, learn, and share a little of what comes next.</p>
        <p className="note">Sample About page · Placeholder content</p>
      </header>

      <section className={styles.section}>
        <h2>The story</h2>
        <p>vinhweb is a personal corner of the web for creative projects and new ideas. This sample site brings together a developer profile, a few experiments, and a love of making useful things.</p>
      </section>

      <section className={styles.section}>
        <h2>What matters here</h2>
        <div className={styles.values}>
          <div className={styles.card}>
            <h3>Keep it simple</h3>
            <p>Clear words, useful features, and room to breathe.</p>
          </div>
          <div className={styles.card}>
            <h3>Stay curious</h3>
            <p>Try new ideas and learn something with every project.</p>
          </div>
          <div className={styles.card}>
            <h3>Build with care</h3>
            <p>Pay attention to the small details that make a website feel welcoming.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Take a look around</h2>
        <p>Meet the builder and explore the sample projects on the profile page.</p>
        <a className={styles.link} href="/profile">Explore the profile <span aria-hidden="true">→</span></a>
      </section>
      <footer>Always learning. Always building.</footer>
    </main>
  );
}
