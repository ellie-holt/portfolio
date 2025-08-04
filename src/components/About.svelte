<section
  id="about"
  class="flex flex-col px-2.5 xs:px-5 md:px-8 lg:px-32 xl:px-48 scroll-m-10 3xs:scroll-m-12 md:scroll-m-14 mb-12 mt-6"
>
  <h3 class="pt-4 pb-4 pl-4 text-3xl font-semibold h-15 scroll-m-14">
    // about
  </h3>
  <div class="grid grid-cols-3 grid-rows-3 gap-[4px] about-content">
    <!-- opening paragraph -->
    <div
      class="col-start-1 col-end-3 bg-white element-border shadow-blocky px-6 pt-6 pb-9"
    >
      <h4 class="pb-3">Title</h4>
      <p class="leading-loose">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est esse quod
        pariatur quo numquam aut veritatis animi corporis soluta illum? Suscipit
        ad repellendus dicta aut modi voluptas accusamus perspiciatis et.
      </p>
    </div>
    <!-- tech list -->
    <div
      class="col-start-1 col-end-2 row-start-2 row-end-4 bg-white element-border border-black shadow-blocky px-6 pt-6 pb-9"
    >
      <h4 class="pb-3">Tech and tools</h4>
      <div class="flex flex-col justify-center gap-6">
        <!-- <ul class="flex justify-around">
          <li class="relative group">HTML</li>
          <ul>
            <li>Semantic markup</li>
            <li>ARIA roles and keyboard navigation</li>
            <li>Accessible forms and validation</li>
          </ul>
          <li class="relative group">CSS</li>
          <ul>
            <li>Responsive design</li>
            <li>CSS Grid and Flexbox</li>
            <li>Animations and transitions</li>
            <li>CSS variables and theming/dark mode</li>
          </ul>
          <li class="relative group">JavaScript</li>
          <ul>
            <li>DOM manipulation and event handling</li>
            <li>Async JavaScript and APIs</li>
          </ul>
        </ul> -->
        <br />
        <ul class="flex justify-around">
          <li class="relative group">React</li>
          <li class="relative group">Svelte</li>
          <li class="relative group"></li>
          <li class="relative group"></li>
        </ul>
        <ul class="flex justify-around"></ul>
      </div>
    </div>
    <!-- interests and approach -->
    <div
      class="flex-1 row-start-3 col-start-2 col-end-4 bg-white element-border border-black shadow-blocky px-6 pt-6 pb-9"
    >
      <h4 class="pb-3">Interests and approach</h4>
      <ul class="leading-loose">
        <li>
          Exploring new front-end trends, especially where design and dev meet
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          veniam provident sunt minus labore aliquid corporis nam facilis, ipsum
          distinctio ea doloribus quasi quod inventore rerum laborum soluta
          fugit unde.
        </li>
      </ul>
    </div>
  </div>
</section>

<style>
  .background-gradient {
    background-color: hsla(18, 100%, 97%, 1);
    background-image: radial-gradient(
        at 28% 25%,
        hsla(221, 86%, 88%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 95% 98%, hsla(18, 100%, 76%, 0.5) 0px, transparent 50%),
      radial-gradient(at 51% 37%, hsla(159, 87%, 74%, 0.5) 0px, transparent 50%),
      radial-gradient(at 43% 84%, hsla(160, 88%, 86%, 0.5) 0px, transparent 50%),
      radial-gradient(at 82% 28%, hsla(221, 93%, 80%, 0.5) 0px, transparent 50%),
      radial-gradient(at 19% 59%, hsla(18, 100%, 87%, 0.5) 0px, transparent 50%);
    background-size: cover;
  }
  .grid {
    background-image: linear-gradient(
        var(--color-aquamarine-muted) 1px,
        transparent 1px,
        transparent calc(100% - 1px),
        var(--color-aquamarine-muted) calc(100% - 1px)
      ),
      linear-gradient(
        90deg,
        var(--color-aquamarine-muted) 1px,
        transparent 1px,
        transparent calc(100% - 1px),
        var(--color-aquamarine-muted) calc(100% - 1px)
      );
    background-size: 16.666666666666668% 16.666666666666668%;
    border: 1px solid var(--color-aquamarine-muted);
  }

  .element-border {
    outline: 4px solid var(--color-aquamarine-muted-opaque);
  }
</style>
