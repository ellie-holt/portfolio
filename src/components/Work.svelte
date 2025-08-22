<!-- FILE: src/components/Work.svelte -->
<script lang="js">
  import Project from "./Project.svelte";
  import weatherAppImage from "../assets/weather-app-square.png";
  import worldClockImage from "../assets/world-clock-square.png";
  import aiPoetImage from "../assets/ai-poet-square.png";
</script>

<section
  id="work"
  class="flex flex-col mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 scroll-m-15 3xs:scroll-m-14 2xs:scroll-m-0 divider divider-rail"
  style=" --media-h: clamp(260px, 28vw, 380px);"
>
  <!-- subheading band -->
  <div class="h-[calc(var(--spacing-banner)_*_2)] !bg-aqua-100 flex items-end">
    <h3 class="md:py-4 py-3 px-6 md:text-3xl text-2xl font-semibold">
      // work
    </h3>
  </div>

  <section class="grid lg:grid-cols-3 grid-cols-1 divider-gap">
    <Project
      project={{
        title: "Weather App",
        description:
          "A responsive, accessible weather app with dynamic theming and geolocation support.",
        link: "https://herecomestherainagain.netlify.app/",
        stack: ["React", "Tailwind", "SCSS", "OpenWeatherMap API"],
      }}
      image={{ src: weatherAppImage, alt: "Weather App" }}
      accent="var(--color-tang-500)"
    />

    <Project
      project={{
        title: "World Clock",
        description:
          "A world clock with responsive CSS Grid and time-of-day theming.",
        link: "https://findthetime.netlify.app/",
        stack: ["HTML/CSS", "JavaScript", "Moment.js"],
      }}
      image={{ src: worldClockImage, alt: "World Clock" }}
      accent="var(--color-aqua-500)"
    />

    <Project
      project={{
        title: "AI Poet",
        description:
          "A minimalist app that generates short poems from prompts via an AI API.",
        link: "https://aipoet.netlify.app/",
        stack: ["HTML/CSS", "JavaScript", "SheCodes AI API"],
      }}
      image={{ src: aiPoetImage, alt: "AI Poet" }}
      accent="var(--color-azure-500)"
    />
  </section>

  <!-- Footer rail -->
  <div class="">
    <div class="bg-white flex items-center justify-between px-6 py-4">
      <span class="font-mono text-sm">// more on GitHub</span>
      <a
        href="https://github.com/ellie-holt"
        target="_blank"
        rel="noopener noreferrer"
        class="underline decoration-1 hover:decoration-transparent transition-all font-mono"
      >
        browse repos →
      </a>
    </div>
  </div>
</section>
