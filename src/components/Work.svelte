<script lang="js">
  import Project from "./Project.svelte";
  import weatherAppImage from "../assets/weather-app.png";
  import worldClockImage from "../assets/world-clock.png";
  import aiPoetImage from "../assets/ai-poet.png";
</script>

<section
  id="work"
  class="flex flex-col mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 scroll-m-10 3xs:scroll-m-12 md:scroll-m-16 mb-12"
>
  <div class="h-16 flex items-end">
    <h3 class="md:py-4 py-3 pl-4 md:text-3xl text-2xl font-semibold">
      // work
    </h3>
  </div>
  <section class="grid grid-cols-3 2xl:grid-cols-3 gap-[1px] px-[1px]">
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
</style>
