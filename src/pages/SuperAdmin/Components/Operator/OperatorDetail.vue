<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-left py-3 pt-0 pb-0 text-2xl">
                <b>Daftar Operator</b>
            </h1>
            <p class="text-left py-3 pt-0">Home/Daftar Operator/<b>Detail</b></p>
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
            <router-link to="/Operator/Edit" class="hover:bg-gray-500 focus:ring-4 rounded-full text-sm px-3 p-1 mr-2 mb-2 border-solid border-2 border-gray-400">
                <font-awesome-icon icon="fa-solid fa-pencil" />
                edit
            </router-link>
        </div>
        <div class="flex justify-between">
            <div class="w-[50%] flex justify-center items-center">
                <img src="../../../../assets/OperatorPict/OperatorDummy.png" alt="">
            </div>
            <div class="w-[50%]">
                <table class="text-left">
                    <tbody>
                        <tr class="">
                            <td class="py-3"><b>Nama Lengkap</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">Suci Intan Illahi</td>
                        </tr>
                        <tr class="">
                            <td class="py-3"><b>Employee ID</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">02112022</td>
                        </tr>
                        <tr class="">
                            <td class="py-3"><b>Email</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">suciintan@kedaireka.com</td>
                        </tr>
                        <tr class="">
                            <td class="py-3"><b>Alamat</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">Jl. Telekomunikasi. 1, Terusan Buahbatu - 
                                Bojongsoang, Telkom University, Sukapura, 
                                Kec. Dayeuhkolot, Kabupaten Bandung, 
                                Jawa Barat 40257</td>
                        </tr>
                        <tr class="">
                            <td class="py-3"><b>No. Handphone</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">+6281-3303-7241</td>
                        </tr>
                        <tr class="">
                            <td class="py-3"><b>Jabatan</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">Operator 4</td>
                        </tr>
                        <tr class="">
                            <td class="py-3"><b>Jembatan yang dikelola</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">Jembatan Suramadu</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>

</style>