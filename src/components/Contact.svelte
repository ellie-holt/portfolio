<!-- FILE: src/components/Contact.svelte -->
<script lang="js">
  // Uses the same seam/border rhythm as other sections but keeps your original layout logic.
  // Short colour tokens (aqua/tang) are assumed to exist in the Tailwind theme.
</script>

<section
  id="contact"
  class="flex flex-col mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 3xs:scroll-m-14 2xs:scroll-m-0 scroll-m-15"
>
  <!-- Subheading band -->
  <div class="flex items-end h-[calc(var(--spacing-banner)_*_2)] bg-azure-100">
    <h3 class="md:py-4 py-3 px-6 md:text-3xl text-2xl font-semibold">
      // contact
    </h3>
  </div>

  <!-- Big heading panel -->
  <div class=" h-[calc(var(--spacing-banner)_*_3)]">
    <div class="h-full flex items-center justify-center px-6">
      <h2
        class="text-center text-[10vw] sm:text-[7vw] lg:text-[6vw] xl:text-[5.5vw] 2xl:text-[5vw]"
      >
        Let's get in touch!
      </h2>
    </div>
  </div>

  <!-- Form wrapper -->
  <div class="w-full lg:w-2/3 self-center divider divider-rail divider-gap">
    <!-- Form header strip -->
    <div class=" bg-white xs:h-form h-[calc(var(--spacing-form)_*_1.5)]">
      <div
        class="relative w-full h-full flex justify-center 3xs:justify-start items-center"
      >
        <span class="accent-spine" style="--accent:var(--color-azure-500);"
        ></span>

        <h4 class="px-6 xs:text-2xl text-2xl">
          Drop me a message<span class="hidden 3xs:inline">...</span>
        </h4>
      </div>
    </div>

    <!-- Form -->
    <form
      name="contact"
      method="POST"
      action="/"
      data-netlify="true"
      class="w-full grid grid-cols-2 font-mono text-lg leading-loose xs:text-xl auto-rows-auto"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label
          >Don't fill this out if you're human: <input
            name="bot-field"
            type="text"
            autocomplete="off"
          /></label
        >
      </p>

      <!-- Name row -->
      <div
        class="xs:h-form row-start-1 row-span-2 xs:row-span-1 col-span-full grid grid-cols-subgrid grid-rows-subgrid"
      >
        <label
          for="name"
          class="flex items-center col-start-1 row-start-1 row-end-2 px-6 font-sans font-bold uppercase shadow-border bg-tang-wash xs:col-span-1 col-span-full h-form"
          ><span>Name:</span></label
        >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
          autocomplete="name"
          class="col-start-1 row-start-2 row-end-3 px-6 bg-white shadow-border xs:col-span-1 xs:col-start-2 col-span-full xs:row-start-1 xs:row-end-2 h-form"
        />
      </div>

      <!-- Email row -->
      <div
        class="xs:h-form col-span-full row-start-3 row-span-2 xs:row-span-1 xs:row-start-2 xs:row-end-3 grid grid-cols-subgrid grid-rows-subgrid"
      >
        <label
          for="email"
          class="flex items-center col-start-1 row-start-1 px-6 font-sans font-bold uppercase shadow-border bg-tang-wash xs:col-span-1 col-span-full xs:row-start-2 h-form"
          ><span>Email:</span></label
        >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
          required
          autocomplete="email"
          class="row-start-2 px-6 bg-white shadow-border xs:col-span-1 col-span-full xs:row-start-2 h-form"
        />
      </div>

      <!-- Message row -->
      <div
        class="col-span-full row-span-2 grid grid-cols-subgrid grid-rows-subgrid row-start-5 xs:row-span-2 xs:row-start-3 xs:row-end-5"
      >
        <label
          for="message"
          class="flex items-center row-start-1 px-6 font-sans font-bold uppercase shadow-border h-[calc(var(--spacing-form)_*_2)] bg-tang-wash xs:col-span-1 col-span-full"
          ><span>Message:</span></label
        >
        <textarea
          name="message"
          id="message"
          placeholder="Type your message here..."
          required
          class=" shadow-border px-6 pt-6 h-[calc(var(--spacing-form)_*_2)] leading-[1.7] text-md xs:text-lg bg-white xs:col-span-1 xs:col-start-2 col-span-full xs:row-start-1 row-span-2 row-start-2"
        ></textarea>
      </div>
      <!-- Submit button -->
      <div
        class="relative group xs:pr-0 gap-[1px] col-span-full col-start-1 row-start-7 xs:row-start-4 xs:row-end-5 bg-white"
      >
        <button
          class="brutal-btn relative shadow-border w-full h-[calc(var(--spacing-form)_*_1.5)] xs:h-form cursor-pointer text-2xl font-bold uppercase hover:font-semibold group z-10 underline decoration-1 hover:decoration-transparent bg-white"
          type="submit"
        >
          <span class="relative z-10">Send</span>
          <span
            class="absolute z-0 left-0 right-0 bottom-0 h-2 bg-azure-200 transition-all duration-300 ease-in-out group-hover:h-full"
          ></span>
        </button>
      </div>
    </form>
  </div>
</section>
