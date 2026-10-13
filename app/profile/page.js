import './profile.css';
export const metadata={title:'vinhweb | Profile',description:'A sample developer profile.'};
export default function Profile(){return <main className="profile">
<header><div className="avatar" aria-hidden="true">V</div><p className="eyebrow">DEVELOPER PROFILE</p><h1>vinhweb<span>.</span></h1><p className="intro">Full-stack developer &amp; curious builder.</p><p className="note">Sample profile · Fictional details for now</p></header>
<section><h2>A little about me</h2><p>I build thoughtful web experiences. Currently exploring Next.js, MongoDB, and the details that make great products.</p></section>
<section><h2>My toolkit</h2><div className="tags">{['JavaScript','React','Next.js','MongoDB','CSS'].map(s=><span key={s}>{s}</span>)}</div></section>
<section><h2>Selected projects</h2><article><h3>Personal portfolio</h3><p>A simple home for creative work, experiments, and ideas.</p><small>Sample project · Next.js / CSS</small></article></section>
<footer>Always learning. Always building.</footer></main>}
