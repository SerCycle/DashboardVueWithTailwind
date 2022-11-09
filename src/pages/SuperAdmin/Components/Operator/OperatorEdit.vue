<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-left py-3 pt-0 pb-0 text-2xl">
                <b>Edit Operator</b>
            </h1>
            <p class="text-left py-3 pt-0">Home/Daftar Operator/<b>Detail</b></p>
        </div> 
    </div>
    <div class="bg-white h-[calc(100%-80px)] shadow overflow-y-auto rounded-lg">
        <div>
            
        </div>
        <div class="flex justify-between pt-3">
            <div class="w-[40%] flex justify-center items-center">
                <img src="../../../../assets/OperatorPict/OperatorDummy.png" alt="">
            </div>
            <div class="w-[60%] p-5">         
                <form class="text-left">
                    <div class="mb-6 flex justify-between items-center">
                        <label for="name" class="w-[30%] block m-2 "><span><b>Nama Lengkap</b></span></label>
                        <input type="text" id="name" name="name" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Your Name" value="Suci Intan Illahi" required="">
                    </div>
                    <div class="mb-6 flex justify-between items-center">
                        <label for="employeeid" class="w-[30%] block m-2 "><span><b>Employee ID</b></span></label>
                        <input type="text" id="employeeid" name="employeeid" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Your ID" value="02112022" required="">
                    </div>
                    <div class="mb-6 flex justify-between items-center">
                        <label for="email" class="w-[30%] block m-2 "><span><b>Email</b></span></label>
                        <input type="email" id="email" name="email" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Your Email" value="suciintan@kedaireka.com" required="">
                    </div>
                    <div class="mb-6 flex justify-between items-center">
                        <label for="alamat" class="w-[30%] block m-2 "><span><b>Alamat</b></span></label>
                        <textarea id="alamat" name="alamat" class="h-[100px] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Your Address" required="">Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom University, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257</textarea>
                    </div>
                    <div class="mb-6 flex justify-between items-center">
                        <label for="nomorhp" class="w-[30%] block m-2 "><span><b>No. Handphone</b></span></label>
                        <input type="text" id="nomorhp" name="nomorhp" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Your Phone" value="+6281-3303-7241" required="">
                    </div>
                    <div class="mb-6 flex justify-between items-center">
                        <label for="jabatan" class="w-[30%] block m-2 "><span><b>Jabatan</b></span></label>
                        <input type="text" id="jabatan" name="jabatan" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Your Job Title" value="Operator 4" required="">
                    </div>
                    <div class="mb-6 flex justify-between items-center">
                        <label for="Jembatan" class="w-[30%] block m-2 "><span><b>Jembatan</b></span></label>
                        <input type="text" id="Jembatan" name="Jembatan" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Your Bridge" value="Jembatan Suramadu" required="">
                    </div>
                    <div class="space-x-5">
                        <button type="submit" class="rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                        <router-link to="/Operator/Detail" name="id" type="button" class="hover:bg-gray-500 focus:ring-4 font-medium rounded-full text-sm px-6 py-2 border-solid border-2 border-gray-400">Detail</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>