<template>
    <LoggedinSidebarTemplate page_name="research">
        <template v-slot:main-content>
            <div class="max-w-xl mx-auto mb-10 sm:mb-0 min-h-screen">
                <div class="max-w-xl mx-auto lg:px-4">
                <div id="explanation" ref="explanation" class="relative w-full" tabindex="-1" style="top: -4.2rem;"></div>

                    <section id="core-data" class="sect">
                        <div class="flex items-center w-full mb-2">
                            <!-- eslint-disable-next-line max-len --><!-- prettier-ignore -->
                            <div class="sano-border-shine sano-border-shine-orange bg-white w-7 h-7 rounded mr-3 flex flex-col justify-center items-center">
                                <svg class="pl-px w-5 h-3 relative sano-svg-red-orange z-10">
                                    <use xlink:href="#sano-symbol" />
                                </svg>
                            </div>
                            <h2 class="text-sano-burgundy text-xl">
                                My Studies
                            </h2>
                        </div>
                        <div class="mt-8">
                            <div class="sm:hidden flex mb-0 px-5 -mb-4">
                                <div class="w-2/4 bg-gray-400 h-12">STUDY</div>
                                <div class="w-1/4 bg-gray-400 h-12">STATUS</div>
                                <div class="w-1/4 bg-gray-400 h-12">ACTIONS</div>
                            </div>
                            <div v-for="study in studies" :key="study.id" class="flex h-24 mt-1 divide-x-3 divide-sano-red-orange-400 px-5 pt-5 sano-border-shine sano-border-shine-orange bg-white rounded z-0">
                                <div class="w-2/4 bg-white-400 h-12 z-10">
                                    <div class="pr-5">{{ study.title }}</div>
                                </div>
                                <div class="w-1/4 bg-white-400 h-12 z-10">
                                    <div class="text-sano-red-orange sano-bold mb-2">ENROLLED</div>
                                    <div class="text-white rounded-full text-center px-2 bg-sano-green w-32">COMPLETE</div>
                                </div>
                                <div class="w-1/4 bg-white-400 h-12 z-10">
                                    <button class="sano-btn bg-sano-pink">
                                      Leave study 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                </div>
            </div>
        </template>
        <template v-slot:sidebar-content>
        </template>
    </LoggedinSidebarTemplate>
</template>

<script>

import LoggedinSidebarTemplate from "@/layouts/LoggedinSidebarTemplate";
import { mapActions, mapState } from 'vuex'


export default {
    name: "Research",
    components: {
        LoggedinSidebarTemplate,
    },
    mounted() {
        this.GET_STUDIES()
    },
    methods: {
        ...mapActions([
          'GET_STUDIES'
        ]),
    },
    computed: {
        ...mapState([
          'studies'
        ])
    },
};
</script>

<style scoped lang="scss">
.mobile-sticky {
    top: 1rem;
}

.sect {
    @apply relative mt-6 mx-4 px-4 py-6 border border-sano-pink rounded overflow-hidden bg-white;
    @media (min-width: 992px) {
        @apply p-8 mx-0;
    }
}

@media (max-width: 575px) {
    .mobile-sticky {
        @apply sticky bg-white -ml-4 px-4 border-b border-sano-pink;
        z-index: 99;
        top: 0;
        width: calc(100% + 2rem);
    }

    .sano-toggle-label.sano-toggle-label {
        padding: 0 0.75rem;
    }
}
</style>
