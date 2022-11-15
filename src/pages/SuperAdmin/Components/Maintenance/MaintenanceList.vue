<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-left py-3 pt-0 pb-0 text-2xl">
                <b>Daftar Maintenance</b>
            </h1>
            <p class="text-left py-3 pt-0">Home/<b>Daftar Maintenance</b></p>
        </div>
        <div class="flex items-center justify-end">
            <div class="">
                <a href="" class="text-white bg-blue-300 hover:bg-blue-800 font-medium rounded-full text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                    Add Maintenance</a>
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
                        Nama Operator
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Jabatan
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Status
                    </th>
                    <th scope="col" class="py-3 px-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="maintenance in maintenances" :key="maintenance.id" class="bg-white border-b text-black">
                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
                        {{ maintenance.id+1 }}
                    </th>
                    <td class="py-4 px-6">
                        {{ maintenance.name }}
                    </td>
                    <td class="py-4 px-6">
                        {{ maintenance.jabatan }}
                    </td>
                    <td class="py-4 px-6">
                        {{ maintenance.status }}
                    </td>
                    <td class="py-2 px-3">
                        <router-link to="/Maintenance/Detail" name="id" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</router-link>
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
            maintenances: [
                {id: 0, name: "Alif", jabatan: "Maintenance Jawa Barat", status: "Aktif"},
                {id: 1, name: "Luthfi", jabatan: "Maintenance Jawa Tengah", status: "Aktif"},
                {id: 2, name: "Neta", jabatan: "Maintenance Jawa Timur", status: "Aktif"},
                {id: 3, name: "Suci", jabatan: "Maintenance Kalimantan", status: "Aktif"},
                {id: 4, name: "Andi", jabatan: "Maintenance Sumatara Barat", status: "Tidak Aktif"},
                {id: 5, name: "Dimas", jabatan: "Maintenance Sulawesi Utara", status: "Aktif"},
                {id: 6, name: "Rafif", jabatan: "Maintenance Jayapura", status: "Tidak Aktif"},
                {id: 7, name: "Azka", jabatan: "Maintenance Nusa Tenggara Barat", status: "Tidak Aktif"},
                {id: 8, name: "Asep", jabatan: "Maintenance Nusa Tenggara Timur", status: "Tidak Aktif"},
                {id: 9, name: "Juned", jabatan: "Maintenance Banten", status: "Aktif"},
                {id: 10, name: "Septi", jabatan: "Maintenance Jakarta", status: "Aktif"},
                {id: 11, name: "Kevin", jabatan: "Maintenance Sumatra Selatan", status: "Aktif"},
                {id: 12, name: "Deden", jabatan: "Maintenance Sumatra Barat", status: "Tidak Aktif"},
                {id: 13, name: "Taufik", jabatan: "Maintenance Jawa Barat", status: "Tidak Aktif"},
                {id: 14, name: "Rokhman", jabatan: "Maintenance Jawa Barat", status: "Aktif"},
                {id: 15, name: "Fauzi", jabatan: "Maintenance Jawa Barat", status: "Aktif"},
                {id: 16, name: "Eki", jabatan: "Maintenance Jawa Timur", status: "Aktif"},
            ]
        }
    }
}

</script>

<style>

</style>