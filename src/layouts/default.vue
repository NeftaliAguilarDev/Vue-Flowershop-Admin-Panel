<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" :rail-width="80"
            class="py-5 p-2">
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Neftali Aguilar" nav>
                <template v-slot:append>
                    <v-btn min-width="1" width="10" elevated variant="text" @click.stop="rail = !rail" class="!bg-purple-500 rounded-full"> <v-icon
                            :icon="mdiChevronLeft" color="white" size="x-large"></v-icon> </v-btn>
                </template>
            </v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>

                <router-link to="/">
                    <v-list-item :prepend-icon="mdiViewDashboardOutline" title="Dashboard" value="Dashboard"></v-list-item>
                </router-link>
                <router-link to="/orders">
                    <v-list-item :prepend-icon="mdiOrderBoolAscendingVariant" title="Orders" value="Orders"></v-list-item>
                </router-link>
                <router-link to="/customers">
                    <v-list-item :prepend-icon="mdiAccountTie" title="Customers" value="Customers">
                    </v-list-item>
                </router-link>
                <v-divider class="border-opacity-100"></v-divider>
                <router-link to="/inventory">
                    <v-list-item :prepend-icon="mdiListStatus" title="Inventory" value="Inventory">
                    </v-list-item>
                </router-link>
                <router-link to="/expenses">
                    <v-list-item :prepend-icon="mdiCashMultiple" title="Expenses" value="Expenses">
                    </v-list-item>
                </router-link>
                <v-list-group value="Reports">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :prepend-icon="mdiChartLine" title="Reports"></v-list-item>
                    </template>
                    <router-link to="/reports/intern">
                        <v-list-item :prepend-icon="mdiChartBar" title="Inernal" value="Inernal"></v-list-item>
                    </router-link>
                    <router-link to="/reports/extern">
                        <v-list-item :prepend-icon="mdiChartPie" title="External" value="External"></v-list-item>
                    </router-link>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-main class="border-none">
            <div class="p-10">
                <slot></slot>
            </div>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { mdiChevronLeft, mdiHomeCity, mdiAccountTie, mdiChartLine, mdiChartBar, mdiChartPie, mdiViewDashboardOutline, mdiOrderBoolAscendingVariant, mdiListStatus, mdiCashMultiple } from '@mdi/js';

const drawer = ref(true);
const rail = ref(false);
const open = reactive(['Users'])
const admins = reactive([
    ['Management', 'mdiHomeCity'],
    ['Settings', 'mdiHomeCity'],
])
const cruds = reactive([
    ['Create', 'mdiHomeCity'],
    ['Read', 'mdiHomeCity'],
    ['Update', 'mdiHomeCity'],
    ['Delete', 'mdiHomeCity'],
])

</script>

<style scoped></style>