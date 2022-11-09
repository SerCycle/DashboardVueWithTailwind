<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-left py-3 pt-0 pb-0 text-2xl">
                <b>Daftar Jembatan</b>
            </h1>
            <p class="text-left py-3 pt-0">Home/Daftar Jembatan/<b>Detail</b></p>
        </div>
        <div class="flex items-center justify-end">
            <div class="w-[300px] flex justify-end pl-2">
                <!-- Search bar -->
                <form class="flex items-center w-[300px]">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <font-awesome-icon class="w-4 h-auto text-gray-400" icon="fa-solid fa-magnifying-glass" />
                        </div>
                        <input type="text" id="voice-search" class="bg-white border text-[#518cd5] text-sm rounded-full  block w-full pl-10 p-2.5  dark:border-gray-400 dark:placeholder-gray-400 " placeholder="Search..." required>
                    </div>
                </form>
            </div>
        </div> 
    </div>
    <div class="bg-white h-[calc(100%-80px)] shadow overflow-y-auto rounded-lg">
        <div class="flex justify-end pt-2">
            <router-link to="/Bridge/Edit" class="hover:bg-gray-500 focus:ring-4 rounded-full text-sm px-3 p-1 mr-2 mb-2 border-solid border-2 border-gray-400">
                <font-awesome-icon icon="fa-solid fa-pencil" />
                edit
            </router-link>
        </div>
        <div class="">
            <div class="flex justify-center">
                <img class="rounded-lg shadow-lg" src="../../../../assets/BridgePict/BridgeDummy.jpg" alt="">
            </div>
            <div class="p-3">
                <h1><b>Jembatan Cisomang</b></h1>
            </div>
            <div class="pt-3 pb-3 pr-[15%] pl-[15%] text-justify">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia repellendus quam nobis labore odio magnam maxime laudantium neque perferendis, mollitia esse, suscipit sapiente. Praesentium nulla magnam sed reiciendis dignissimos.</p>
            </div>
            <div class="text-left pl-10">
                <h1><b>Spesifikasi Detail</b></h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Panjang</td>
                            <td class="p-1 pr-4 pl-3">:</td>
                            <td>253m</td>
                        </tr>
                        <tr>
                            <td>Jarak ke Bawah</td>
                            <td class="p-1 pr-4 pl-3">:</td>
                            <td>100m</td>
                        </tr>
                        <tr>
                            <td>Status Jembatan</td>
                            <td class="p-1 pr-4 pl-3">:</td>
                            <td>Aktif</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="text-left pt-3">
                <h1 class="pl-10"><b>Bridge Monitoring System</b></h1>
                <BridgeShape />
                <div class="pl-10">
                    <table>
                        <tbody>
                            <tr>
                                <td>Brdige Rating</td>
                                <td class="p-1 pr-4 pl-3">:</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Condition</td>
                                <td class="p-1 pr-4 pl-3">:</td>
                                <td>Excellent</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="p-5 flex justify-between">
                <div class="text-center w-[50%] m-2 rounded-lg">
                    <div class="h-[50px] flex justify-center text-white items-center bg-[#1352A0] w-full rounded-t-lg">
                        <b>Fundamental Frequency History</b>
                    </div>
                    <table class="w-full rounded-lg border-collapse border border-slate-500">
                        <thead class="text-white bg-gray-400">
                            <tr>
                                <th class="">Frekuensi</th>
                                <th class="">Waktu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="frequency in frequencys" :key="frequency.id">
                                <td class="p-1 border border-slate-700">{{ frequency.frequency }}</td>
                                <td class="p-1 border border-slate-700">{{ frequency.time }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-center w-[50%] m-2 rounded-lg">
                    <div class="h-[50px] flex justify-center text-white items-center bg-[#1352A0] w-full rounded-t-lg">
                        <b>Capacity</b>
                    </div>
                    <table class="w-full rounded-lg border-collapse border border-slate-500">
                        <thead class="text-white bg-gray-400">
                            <tr>
                                <th class="">BeratWim1</th>
                                <th class="">BeratWim2</th>
                                <th class="">Kecepatan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="capacity in capacitys" :key="capacity.id">
                                <td class="p-1 border border-slate-700">{{ capacity.wim1 }}</td>
                                <td class="p-1 border border-slate-700">{{ capacity.wim2 }}</td>
                                <td class="p-1 border border-slate-700">{{ capacity.speed }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BridgeShape from './BridgeShape.vue'

export default {
    components: {
        BridgeShape,
    },
    data() {
        return {
            frequencys: [
                {id: 0, frequency: "27,48", time: "2020/02/05  15:34:27"},
                {id: 1, frequency: "27,48", time: "2020/02/05  15:34:27"},
                {id: 2, frequency: "27,48", time: "2020/02/05  15:34:27"},
                {id: 3, frequency: "27,48", time: "2020/02/05  15:34:27"},
                {id: 4, frequency: "27,48", time: "2020/02/05  15:34:27"},
                {id: 5, frequency: "27,48", time: "2020/02/05  15:34:27"},
            ],
            capacitys: [
                {id: 0, wim1: "1298", wim2: "2366", speed: "0,5673"},
                {id: 1, wim1: "1298", wim2: "2366", speed: "0,5673"},
                {id: 2, wim1: "1298", wim2: "2366", speed: "0,5673"},
                {id: 3, wim1: "1298", wim2: "2366", speed: "0,5673"},
                {id: 4, wim1: "1298", wim2: "2366", speed: "0,5673"},
                {id: 5, wim1: "1298", wim2: "2366", speed: "0,5673"},
            ]
        }
    }
}
</script>

<style>

</style>