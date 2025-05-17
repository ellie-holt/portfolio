<script lang="js">
  import me from "../assets/me.jpeg";
  import { isScrolled, scrollProgress } from "../lib/ScrollState.svelte.js";
</script>

<section id="hero" class="text-center py-4 border-black hero relative">
  <!-- <img src={me} alt="Ellie Holt" class="hero-image" /> -->

  <h1 class="hero-title text-center {isScrolled ? 'scrolled' : ''}">
    Ellie Holt: &lcub;front-end web developer&rcub;
  </h1>
</section>

<style>
  .hero {
    z-index: 1;
    background: transparent;
  }

  .hero-title.scrolled {
  }
</style>
