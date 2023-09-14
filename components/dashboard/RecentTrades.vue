<template>
  <aside
    class="
      bg-black/10
      lg:fixed
      lg:bottom-0
      lg:right-0
      lg:top-16
      lg:w-96
      lg:overflow-y-auto
      lg:border-l
      lg:border-white/5
    "
  >
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
<div class="flex items-center relative">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="#ff6a00"
    class="w-4 h-4 mr-1.5"
  >
    <path
      d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"
    />
  </svg>

  <h2 class="text-base font-semibold leading-7 text-white">
    Recent Trades
  </h2>
</div>
    </header>
    <ul role="list">
      <TransitionRoot :show="true" class="divide-y divide-white/5">
        <template v-for="item in payloadArray" :key="item.id">
          <TransitionChild
            appear
            as="template"
            enter="transition ease-out duration-300 opacity-0 transform"
            enter-from="-translate-y-1/4"
            enter-to="translate-y-0 opacity-100"
          >
            <li class="px-4 py-4 sm:px-6 lg:px-8">
              <div class="flex items-center gap-x-3">
                <img
                  :src="item.cryptoImage"
                  alt=""
                  class="h-6 w-6 flex-none rounded-full bg-gray-800"
                />
                <h3
                  class="
                    flex-auto
                    truncate
                    text-sm
                    font-semibold
                    leading-6
                    text-white
                    flex
                  "
                >
                  {{ uppercaseAsset(item.asset) }}
                  <div
                    :class="{
                      'bg-green-700/60': item.type === 'buy',
                      'bg-red-700/60': item.type === 'sell',
                    }"
                    class="
                      ml-2.5
                      rounded-md
                      text-center
                      py-1
                      text-xs
                      font-medium
                      text-gray-200
                      ring-1 ring-inset ring-white/10
                      w-10
                    "
                  >
                    {{ uppercaseType(item.type) }}
                  </div>
                </h3>
                <time class="flex-none text-xs text-gray-600"
                  >{{formatRelativeTime(item.date)}}</time
                >
              </div>
              <p class="mt-3 truncate text-sm text-gray-500 flex space-x-2.5">
<div class="text-left">
  <div
    class="
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
    "
  >
    <div class="relative text-left text-xs font-medium text-gray-300">
      Value
    </div>
    {{formatToUSD(item.value_usd)}}
  </div>
</div>
<div class="text-left">
  <div
    class="
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
    "
  >
    <div class="relative text-left text-xs font-medium text-gray-300">
      Amount
    </div>
    {{item.token_amount}}
  </div>
</div>
<div class="text-left">
  <div
    class="
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
    "
  >
    <div class="relative text-left text-xs font-medium text-gray-300">
      Price
    </div>
    {{formatToUSD(item.token_price)}}
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
import debounce from 'lodash/debounce';
import { ref } from 'vue';
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import {
  Bars3Icon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/20/solid';

const sidebarOpen = ref(false);
const supabase = useSupabaseClient();

// Initialize an array to store payloads with a maximum of 25 items
const payloadArray = ref([]);

// Define a function to add items to the array
const addItemToPayloadArray = (newValue) => {
  payloadArray.value.unshift(newValue);

  // Check if the array exceeds the maximum length of 25
  if (payloadArray.value.length > 25) {
    // If it exceeds, remove the oldest item
    payloadArray.value.pop();
  }
};

function formatRelativeTime(timestamp) {
  const now = new Date().getTime();
  const secondsAgo = Math.floor((now - timestamp) / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo} second${secondsAgo !== 1 ? 's' : ''} ago`;
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  } else if (secondsAgo < 604800) {
    const daysAgo = Math.floor(secondsAgo / 86400);
    return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  } else {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US');
  }
}

function formatToUSD(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number);
}

// Function to uppercase item.asset based on its length
const uppercaseAsset = (asset) => {
  if (asset.length < 4) {
    // If asset has less than 4 characters, uppercase the entire string
    return asset.toUpperCase();
  } else {
    // If asset has 4 or more characters, uppercase the first character and keep the rest as is
    return asset.charAt(0).toUpperCase() + asset.slice(1);
  }
};

const uppercaseType = (type) => {
  return type.charAt(0).toUpperCase() + type.slice(1);
};

// Use debounce to control the rate at which items are added
const debouncedAddItem = debounce(addItemToPayloadArray, 1000); // Adjust the debounce delay as needed

let cryptoData = ref({}); // Initialize cryptoData as a ref object with crypto names as keys

(async () => {
  const { data: loadedCryptoData, error: cryptoError } = await supabase
    .from('crypto')
    .select('name, logo');

  if (!cryptoError && loadedCryptoData) {
    loadedCryptoData.forEach((crypto) => {
      cryptoData.value[crypto.name] = crypto;
    });
  }
})();

const trades = supabase
  .channel('custom-insert-channel')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'trades' }, (payload) => {
    const newValue = payload.new;
    // Check if cryptoData is defined
    if (cryptoData) {
      //console.log(cryptoData._value[newValue.asset])
      // Get the associated crypto data based on 'crypto.name' (or 'trades.asset')
      const cryptoItem = cryptoData.value[newValue.asset];

      if (cryptoItem) {
        // Add the crypto image to the trade data
        newValue.cryptoImage = cryptoItem.logo;

        // Call the debounced function to add the item with the crypto image
        debouncedAddItem(newValue);
      } else {
        console.warn('Crypto item not found for trade:', newValue['asset']);
      }
    } else {
      //console.warn('Crypto data is not available.');
    }
  })
  .subscribe();
</script>


