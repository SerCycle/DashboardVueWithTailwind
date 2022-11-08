<template>
    <div class="container mx-auto px-4 pb-[20px]">
        <div class="grid grid-cols-2 gap-2">
            <div class="">
                <div class="grid grid-cols-2 gap-2">
                    <router-link to="/Bridge" class="bg-white rounded-lg h-[160px] shadow flex items-center justify-center">
                        <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-bridge" />
                        <p class="">300 Jembatan</p>
                    </router-link>
                    <router-link to="/Operator" class="bg-white rounded-lg h-[160px] shadow flex items-center justify-center">
                        <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-users-gear" />
                        <p class="">300 Operator</p>
                    </router-link>
                    <router-link to="/Maintenance" class="bg-white rounded-lg h-[160px] shadow flex items-center justify-center">
                        <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-screwdriver-wrench" />
                        <p class="">300 Maintenance</p>
                    </router-link>
                    <router-link to="/Customer" class="bg-white rounded-lg h-[160px] shadow flex items-center justify-center">
                        <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-user" />
                        <p class="">300 Customer</p>
                    </router-link>
                    <div class="bg-white rounded-lg h-[600px] shadow col-span-2">
                        <div class="flex justify-center h-[72px] text-white items-center bg-[#1352A0] w-full rounded-t-lg">
                            <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-signal" />
                            <p class="">Perkembangan Jembatan</p>
                        </div>
                        <div class="h-[calc(600px-72px)] m-y-2">
                            <ChartComponent />
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-white rounded-lg h-[420px] shadow col-span-2">
                        <div class="flex justify-center h-[72px] text-white items-center bg-[#1352A0] w-full rounded-t-lg">
                            <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-signal" />
                            <p class="">Aktifitas Terakhir</p>
                        </div>
                        <div class="h-[calc(420px-72px)] p-[20px] overflow-y-auto">
                            <ActivityComponent />
                        </div>
                    </div>
                    <div class="bg-white rounded-lg h-[500px] shadow col-span-2">
                        <div class="flex justify-center h-[72px] text-white items-center bg-[#1352A0] w-full rounded-t-lg">
                            <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-signal" />
                            <p class="">Segmentasi Customer</p>
                        </div>
                        <div class="h-[calc(500px-72px)]">
                            <SegmentComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ActivityComponent from './ActivityComponent.vue'
import SegmentComponent from './SegmentComponent.vue'
import ChartComponent from './ChartComponent.vue';

export default {
    components: {
        ActivityComponent,
        SegmentComponent,
        ChartComponent,
    }
}

</script>

<style>

</style>