<script lang="js">
</script>

<section id="contact" class="pb-4 px-5 pt-6 flex flex-col">
  <h3 class="scroll-m-14 text-2xl pb-4 pl-4 pt-4 h-15">// contact me</h3>
  <section
    class="flex flex-col gap-5 items-center px-4 py-8 leading-loose text-xl contact-info"
  >
    <div>
      <span class="font-bold">email:</span>
      <span class="font-mono">
        <a
          href="mailto:eleanorholt97@gmail.com"
          target="_blank"
          class="underline">eleanorholt97@gmail.com</a
        >
      </span>
    </div>
    <div>
      <span class="font-bold">github:</span>
      <span class="font-mono">
        <a
          href="https://github.com/ellie-holt"
          target="_blank"
          class="underline">github.com/ellie-holt</a
        >
      </span>
    </div>
  </section>
</section>

<style>
  a {
    --size: 10px;
    --thickness: 2px;
    --gap: 5px;

    padding: calc(var(--gap) + var(--thickness));
    outline: var(--thickness) solid var(--color-aquamarine-600);
    outline-offset: calc(-1 * var(--thickness));
    mask:
      conic-gradient(at var(--size) var(--size), #0000 75%, #000 0) 0 0 /
        calc(100% - var(--size)) calc(100% - var(--size)),
      conic-gradient(#000 0 0) content-box;
    transition: 0.4s;
  }

  a:hover {
    outline-offset: calc(-1 * var(--gap));
  }
</style>
