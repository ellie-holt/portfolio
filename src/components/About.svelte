<script lang="js">
  import Subheading from "./Subheading.svelte";
</script>

<section id="about" class="border-b-4">
  <Subheading subheading="about me" />
  <section class="flex about-content">
    <section class="p-4 about-info text-on-primary-light">
      <p class="bg-white py-6 px-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magnam
        incidunt eaque, a mollitia recusandae dolorem fugiat! Non, repellat
        dolorem ratione officia qui odio nemo, iste amet optio, dolore corporis.
      </p>
    </section>
    <section class="py-4 pl-6 pr-8 skills text-on-secondary-light">
      <h4 class="text-3xl">Skills:</h4>
      <ul class="mt-2 leading-loose skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Svelte</li>
      </ul>
    </section>
  </section>
</section>
