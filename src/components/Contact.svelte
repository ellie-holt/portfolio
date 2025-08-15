<script lang="js">
</script>

<section
  id="contact"
  class="flex flex-col relative mx-2.5 xs:mx-5 pb-8 md:mx-6 lg:mx-6 xl:mx-6 mb-12 3xs:scroll-m-12 md:scroll-m-16"
>
  <div class="h-16 flex items-end">
    <h3
      class="md:py-4 py-3 pl-4 md:text-3xl text-2xl 3xs:h-14 md:h-16 font-semibold"
    >
      // contact
    </h3>
  </div>

  <!-- div has a min height to ensure contact subheading lines up with navbar on scroll down -->
  <div class="min-h-[75vh]">
    <h2 class="text-right mb-6">Let's get in touch!</h2>

    <!-- contact form -->
    <form
      name="contact"
      method="POST"
      action="https://httpbin.org/post"
      data-netlify="true"
      class="w-full flex flex-col gap-4 font-mono text-lg leading-loose xs:text-xl mb-6"
    >
      <div class="flex h-banner px-[1px] gap-[1px]">
        <label
          for="name"
          class="shadow-border flex-1 px-2 font-bold font-sans uppercase flex items-center"
          ><span>Name:</span></label
        >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
          class="shadow-border flex-1 px-2"
        />
      </div>
      <div class="flex h-banner px-[1px] gap-[1px]">
        <label
          for="email"
          class="shadow-border flex-1 px-2 font-bold font-sans uppercase flex items-center"
          ><span>Email:</span></label
        >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
          required
          class="shadow-border flex-1 px-2"
        />
      </div>
      <div class="flex px-[1px] gap-[1px]">
        <label
          for="message"
          class="shadow-border flex-1 px-2 font-bold font-sans uppercase flex items-center h-banner"
          ><span>Message:</span></label
        >
        <textarea
          name="message"
          id="message"
          placeholder="Type your message here..."
          required
          class="shadow-border flex-1 px-2 h-[calc(var(--spacing-banner)_*_2)] leading-[1.7] text-md xs:text-lg"
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>

    <!-- contact links -->
    <h4 class="text-2xl mb-4 px-2">...or email me directly</h4>
    <article
      class=" text-lg leading-loose xs:text-xl gap-[1px] px-[1px] contact-info grid grid-cols-3 grid-rows-2"
    >
      <div
        class="flex items-center col-span-2 row-start-1 justify-center gap-4 bg-white shadow-border h-banner"
      >
        <span class="font-bold relative top-[1px]">email:</span>

        <a
          href="mailto:eleanorholt97@gmail.com"
          target="_blank"
          class="relative inline-flex items-center font-mono email-link group"
        >
          <span
            class="brackets relative pr-[0.2em] text-[1.7em] font-semibold text-tangerine-500 transition-transform duration-300 ease-in group-hover:translate-x-1 group-hover:scale-90 leading-none"
            >&lcub;</span
          >
          <span
            class="underline transition-all duration-300 ease-in group-hover:decoration-transparent"
            ><span class="break-all">eleanorholt97</span>@gmail.com</span
          >
          <span
            class="brackets relative pl-[0.2em] text-[1.7em] font-semibold text-tangerine-500 transition-transform duration-300 ease-in group-hover:-translate-x-1 group-hover:scale-90 leading-none"
            >&rcub;</span
          >
        </a>
      </div>
      <div
        class="flex items-center col-start-2 col-span-2 row-start-2 justify-center gap-4 bg-white shadow-border h-banner"
      >
        <span class="font-bold relative">github:</span>

        <a
          href="https://github.com/ellie-holt"
          target="_blank"
          class="relative inline-flex items-center font-mono email-link group"
        >
          <span
            class="brackets relative pr-[0.2em] text-[1.7em] font-semibold text-tangerine-500 transition-transform duration-300 ease-in group-hover:translate-x-1 group-hover:scale-90 leading-none"
            >&lcub;</span
          >
          <span
            class="underline transition-all duration-300 ease-in group-hover:decoration-transparent"
            >github.com/ellie-holt</span
          >
          <span
            class="brackets relative pl-[0.2em] text-[1.7em] font-semibold text-tangerine-500 transition-transform duration-300 ease-in group-hover:-translate-x-1 group-hover:scale-90 leading-none"
            >&rcub;</span
          >
        </a>
      </div>
    </article>
  </div>
</section>

<style>
</style>
