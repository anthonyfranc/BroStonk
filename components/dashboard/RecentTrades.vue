<template>
  <aside class="
      bg-black/10
      lg:fixed
      lg:bottom-0
      lg:right-0
      lg:top-16
      lg:w-96
      lg:overflow-y-auto
      lg:border-l
      lg:border-white/5
    ">
    <header class="
        flex
        items-center
        justify-between
        border-b border-white/5
        px-4
        py-4
        sm:px-6 sm:py-6
        lg:px-8
      ">
      <div class="flex items-center relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff6a00" class="w-4 h-4 mr-1.5">
          <path
            d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
        </svg>

        <h2 class="text-base font-semibold leading-7 text-white">
          Recent Trades
        </h2>
      </div>
    </header>
    <ul role="list">
      <TransitionRoot :show="true" class="divide-y divide-white/5">
        <template v-if="payloadArray.length < 1">
          <div class="text-center p-10">
            <div role="status">
              <svg aria-hidden="true"
                class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#ff6a00]"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor" />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill" />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </template>
        <template v-for="item in payloadArray" :key="item.id">
          <TransitionChild appear as="template" enter="transition ease-out duration-300 opacity-0 transform"
            enter-from="-translate-y-1/4" enter-to="translate-y-0 opacity-100">
            <li class="px-4 py-4 sm:px-6 lg:px-8">
              <div class="flex items-center gap-x-3">
                <img :src="item.cryptoImage" alt="" class="h-6 w-6 flex-none rounded-full bg-gray-800" />
                <h3 class="
                    flex-auto
                    truncate
                    text-sm
                    font-semibold
                    leading-6
                    text-white
                    flex
                  ">
                  {{ formatString(item.asset, 'asset') }}
                  <div :class="{
                    'bg-green-700/60': item.type === 'buy',
                    'bg-red-700/60': item.type === 'sell',
                  }" class="
                      ml-2.5
                      rounded-md
                      text-center
                      py-1
                      text-xs
                      font-medium
                      text-gray-200
                      ring-1 ring-inset ring-white/10
                      w-10
                    ">
                    {{ formatString(item.type, 'type') }}
                  </div>
                </h3>
                <time class="flex-none text-xs text-gray-600">{{ formatRelativeTime(item.insert_date) }}</time>
              </div>
              <p class="mt-3 truncate text-sm text-gray-500 flex space-x-2.5">
              <div class="text-left">
                <div class="
      relative
      rounded-md
      bg-gray-700/40
      px-2
      py-1.5
      my-1
      text-xs
      font-medium
      text-gray-400
      ring-1 ring-inset ring-white/10
    ">
                  <div class="relative text-left text-xs font-medium text-gray-300">
                    Price
                  </div>
                  {{ formatToUSD(item.token_price) }}
                </div>
              </div>
              <div class="text-left">
                <div class="
      relative
      rounded-md
      bg-gray-700/40
      px-2
      py-1.5
      my-1
      text-xs
      font-medium
      text-gray-400
      ring-1 ring-inset ring-white/10
    ">
                  <div class="relative text-left text-xs font-medium text-gray-300">
                    Value
                  </div>
                  {{ formatToUSD(item.value_usd) }}
                </div>
              </div>
              <div class="text-left">
                <div class="
      relative
      rounded-md
      bg-gray-700/40
      px-2
      py-1.5
      my-1
      text-xs
      font-medium
      text-gray-400
      ring-1 ring-inset ring-white/10
    ">
                  <div class="relative text-left text-xs font-medium text-gray-300">
                    Amount
                  </div>
                  {{ formatToNumber(item.token_amount) }}
                </div>
              </div>

              </p>
            </li>
          </TransitionChild>
        </template>
      </TransitionRoot>
    </ul>
  </aside>
</template>

<script setup>
/**
 * Imports lodash debounce utility
 * Imports Vue ref API
 * Imports Transition components from HeadlessUI
*/

import debounce from 'lodash/debounce';
import { ref } from 'vue';
import {
  TransitionChild, 
  TransitionRoot
} from '@headlessui/vue';

/**
 * Gets the Supabase client instance
 * 
 * @returns {SupabaseClient} The Supabase client object
 * 
 * Uses the useSupabaseClient() composable from @supabase/auth-helpers-vue
 * This returns the initialized Supabase client
*/

const supabase = useSupabaseClient();

/**
 * Formats a timestamp as relative time string
 * 
 * @param {number} timestamp - The timestamp to format 
 * 
 * @returns {string} The relative time string
 *
 * Calculates difference between timestamp and current time
 * Formats difference based on seconds, minutes, hours, days
 * Returns exact date string if more than a week ago
*/
function formatRelativeTime(timestamp) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(timestamp)) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`; 
  } else if (diffInSeconds < 3600) {
    const minutesAgo = Math.floor(diffInSeconds / 60);
    return `${minutesAgo} minutes ago`;
  } else if (diffInSeconds < 86400) {
    const hoursAgo = Math.floor(diffInSeconds / 3600); 
    return `${hoursAgo} hours ago`;
  } else if (diffInSeconds < 604800) {
    const daysAgo = Math.floor(diffInSeconds / 86400);
    return `${daysAgo} days ago`;
  } else {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US');
  }
}

/**
 * Formats a number as USD currency string
 * 
 * @param {number} number - The number to format
 * 
 * @returns {string} The formatted USD currency string
 *
 * Uses Intl.NumberFormat to format with:
 * - Locale: 'en-US'
 * - Style: 'currency' 
 * - Currency: 'USD'
 */

function formatToUSD(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number);
}

/**
 * Formats a number to a decimal string 
 * 
 * @param {number} number - The number to format
 * 
 * @returns {string} The formatted decimal string
 * 
 * Uses Intl.NumberFormat to format the number
 * Sets minimum and maximum fraction digits
 * Defaults to 'en-US' locale and 'USD' currency
*/

function formatToNumber(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    currency: 'USD',
    minimumFractionDigits: 2, // Set the minimum decimal places
    maximumFractionDigits: 3  // Set the maximum decimal places
  }).format(number);
}

/**
 * Formats asset and type strings 
 * 
 * @param {string} string - The string to format
 * @param {string} [part] - Optional part of string to format (asset, type)
 *
 * @returns {string} The formatted string
*/

function formatString(string, part) {

  // Default to formatting full string
  let formatString = string;

  if (part === 'asset' && string.length < 4) {
    // If asset and less than 4 characters, uppercase full string
    formatString = string.toUpperCase();

  } else if (part === 'asset') {
    // If asset and 4+ characters, uppercase first character
    formatString = string.charAt(0).toUpperCase() + string.slice(1);

  } else if (part === 'type') {
    // If type, uppercase first character
    formatString = string.charAt(0).toUpperCase() + string.slice(1);
  }

  return formatString;
}

/**
 * cryptoData ref object to store crypto metadata
 * 
 * @type {Ref<Object>}
 *
 * payloadArray ref array to store recent trades
 * 
 * @type {Ref<Array>}
*/

let cryptoData = ref({});
let payloadArray = ref([]); // Initialize payloadArray as a ref object

/**
 * Fetches crypto data from Supabase
 * 
 * @async
 *
 * Queries Supabase for crypto name and logo
 * Populates the cryptoData ref with the returned data
 * cryptoData is cleared before adding new data 
 * 
 * cryptoData is populated as a key/value object:
 * {
 *   [cryptoName]: {name, logo} 
 * }
 *
 * This allows looking up a crypto's logo by name later
 * 
 * Logs any errors
*/

async function fetchCryptoData() {
  try {
    const { data, error } = await supabase.from('crypto').select('name, logo');
    if (!error && data) {
      // Clear cryptoData before populating it
      cryptoData.value = {};
      data.forEach((crypto) => {
        cryptoData.value[crypto.name] = crypto;
      });
    }
  } catch (error) {
    console.error('Error fetching crypto data:', error);
  }
}

/**
 * Fetches latest trades data from Supabase
 * 
 * @async
 * 
 * Gets trades ordered by descending insert date
 * Limits to 10 trades
 * 
 * Checks each trade against existing payloadArray
 * Skips duplicates based on ID
 * 
 * Adds crypto logo to each trade object
 * Calls debouncedAddItem() to add trade
 * 
 * Logs error if crypto data not found
*/

async function fetchTradesData() {
  try {
    const { data, error } = await supabase
      .from('trades')
      .select()
      .order('insert_date', { ascending: false })
      .limit(10); // Adjust the limit as needed

    // Inside the fetchTradesData function
    if (!error && data) {
      data.forEach((newValue) => {
        // Check if the item with the same ID already exists in the array
        const isDuplicate = payloadArray.value.some((item) => item.id === newValue.id);

        if (!isDuplicate) {
          const cryptoItem = cryptoData.value[newValue.asset];
          if (cryptoItem) {
            newValue.cryptoImage = cryptoItem?.logo;
            debouncedAddItem(newValue); // Call the debounced function to add the item
          } else {
            console.warn('Crypto item not found for trade:', newValue.asset);
          }
        }
      });
    }
  } catch (error) {
    console.error('Error fetching trades data:', error);
  }
}

/**
 * Injects the webSocketStatus ref 
 * 
 * @param {Ref} webSocketStatus - The ref holding the WebSocket status
 * 
 * This allows accessing the WebSocket status in the component
 * By injecting as a ref, components will reactively update if it changes
*/

const webSocketStatus = inject('webSocketStatus', ref(''));

/**
 * Debounces adding an item to the payload array 
 * 
 * @param {Object} item - The item object to add 
 * 
 * Prepends the item to the payloadArray
 * Checks if array length exceeds 15
 * If so, removes the oldest item (array.pop())
 * 
 * Uses Lodash debounce utility to limit function calls
 * Debounced with 500ms delay
*/

const debouncedAddItem = debounce((item) => {
  payloadArray.value.unshift(item); // Prepend the item to the array

  // Check if the array length exceeds 15
  if (payloadArray.value.length > 15) {
    payloadArray.value.pop(); // Remove the oldest item
  }
}, 500);

/**
 * Fetches crypto data and trades data periodically
 * 
 * Calls fetchCryptoData() and fetchTradesData() asynchronously
 * Checks webSocketStatus before calling fetchTradesData()
 * 
 * Sets a timeout to call itself recursively every 800ms
 * This creates a polling effect to refresh data every 800ms
 * 
 * @async
*/

async function fetchDataPeriodically() {
  //await fetchCryptoData();

  // Check if WebSocket is open before fetching trades data
  if (webSocketStatus.value === 'WebSocket connection opened') {
    await fetchTradesData();
  }

  setTimeout(fetchDataPeriodically, 2000); // Adjust the polling interval (e.g., every 5 seconds)
}

/**
* Starts polling to periodically fetch new data
* 
* Calls the fetchDataPeriodically() method
* 
* This will trigger the recursive fetching of 
* crypto data and trade data every 800ms
*
* @param {function} fetchCryptoData - Fetches the crypto data
* @param {function} fetchDataPeriodically - Starts recursive fetching of data
*/

fetchCryptoData();
fetchDataPeriodically();
</script>