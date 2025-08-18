<script lang="js">
</script>

<section
  id="contact"
  class="flex flex-col relative mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 3xs:scroll-m-14 2xs:scroll-m-0 scroll-m-14"
>
  <div class="flex items-end h-[calc(var(--spacing-banner)_*_2)] bg-azure-100">
    <h3 class="md:py-4 py-3 pl-6 md:text-3xl text-2xl font-semibold">
      // contact
    </h3>
  </div>
  <div class="px-[1px] py-[1px] h-[calc(var(--spacing-banner)_*_2)]">
    <div class="shadow-border h-full flex items-center justify-center">
      <h2
        class="text-center text-[8vw] lg:text-[6vw] xl:text-[5vw] 2xl:text-[4.5vw]"
      >
        Let's get in touch!
      </h2>
    </div>
  </div>

  <!-- contact form and links wrapper -->
  <div class=" lg:w-2/3 xl:w-3/5 w-full self-center overflow-hidden">
    <!-- contact form -->
    <div
      class="flex bg-azure-100 px-[1px] xs:h-form h-[calc(var(--spacing-form)_*_2)] shadow-border items-center"
    >
      <h4
        class="px-6 md:py-8 xs:py-6 py-4.5 xs:text-2xl text-xl w-full h-full shadow-border"
      >
        Drop me a message...
      </h4>
    </div>

    <form
      name="contact"
      method="POST"
      action="https://httpbin.org/post"
      data-netlify="true"
      class="w-full grid grid-cols-2 gap-[1px] font-mono text-lg leading-loose xs:text-xl auto-rows-auto"
    >
      <div
        class="xs:h-form px-[1px] row-start-1 row-span-2 xs:row-span-1 col-span-full grid grid-cols-subgrid grid-rows-subgrid"
      >
        <label
          for="name"
          class="flex items-center col-start-1 row-start-1 row-end-2 px-6 font-sans font-bold uppercase shadow-border bg-tangerine-wash xs:col-span-1 col-span-full h-form"
          ><span>Name:</span></label
        >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
          class="col-start-1 row-start-2 row-end-3 px-6 bg-white shadow-border xs:col-span-1 xs:col-start-2 col-span-full xs:row-start-1 xs:row-end-2 h-form"
        />
      </div>
      <div
        class="xs:h-form px-[1px] col-span-full row-start-3 row-span-2 xs:row-span-1 xs:row-start-2 xs:row-end-3 grid grid-cols-subgrid grid-rows-subgrid"
      >
        <label
          for="email"
          class="flex items-center col-start-1 row-start-1 px-6 font-sans font-bold uppercase shadow-border bg-tangerine-wash xs:col-span-1 col-span-full xs:row-start-2 h-form"
          ><span>Email:</span></label
        >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
          required
          class="row-start-2 px-6 bg-white shadow-border xs:col-span-1 col-span-full xs:row-start-2 h-form"
        />
      </div>
      <div
        class=" px-[1px] col-span-full row-span-2 grid grid-cols-subgrid grid-rows-subgrid row-start-5 xs:row-span-2 xs:row-start-3 xs:row-end-5"
      >
        <label
          for="message"
          class="flex items-center row-start-1 px-6 font-sans font-bold uppercase shadow-border h-form bg-tangerine-wash xs:col-span-1 col-span-full"
          ><span>Message:</span></label
        >
        <textarea
          name="message"
          id="message"
          placeholder="Type your message here..."
          required
          class="relative z-30 shadow-border px-6 pt-6 h-[calc(var(--spacing-form)_*_2)] leading-[1.7] text-md xs:text-lg bg-white xs:col-span-1 xs:col-start-2 col-span-full xs:row-start-1 row-span-2 row-start-2"
        ></textarea>
      </div>
      <div
        class="relative group pl-[1px] pr-[1px] xs:pr-0 gap-[1px] col-span-full col-start-1 xs:col-end-2 xs:col-span-1 row-start-7 xs:row-start-4 xs:row-end-5 bg-white"
      >
        <button
          class="relative shadow-border w-full h-[calc(var(--spacing-banner)_*_2)] xs:h-[calc(var(--spacing-form)_-_1px)] cursor-pointer text-2xl hover:font-semibold group z-20"
          type="submit"
          >Send
        </button><span
          class="absolute z-10 left-0 right-0 bottom-0 h-2 bg-azure-200 transition-all duration-300 ease-in-out group-hover:h-full"
        ></span>
      </div>
    </form>

    <!-- contact links -->
    <!-- <div
      class="flex bg-azure-100 px-[1px] py-[1px] h-form items-center justify-end"
    >
      <h4 class="px-2 py-8 text-2xl w-full h-full text-right shadow-border">
        ...or email me directly
      </h4>
    </div>
    <article
      class=" text-lg leading-loose xs:text-xl gap-[1px] px-[1px] contact-info grid"
    >
      <div
        class="flex items-center justify-center gap-4 bg-white col-span-full shadow-border h-banner"
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
        class="flex items-center justify-center gap-4 bg-white col-span-full shadow-border h-banner"
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
    </article> -->
  </div>
</section>

<style>
</style>
