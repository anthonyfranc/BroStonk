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
      <h2 class="text-base font-semibold leading-7 text-white">Discord</h2>
    </header>
    <ul role="list" class="divide-y divide-white/5">
      <li
        v-for="item in activityItems"
        :key="item.commit"
        class="px-4 py-4 sm:px-6 lg:px-8"
      >
        <div class="flex items-center gap-x-3">
          <img
            :src="item.user.imageUrl"
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
            "
          >
            {{ item.user.name }}
          </h3>
          <time
            :datetime="item.dateTime"
            class="flex-none text-xs text-gray-600"
            >{{ item.date }}</time
          >
        </div>
        <p class="mt-3 truncate text-sm text-gray-500">
          Pushed to
          <span class="text-gray-400">{{ item.projectName }}</span> (<span
            class="font-mono text-gray-400"
            >{{ item.commit }}</span
          >
          on <span class="text-gray-400">{{ item.branch }}</span
          >)
        </p>
      </li>
    </ul>
  </aside>
</template>

<script setup>
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

const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  // More items...
];

const sidebarOpen = ref(false);
</script>
