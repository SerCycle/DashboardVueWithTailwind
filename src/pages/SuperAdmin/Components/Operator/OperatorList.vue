<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-left py-3 pt-0 pb-0 text-2xl">
                <b>Daftar Operator</b>
            </h1>
            <p class="text-left py-3 pt-0">Home/<b>Daftar Operator</b></p>
        </div>
        <div class="flex items-center justify-end">
            <div class="">
                <a href="" class="text-white bg-blue-300 hover:bg-blue-800 font-medium rounded-full text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                    Add Operator</a>
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
                <tr v-for="operator in operators" :key="operator.id" class="bg-white border-b text-black">
                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
                        {{ operator.id+1 }}
                    </th>
                    <td class="py-4 px-6">
                        {{ operator.name }}
                    </td>
                    <td class="py-4 px-6">
                        {{ operator.jabatan }}
                    </td>
                    <td class="py-4 px-6">
                        {{ operator.status }}
                    </td>
                    <td class="py-2 px-3">
                        <router-link to="/Operator/Detail" name="id" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</router-link>
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
            operators: [
                {id: 0, name: "Alif", jabatan: "Operator Jawa Barat", status: "aktif"},
                {id: 1, name: "Luthfi", jabatan: "Operator Jawa Tengah", status: "aktif"},
                {id: 2, name: "Neta", jabatan: "Operator Jawa Timur", status: "aktif"},
                {id: 3, name: "Suci", jabatan: "Operator Kalimantan", status: "aktif"},
                {id: 4, name: "Andi", jabatan: "Operator Sumatara Barat", status: "aktif"},
                {id: 5, name: "Dimas", jabatan: "Operator Sulawesi Utara", status: "aktif"},
                {id: 6, name: "Rafif", jabatan: "Operator Jayapura", status: "aktif"},
                {id: 7, name: "Azka", jabatan: "Operator Nusa Tenggara Barat", status: "aktif"},
                {id: 8, name: "Asep", jabatan: "Operator Nusa Tenggara Timur", status: "aktif"},
                {id: 9, name: "Juned", jabatan: "Operator Banten", status: "aktif"},
                {id: 10, name: "Septi", jabatan: "Operator Jakarta", status: "aktif"},
                {id: 11, name: "Kevin", jabatan: "Operator Sumatra Selatan", status: "aktif"},
                {id: 12, name: "Deden", jabatan: "Operator Sumatra Barat", status: "aktif"},
                {id: 13, name: "Taufik", jabatan: "Operator Jawa Barat", status: "aktif"},
                {id: 14, name: "Rokhman", jabatan: "Operator Jawa Barat", status: "aktif"},
                {id: 15, name: "Fauzi", jabatan: "Operator Jawa Barat", status: "aktif"},
                {id: 16, name: "Eki", jabatan: "Operator Jawa Timur", status: "aktif"},
            ]
        }
    }
}

</script>

<style>

</style>