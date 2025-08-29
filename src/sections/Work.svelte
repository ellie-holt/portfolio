<!-- FILE: src/sections/Work.svelte -->

<script lang="js">
  import Project from "./Project.svelte";
  import weatherAppImage from "../assets/weather-app-square.png";
  import worldClockImage from "../assets/world-clock-square.png";
  import aiPoetImage from "../assets/ai-poet-square.png";
</script>

<section
  id="work"
  aria-labelledby="work-subheading"
  class="collapse-border flex flex-col mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 scroll-m-15 3xs:scroll-m-14 2xs:scroll-m-0"
  style=" --media-h: clamp(260px, 28vw, 380px);"
>
  <!-- Section Subheading -->
  <div class="flex items-end h-[calc(var(--spacing-banner)_*_2)]">
    <h2
      id="work-subheading"
      class="subheading px-6 py-1 font-semibold text-2xl md:text-3xl"
    >
      <span aria-hidden="true">//{" "}</span>work
    </h2>
  </div>

  <!-- Projects grid -->
  <section
    aria-labelledby="project-grid-heading"
    class="grid grid-cols-1 lg:grid-cols-3"
  >
    <h3 id="project-grid-heading" class="sr-only">Selected projects</h3>
    <Project
      project={{
        title: "Weather App",
        description:
          "A responsive, accessible weather app with dynamic theming and geolocation support.",
        link: "https://herecomestherainagain.netlify.app/",
        stack: ["React", "Tailwind", "SCSS", "OpenWeatherMap API"],
      }}
      image={{ src: weatherAppImage, alt: "Weather App interface screenshot" }}
      accent="var(--color-tang-500)"
    />

    <Project
      project={{
        title: "World Clock",
        description:
          "A world clock with a responsive CSS Grid layout and time-of-day theming.",
        link: "https://findthetime.netlify.app/",
        stack: ["HTML/CSS", "JavaScript", "Moment.js"],
      }}
      image={{ src: worldClockImage, alt: "World Clock interface screenshot" }}
      accent="var(--color-aqua-500)"
    />

    <Project
      project={{
        title: "AI Poet",
        description:
          "A fun little app that generates short poems from prompts via an AI API.",
        link: "https://aipoet.netlify.app/",
        stack: ["HTML/CSS", "JavaScript", "SheCodes AI API"],
      }}
      image={{ src: aiPoetImage, alt: "AI Poet interface screenshot" }}
      accent="var(--color-azure-500)"
    />
  </section>

  <!-- Footer rail -->
  <div class="">
    <div class="hidden xs:flex justify-between items-center bg-white px-6 py-4">
      <span class="font-mono text-sm">// more on GitHub</span>
      <a
        href="https://github.com/ellie-holt"
        target="_blank"
        rel="noopener noreferrer"
        class="font-mono decoration-1 hover:decoration-transparent underline transition-all"
      >
        browse repos →<span class="sr-only"> opens in a new tab</span>
      </a>
    </div>
  </div>
</section>
