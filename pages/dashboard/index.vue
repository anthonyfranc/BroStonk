<template>
  <div>
    <dashboardSideMenu />
    <div class="xl:pl-72">
      <main class="lg:pr-96">
        <header
          class="
            flex
            items-center
            justify-between
            border-b border-white/5
            px-4
            py-4
            sm:px-6 sm:py-6
            lg:px-8
          "
        >
          <h1 class="text-base font-semibold leading-7 text-white">
            Supported Crypto
          </h1>
          <div class="relative">
            <span
              class="
                flex
                items-center
                gap-x-1
                text-sm
                font-medium
                leading-6
                text-white
              "
            >
              <div
                :class="[
                  {
                    'text-green-400 bg-green-400/10 animate-pulse':
                      webSocketStatus === 'WebSocket connection opened',
                    'text-yellow-400 bg-yellow-400/10':
                      webSocketStatus ===
                      'WebSocket connection closed due to inactivity',
                    'text-rose-400 bg-rose-400/10 animate-pulse':
                      webSocketStatus === 'WebSocket connection closed',
                  },
                  'text-gray-500 bg-gray-100/10 flex-none rounded-full p-1 animate-pulse',
                ]"
              >
                <div class="h-2 w-2 rounded-full bg-current" />
              </div>
              <span
                v-if="webSocketStatus === 'WebSocket connection opened'"
                class="flex items-center"
              >
                Connected
                <span class="text-gray-400 px-2">
                  <svg
                    viewBox="0 0 2 2"
                    class="h-1 w-1 flex-none fill-gray-300"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                </span>
                {{ webSocketPing }}
              </span>
              <span
                v-else-if="
                  webSocketStatus ===
                  'WebSocket connection closed due to inactivity'
                "
              >
                Connection to has been closed due to inactivity.
              </span>
              <span
                v-else-if="webSocketStatus === 'WebSocket connection closed'"
              >
                Connection has been closed.
              </span>
              <span v-else>Connecting to Server</span>
            </span>
          </div>
          <!-- Sort dropdown -->
        </header>
        <!--Skeleton Loader-->
        <div class="divide-y divide-white/5 animate-pulse" v-if="loading">
          <!-- Create multiple skeleton items to mimic the list -->
          <div
            v-for="index in 5"
            :key="index"
            class="
              relative
              flex flex-wrap
              sm:flex-nowrap
              items-center
              space-x-4
              px-4
              py-4
              sm:px-6
              lg:px-8
            "
          >
            <div class="min-w-0 flex-auto">
              <div class="flex items-center gap-x-3">
                <svg
                  fill="#6b7280"
                  class="h-6 dark:bg-gray-700 rounded-full"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M3.31935068,14.3847701 C4.3645353,18.1979659 7.85504258,21 12,21 C15.3304686,21 18.2384173,19.1909776 19.7948361,16.5019428 L16.5,13.2071068 L13.8535534,15.8535534 C13.6582912,16.0488155 13.3417088,16.0488155 13.1464466,15.8535534 L7.5,10.2071068 L3.35355339,14.3535534 C3.34252493,14.3645819 3.33110946,14.3749874 3.31935068,14.3847701 L3.31935068,14.3847701 Z M3.08090788,13.2119853 L7.14644661,9.14644661 C7.34170876,8.95118446 7.65829124,8.95118446 7.85355339,9.14644661 L13.5,14.7928932 L16.1464466,12.1464466 C16.3417088,11.9511845 16.6582912,11.9511845 16.8535534,12.1464466 L20.2680678,15.560961 C20.7390577,14.46885 21,13.2648982 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,12.4110121 3.02755133,12.8155892 3.08090788,13.2119853 L3.08090788,13.2119853 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M15,6 L17,6 C17.5522847,6 18,6.44771525 18,7 L18,9 C18,9.55228475 17.5522847,10 17,10 L15,10 C14.4477153,10 14,9.55228475 14,9 L14,7 C14,6.44771525 14.4477153,6 15,6 Z M15,7 L15,9 L17,9 L17,7 L15,7 Z"
                    ></path>
                  </g>
                </svg>
                <h2 class="min-w-0 text-md font-semibold leading-6 text-white">
                  <a href="#" class="flex items-center gap-x-2">
                    <span class="truncate">
                      <div
                        class="
                          h-2.5
                          bg-gray-200
                          rounded-full
                          dark:bg-gray-700
                          w-28
                        "
                      ></div>
                    </span>
                    <span class="absolute inset-0" />
                  </a>
                </h2>
              </div>
              <div
                class="
                  mt-3
                  flex flex-wrap
                  sm:flex-nowrap
                  items-center
                  gap-x-2.5
                  text-xs
                  leading-5
                  text-gray-400
                "
              >
                <div
                  class="
                    h-2.5
                    bg-gray-200
                    rounded-full
                    dark:bg-gray-700
                    w-32
                    mb-4
                  "
                ></div>
                <div
                  class="
                    h-2.5
                    bg-gray-200
                    rounded-full
                    dark:bg-gray-700
                    w-32
                    mb-4
                  "
                ></div>
                <div
                  class="
                    h-2.5
                    bg-gray-200
                    rounded-full
                    dark:bg-gray-700
                    w-32
                    mb-4
                  "
                ></div>
              </div>
            </div>
            <div class="pr-10">
              <div
                class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mb-4"
              ></div>
            </div>
          </div>
        </div>
        <!-- Crypto list -->
        <ul role="list" class="divide-y divide-white/5">
          <li
            v-for="(crypto, index) in data"
            :key="crypto.id"
            class="
              relative
              flex flex-wrap
              sm:flex-nowrap
              items-center
              space-x-4
              px-4
              py-4
              sm:px-6
              lg:px-8
            "
          >
            <div class="min-w-0 flex-auto">
              <div class="flex items-center gap-x-3">
                <img :src="crypto.logo" class="h-6" />
                <h2 class="min-w-0 text-md font-semibold leading-6 text-white">
                  <a href="#" class="flex items-center gap-x-2">
                    <span class="truncate">{{
                      capitalizeFirstLetter(crypto.name)
                    }}</span>
                    <span class="text-gray-400">
                      <svg
                        viewBox="0 0 2 2"
                        class="h-0.5 w-0.5 flex-none fill-gray-300"
                      >
                        <circle cx="1" cy="1" r="1" />
                      </svg>
                    </span>
                    <span class="text-gray-400">BTC</span>
                    <span class="absolute inset-0" />
                    <div
                      class="
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
                      "
                    >
                      -0.23%
                    </div>
                  </a>
                </h2>
              </div>
              <div
                class="
                  mt-3
                  flex flex-wrap
                  sm:flex-nowrap
                  items-center
                  gap-x-2.5
                  text-xs
                  leading-5
                  text-gray-400
                "
              >
                <div
                  class="
                    rounded-md
                    bg-gray-700/40
                    px-2
                    py-1
                    text-xs
                    font-medium
                    text-gray-400
                    ring-1 ring-inset ring-white/10
                  "
                >
                  Price
                </div>
                <p
                  class="fade-in"
                  :class="[
                    crypto.priceChange === 'increased'
                      ? 'dark:text-green-500'
                      : '',
                    crypto.priceChange === 'decreased'
                      ? 'dark:text-red-500'
                      : '',
                    crypto.priceChange !== 'same' ? 'fade-out' : '',
                  ]"
                >
                  {{ formatPrice(crypto.price, 2, 2) }}
                </p>
                <svg
                  viewBox="0 0 2 2"
                  class="h-0.5 w-0.5 flex-none fill-gray-300"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div
                  class="
                    rounded-md
                    bg-gray-700/40
                    px-2
                    py-1
                    text-xs
                    font-medium
                    text-gray-400
                    ring-1 ring-inset ring-white/10
                  "
                >
                  Market Cap
                </div>
                <p
                  class="whitespace-nowrap truncate fade-in"
                  :class="[
                    crypto.market_capChange === 'increased'
                      ? 'dark:text-green-500'
                      : '',
                    crypto.market_capChange === 'decreased'
                      ? 'dark:text-red-500'
                      : '',
                    crypto.market_capChange !== 'same' ? 'fade-out' : '',
                  ]"
                >
                  {{ formatPrice(crypto.market_cap, 0, 2) }}
                </p>
                <svg
                  viewBox="0 0 2 2"
                  class="h-0.5 w-0.5 flex-none fill-gray-300"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div
                  class="
                    rounded-md
                    bg-gray-700/40
                    px-2
                    py-1
                    text-xs
                    font-medium
                    text-gray-400
                    ring-1 ring-inset ring-white/10
                  "
                >
                  Volume
                </div>
                <p
                  class="whitespace-nowrap truncate fade-in"
                  :class="[
                    crypto.volumeChange === 'increased'
                      ? 'dark:text-green-500'
                      : '',
                    crypto.volumeChange === 'decreased'
                      ? 'dark:text-red-500'
                      : '',
                    crypto.volumeChange !== 'same' ? 'fade-out' : '',
                  ]"
                >
                  {{ formatPrice(crypto.volume, 0, 2) }}
                </p>
              </div>
            </div>
            <div
              class="
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
                hidden
                sm:flex
                fade-in
              "
              :class="[
                {
                  'text-green-500': crypto.price_change_24h >= 0,
                  'text-red-500': crypto.price_change_24h < 0,
                },
                {
                  'dark:text-green-500':
                    crypto.price_change_24hChange === 'increased',
                  'dark:text-red-500':
                    crypto.price_change_24hChange === 'decreased',
                },
                crypto.price_change_24hChange !== 'same' ? 'fade-out' : '',
              ]"
            >
              {{ convertPricePercent(crypto.price_change_24h) }}%
            </div>
            <ChevronRightIcon
              class="h-5 w-5 flex-none text-gray-400 hidden sm:flex"
              aria-hidden="true"
            />
          </li>
        </ul>
      </main>
      <!-- Discord -->
      <dashboardDiscord />
      <!--Discord-->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import {
  Bars3Icon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/20/solid';

const webSocketStatus = inject('webSocketStatus', ref('')); // Inject WebSocket status
const webSocketPing = inject('webSocketPing');

/* 
  Supabase
*/

const TABLE_NAME = 'crypto';
const supabase = useSupabaseClient();

const loading = ref(true);
const data = ref([]);
const timer = ref(null);
const prevData = ref([]); // Store the previous data
const changedItems = ref([]); //Color Changes

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function convertPricePercent(price) {
  const priceChange24hFloat = parseFloat(price);
  const priceChange24hStr = `${price.toFixed(2)}`;

  return priceChange24hStr;
}

const formatPrice = (price, minimumFractionDigits, maxFractionDigits) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  }).format(price);

  return formattedPrice;
};

const compareValues = (prevValue, newValue) => {
  if (prevValue < newValue) {
    return 'increased';
  } else if (prevValue > newValue) {
    return 'decreased';
  } else {
    return 'same';
  }
};

const compareDynamicValues = (prevValue, newValue) => {
  return compareValues(prevValue, newValue);
};

// Define the fetchData function to fetch data from Supabase
const fetchData = async () => {
  const { data: fetchedData, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
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

    // Update the data and prevData references
    prevData.value = fetchedData;
    data.value = fetchedData;
    loading.value = false;
  }
};

// Define a method to reset a specific property after a delay
const resetPropertyChange = (property) => {
  setTimeout(() => {
    for (const crypto of data.value) {
      crypto[property] = 'same';
    }
  }, 1500);
};

// Define the properties you want to reset
const propertiesToReset = [
  'priceChange',
  'market_capChange',
  'volumeChange',
  'price_change_24hChange',
];

// Fetch the data once when the component is mounted
onMounted(() => {
  fetchData();

  // Start the timer to periodically refresh the data
  timer.value = setInterval(() => {
    fetchData();

    // Reset each property in propertiesToReset
    for (const property of propertiesToReset) {
      resetPropertyChange(property);
    }
  }, 5000);
});

// Clear the timer when the component is unmounted
onUnmounted(() => {
  clearInterval(timer.value);
});

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
  width: 100%; /* You can adjust this width as needed */
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
  background-color: #ccc; /* Placeholder color */
}

.skeleton-item-details {
  flex: 1;
}

.skeleton-item-title {
  width: 60%;
  height: 20px;
  background-color: #ccc; /* Placeholder color */
  margin-bottom: 10px;
}

.skeleton-item-info {
  display: flex;
}

.skeleton-item-info-box {
  width: 50px;
  height: 10px;
  background-color: #ccc; /* Placeholder color */
  margin-right: 10px;
}
</style>
