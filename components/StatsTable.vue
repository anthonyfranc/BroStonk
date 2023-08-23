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
            <tbody>
              <template v-if="loading">
                <!-- Skeleton loader for table rows -->
                <tr>
                  <td colspan="9" class="text-center py-12">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="
                          inline
                          w-10
                          h-10
                          mr-2
                          text-gray-200
                          animate-spin
                          dark:text-gray-600
                          fill-[#ff6a00]
                        "
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr
                  v-for="(coin, index) in cryptoData"
                  :key="coin.id"
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
                    class="
                      items-center
                      font-medium
                      text-gray-900
                      dark:text-white
                    "
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
                      "
                      :class="[
                        getFieldValueClass(coin, 'price'),
                        {
                          'dark:text-green-500':
                            coin.new &&
                            coin.old &&
                            coin.new.price > coin.old.price,
                          'dark:text-red-500':
                            coin.new &&
                            coin.old &&
                            coin.new.price < coin.old.price,
                        },
                        'transition-color',
                      ]"
                      >{{ formatPrice(coin.price, 2, 3) }}</span
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
                      {{ formatPrice(coin.liquidity, 0, 2) }}
                    </div>
                  </td>
                  <td
                    class="
                      px-4
                      py-2
                      font-medium
                      text-gray-900
                      whitespace-nowrap
                    "
                    :class="[
                      getFieldValueClass(coin, 'market_cap'),
                      {
                        'dark:text-green-500':
                          coin.new &&
                          coin.old &&
                          coin.new.market_cap > coin.old.market_cap,
                        'dark:text-red-500':
                          coin.new &&
                          coin.old &&
                          coin.new.market_cap < coin.old.market_cap,
                      },
                      'transition-color',
                    ]"
                  >
                    {{ formatPrice(coin.market_cap, 0, 2) }}
                  </td>
                  <td
                    class="
                      px-4
                      py-2
                      font-medium
                      text-gray-900
                      whitespace-nowrap
                    "
                    :class="[
                      getFieldValueClass(coin, 'volume'),
                      {
                        'dark:text-green-500':
                          coin.new &&
                          coin.old &&
                          coin.new.volume > coin.old.volume,
                        'dark:text-red-500':
                          coin.new &&
                          coin.old &&
                          coin.new.volume < coin.old.volume,
                      },
                      'transition-color',
                    ]"
                  >
                    {{ formatPrice(coin.volume, 0, 2) }}
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
                      {{ formatPrice(coin.volume_7d, 0, 2) }}
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
              </template>
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

const FETCH_DELAY = 500; // Define a constant for the loading delay
const CHANNEL_NAME = 'custom-insert-channel';
const TABLE_NAME = 'crypto';

const loading = ref(true);
const skeletonRowCount = 5;
const valueChanged = ref(false);

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatPrice = (price, minimumFractionDigits, maxFractionDigits) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  }).format(price);

  return formattedPrice;
};

// Create a Supabase client instance
const supabaseUrl = 'https://jjtqvxvprcmblezstaks.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdHF2eHZwcmNtYmxlenN0YWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NjAxMjAsImV4cCI6MjAwNzMzNjEyMH0.glxbp12RNVsu6TaSqPGH_CUDs9AH7T1jNkfwLtz3ZQI';
const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  },
};

const supabase = createClient(supabaseUrl, supabaseKey, options);

const handleCryptoUpdates = (updatedCryptoItem) => {
  const existingIndex = cryptoData.value.findIndex(
    (item) => item.id === updatedCryptoItem.id
  );

  if (existingIndex !== -1) {
    Object.assign(cryptoData.value[existingIndex], updatedCryptoItem);
    const updatedItem = { ...cryptoData.value[existingIndex] };
    updatedItem.old = { ...updatedItem.new };
    updatedItem.new = { ...updatedCryptoItem };

    // Check if fields other than 'updated_at' have changed
    const fieldsChanged = Object.keys(updatedItem.new).filter(
      (field) =>
        field !== 'updated_at' &&
        updatedItem.new[field] !== updatedItem.old[field]
    );

    // Call the function to update the UI class for relevant fields
    fieldsChanged.forEach((field) => {
      updateFieldColor(updatedItem, field);
    });

    // Update the item in the cryptoData array
    cryptoData.value.splice(existingIndex, 1, updatedItem);
  }
};

let subscription;

// Define the async function to fetch initial cryptocurrency data
const fetchCryptoData = async () => {
  try {
    const { data, error } = await supabase.from(TABLE_NAME).select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('An error occurred:', error);
    return [];
  }
};

// Implement a simple debounce function
const debounce = (fn, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// Create a debounced version of handleCryptoUpdates
const debouncedHandleCryptoUpdates = debounce(handleCryptoUpdates, 0);

const resetValueChanged = () => {
  valueChanged.value = false;
};

// Set up a delay to reset valueChanged
watch(valueChanged, () => {
  if (valueChanged.value) {
    setTimeout(resetValueChanged, 500); // Adjust the delay as needed
  }
});

const getFieldValueClass = (cryptoItem, field) => {
  if (field === 'updated_at') {
    return ''; // Skip timestamp fields
  }

  if (cryptoItem.new && cryptoItem.old) {
    const newValue = cryptoItem.new[field];
    const oldValue = cryptoItem.old[field];

    if (newValue > oldValue) {
      return valueChanged.value ? 'transition-color' : '';
    } else if (newValue < oldValue) {
      return valueChanged.value ? 'transition-color' : '';
    }
  }
  return valueChanged.value ? 'transition-color' : '';
};

// Define a function to update the UI class for field color
const updateFieldColor = (cryptoItem, field) => {
  if (field === 'updated_at') {
    return; // Skip timestamp fields
  }

  const oldValue = cryptoItem.old[field];
  const newValue = cryptoItem.new[field];

  if (oldValue !== undefined && newValue !== undefined) {
    const fieldElement = document.querySelector(
      `[data-crypto-id="${cryptoItem.id}"] .${field}`
    );

    if (fieldElement) {
      const colorClass =
        oldValue < newValue ? 'text-green-500' : 'text-red-500';

      fieldElement.classList.remove(
        //'text-white',
        'text-green-500',
        'text-red-500'
      );
      fieldElement.classList.add(colorClass);
    }
    // Set valueChanged to true when the value changes
    if (newValue !== oldValue) {
      valueChanged.value = true;
    }
  }
};

const cryptoData = ref([]);

// Define the setup function
const setup = async () => {
  console.log('Setting up the component...');
  try {
    loading.value = true;

    // Simulate loading delay with a 1-second timer
    setTimeout(async () => {
      cryptoData.value = await fetchCryptoData();
      console.log('Fetched initial crypto data:', cryptoData.value);
      loading.value = false;
    }, 500);

    console.log('Subscribing to Supabase channel...');
    try {
      subscription = supabase
        .channel('custom-insert-channel')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'crypto' },
          async (payload) => {
            const { new: updatedCryptoItem } = payload;
            console.log('Received update from channel:', updatedCryptoItem);

            // Use the debounced function here
            debouncedHandleCryptoUpdates(updatedCryptoItem);
          }
        )
        .subscribe();
    } catch (error) {
      console.error('Error subscribing to Supabase channel:', error);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

if (process.client) {
  console.log('Component mounted.');
  setup();
}

onUnmounted(() => {
  console.log('Component unmounted. Cleaning up...');
  subscription.unsubscribe();
  console.log('Unsubscribed from Supabase channel.');
});
</script>

<style>
.skeleton-cell {
  height: 20px;
  background-color: #4b5563;
  animation: skeleton-loading 1s infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

.transition-color {
  transition: color 0.2s linear; /* Adjust the duration as needed */

  /* Default text color */
  color: white;

  /* Green text color */
  &.text-green-500 {
    color: #10b981;
  }

  /* Red text color */
  &.text-red-500 {
    color: #ef4444;
  }
}
</style>
