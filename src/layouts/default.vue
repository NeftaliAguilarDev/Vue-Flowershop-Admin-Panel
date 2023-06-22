<template>
    <v-layout>
        <MenuHeader />
        <v-main class="border-none">
            <div class="p-10">
                <slot></slot>
            </div>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import MenuHeader from '../components/base/MenuHeader.vue'
</script>

<style scoped></style>