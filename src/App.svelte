<script>
  import Nav from "./components/Nav.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Hero from "./components/Hero.svelte";
  import Work from "./components/Work.svelte";
  import About from "./components/About.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<nav>
  <Nav />
  <Sidebar />
</nav>
<main class="mt-14 ml-14">
  <Hero />
  <Work />
  <About />
  <Contact />
</main>
<footer>
  <Footer />
</footer>

<style>
  nav {
    background-color: aqua;
  }
</style>
