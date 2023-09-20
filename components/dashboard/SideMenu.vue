<template>
  <TransitionRoot as="template" :show="ui.sidebarOpen">
    <Dialog
      as="div"
      class="relative z-50 xl:hidden"
      @close="ui.sidebarOpen = false"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-900/80" />
      </TransitionChild>

      <div class="fixed inset-0 flex">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div
                class="absolute left-full top-0 flex w-16 justify-center pt-5"
              >
                <button
                  type="button"
                  class="-m-2.5 p-2.5"
                  @click="ui.sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div
              class="
                flex
                grow
                flex-col
                gap-y-5
                overflow-y-auto
                bg-gray-900
                px-6
                ring-1 ring-white/10
              "
            >
              <div class="flex h-16 shrink-0 items-center">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" class="-mx-2 space-y-1">
                      <li v-for="item in navigation" :key="item.name">
                        <a
                          :href="item.href"
                          :class="[
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                          ]"
                        >
                          <component
                            :is="item.icon"
                            class="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div class="text-xs font-semibold leading-6 text-gray-400">
                      Your teams
                    </div>
                    <ul role="list" class="-mx-2 mt-2 space-y-1">
                      <li v-for="team in teams" :key="team.name">
                        <a
                          :href="team.href"
                          :class="[
                            team.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                          ]"
                        >
                          <span
                            class="
                              flex
                              h-6
                              w-6
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              border border-gray-700
                              bg-gray-800
                              text-[0.625rem]
                              font-medium
                              text-gray-400
                              group-hover:text-white
                            "
                            >{{ team.initial }}</span
                          >
                          <span class="truncate">{{ team.name }}</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="-mx-6 mt-auto">
                    <a
                      href="#"
                      class="
                        flex
                        items-center
                        gap-x-4
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        leading-6
                        text-white
                        hover:bg-gray-800
                      "
                    >
                      <img
                        class="h-8 w-8 rounded-full bg-gray-800"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span class="sr-only">Your profile</span>
                      <span aria-hidden="true">Tom Cook</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- Static sidebar for desktop -->
  <div class="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="
        flex
        grow
        flex-col
        gap-y-5
        overflow-y-auto
        bg-black/10
        px-6
        ring-1 ring-white/5
      "
    >
      <div class="flex h-16 shrink-0 items-center justify-center">
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
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li v-for="item in navigation" :key="item.name">
                <NuxtLink
                  :to="item.to"
                  :class="[
                    item.to === useRoute().path
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                  ]"
                >
                  <component
                    :is="item.icon"
                    class="h-6 w-6 shrink-0"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-gray-400">
            Saved Crypto
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li v-for="team in teams" :key="team.name">
                <a
                  :href="team.href"
                  :class="[
                    team.current
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                  ]"
                >
                  <span
                    class="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border border-gray-700
                      bg-gray-800
                      text-[0.625rem]
                      font-medium
                      text-gray-400
                      group-hover:text-white
                    "
                    >{{ team.initial }}</span
                  >
                  <span class="truncate">{{ team.name }}</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="-mx-6 mt-auto">
            <a
              href="#"
              class="
                flex
                items-center
                gap-x-4
                px-6
                py-3
                text-sm
                font-semibold
                leading-6
                text-white
                hover:bg-gray-800
              "
            >
              <img
                class="h-8 w-8 rounded-full bg-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useUiStore } from '@/store'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  XMarkIcon,
  HomeIcon,
} from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Home', to: '/dashboard', icon: HomeIcon},
];

const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
];
const ui = useUiStore()
</script>
