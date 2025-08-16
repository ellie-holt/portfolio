<script lang="js">
</script>

<section
  id="contact"
  class="flex flex-col relative mx-2.5 xs:mx-5 pb-8 md:mx-6 lg:mx-6 xl:mx-6 mb-12 3xs:scroll-m-12 md:scroll-m-16"
>
  <div class="flex items-end h-16">
    <h3
      class="py-3 pl-4 text-2xl font-semibold md:py-4 md:text-3xl 3xs:h-14 md:h-16"
    >
      // contact
    </h3>
  </div>

  <!-- div has a min height to ensure contact subheading lines up with navbar on scroll down -->
  <div class="min-h-[75vh]">
    <h2 class="mb-6 text-right">Let's get in touch!</h2>

    <!-- contact form -->
    <form
      name="contact"
      method="POST"
      action="https://httpbin.org/post"
      data-netlify="true"
      class="w-full xl:w-2/3 grid grid-cols-2 gap-[1px] font-mono text-lg leading-loose xs:text-xl mb-24 auto-rows-auto"
    >
      <div
        class="xs:h-banner px-[1px] row-start-1 row-span-2 xs:row-span-1 col-span-full grid grid-cols-subgrid grid-rows-subgrid"
      >
        <label
          for="name"
          class="flex items-center col-start-1 row-start-1 row-end-2 px-2 font-sans font-bold uppercase shadow-border bg-tangerine-wash xs:col-span-1 col-span-full h-banner"
          ><span>Name:</span></label
        >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
          class="col-start-1 row-start-2 row-end-3 px-2 bg-white shadow-border xs:col-span-1 xs:col-start-2 col-span-full xs:row-start-1 xs:row-end-2 h-banner"
        />
      </div>
      <div
        class="xs:h-banner px-[1px] col-span-full row-start-3 row-span-2 xs:row-span-1 xs:row-start-2 xs:row-end-3 grid grid-cols-subgrid grid-rows-subgrid"
      >
        <label
          for="email"
          class="flex items-center col-start-1 row-start-1 px-2 font-sans font-bold uppercase shadow-border bg-tangerine-wash xs:col-span-1 col-span-full xs:row-start-2 h-banner"
          ><span>Email:</span></label
        >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
          required
          class="row-start-2 px-2 bg-white shadow-border xs:col-span-1 col-span-full xs:row-start-2 h-banner"
        />
      </div>
      <div
        class=" px-[1px] col-span-full row-span-2 grid grid-cols-subgrid grid-rows-subgrid row-start-5 xs:row-span-2 xs:row-start-3 xs:row-end-5"
      >
        <label
          for="message"
          class="flex items-center row-start-1 px-2 font-sans font-bold uppercase shadow-border h-banner bg-tangerine-wash xs:col-span-1 col-span-full"
          ><span>Message:</span></label
        >
        <textarea
          name="message"
          id="message"
          placeholder="Type your message here..."
          required
          class="shadow-border px-2 h-[calc(var(--spacing-banner)_*_2)] leading-[1.7] text-md xs:text-lg bg-white xs:col-span-1 xs:col-start-2 col-span-full xs:row-start-1 row-span-2 row-start-2"
        ></textarea>
      </div>
      <div
        class="pl-[1px] pr-[1px] xs:pr-0 gap-[1px] col-span-full col-start-1 xs:col-end-2 xs:col-span-1 row-start-7 xs:row-start-4 xs:row-end-5"
      >
        <button
          class="shadow-border w-full h-banner xs:h-[calc(var(--spacing-banner)_-_1px)] cursor-pointer text-2xl"
          type="submit">Send</button
        >
      </div>
    </form>

    <!-- contact links -->
    <h4 class="px-2 mb-4 text-2xl">...or email me directly</h4>
    <article
      class=" text-lg leading-loose xs:text-xl gap-[1px] px-[1px] contact-info grid grid-cols-3 xl:grid-cols-6 grid-rows-2"
    >
      <div
        class="flex items-center justify-center row-start-1 gap-4 bg-white md:col-span-2 col-span-full shadow-border h-banner"
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
        class="flex items-center justify-center col-start-1 row-start-2 gap-4 bg-white md:col-start-2 md:col-span-2 col-span-full shadow-border h-banner"
      >
        <span class="relative font-bold">github:</span>

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
