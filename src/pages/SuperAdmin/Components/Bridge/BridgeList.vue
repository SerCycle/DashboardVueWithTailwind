<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-left py-3 pt-0 pb-0 text-2xl">
                <b>Daftar Jembatan</b>
            </h1>
            <p class="text-left py-3 pt-0">Home/<b>Daftar Jembatan</b></p>
        </div>
        <div class="flex items-center justify-end">
            <div class="">
                <a href="" class="text-white bg-blue-300 hover:bg-blue-800 font-medium rounded-full text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                    Add Bridge</a>
            </div>
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
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white     bg-[#1352A0] dark:bg-[#1352A0] dark:text-white">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        No
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Nama Jembatan
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Lokasi
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Rating
                    </th>
                    <th scope="col" class="py-3 px-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bridge in bridges" :key="bridge.id" class="bg-white border-b text-black">
                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
                        {{ bridge.id+1 }}
                    </th>
                    <td class="py-4 px-6">
                        {{ bridge.name }}
                    </td>
                    <td class="py-4 px-6">
                        {{ bridge.lokasi }}
                    </td>
                    <td class="py-4 px-8">
                        {{ bridge.rating }}
                    </td>
                    <td class="py-2 px-3">
                        <router-link to="/Bridge/Detail" name="id" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bridges: [
                {id: 0, name: "Jembatan Cisomang", lokasi: "Jawa Barat", rating: "9"},
                {id: 1, name: "Jembatan Pasupati", lokasi: "Jawa Tengah", rating: "7"},
                {id: 2, name: "Jembatan Ampera", lokasi: "Jawa Timur", rating: "8"},
                {id: 3, name: "Jembatan Suramadu", lokasi: "Kalimantan", rating: "4"},
                {id: 4, name: "Jembatan Barito", lokasi: "Sumatara Barat", rating: "8"},
                {id: 5, name: "Jembatan Merah Putih", lokasi: "Sulawesi Utara", rating: "8"},
                {id: 6, name: "Jembatan 5 Barelang", lokasi: "Jayapura", rating: "8"},
                {id: 7, name: "Jembatan Tengku Agung", lokasi: "Nusa Tenggara Barat", rating: "6"},
                {id: 8, name: "Jembatan Marjuwana", lokasi: "Nusa Tenggara Timur", rating: "7"},
                {id: 9, name: "Jembatan Suropati", lokasi: "Banten", rating: "8"},
                {id: 10, name: "Jembatan Kemang", lokasi: "Jakarta", rating: "9"},
                {id: 11, name: "Jembatan Bangka", lokasi: "Sumatra Selatan", rating: "8"},
                {id: 12, name: "Jembatan 3 Putri", lokasi: "Sumatra Barat", rating: "8"},
                {id: 13, name: "Jembatan Keder", lokasi: "Jawa Barat", rating: "7"},
                {id: 14, name: "Jembatan Kayu", lokasi: "Jawa Barat", rating: "9"},
                {id: 15, name: "Jembatan Curam", lokasi: "Jawa Barat", rating: "7"},
                {id: 16, name: "Jembatan Jatuh", lokasi: "Jawa Timur", rating: "5"},
            ]
        }
    }
}

</script>

<style>

</style>