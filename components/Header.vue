<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
      <div
        class="
          flex flex-wrap
          justify-between
          items-center
          mx-auto
          max-w-screen-xl
        "
      >
        <NuxtLink to="/" class="flex items-center">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 250 75"
            class="h-10"
            shape-rendering="geometricPrecision"
          >
            <defs>
              <image
                width="1640"
                height="664"
                id="a"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABmgAAAKYAQMAAABNauWRAAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAACbSURBVHic7cGBAAAAAMOg+VNf4QBVAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwG8WbgABfv/o8AAAAABJRU5ErkJggg=="
              />
            </defs>
            <use x="-695" y="-295" />
            <path
              d="M32.9 34.8q3.7 1.1 6 4.1 2.2 2.8 2.2 6.4 0 5-2.5 9.5-2.6 4.5-6.6 7.1-4 2.7-8.8 3.7-4.9 1-9.5-1.1-.6 0-1.1-1.6-1.7-.1-3.3-1.6-1.4-1.5-1.4-3.7 0-3.8 3.2-15.5 3.3-11.7 8.1-22.9 1.2-2.9 4.7-2.3 2.7.5 3.5 2.4.3.8 0 1.6-2.3 5.6-4.7 13.1 4.8-1.9 8.2-6 3.5-4 3.5-8.3 0-3-2.2-4.8-2.2-1.9-6-1.9-4.9 0-9.1 3.5-4.1 3.5-6.2 7.8-2.1 4.3-2.1 7.8 0 1.6-1.7 1.7-2.3.1-3.7-2.3-1-1.7-1-3.9 0-2.3 1.7-5.4 1.6-3.1 4.5-6.1 2.9-3.1 7.7-5.1 4.8-2.1 10.3-2.1 6.9 0 11.9 3.1 4.9 3 4.9 8.2 0 9.3-10.5 14.6zM15.5 61.4q5.8.3 10.7-5.1Q31 50.9 31 44.2q0-2.8-1.6-4.4-1.5-1.5-4.4-1.5-1.8 0-3.9.5-4 13.2-5.5 22.4 0 .1-.1.2zm57-16.5q.6 0 1 .6.3.6-.1 1.2-1 1.8-2.4 4-1.3 2.1-3.7 5.2-2.3 3.1-5 5.1-2.7 2-5 2-4 0-4-5.8 0-4.5 1.8-11.3 1.8-6.8 4.2-12.5-.7.4-2.4.4-1 0-1.6-.2-1.1 3.7-2.5 7.5t-3.2 8q-1.8 4.3-3.8 7-1.9 2.7-3.4 2.7-1.2 0-1.9-1.1t-.6-2.1q0-.9.3-1.1 1.3 0 5.9-9 4.7-9 6.1-13.8-2.4-2.7-2.4-6.6 0-4.3 2.5-7.9 2.5-3.8 4.9-3.8 2.7 0 2.7 3.8 0 .6-.1 1.3-.1.7-.2 1.2 0 .5-.2 1.4-.3.8-.4 1.3 0 .4-.4 1.6-.4 1.1-.5 1.6-.2.4-.8 1.9-.4 1.5-.6 2 2.3-.2 6.3-2.4 2.2-1.3 4.6.1 2.5 1.3 1.7 3.3 0 .1-.8 1.9L67.1 36q-.7 1.9-1.7 4.5-.8 2.6-1.5 4.8-.6 2.1-1 4.2-.4 1.9-.1 3.1.3 1.2 1.2 1.2 2.3 0 7.6-8.5.3-.5.9-.4zm48.4.6q.5.7 0 1.2-9.6 16.5-20.1 16.3h.1-.9q-3.9 0-6.4-4.9-.5-.9 1.1-2.6 1.1-1.2 1.4-.5 1.5 3.1 3.4 3.1 2 0 3-2.4 1.1-2.5 1.1-4.8 0-3.1-.4-11.4-4 2.5-7.6 3.7-.4 1.4-.6 1.8-3 8.9-7.5 13.5-4.5 4.5-9 4.5-4.4 0-6.7-2.9t-2.3-8.5q0-7.8 3.4-15.4 3.4-7.7 7.3-9.5 2.2-.9 3.9 2 2.8-3.8 6.9-3.8 3.8 0 5.3 4.2 1.5 4.1.1 10.9 3.4-1.1 6.6-3.5-.1-3.1.3-5.7.8-6.4 5-10.4 4.3-4.1 7.4-1.8 4.2 3.1-5.3 15.1.2 1 .7 3.3.4 2.3.7 3.8.3 1.5.5 3.8.3 2.3.3 4.5 0 2.3-.6 4.6 4.7-3.9 7.1-8.4.4-.6.9-.5.7.1.9.7zm-34-.7q.2-.3.6-1.6-4.7-1.8-5.4-7-1.3 2.3-2.6 5.7-1.9 4.8-2.4 9.5-.5 4.6 1.1 5.6 1.7.8 4.1-2.7 2.5-3.6 4.6-9.5zm1.3-4.6q.7-3.7.5-6.4-.2-2.6-1.1-3.1-1.2-.6-2 .4-.8.9-.8 2.5 0 4.8 3.4 6.6zm42.7-30.5q1-2.2 3.1-2.3 2.2-.3 3.7 1.1 1.5 1.4 1.1 3-.3.7-1.1 3-.8 2.2-2.1 6-1.3 3.6-2.5 7.2.7-.1 1.5-.2t1.2-.2q.5-.1.8-.1 1.3-.2.4 2.8-1.1 3.3-2.6 4-1 .3-3.5.5-.2.8-1 3.1-.6 2.3-1 3.6-.6 2-.9 3.2l-.7 2.8q-.4 1.6-.5 2.7v2q0 1 .4 1.5.4.4 1.1.4 3.1 0 8.3-8.5.4-.5.9-.4.7 0 .9.6.4.4 0 1.2Q129.2 63 121.7 63q-4.8 0-4.8-5.8 0-4.3 4.3-18.3.1-.2 1.4-4.4h-1.4q-.8-.1-1.2-.1-.5-.1-.8-.1-1.4-.1-.5-2.1 1.2-2.2 2.8-2.6.6-.2 2.8-.5 5.1-15.8 6.6-19.4zm40.5 26.2q.4.9-.4 1.7-5.4 4.1-10.4 5.6-.4 1.4-.5 1.8-3 8.9-7.6 13.5-4.4 4.5-9 4.5-4.3 0-6.7-2.9-2.3-2.9-2.3-8.5 0-7.8 3.4-15.4 3.4-7.7 7.3-9.5 2.2-.9 3.9 2 2.9-3.8 7-3.8 3.7 0 5.3 4.2 1.5 4.1 0 10.9 4.4-1.5 8.2-4.7.4-.4 1-.2t.8.8zm-18.8-5.2q-1.1-.6-1.9.4-.9.9-.9 2.5 0 4.8 3.5 6.6.7-3.7.4-6.4-.1-2.6-1.1-3.1zm-.6 14.1q.1-.3.5-1.6-4.7-1.8-5.4-7-1.2 2.3-2.5 5.7-2 4.8-2.4 9.5-.5 4.6 1 5.6 1.7.8 4.1-2.7 2.5-3.6 4.7-9.5zm44.3.1q.7 0 .9.6.3.6 0 1.2-1.1 2-2.4 4-1.2 1.9-3.6 5.2-2.4 3.1-5.1 5.2-2.6 1.9-5 1.9-4 0-4-5.8 0-4.3 4.3-18.3l.4-1.6q.1-.7.2-1.6.2-.9.1-1.4-.1-.5-.5-.5-1.5 0-4.5 4.3-2.9 4.3-4.6 8.9-2.6 9.9-3.4 14.2-.3 2.1-2.8 1.8-2.7-.4-4-3.1-.5-1-.5-2.3 0-3.3 3-14.1 3-11 4.9-14.8 1-2.1 3.2-2.2 2.2-.2 3.7 1.1t.9 2.9q-.2.4-1.1 3.1 5.2-8.7 10.2-8.7 2.4 0 3.7 1.8 1.3 1.8 1.3 4.2 0 2.4-.6 4.7-4.1 12.3-4.4 15.6-.1 2.6 1.2 2.6 2.4 0 7.7-8.5.3-.5.8-.4zm28.6.6q.4.7 0 1.1 0 .1-1.3 2.3-1.2 2.1-2.1 3.5-.8 1.3-2.4 3.6-1.5 2.1-2.8 3.5-1.2 1.4-2.8 2.4-1.5 1.1-2.7 1.1-2.9 0-5.2-3.8-2.3-3.8-3.6-9.6l-.1.1q-2 8.4-2.5 11.5-.3 2.1-2.8 1.8-2.7-.4-4-3.1-.5-1-.5-2.3 0-4 4.4-20.4t9.1-27.5q.9-2.1 3.1-2.3 2.1-.2 3.7 1.2 1.6 1.3 1 2.9-3.7 9.2-7.2 21.4 4.6-8 10.6-8 2.1 0 3.7 1.6 1.5 1.4 1.5 3.5 0 6.3-12.3 14.9 1.6 8.5 4.5 9.4.6 0 1 .1t1.1-.4q.6-.6 1-.9.5-.3 1.2-1.1t1.1-1.3l1-1.5q.6-.9.9-1.4.4-.5.8-1.3.5-.9.7-1.2.3-.5.9-.4.6 0 1 .6zM203.6 44h-.3q-.2.5-.2.7 4.3-3.9 7.4-7.8 3.1-4 3.1-5.9 0-1.3-.9-1.3-1.6 0-4.8 4.7-3.1 4.7-4.3 9.6zm42.5 1.5q.5.7 0 1.2-9.7 16.5-20 16.3h-.8q-4 0-6.6-4.9-.5-.9 1.1-2.6 1.2-1.2 1.5-.5 1.5 3.1 3.4 3.1t3-2.4q1-2.5 1-4.8V39.6q-2.6 5.4-4.7 8.7-.6 1-1.5.2t-.2-1.8q4.4-8 6.5-15.2.1-4.1 2.2-7.7 2.2-3.6 5-5.1 2.9-1.5 4.9-.1 4.1 3-5.3 15.1.2 1 .8 4.2.7 3.1 1 5.7.3 2.6.3 5.5 0 2.3-.5 4.6 4.3-3.6 7.1-8.4.3-.6.9-.5.6.1.9.7z"
              style="fill: #ff6a00"
            />
          </svg>
        </NuxtLink>
        <div class="flex items-center lg:order-2">
          <a
            href="#"
            @click.prevent="handleLoginWithDiscord"
            class="
              text-gray-800
              dark:text-white
              hover:bg-gray-50
              focus:ring-4 focus:ring-gray-300
              font-medium
              rounded-lg
              text-sm
              px-4
              lg:px-5
              py-2
              lg:py-2.5
              mr-2
              dark:bg-[#5865F2]
            "
          >
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
              class="w-5 inline-block align-middle mr-2"
            />
            Login With Discord
          </a>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="
              inline-flex
              items-center
              p-2
              ml-1
              text-sm text-gray-500
              rounded-lg
              lg:hidden
              hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-200
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
            "
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="
            hidden
            justify-between
            items-center
            w-full
            lg:flex lg:w-auto lg:order-1
          "
          id="mobile-menu-2"
        >
          <ul
            class="
              flex flex-col
              mt-4
              font-medium
              lg:flex-row lg:space-x-8 lg:mt-0
            "
          >
            <li>
              <NuxtLink
                to="/"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  rounded
                  bg-primary-700
                  lg:bg-transparent lg:text-primary-700 lg:p-0
                "
                :class="{
                  'dark:text-white': useRoute().name === 'index',
                  'dark:text-gray-400': useRoute().name !== 'index',
                }"
                >Home</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <p class="text-white">{{ user }}</p>
</template>

<script setup>
const supabase = useSupabaseClient();
const { user } = useSupabaseUser();
const getURL = () => {
  let url =
    process.env.NUXT_ENV_VERCEL_URL ?? // Set this to your site URL in production env.
    process.env.NUXT_ENV_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

const handleLoginWithDiscord = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: getURL(),
    },
  });

  if (error) {
    // Handle the error, such as displaying an error message.
    console.error('Error signing in with Discord:', error.message);
  }
};
</script>
