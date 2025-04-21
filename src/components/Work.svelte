<script lang="js">
  import Subheading from "./Subheading.svelte";
  import Project from "./Project.svelte";
  import weatherAppImage from "../assets/weather-app.png";
  import worldClockImage from "../assets/world-clock.png";
  import aiPoetImage from "../assets/ai-poet.png";
</script>

<section>
  <Subheading subheading="My work" />
  <section class="projects flex justify-between border-b-4">
    <Project
      project={{
        title: "Weather App",
        description: "React weather app.",
        link: "https://herecomestherainagain.netlify.app/",
      }}
      image={{
        src: weatherAppImage,
        alt: "Weather App",
      }}
    />
    <Project
      project={{
        title: "World Clock",
        description: "World clock app.",
        link: "https://findthetime.netlify.app/",
      }}
      image={{
        src: worldClockImage,
        alt: "World Clock",
      }}
    />
    <Project
      project={{
        title: "AI Poet",
        description: "AI poet app.",
        link: "https://aipoet.netlify.app/",
      }}
      image={{
        src: aiPoetImage,
        alt: "AI Poet",
      }}
    />
  </section>
</section>

<style>
  :global(.projects > .project) {
    border-right: 4px solid #000;
  }
</style>
