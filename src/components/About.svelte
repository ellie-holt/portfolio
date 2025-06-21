<script lang="js">
  import Card from "./Card.svelte";
</script>

<section id="about" class="pb-4 pt-6 px-5 flex flex-col">
  <h3 class="scroll-m-14 text-2xl pb-4 pl-4 pt-4 h-15">// about me</h3>
  <section class="flex flex-col gap-5 sm:flex-row about-content">
    <div
      class="border-2 border-black shadow-blocky-md shadow-azure-300 px-6 pt-2 pb-4"
    >
      <p class="py-6 px-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magnam
        incidunt eaque, a mollitia recusandae dolorem fugiat! Non, repellat
        dolorem ratione officia qui odio nemo, iste amet optio, dolore corporis.
      </p>
    </div>

    <div
      class="px-6 pt-2 pb-4 border-2 border-black shadow-blocky-md shadow-azure-300"
    >
      <ul class="leading-loose skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Svelte</li>
      </ul>
    </div>
  </section>
</section>
