<template>
    <v-container :fluid="true">
        <v-row>
            <v-col cols="12">
                <v-card>
                    <div class="flex justify-between mt-5 items-center">
                        <v-card-title class="text-purple-500 !font-extrabold">Customer</v-card-title>
                        <router-link :to="{ name: 'customers.create' }"
                            class="mr-5 px-5 py-2 bg-purple-500 hover:bg-purple-600 rounded-md text-white">Create
                            customer</router-link>
                    </div>
                    <div class="p-3">
                        <v-alert v-if="error" variant="outlined" color="purple">
                            There was an error. Please try later.
                        </v-alert>
                    </div>

                    <v-data-table :loading="loading" :headers="headers" :items="customers" class="elevation-1">
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { getCustomers } from '../../modules/customers/getCustomers';
import { VDataTable } from 'vuetify/labs/VDataTable'
const headers = reactive([
    {
        title: '# ID',
        align: 'start',
        sortable: false,
        key: 'id',
    },
    { title: 'Name', key: 'name' },
    { title: 'Phone', key: 'phone' },
    { title: 'Email', key: 'email' },
]);
const { result: customersListing, loading, error } = getCustomers()
const customers = computed(() => customersListing.value?.customers.data)

</script>

<style scoped></style>