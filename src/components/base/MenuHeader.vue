<template>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" :rail-width="80" class="py-5 p-2">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Neftali Aguilar" nav>
            <template v-slot:append>
                <v-btn min-width="1" width="10" elevated variant="text" @click.stop="rail = !rail"
                    class="!bg-purple-500 rounded-full"> <v-icon :icon="mdiChevronLeft" color="white"
                        size="x-large"></v-icon> </v-btn>
            </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <template v-for="(item, index) in menu" :key="index">
                <router-link v-if="!item.children" :to="{ name: item.routeName }">
                    <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.title"></v-list-item>
                </router-link>
                <v-list-group v-else :value="item.title">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.title"></v-list-item>
                    </template>
                    <router-link v-for="subItem in item.children" :to="{ name: subItem.routeName }">
                        <v-list-item :prepend-icon="subItem.icon" :title="subItem.title"
                            :value="subItem.title"></v-list-item>
                    </router-link>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { mdiChevronLeft, mdiAccountTie, mdiChartLine, mdiChartBar, mdiChartPie, mdiViewDashboardOutline, mdiOrderBoolAscendingVariant, mdiListStatus, mdiCashMultiple } from '@mdi/js';
const drawer = ref(true);
const rail = ref(false);
interface MenuType {
    routeName: string,
    title: string,
    icon: string,
}
interface MenuItems extends MenuType {
    children?: MenuType[]
}

const menu: MenuItems[] = [
    {
        routeName: 'dashboard',
        title: 'Dashboard',
        icon: mdiViewDashboardOutline
    },
    {
        routeName: 'orders.index',
        title: 'Orders',
        icon: mdiOrderBoolAscendingVariant
    },
    {
        routeName: 'customers.index',
        title: 'Customers',
        icon: mdiAccountTie
    },
    {
        routeName: 'inventory.index',
        title: 'Inventory',
        icon: mdiListStatus
    },
    {
        routeName: 'expenses.index',
        title: 'Expenses',
        icon: mdiCashMultiple
    },
    {
        routeName: 'reports.index',
        title: 'Reports',
        icon: mdiChartLine,
        children: [
            {
                routeName: 'reports.intern',
                title: 'Intern',
                icon: mdiCashMultiple,
            },
            {
                routeName: 'reports.extern',
                title: 'Extern',
                icon: mdiChartPie,
            },
        ]
    }
]

</script>

<style scoped></style>