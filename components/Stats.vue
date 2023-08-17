<template>
  <div
    class="
      w-[95%]
      bg-gray-900
      text-white
      flex flex-col
      lg:flex-row
      justify-between
      break-words
      px-4
      lg:px-6
      py-2.5
      space-x-auto
    "
  >
    <!--Top Gainers-->
    <div class="w-full flex flex-col mr-5">
      <div class="items-center flex justify-between mb-3.5">
        <div class="items-center flex">
          <p class="text-sm font-medium">Top Gainers</p>
        </div>
      </div>
      <div
        class="
          bg-gray-900
          flex flex-col
          justify-between
          border border-white/[0.03] border-solid
          rounded-2xl
          pb-2
        "
      >
        <div
          class="
            items-center
            cursor-pointer
            flex
            justify-between
            mt-2
            py-2
            px-3.5
          "
        >
          <div class="items-center flex">
            <img
              src="../assets/crypto/bitcoin.png"
              class="h-4 mr-2 rounded-full overflow-clip"
            />
            <p class="text-sm overflow-x-hidden overflow-y-auto text-ellipsis">
              Bitcoin
            </p>
          </div>
          <div class="items-center flex ml-3">
            <svg
              viewbox="0 0 24 24"
              focusable="false"
              fill="currentColor"
              class="h-4 w-4 text-emerald-500 mr-1"
            >
              <path
                fill="currentColor"
                d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
              ></path>
            </svg>
            <p class="text-emerald-500 text-sm">77.86%</p>
          </div>
        </div>
      </div>
    </div>
    <!--End of Top Gainers-->
    <!--Newly Listed-->
    <div class="w-full flex flex-col mr-5">
      <div class="items-center flex justify-between mb-3.5">
        <div class="items-center flex">
          <p class="text-sm font-medium">Recently Added</p>
        </div>
      </div>
      <div
        class="
          bg-gray-900
          flex flex-col
          justify-between
          border border-white/[0.03] border-solid
          rounded-2xl
          pb-2
        "
      >
        <div
          class="
            items-center
            cursor-pointer
            flex
            justify-between
            mt-2
            py-2
            px-3.5
          "
        >
          <div class="items-center flex">
            <img
              src="../assets/crypto/bitcoin.png"
              class="h-4 mr-2 rounded-full overflow-clip"
            />
            <p class="text-sm overflow-x-hidden overflow-y-auto text-ellipsis">
              Bitcoin
            </p>
          </div>
          <div class="items-center flex ml-3">
            <svg
              viewbox="0 0 24 24"
              focusable="false"
              fill="currentColor"
              class="h-4 w-4 text-emerald-500 mr-1"
            >
              <path
                fill="currentColor"
                d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
              ></path>
            </svg>
            <p class="text-emerald-500 text-sm">77.86%</p>
          </div>
        </div>
      </div>
    </div>
    <!--End of Newly Listed-->
    <!--Biggest Lost-->
    <div class="w-full flex flex-col mr-5">
      <div class="items-center flex justify-between mb-3.5">
        <div class="items-center flex">
          <p class="text-sm font-medium">Trending</p>
        </div>
      </div>
      <div
        class="
          bg-gray-900
          flex flex-col
          justify-between
          border border-white/[0.03] border-solid
          rounded-2xl
          pb-2
        "
      >
        <div
          class="
            items-center
            cursor-pointer
            flex
            justify-between
            mt-2
            py-2
            px-3.5
          "
        >
          <div class="items-center flex">
            <img
              src="../assets/crypto/bitcoin.png"
              class="h-4 mr-2 rounded-full overflow-clip"
            />
            <p class="text-sm overflow-x-hidden overflow-y-auto text-ellipsis">
              Bitcoin
            </p>
          </div>
          <div class="items-center flex ml-3">
            <svg
              viewbox="0 0 24 24"
              focusable="false"
              fill="currentColor"
              class="h-4 w-4 text-emerald-500 mr-1"
            >
              <path
                fill="currentColor"
                d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
              ></path>
            </svg>
            <p class="text-emerald-500 text-sm">77.86%</p>
          </div>
        </div>
      </div>
    </div>
    <!--Biggest Lost-->
  </div>
</template>
