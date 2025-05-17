<script lang="js">
  import Subheading from "./Subheading.svelte";
  import Project from "./Project.svelte";
  import weatherAppImage from "../assets/weather-app.png";
  import worldClockImage from "../assets/world-clock.png";
  import aiPoetImage from "../assets/ai-poet.png";
</script>

<section id="work" class="flex flex-col items-center">
  <Subheading subheading="my work" />
  <section class="flex justify-around projects gap-15 w-2/3">
    <Project
      project={{
        title: "Weather App",
        description:
          "React weather app. Fetches data from OpenWeather API. Looks up location using Geocode API.",
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
        description:
          "World clock app. Fetches data from WorldTimeAPI. Looks up location using Geocode API.",
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
        description:
          "AI poet app. Generates poems using OpenAI API. Saves poems to local storage. Lol kidding.",
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
  /* :global(.projects > .project) {
    border-right: 4px solid #000;
  } */
</style>
