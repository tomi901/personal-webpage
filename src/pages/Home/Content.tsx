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
    return <section className="about">
        <p>
            My name is Tomás <span className="small">(Or Tom)</span> Rinaldi.
        </p>
        <p>
            I'm a full stack developer, having worked on applications using different languagues like <strong>
            JavaScript</strong> and <strong>C#</strong>, using technologies like <strong>Express.js</strong>, <strong>
            React</strong>, <strong>Firebase</strong>, <strong>Unity</strong> and <strong>Unreal Engine</strong>.
        </p>

        <hr></hr>

        <h2>The Pixel</h2>
        <p>
            When I was in school, I wanted to create videogames and enter the industry. In 2016 my first complete game was <strong>
            The Pixel</strong>, a simple mobile arcade game where pixels start to attack you and you have to use touch controls to destroy them.
        </p>
        <p>
            It's my first completed game I made, with a full gameplay loop, a local high score system and a customizable pixel.
        </p>
        <YoutubeVideo src="D5NZZCRSHqw" />
        <p>
            The code was kinda rough on the edges, and probably it had a lot of spaghettification, so I decided to learn
            how to make a game from some other place rather than YouTube tutorials.
        </p>

        <hr></hr>

        <h2>Simius Labs</h2>
        <p>
            I started studying a <b>videogame development degree</b> at the <b>Mendoza University</b> and
            along with some classmates we formed <b>Simius Labs</b>, to start making games. We made a 2D platformer on mobile
            called <b>Hammerdwarf</b>, where we control a dwarf that can't jump but uses his hammer to go though the level
            using different mechanics.
        </p>
        <YoutubeVideo src="PyeTMSSJ5uM" />

        <hr></hr>

        <h2>Mimic Games</h2>
        <p>
            During my studies, I worked at Mimic Games, learning how to program in a team, how to use git and many programming patterns.

        </p>

        <hr></hr>

        <h2>Urban Explorers</h2>
        <p>
            Later, I joined with some classmates and friends to start a game about urban exploration, with the mechanics focusing
            on the lighting as a resource.
        </p>
        <YoutubeVideo src="dAmYwOt8vEY" />
        <p>
            I started leading the programming team and using some TDD programming to ensure functionality. Some stuff I made was:
        </p>
        <ul>
            <li>Inventory system</li>
            <li>Command console</li>
            <li>Postprocessing effects</li>
        </ul>

        <hr></hr>
        {/*
        <h2>Interbrain: Web apps, VR and AR</h2>
        <p>
        </p>

        <hr></hr>

        <h2>TGA</h2>
        <p>
        </p>

        <hr></hr>
        */}
        <h2>Other</h2>
        <p>
            Here are some tests I made for active ragdolls, notice how the ragdoll still looks "alive" and uses their arms
            and legs to cover before impact.
        </p>
        <div className="images-collection">
            <img src={ragdoll1pic} />
            <img src={ragdoll2pic} />
        </div>
    </section>
}

export default Content;
