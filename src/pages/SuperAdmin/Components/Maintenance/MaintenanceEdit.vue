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
                        <div class="mb-6 flex justify-between items-center">
                            <label for="bridgehandle" class="w-[30%] block m-2 "><span><b>Jembatan yang Dikelola</b></span></label>
                            <input type="text" id="bridgehandle" name="bridgehandle" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Jembatan yang dikelola" value="Jembatan Suramadu" required="">
                        </div>
                        <div class="mb-6 flex justify-between items-center">
                            <label for="BridgeAdress" class="w-[30%] block m-2 "><span><b>lokasi Jembatan</b></span></label>
                            <input type="text" id="BridgeAdress" name="BridgeAdress" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Lokasi Jembatan" value="Jl. Tol Suramadu, Tambak Wedi, Kec. Kenjeran, Kota SBY, Jawa Timur 60126" required="">
                        </div>
                        <div class="mb-6 flex justify-between items-center">
                            <label for="BridgeRate" class="w-[30%] block m-2 "><span><b>Bridge Rating</b></span></label>
                            <input type="number" id="BridgeRate" name="BridgeRate" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Bridge Rating" value="5" required="">
                        </div>
                        <div class="mb-6 flex justify-between items-center">
                            <label for="status" class="w-[30%] block m-2 "><span><b>Status </b></span></label>
                            <select id="status" name="status" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500">
                                <option value="Perbaikan" selected>Perbaikan</option>
                                <option value="Solve">Solve</option>
                            </select>
                        </div>
                        <div class="mb-6 flex justify-between items-center">
                            <label for="operator" class="w-[30%] block m-2 "><span><b>Nama Operator</b></span></label>
                            <input type="text" id="operator" name="operator" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="nama Operator" value="Dimas" required="">
                        </div>
                        <div class="mb-6 flex justify-between items-center">
                            <label for="HandleWith" class="w-[30%] block m-2 "><span><b>Dikelola Oleh</b></span></label>
                            <input type="text" id="HandleWith" name="HandleWith" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Dikelola Oleh" value="Operator Surabaya" required="">
                        </div>
                        <div class="mb-6 flex justify-between items-center">
                            <label for="keluhan" class="w-[30%] block m-2 "><span><b>Kelohan</b></span></label>
                            <textarea id="keluhan" name="keluhan" class="h-[100px] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Your Address" required="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla voluptatum corrupti soluta dolorem neque quis ea molestias magnam quas, dolor iste vel. Exercitationem corporis repudiandae aut ipsum beatae labore?</textarea>
                        </div>
                        <div class="space-x-5">
                            <button type="submit" class="rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                            <router-link to="/Maintenance/Detail" name="id" type="button" class="hover:bg-gray-500 focus:ring-4 font-medium rounded-full text-sm px-6 py-2 border-solid border-2 border-gray-400">Detail</router-link>
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