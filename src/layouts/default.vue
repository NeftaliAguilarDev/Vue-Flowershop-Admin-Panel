<template>
    <v-layout>
        <MenuHeader />
        <v-main class="border-none">
            <div class="py-2 px-5">
                <slot></slot>
            </div>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import MenuHeader from '../components/base/MenuHeader.vue'
</script>

<style scoped></style>