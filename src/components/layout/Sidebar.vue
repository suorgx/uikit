<script setup>
import {ref} from "vue";

const links = ref([
    {name: 'Typography', href: '/typography'},
    {name: 'Button', href: '/button'},
    {name: 'Checkbox', href: '/checkbox'},
    {name: 'Switch', href: '/switch'},
])

const isActiveBar = ref(true)

const toggleBar = () => isActiveBar.value = !isActiveBar.value
</script>

<template>
    <div :class="['sidebar', {sidebar__active: isActiveBar}]">
        <router-link
            class="sidebar__link"
            v-for="link in links"
            :key="link.name"
            :to="link.href"
            v-text="link.name"/>
        <div class="sidebar__toggle" @click="toggleBar(), $emit('toggle', isActiveBar)">
            <template v-if="isActiveBar">‹</template>
            <template v-else>›</template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.sidebar {
    left: 0;
    top: 72px;
    height: 100%;
    background: #fff;
    position: fixed;
    width: 250px;
    padding: 15px 20px;
    transition: 0.2s;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.07);
    transform: translateX(-230px);
    z-index: 0;

    &__active {
        transform: translateX(0);
    }

    &__link {
        display: block;
        border-radius: 12px;
        padding: 10px;
        transition: 0.2s;
        font-weight: bold;
        margin-bottom: 10px;
        width: fit-content;

        &:hover {
            color: var(--primary-hover);
        }
    }

    &__toggle {
        position: absolute;
        top: 30px;
        right: -12px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.17);
        border-radius: 100px;
        width: 26px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: bold;
        background: #fff;
        user-select: none;
    }
}
</style>
