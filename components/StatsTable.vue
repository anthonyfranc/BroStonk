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
            class="
              w-full
              text-sm text-left text-gray-500
              dark:text-gray-400
              table-auto
            "
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
                <th scope="col" class="px-2 py-2">Rank</th>
                <th scope="col" class="px-2 py-2">Name</th>
                <th scope="col" class="px-2 py-2">Price</th>
                <th scope="col" class="px-2 py-2">Price Change (24h)</th>
                <th scope="col" class="px-2 py-2">Market Cap</th>
                <th scope="col" class="px-2 py-2">Volume (24h)</th>
                <th scope="col" class="px-2 py-2">Volume (7d)</th>
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
                  v-for="(crypto, index) in data"
                  :key="crypto.id"
                  class="
                    border-b
                    dark:border-gray-600
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                  "
                >
                  <td class="w-22 px-2 py-4">
                    <div class="flex items-center">{{ index + 1 }}</div>
                  </td>
                  <td
                    scope="row"
                    class="font-medium text-gray-900 dark:text-white"
                  >
                    {{ capitalizeFirstLetter(crypto.name) }}
                  </td>
                  <td class="px-2 py-2">
                    <span
                      class="
                        font-medium
                        text-gray-900
                        whitespace-nowrap
                        fade-in
                        text-white
                      "
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
                      {{ formatPrice(crypto.price, 2, 3) }}
                    </span>
                  </td>
                  <td
                    class="
                      px-2
                      py-2
                      font-medium
                      text-gray-900
                      whitespace-nowrap
                      dark:text-white
                    "
                  >
                    <div class="flex">
                      {{ formatPrice(crypto.price_change_24h, 0, 2) }}
                    </div>
                  </td>
                  <td
                    class="
                      px-2
                      py-2
                      font-medium
                      text-gray-900
                      whitespace-nowrap
                      fade-in
                      text-white
                    "
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
                  </td>
                  <td
                    class="
                      px-2
                      py-2
                      font-medium
                      text-gray-900
                      whitespace-nowrap
                      fade-in
                      text-white
                    "
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
                  </td>
                  <td
                    class="
                      px-2
                      py-2
                      font-medium
                      text-gray-900
                      whitespace-nowrap
                      dark:text-white
                    "
                  >
                    <div class="flex items-center">
                      {{ formatPrice(crypto.volume_7d, 0, 2) }}
                    </div>
                  </td>
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
  'liquidityChange',
  'market_capChange',
  'volumeChange',
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
</script>

<style>
.fade-in {
  transition: color 0.5s ease-in-out;
}

.fade-out {
  transition: color 0.5s ease-in-out;
}
</style>
