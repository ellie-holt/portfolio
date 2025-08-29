<script lang="js">
  import Button from "$lib/ui/Button/Button.svelte";
</script>

<section
  id="contact"
  class="collapse-border flex flex-col mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 scroll-m-15 3xs:scroll-m-14 2xs:scroll-m-0"
>
  <!-- Section Subheading -->
  <div class="flex items-end h-[calc(var(--spacing-banner)_*_2)]">
    <h3 class="px-6 py-1 md:py-2 font-semibold text-2xl md:text-3xl">
      // contact
    </h3>
  </div>

  <!-- Big Heading Panel -->
  <div
    class="hidden sm:flex justify-center items-end px-6 pb-8 xl:pb-6 h-[calc(var(--spacing-banner)_*_3)]"
  >
    <h2
      class="text-[vw] xs:text-[10vw] sm:text-[7vw] lg:text-[6vw] 2xl:text-[5vw] xl:text-[5.5vw] text-center"
    >
      Let's get in touch!
    </h2>
  </div>

  <!-- Form Container (helps borders) -->
  <div class="flex flex-col w-full">
    <!-- Form Wrapper (responsiveness and button alignment) -->
    <div
      class="collapse-border flex flex-col self-center lg:mt-12 w-full lg:w-2/3 2xl:w-4/9 xl:w-3/5"
    >
      <!-- Form Header Strip -->
      <div
        class="collapse-border-2 h-[calc(var(--spacing-form)_*_1.5)] xs:h-form"
      >
        <div
          class="relative flex justify-center 3xs:justify-start items-end bg-azure-wash pb-4 3xs:pb-6 xs:pb-4 md:pb-6 w-full h-full"
        >
          <span class="accent-spine" style="--accent:var(--color-azure-500);"
          ></span>
          <h4 class="px-6 text-2xl xs:text-2xl">
            Drop me a message<span class="hidden 3xs:inline">...</span>
          </h4>
        </div>
      </div>

      <!-- Contact Form -->
      <form
        id="contact-form"
        name="contact"
        method="POST"
        action="/"
        data-netlify="true"
        class="collapse-border w-full font-mono text-lg xs:text-xl leading-loose"
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
          class="collapse-border-2 gap-0 grid grid-cols-1 xs:grid-cols-2 xs:h-form"
        >
          <label
            for="name"
            class="flex items-center bg-tang-100 px-6 h-form font-sans font-bold uppercase"
            >Name:</label
          >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            autocomplete="name"
            class="bg-tang-wash px-6 h-form"
          />
        </div>

        <!-- Email row -->
        <div
          class="collapse-border-2 grid grid-cols-1 xs:grid-cols-2 xs:h-form"
        >
          <label
            for="email"
            class="flex items-center bg-tang-100 px-6 h-form font-sans font-bold uppercase"
            >Email:</label
          >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            required
            autocomplete="email"
            class="bg-tang-wash px-6 h-form"
          />
        </div>

        <!-- Message row -->
        <div class="collapse-border-2 grid grid-cols-1 xs:grid-cols-2">
          <label
            for="message"
            class="flex items-center bg-tang-100 px-6 h-form xs:h-[calc(var(--spacing-form)_*_2)] font-sans font-bold uppercase"
            >Message:</label
          >
          <textarea
            name="message"
            id="message"
            placeholder="Type your message here..."
            required
            class="bg-tang-wash px-6 pt-6 h-[calc(var(--spacing-form)_*_2)] text-md xs:text-lg leading-[1.7]"
          ></textarea>
        </div>
      </form>

      <!-- Submit Button -->
      <Button
        type="submit"
        form="contact-form"
        bar
        tone="azure"
        class="self-center xs:self-end bg-azure-wash my-6 md:my-12 w-[calc(var(--spacing-form)_*_2)] h-form"
        >Send</Button
      >
    </div>
  </div>
</section>
