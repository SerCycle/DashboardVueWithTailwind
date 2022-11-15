<template>
    <div class="h-full" >
        <div class="flex justify-between">
            <div>
                <h1 class="text-left py-3 pt-0 pb-0 text-2xl">
                    <b>Edit Jembatan</b>
                </h1>
                <p class="text-left py-3 pt-0">Home/Daftar Jembatan/<b>Detail</b></p>
            </div> 
        </div>
        <div class="bg-white h-[calc(100%-80px)] shadow overflow-y-auto rounded-lg">
            <div class="text-left p-4">
                <h1 class="text-2xl"><b>Edit Jembatan</b></h1>
            </div>
            <div class="flex justify-between pt-3">
                <div class="w-[40%] p-3 flex justify-center items-center">
                    <img src="../../../../assets/BridgePict/BridgeDummy.jpg" alt="">
                </div>
                <div class="w-[60%] p-5">         
                    <form class="text-left">
                        <div class="mb-6 justify-between items-center">
                            <label for="name" class="w-[30%] block m-2 "><span><b>Nama Jembatan</b></span></label>
                            <input type="text" id="name" name="name" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Bridge Name" value="Suci Intan Illahi" required="">
                        </div>
                        <div class="mb-6 justify-between items-center">
                            <label for="alamat" class="w-[30%] block m-2 "><span><b>Alamat</b></span></label>
                            <textarea id="alamat" name="alamat" class="h-[100px] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Bridge Address" required="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor in nibh sapien. Donec lobortis pulvinar vitae nunc. Egestas viverra ac commodo lorem sed tellus. Purus viverra morbi commodo dolor cursus penatibus tellus. Purus in maecenas non semper. Integer lacinia tellus sollicitudin nulla penatibus.</textarea>
                        </div>
                        <div class="mb-6 flex justify-between items-center">
                            <label for="panjang" class="w-[30%] block m-2 "><span><b>Panjang</b></span></label>
                            <input type="text" id="panjang" name="panjang" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Panjang" value="253 m" required="">
                        </div>
                        <div class="mb-6 flex justify-between items-center">
                            <label for="jarak" class="w-[30%] block m-2 "><span><b>Jarak Ke Bawah</b></span></label>
                            <input type="text" id="jarak" name="jarak" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="jarak Ke Bawah" value="100 m" required="">
                        </div>
                        <div class="mb-6 flex justify-between items-center">
                            <label for="status" class="w-[30%] block m-2 "><span><b>Status Jembatan</b></span></label>
                            <select id="status" name="status" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500">
                                <option value="Aktif" selected>Aktif</option>
                                <option value="TidakAktif">Tidak Aktif</option>
                            </select>
                        </div>
                        <div class="space-x-5">
                            <button type="submit" class="rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                            <router-link to="/Bridge/Detail" name="id" type="button" class="hover:bg-gray-500 focus:ring-4 font-medium rounded-full text-sm px-6 py-2 border-solid border-2 border-gray-400">Detail</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>