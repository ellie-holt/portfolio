<script lang="js">
  import Subheading from "./Subheading.svelte";
  import Card from "./Card.svelte";
</script>

<section id="about">
  <Subheading subheading="about me" />
  <section class="flex about-content px-6">
    <section class="p-6 about-info text-on-primary-light">
      <p class="bg-white box-shadow py-6 px-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magnam
        incidunt eaque, a mollitia recusandae dolorem fugiat! Non, repellat
        dolorem ratione officia qui odio nemo, iste amet optio, dolore corporis.
      </p>
    </section>

    <Card title="Skills" titleBg="bg-azure-200">
      <ul class="leading-loose skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Svelte</li>
      </ul>
    </Card>
  </section>
</section>
