<template>
  <section class="bg-gray-50 dark:bg-gray-900 py-5">
    <div class="px-4 lg:px-6 mx-auto max-w-screen-2xl">
      <div
        class="
          relative
          overflow-hidden
          bg-white
          shadow-md
          dark:bg-gray-800
          sm:rounded-lg
        "
      >
        <div
          class="
            flex flex-col
            px-4
            py-3
            space-y-3
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:space-y-0
            lg:space-x-4
          "
        >
          <div class="flex items-center flex-1 space-x-4">
            <h5>
              <span class="dark:text-white font-medium">Supported Crypto</span>
            </h5>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="
                text-xs text-gray-700
                uppercase
                bg-gray-50
                dark:bg-gray-700 dark:text-gray-400
              "
            >
              <tr>
                <th scope="col" class="px-4 py-3">Rank</th>
                <th scope="col" class="px-4 py-3">Name</th>
                <th scope="col" class="px-4 py-3">Price</th>
                <th scope="col" class="px-4 py-3">Liquidity</th>
                <th scope="col" class="px-4 py-3">Market Cap</th>
                <th scope="col" class="px-4 py-3">Volume (24h)</th>
                <th scope="col" class="px-4 py-3">Volume (7d)</th>
                <th scope="col" class="px-4 py-3">Chart</th>
                <th scope="col" class="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody v-for="(coin, index) in crypto" :key="coin.id">
              <tr
                class="
                  border-b
                  dark:border-gray-600
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                <td class="w-4 px-4 py-3">
                  <div class="flex items-center">{{ index + 1 }}</div>
                </td>
                <td
                  scope="row"
                  class="items-center font-medium text-gray-900 dark:text-white"
                >
                  {{ capitalizeFirstLetter(coin.name) }}
                </td>
                <td class="px-4 py-2">
                  <span
                    class="
                      px-4
                      py-2
                      font-medium
                      text-gray-900
                      whitespace-nowrap
                      dark:text-white
                    "
                    >{{ formatPrice(coin.price) }}</span
                  >
                </td>
                <td
                  class="
                    px-4
                    py-2
                    font-medium
                    text-gray-900
                    whitespace-nowrap
                    dark:text-white
                  "
                >
                  <div class="flex items-center">
                    {{ formatLargePrice(coin.liquidity) }}
                  </div>
                </td>
                <td
                  class="
                    px-4
                    py-2
                    font-medium
                    text-gray-900
                    whitespace-nowrap
                    dark:text-white
                  "
                >
                  {{ formatLargePrice(coin.market_cap) }}
                </td>
                <td
                  class="
                    px-4
                    py-2
                    font-medium
                    text-gray-900
                    whitespace-nowrap
                    dark:text-white
                  "
                >
                  {{ formatLargePrice(coin.volume) }}
                </td>
                <td
                  class="
                    px-4
                    py-2
                    font-medium
                    text-gray-900
                    whitespace-nowrap
                    dark:text-white
                  "
                >
                  <div class="flex items-center">
                    {{ formatLargePrice(coin.volume_7d) }}
                  </div>
                </td>
                <td
                  class="
                    px-4
                    py-2
                    font-medium
                    text-gray-900
                    whitespace-nowrap
                    dark:text-white
                  "
                >
                  <div class="ite-center">
                    <img
                      src="https://api.app-mobula.com/spark?id=100001656.svg"
                      class="h-12"
                    />
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          class="
            flex flex-col
            items-start
            justify-between
            p-4
            space-y-3
            md:flex-row md:items-center md:space-y-0
          "
          aria-label="Table navigation"
        >
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span class="font-semibold text-gray-900 dark:text-white"
              >1-10</span
            >
            of
            <span class="font-semibold text-gray-900 dark:text-white"
              >1000</span
            >
          </span>
          <ul class="inline-flex items-stretch -space-x-px">
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  justify-center
                  h-full
                  py-1.5
                  px-3
                  ml-0
                  text-gray-500
                  bg-white
                  rounded-l-lg
                  border border-gray-300
                  hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800
                  dark:border-gray-700
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-white
                "
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  justify-center
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  text-gray-500
                  bg-white
                  border border-gray-300
                  hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800
                  dark:border-gray-700
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-white
                "
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  justify-center
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  text-gray-500
                  bg-white
                  border border-gray-300
                  hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800
                  dark:border-gray-700
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-white
                "
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="
                  z-10
                  flex
                  items-center
                  justify-center
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  border
                  text-primary-600
                  bg-primary-50
                  border-primary-300
                  hover:bg-primary-100 hover:text-primary-700
                  dark:border-gray-700 dark:bg-gray-700 dark:text-white
                "
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  justify-center
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  text-gray-500
                  bg-white
                  border border-gray-300
                  hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800
                  dark:border-gray-700
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-white
                "
                >...</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  justify-center
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  text-gray-500
                  bg-white
                  border border-gray-300
                  hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800
                  dark:border-gray-700
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-white
                "
                >100</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  justify-center
                  h-full
                  py-1.5
                  px-3
                  leading-tight
                  text-gray-500
                  bg-white
                  rounded-r-lg
                  border border-gray-300
                  hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800
                  dark:border-gray-700
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-white
                "
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RealtimeChannel, createClient } from '@supabase/supabase-js';

// Computed property to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to format price with a dollar sign, commas, and show the last 4 digits after decimal
const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 5,
  }).format(price);

  return formattedPrice;
};

// Function to format price with a dollar sign, commas, and show the last 4 digits after decimal
const formatLargePrice = (price) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return formattedPrice;
};

// Declare props to receive the "crypto" prop
const props = defineProps({
  crypto: Array, // Adjust the type based on the crypto data structure
});

// Access the "crypto" prop directly
const cryptoData = ref(props.crypto);

// Create a computed property that watches for changes in cryptoData and returns the updated data
const updatedCrypto = computed(() => {
  return cryptoData.value;
});

// Create a Supabase client instance
const supabaseUrl = 'https://jjtqvxvprcmblezstaks.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdHF2eHZwcmNtYmxlenN0YWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NjAxMjAsImV4cCI6MjAwNzMzNjEyMH0.glxbp12RNVsu6TaSqPGH_CUDs9AH7T1jNkfwLtz3ZQI';
const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
};

const supabase = createClient(supabaseUrl, supabaseKey, options);

// Function to start the live connection
const subscription = supabase
  .channel('custom-insert-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'crypto' },
    (payload) => {
      const updatedCryptoItem = payload.new; // Use the correct property name here

      // Find the index of the existing data in cryptoData array
      const existingIndex = cryptoData.value.findIndex(
        (item) => item.id === updatedCryptoItem.id
      );

      if (existingIndex !== -1) {
        // Update the existing data with the new values from the "new" object
        const newCryptoData = payload.new; // Access the nested "new" object
        Object.assign(cryptoData.value[existingIndex], newCryptoData);
      }
    }
  )
  .subscribe();

// Cleanup the subscription when the component unmounts
onBeforeUnmount(() => {
  subscription.unsubscribe();
});
</script>
