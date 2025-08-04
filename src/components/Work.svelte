<script lang="js">
  import Project from "./Project.svelte";
  import weatherAppImage from "../assets/weather-app.png";
  import worldClockImage from "../assets/world-clock.png";
  import aiPoetImage from "../assets/ai-poet.png";
</script>

<section
  id="work"
  class="flex flex-col px-2.5 xs:px-5 md:px-8 lg:px-32 xl:px-48 scroll-m-10 3xs:scroll-m-12 md:scroll-m-14 mb-12"
>
  <h3 class="pt-4 pb-4 pl-4 text-3xl font-semibold h-15">// work</h3>
  <section class="grid grid-cols-2 2xl:grid-cols-3 gap-8">
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
      featured={true}
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
  .grid {
    background-image: linear-gradient(
        var(--color-aquamarine-muted) 0.5px,
        transparent 0.5px,
        transparent calc(100% - 0.5px),
        var(--color-aquamarine-muted) calc(100% - 0.5px)
      ),
      linear-gradient(
        90deg,
        var(--color-aquamarine-muted) 0.5px,
        transparent 0.5px,
        transparent calc(100% - 0.5px),
        var(--color-aquamarine-muted) calc(100% - 0.5px)
      );
    background-size: 16.666666666666668% 16.666666666666668%;
    border: 0.5px solid var(--color-aquamarine-muted);
  }
  /* :global(.projects > .project) {
    border-right: 4px solid #000;
  } */
</style>
