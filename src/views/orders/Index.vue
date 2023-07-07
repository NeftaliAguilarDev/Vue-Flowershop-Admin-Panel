<template>
    <v-container :fluid="true">
        <v-row>
            <v-col cols="12">
                <v-card>
                    <div class="flex justify-between mt-5 items-center">
                        <v-card-title class="text-purple-500 !font-extrabold">Orders</v-card-title>
                        <router-link :to="{ name: 'orders.create' }"
                            class="mr-5 px-5 py-2 bg-purple-500 hover:bg-purple-600 rounded-md text-white">Create
                            order</router-link>
                    </div>
                    <v-data-table :headers="headers" :items="orders" class="elevation-1">
                        <template v-slot:item.calories="{ item }">
                            <v-chip :color="getColor(item.columns.calories)">
                                {{ item.columns.calories }}
                            </v-chip>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable'

const headers = reactive([
    {
        title: '# ID',
        align: 'start',
        sortable: false,
        key: 'name',
    },
    { title: 'Delivery Date', key: 'calories' },
    { title: 'Customer', key: 'fat' },
    { title: 'Delivery Schedule', key: 'carbs' },
    { title: 'Payment Status', key: 'protein' },
    { title: 'Order Status', key: 'protein' },
    { title: 'Total', key: 'iron' },
    { title: 'Options', key: 'options' },
]);

const orders = reactive([
    {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
    },
    {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
    },
    {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
    },
    {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
    },
    {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
    },
    {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
    },
    {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
    },
    {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
    },
    {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
    },
])

const getColor = (calories) => {
    if (calories > 400) return 'red'
    else if (calories > 200) return 'orange'
    else return 'green'
};
</script>

<style scoped></style>