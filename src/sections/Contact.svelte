<script lang="js">
  import Button from "$lib/ui/Button/Button.svelte";
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
  <div class="h-[calc(var(--spacing-banner)_*_3)]">
    <div class="h-full flex items-center justify-center px-6">
      <h2
        class="text-center text-[10vw] sm:text-[7vw] lg:text-[6vw] xl:text-[5.5vw] 2xl:text-[5vw]"
      >
        Let's get in touch!
      </h2>
    </div>
  </div>

  <div class="flex flex-col w-full lg:w-2/3 self-center">
    <!-- Form wrapper: draws outer frame and inner rails -->
    <div
      class="seam-grid seam-rail seam-gap"
      style="--thick:1px; --line:var(--color-azure-ink); --item-bg:#fff;"
    >
      <!-- Form header strip (panel) -->
      <div class="xs:h-form h-[calc(var(--spacing-form)_*_1.5)]">
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

      <!-- Form: vertical seams between rows -->

      <form
        id="contact-form"
        name="contact"
        method="POST"
        action="/"
        data-netlify="true"
        class="seam-grid seam-y seam-inset w-full font-mono text-lg leading-loose xs:text-xl"
        style="--thick:1px; --line:var(--color-azure-ink); --item-bg:#fff;"
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

        <!-- Name row: horizontal seam split -->
        <div class="seam-grid seam-x seam-inset seam-cols-2 xs:h-form">
          <label
            for="name"
            class="flex items-center px-6 font-sans font-bold uppercase bg-tang-wash"
            >Name:</label
          >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            autocomplete="name"
            class="px-6"
          />
        </div>

        <!-- Email row -->
        <div class="seam-grid seam-x seam-inset seam-cols-2 xs:h-form">
          <label
            for="email"
            class="flex items-center px-6 font-sans font-bold uppercase bg-tang-wash"
            >Email:</label
          >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            required
            autocomplete="email"
            class="px-6"
          />
        </div>

        <!-- Message row (taller) -->
        <div class="seam-grid seam-x seam-inset seam-cols-2">
          <label
            for="message"
            class="flex items-center px-6 font-sans font-bold uppercase bg-tang-wash h-[calc(var(--spacing-form)_*_2)]"
            >Message:</label
          >
          <textarea
            name="message"
            id="message"
            placeholder="Type your message here..."
            required
            class="px-6 pt-6 h-[calc(var(--spacing-form)_*_2)] leading-[1.7] text-md xs:text-lg"
          ></textarea>
        </div>

        <!-- Submit -->
      </form>
    </div>
    <Button
      type="submit"
      form="contact-form"
      bar
      tone="azure"
      class="h-form w-[calc(var(--spacing-form)_*_2)] mt-6 self-end"
      >Send</Button
    >
  </div>
</section>
