import YoutubeVideo from "components/YoutubeVideo";

import ragdoll1pic from "assets/about/ragdoll1.gif";
import ragdoll2pic from "assets/about/ragdoll2.gif";

export function Content() {
    const links: {
      displayName: string;
      link: string;
    }[] = [
      { displayName: "Curriculum Vitae", link: "https://firebasestorage.googleapis.com/v0/b/tom-rinaldi.appspot.com/o/public%2FWeb%2FCV.pdf?alt=media" },
      { displayName: "LinkedIn", link: "https://www.linkedin.com/in/tom%C3%A1s-rinaldi-50244a1a1/" },
      { displayName: "Page Source Code", link: "https://github.com/tomi901/personal-webpage" },
    ];
  
    return (
      <section className="App-content">
            <div className="btn-array">
                {links.map((v, i) =>
                    <a key={i} className="btn" href={v.link} rel="noreferrer" target="_blank">
                        {v.displayName}
                    </a>
                )}
            </div>
            <About />
      </section>
    );
}

function About() {
    return <div>
        <h1>About me</h1>
        <p>
            My name is Tomás <span className="small">(Or Tom)</span> Rinaldi.
        </p>
        <p>
            I'm a full stack developer, having worked on applications using different languagues like <strong>
            JavaScript</strong> and <strong>C#</strong>, using technologies like <strong>Express.js</strong>, <strong>
            React</strong>, <strong>Firebase</strong>, <strong>Unity</strong> and <strong>Unreal Engine</strong>.
        </p>
        <hr></hr>
        <p>
            In school, I wanted to create videogames and enter the industry. In 2016 my first complete game was <strong>
            The Pixel</strong>, a simple mobile arcade game where pixels start to attack you and you have to use touch controls to destroy them.
        </p>
        <YoutubeVideo src="D5NZZCRSHqw" />

        <YoutubeVideo src="dAmYwOt8vEY" />

        <div className="images-collection">
            <img src={ragdoll1pic} />
            <img src={ragdoll2pic} />
        </div>
    </div>
}

export default Content;
