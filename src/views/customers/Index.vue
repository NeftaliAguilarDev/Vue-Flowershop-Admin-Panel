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

                    <v-data-table :loading="loadingData" :headers="headers" :items="customers" class="elevation-1">
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag';
import { reactive, ref } from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable'
const loadingData = ref(true)
const { result } = useQuery(gql`
      query getCustomers {
        customers {
          id,
          name,
          phone,
          email
        }
      }
    `)
const customers = reactive([])
setTimeout(() => {
    const { customers: items } = result.value
    console.log(items)
    items.forEach(item => {
        customers.push(item)
    });
    loadingData.value = false
}, 1000);
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
</script>

<style scoped></style>