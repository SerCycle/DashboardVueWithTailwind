<template>
    <div class="w-screen h-screen flex">
        <!-- sidebar -->
        <div class="w-[308px] h-full bg-[#131313] text-white" v-show="showSide">
            <div class="h-[100px] flex justify-center items-center">
                <div class="px-[20px]">
                    <img class="py-5 h-[91px]" src="../../assets/intilogo.png" alt="">
                </div>
            </div>
            <div class="h-[calc(100vh-100px)] pb-[20px]">
                <div class="flex felx-col justify-between h-full">
                    <div class="px-[20px] flex flex-col justify-between space-y-[10px]">
                        <div clas="h-[calc(100%-50px)]">
                            <router-link to="/Home" class="inline-flex relative items-center py-[15px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-blue-700 hover:text-white  transition duration-400 ease-in-out">
                                <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-house" />
                                Home
                            </router-link>
                            <router-link to="/Bridge" class="inline-flex relative items-center py-[15px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-blue-700 hover:text-white  transition duration-400 ease-in-out">
                                <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-bridge" />
                                Daftar Jembatan
                            </router-link>
                            <router-link to="/Operator" class="inline-flex relative items-center py-[15px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-blue-700 hover:text-white  transition duration-400 ease-in-out">
                                <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-users-gear" />
                                Daftar Operator
                            </router-link>
                            <router-link to="/Maintenance" class="inline-flex relative items-center py-[15px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-blue-700 hover:text-white  transition duration-400 ease-in-out">
                                <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-screwdriver-wrench" />
                                Daftar Maintenance
                            </router-link>
                            <router-link to="/Customer" class="inline-flex relative items-center py-[15px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-blue-700 hover:text-white  transition duration-400 ease-in-out">
                                <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-user" />
                                Daftar Customer
                            </router-link>
                        </div>
                        <div class="h-[50px]">
                            <div>
                                <router-link to="/" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-blue-700 hover:text-white  transition duration-400 ease-in-out">
                                    <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-circle-left" />
                                    Log out
                                </router-link>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        <div class="w-full h-full bg-gray-400">
            <div class="h-[50px] bg-white flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
                <!-- Hamburger Menu -->
                <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
                    <font-awesome-icon class="w-5 h-auto hover:bg-gray-200 hover:text-gray-800" icon="fa-solid fa-bars" />
                </div>

                <!-- Serach -->
                <div class="w-[calc(100%-30px)] flex">
                    <div class="w-[calc(100%-200px)] flex justify-start pl-2">
                        <!-- Search bar -->
                        <form class="flex items-center w-[500px]">
                            <label for="voice-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <font-awesome-icon class="w-4 h-auto text-gray-400" icon="fa-solid fa-magnifying-glass" />
                                </div>
                                <input type="text" id="voice-search" class="bg-white border text-[#518cd5] text-sm rounded-full  block w-full pl-10 p-2.5  dark:border-gray-400 dark:placeholder-gray-400 " placeholder="Search..." required>
                            </div>
                        </form>
                    </div>
                    <!-- User  -->
                    <div class="w-[500px] ">
                        <div class="cursor-pointer flex items-center justify-end space-x-4" @click="toggleDrop">
                            <div class="font-semibold text-right">
                                <div class="text-[#548fd6]"><b>Welcome, Tester!</b></div>
                                <div class="text-xs text-gray-500 dark:text-gray-400">SuperAdmin</div>
                            </div>
                            <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../assets/SuperAdmin.png" alt="">
                        </div>
                        <!-- Drop down -->
                        <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1 text-left" role="none">
                            <div class="flex justify-center items-center">
                                <font-awesome-icon icon="fa-solid fa-id-card" />
                                <router-link to="/Profile">
                                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Profile</a>
                                </router-link>
                            </div>
                            <div class="flex justify-center items-center">
                                <font-awesome-icon icon="fa-solid fa-circle-left" />
                                <form method="POST" action="#" role="none">
                                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Logout</button>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-[calc(100vh-50px)] bg-[#F6F8FA] p-[20px] overflow-y-auto">
                <div class="h-full">
                    <router-view></router-view>
                </div>
            </div>
        </div>

        <!-- main -->
        <div></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDropDown: false,
            showSide: true,
        }
    },
    methods: {
        toggleSideBar() {
            this.showSide = !this.showSide
        },
        toggleDrop() {
            this.showDropDown = !this.showDropDown
        }
    }
}

</script>

<style>

</style>