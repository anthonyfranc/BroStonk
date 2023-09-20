<template>
  <dashboardSideMenu />
  <div class="xl:pl-72">
    <!-- Sticky search header -->
    <div
      class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
      <button type="button" class="-m-2.5 p-2.5 text-white xl:hidden" @click="ui.sidebarOpen = true">
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-5 w-5" aria-hidden="true" />
      </button>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="flex flex-1" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <div class="relative w-full">
            <MagnifyingGlassIcon class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
              aria-hidden="true" />
            <input id="search-field"
              class="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
              placeholder="Search..." type="search" name="search" />
          </div>
        </form>
      </div>
    </div>
    <main class="lg:pr-96">
      <div class="
      overflow-y-auto 
      lg:max-h-[calc(100vh)]
      mt-10
      ">
      <div class="mr-5 ml-5 mt-20">
      <rssapp-carousel id="t7gPIV3oZ30DZv0r"></rssapp-carousel></div>
      <header class="
            items-center
            justify-between
            border-b border-white/5
            px-4
            py-4
            sm:px-6 sm:py-6
            lg:px-8
          ">
        <h1 class="text-base font-semibold leading-7 text-white">
          Supported Crypto
        </h1>
        <div class="relative">
          <span class="
                flex
                items-center
                gap-x-1
                text-sm
                font-medium
                leading-6
                text-white
              ">
            <!--View More Button-->
          </span>
        </div>
        <!-- Sort dropdown -->
      </header>
      <!--Skeleton Loader-->
      <div class="divide-y divide-white/5 animate-pulse" v-if="loading">
        <!-- Create multiple skeleton items to mimic the list -->
        <div v-for="index in 9" :key="index" class="
              relative
              flex flex-wrap
              sm:flex-nowrap
              items-center
              space-x-4
              px-4
              py-4
              sm:px-6
              lg:px-8
            ">
          <div class="min-w-0 flex-auto">
            <div class="flex items-center gap-x-3">
              <svg fill="#6b7280" class="h-6 dark:bg-gray-700 rounded-full" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3.31935068,14.3847701 C4.3645353,18.1979659 7.85504258,21 12,21 C15.3304686,21 18.2384173,19.1909776 19.7948361,16.5019428 L16.5,13.2071068 L13.8535534,15.8535534 C13.6582912,16.0488155 13.3417088,16.0488155 13.1464466,15.8535534 L7.5,10.2071068 L3.35355339,14.3535534 C3.34252493,14.3645819 3.33110946,14.3749874 3.31935068,14.3847701 L3.31935068,14.3847701 Z M3.08090788,13.2119853 L7.14644661,9.14644661 C7.34170876,8.95118446 7.65829124,8.95118446 7.85355339,9.14644661 L13.5,14.7928932 L16.1464466,12.1464466 C16.3417088,11.9511845 16.6582912,11.9511845 16.8535534,12.1464466 L20.2680678,15.560961 C20.7390577,14.46885 21,13.2648982 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,12.4110121 3.02755133,12.8155892 3.08090788,13.2119853 L3.08090788,13.2119853 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M15,6 L17,6 C17.5522847,6 18,6.44771525 18,7 L18,9 C18,9.55228475 17.5522847,10 17,10 L15,10 C14.4477153,10 14,9.55228475 14,9 L14,7 C14,6.44771525 14.4477153,6 15,6 Z M15,7 L15,9 L17,9 L17,7 L15,7 Z">
                  </path>
                </g>
              </svg>
              <h2 class="min-w-0 text-md font-semibold leading-6 text-white">
                <a href="#" class="flex items-center gap-x-2">
                  <span class="truncate">
                    <div class="
                          h-2.5
                          bg-gray-200
                          rounded-full
                          dark:bg-gray-700
                          w-28
                        "></div>
                  </span>
                  <span class="absolute inset-0" />
                </a>
              </h2>
            </div>
            <div class="
                  my-2
                  mt-3
                  flex flex-wrap
                  sm:flex-nowrap
                  items-center
                  gap-x-2.5
                  text-xs
                  leading-5
                  text-gray-400
                ">
              <div class="
                    h-2.5
                    bg-gray-200
                    rounded-full
                    dark:bg-gray-700
                    w-14
                    sm:w-32
                    mb-4
                  "></div>
              <div class="
                    h-2.5
                    bg-gray-200
                    rounded-full
                    dark:bg-gray-700
                    w-14
                    sm:w-32
                    mb-4
                  "></div>
              <div class="
                    h-2.5
                    bg-gray-200
                    rounded-full
                    dark:bg-gray-700
                    w-14
                    sm:w-32
                    mb-4
                    xs:pr-2
                  "></div>
            </div>
          </div>
          <div class="pr-5 md:pr-10 sm:pr-10">
            <div class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mb-4"></div>
          </div>
        </div>
      </div>
      <!-- Crypto list -->
      <div class="

      ">
      <ul role="list" class="divide-y divide-white/5">
        <li v-for="(crypto, index) in data" :key="crypto.id" class="
              relative
              flex flex-wrap
              sm:flex-nowrap
              items-center
              space-x-4
              px-4
              py-4
              sm:px-6
              lg:px-8
            ">
          <div class="min-w-0 flex-auto">
            <div class="flex items-center gap-x-3">
              <img :src="crypto.logo" class="h-6" />
              <h2 class="min-w-0 text-md font-semibold leading-6 text-white">
                <a href="#" class="flex items-center gap-x-2">
                  <span class="truncate">{{
                    capitalizeFirstLetter(crypto.display_name)
                  }}</span>
                  <span class="text-gray-400">
                    <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                  </span>
                  <span class="text-gray-400">{{ crypto.short_name }}</span>
                  <span class="absolute inset-0" />
                  <div class="
                        rounded-full
                        flex-none
                        py-1
                        px-2
                        text-xs
                        font-medium
                        ring-1 ring-inset
                        text-gray-400
                        bg-gray-400/10
                        ring-gray-400/20
                        sm:hidden
                        fade-in
                        absolute right-8
                      " :class="[
                        {
                          'text-green-500 pl-[10px] pr-[10px]': crypto.price_change_24h >= 0,
                          'text-red-500': crypto.price_change_24h < 0,
                        },
                        {
                          'dark:text-green-500':
                            crypto.price_change_24hChange === 'increased',
                          'dark:text-red-500':
                            crypto.price_change_24hChange === 'decreased',
                        },
                        crypto.price_change_24hChange !== 'same' ? 'fade-out' : '',
                      ]">
                    {{ convertPricePercent(crypto.price_change_24h) }}%
                  </div>
                </a>
              </h2>
            </div>
            <div class="
                  mt-3
                  flex flex-wrap
                  sm:flex-nowrap
                  items-center
                  gap-x-2
                  text-xs
                  leading-5
                  text-gray-400
                ">
              <div class="
                    rounded-md
                    bg-gray-700/40
                    px-2
                    py-1
                    text-xs
                    font-medium
                    text-gray-400
                    ring-1 ring-inset ring-white/10
                  ">
                Price
              </div>
              <p class="fade-in" :class="[
                crypto.priceChange === 'increased'
                  ? 'dark:text-green-500'
                  : '',
                crypto.priceChange === 'decreased'
                  ? 'dark:text-red-500'
                  : '',
                crypto.priceChange !== 'same' ? 'fade-out' : '',
              ]">
              <p v-if="screenWidth < 768">
                ${{ abbreviateNumber(crypto.price) }}
              </p>
              <p v-else>
                {{ formatPrice(crypto.price, 2, 2) }}
              </p>
              </p>
              <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="
                    rounded-md
                    bg-gray-700/40
                    px-2
                    py-1
                    text-xs
                    font-medium
                    text-gray-400
                    ring-1 ring-inset ring-white/10
                  ">
                Market Cap
              </div>
              <p class="whitespace-nowrap truncate fade-in" :class="[
                crypto.market_capChange === 'increased'
                  ? 'dark:text-green-500'
                  : '',
                crypto.market_capChange === 'decreased'
                  ? 'dark:text-red-500'
                  : '',
                crypto.market_capChange !== 'same' ? 'fade-out' : '',
              ]">
              <p v-if="screenWidth < 768">
                {{ abbreviateNumber(crypto.market_cap) }}
              </p>
              <p v-else>
                {{ formatPrice(crypto.market_cap, 0, 2) }}
              </p>
              </p>
              <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="
                    rounded-md
                    bg-gray-700/40
                    px-2
                    py-1
                    my-1
                    text-xs
                    font-medium
                    text-gray-400
                    ring-1 ring-inset ring-white/10
                  ">
                Volume
              </div>
              <p class="whitespace-nowrap truncate fade-in" :class="[
                crypto.volumeChange === 'increased'
                  ? 'dark:text-green-500'
                  : '',
                crypto.volumeChange === 'decreased'
                  ? 'dark:text-red-500'
                  : '',
                crypto.volumeChange !== 'same' ? 'fade-out' : '',
              ]">
              <p v-if="screenWidth < 768">
                {{ abbreviateNumber(crypto.volume) }}
              </p>
              <p v-else>
                {{ formatPrice(crypto.volume, 0, 2) }}
              </p>
              </p>
            </div>
          </div>
          <div class="
                rounded-full
                flex-none
                py-1
                px-2.5
                text-xs
                font-medium
                ring-1 ring-inset
                text-gray-400
                bg-gray-400/10
                ring-gray-400/20
                hidden
                sm:flex
                fade-in
              " :class="[
                {
                  'text-green-500 w-14 justify-center': crypto.price_change_24h >= 0,
                  'text-red-500': crypto.price_change_24h < 0,
                },
                {
                  'dark:text-green-500':
                    crypto.price_change_24hChange === 'increased',
                  'dark:text-red-500':
                    crypto.price_change_24hChange === 'decreased',
                },
                crypto.price_change_24hChange !== 'same' ? 'fade-out' : '',
              ]">
            {{ convertPricePercent(crypto.price_change_24h) }}%
          </div>
          <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400 hidden sm:flex" aria-hidden="true" />
        </li>
      </ul>
      </div>
      <dashboardRecentTrades/>
      </div>
    </main>
  </div>
</template>

<script setup>
/**
* Imports icons from @heroicons/vue package to be used in the component template.
* 
* ChevronRightIcon - Chevron right icon
* MagnifyingGlassIcon - Magnifying glass icon 
* Bars3Icon - 3 bar icon
* 
* useUiStore - Imports the UI store from the global Pinia store.
* ui - Instance of the UI store, contains state like sidebarOpen.
*/
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  Bars3Icon
} from '@heroicons/vue/20/solid';

import { useUiStore } from '@/store'
const ui = useUiStore()

/**
* TABLE_NAME - Constant string containing the name of the Supabase table to query
* 
* supabase - Instance of the Supabase client, initialized with useSupabaseClient()
* Used to make queries to the Supabase API in this component
*/
const TABLE_NAME = 'crypto';
const supabase = useSupabaseClient();

/**
* loading - ref boolean to track loading state
* 
* data - ref array to store fetched data
* 
* timer - ref for interval timer when polling data 
* 
* prevData - ref array to store previous data
* before new data comes in, allows comparing
* previous data to see if UI needs updating
*/

const loading = ref(true);
const data = ref([]);
const timer = ref(null);
const prevData = ref([]); // Store the previous data

/**
* screenWidthRef - ref to store the current window width
* 
* screenWidth - computed property that returns the 
* current value of screenWidthRef
* 
* updateScreenWidth - function to update the screenWidthRef
* when the window is resized. Sets the ref to the new
* window innerWidth.
*/

const screenWidthRef = ref(process.client ? window.innerWidth : 0);
const screenWidth = computed(() => screenWidthRef.value);
const updateScreenWidth = () => {
  screenWidthRef.value = window.innerWidth;
};

/**
* Abbreviates a number value with suffix like K, M, B etc.
* 
* @param {number} number - The number to abbreviate
* @returns {string} The abbreviated number with suffix
*/
const abbreviateNumber = (number) => {
  if (number < 1000) {
    return number.toFixed(2); // Display the price with two decimal places
  }

  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(Math.log10(number) / Math.log10(1000));
  const formattedNumber = (number / Math.pow(1000, suffixNum)).toFixed(2);
  return (
    formattedNumber.replace(/^0*(\d+)(?:\.(\d{2}))?/g, "$1.$2") + suffixes[suffixNum]
  );
};

/**
* Capitalizes the first letter of a string.
* 
* @param {string} str - The string to capitalize 
* @returns {string} The string with the first letter capitalized
*/
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
* Converts a price to a percentage string with 2 decimal places.
* 
* @param {number} price - The price to convert
* @returns {string} The price as a percentage string with 2 decimals
*/
function convertPricePercent(price) {
  const priceChange24hStr = `${price.toFixed(2)}`;

  return priceChange24hStr;
}

/**
* Formats a price value into a currency string.
* 
* @param {number} price - The price to format
* @param {number} minimumFractionDigits - The minimum number of fraction digits to use
* @param {number} maximumFractionDigits - The maximum number of fraction digits to use
* @returns {string} The formatted price string
*/
const formatPrice = (price, minimumFractionDigits, maxFractionDigits) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  }).format(price);

  return formattedPrice;
};

/**
* Compares two number values and returns a string indicating how one relates to the other.
* 
* @param {number} prevValue - The previous value to compare against
* @param {number} newValue - The new value to compare
* @returns {string} Either 'increased', 'decreased', or 'same' based on comparison
*/
const compareValues = (prevValue, newValue) => {
  if (prevValue < newValue) {
    return 'increased';
  } else if (prevValue > newValue) {
    return 'decreased';
  } else {
    return 'same';
  }
};

/**
* Compares two dynamic values and returns a string indicating their relationship.
* 
* @param {number} prevValue - The previous value to compare against 
* @param {number} newValue - The new value to compare
* @returns {string} Either 'increased', 'decreased', or 'same' based on comparison
*/
const compareDynamicValues = (prevValue, newValue) => {
  return compareValues(prevValue, newValue);
};

/**
* Fetches crypto data from the Supabase table.
* 
* Compares new data to previous data to calculate changes.
* Updates the data and prevData refs with the new data.
* 
* @param {SupabaseClient} supabase - Supabase client instance
* @param {string} TABLE_NAME - Name of the Supabase table to query 
* @param {ref} prevData - Previous data to compare against 
* @param {ref} data - Data ref to update with new data
* @param {ref} loading - Loading state ref
*/
const fetchData = async () => {
  const { data: fetchedData, error } = await supabase
    .from(TABLE_NAME)
    .select()
    .order('market_cap', { ascending: false });

  if (error) {
    console.error(error);
  } else {
    // Compare new data with previous data and update the prevData reference
    if (prevData.value.length > 0) {
      for (let i = 0; i < fetchedData.length; i++) {
        const crypto = fetchedData[i];
        const prevCrypto = prevData.value.find((item) => item.id === crypto.id);
        if (prevCrypto) {
          for (const key in crypto) {
            if (typeof crypto[key] === 'number') {
              crypto[`${key}Change`] = compareDynamicValues(
                prevCrypto[key],
                crypto[key]
              );
            }
          }
        }
      }
    }
      prevData.value = fetchedData;
      data.value = fetchedData;
      loading.value = false;
  }
};

/**
* Resets a specific property on each object in the data array 
* after a delay.
*
* @param {string} property - The property name to reset 
* @param {Array} data - The array of data objects
* @param {number} delay - The delay in ms before resetting
*/
const resetPropertyChange = (property) => {
  setTimeout(() => {
    for (const crypto of data.value) {
      crypto[property] = 'same';
    }
  }, 2500);
};

/**
* propertiesToReset - Array of property names to reset on the data objects.
* 
* Contains the properties that indicate change percentages like 
* priceChange, volumeChange etc.
* 
* This will be used in resetPropertyChange() to reset these 
* specific properties after a delay when polling new data.
*/
const propertiesToReset = [
  'priceChange',
  'market_capChange',
  'volumeChange',
  'price_change_24hChange',
];

/**
* Fetches initial data and sets up periodic refreshing when component mounts.
* 
* Calls fetchData() to get initial data.
* Adds window resize event listener to update screen width ref.
* Starts interval timer to call fetchData() every 5 seconds.
* Loops through propertiesToReset array and calls resetPropertyChange() 
* to reset those property changes on each fetch.
*/
onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);

  fetchData();

  timer.value = setInterval(() => {
    fetchData();

    for (const property of propertiesToReset) {
      resetPropertyChange(property);
    }
  }, 50000);
});

/**
* Clears the interval timer when the component unmounts.
* 
* Uses clearInterval() to stop the timer that was 
* started in onMounted() for periodically fetching data.
* 
* @param {number} timer - The interval timer reference
*/
onUnmounted(() => {
  clearInterval(timer.value);
});

/**
* Removes the window resize event listener when the component unmounts.
* 
* Calls window.removeEventListener() to remove the listener that was 
* added in onMounted() for updating the screenWidth ref when the window resizes.
* 
* This avoids potential memory leaks from unused listeners.
*/
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

/**
* Sets the page color mode to 'dark' using definePageMeta().
* 
* @param {Object} params - definePageMeta parameters
* @param {string} params.colorMode - Color mode for the page ('light' or 'dark')
*/
definePageMeta({
  colorMode: 'dark',
});
</script>

<style>
.fade-in {
  transition: color 0.5s ease-in-out;
}

.fade-out {
  transition: color 0.5s ease-in-out;
}

.skeleton-loader {
  display: flex;
  flex-direction: column;
  animation: loading 1s infinite;
}

.skeleton-loader {
  /* Use CSS to set the width of the skeleton loader to match the <ul> */
  width: 100%;
  /* You can adjust this width as needed */
}

.skeleton-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  margin-left: 10;
}

.skeleton-item-image {
  border-radius: 50%;
  background-color: #ccc;
  /* Placeholder color */
}

.skeleton-item-details {
  flex: 1;
}

.skeleton-item-title {
  width: 60%;
  height: 20px;
  background-color: #ccc;
  /* Placeholder color */
  margin-bottom: 10px;
}

.skeleton-item-info {
  display: flex;
}

.skeleton-item-info-box {
  width: 50px;
  height: 10px;
  background-color: #ccc;
  /* Placeholder color */
  margin-right: 10px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #6B7280;
  border-radius: 10px;
  border: 1px solid #111827;
}

::-webkit-scrollbar-track {
  background-color: #111827;
}
</style>