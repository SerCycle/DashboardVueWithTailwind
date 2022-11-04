<template>
    <ul v-for="item in items" :key="item.id">
        <li class="flex justify-start p-5">
            <div v-if="item.status === 'Operator'">
                <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-users-gear" />
            </div>
            <div v-else-if="item.status === 'Customer'">
                <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-user" />
            </div>
            <div v-else-if="item.status === 'Bridge'">
                <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-bridge" />
            </div>
            <div v-else-if="item.status === 'Maintenance'">
                <font-awesome-icon class="mr-2 w-[25px] h-[25px] fill-current" icon="fa-solid fa-screwdriver-wrench" />
            </div>
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {id: 0, status: 'Operator', name: 'Operator 1 telah menambahkan jembatan'},
                {id: 1, status: 'Operator', name: 'Operator 2 telah menambahkan jembatan'},
                {id: 2, status: 'Customer', name: 'PUPR telah terdaftar sebagai customer'},
                {id: 3, status: 'Customer', name: 'Jasamarga telah terdaftar sebagai customer'},
                {id: 4, status: 'Bridge', name: 'Jembatan Cisomang sedang dilakukan maintenance'},
                {id: 5, status: 'Operator', name: 'Operator 1 telah menambahkan jembatan'},
                {id: 6, status: 'Operator', name: 'Operator 2 telah menambahkan jembatan'},
                {id: 7, status: 'Customer', name: 'PUPR telah terdaftar sebagai customer'},
                {id: 8, status: 'Customer', name: 'Jasamarga telah terdaftar sebagai customer'},
                {id: 9, status: 'Bridge', name: 'Jembatan Cisomang sedang dilakukan maintenance'},
            ],
        }
    },
}

</script>

<style>

</style>