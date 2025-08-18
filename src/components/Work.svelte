<script lang="js">
  import Project from "./Project.svelte";
  import weatherAppImage from "../assets/weather-app-square.png";
  import worldClockImage from "../assets/world-clock-square.png";
  import aiPoetImage from "../assets/ai-poet-square.png";
</script>

<section
  id="work"
  class="flex flex-col mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 scroll-m-15 3xs:scroll-m-14 2xs:scroll-m-0 pb-[1px]"
>
  <div
    class="h-[calc(var(--spacing-banner)_*_2)] bg-aquamarine-100 flex items-end"
  >
    <h3 class="md:py-4 py-3 3xs:px-6 px-4 md:text-3xl text-2xl font-semibold">
      // work
    </h3>
  </div>
  <section
    class="flex flex-col lg:grid lg:grid-cols-3 gap-[1px] px-[1px] pt-[1px]"
  >
    <Project
      project={{
        title: "Weather App",
        description:
          "A responsive and interactive weather application built with React and Tailwind CSS as part of a web development course. It fetches real-time weather data and displays it in a clean, accessible user interface with dynamic styling and custom components.",
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
          "A visually engaging world clock built with vanilla JavaScript and styled with custom CSS. Displays the time and date across multiple global cities, with responsive design and dynamic theming based on the time of day.",
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
          "A minimalist web app that lets users generate short poems based on their input prompts. Built with HTML, CSS, and vanilla JavaScript, it integrates the SheCodes AI API to return AI-generated verses which are then displayed using a smooth typewriter animation. The project focuses on clean, accessible UI with a soft, book-inspired visual aesthetic.",
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
