<script setup>
    const props = defineProps({
        rounded: {
            type: Boolean,
            required: false
        }
    })
</script>

<template>
    <label class="switch">
        <input type="checkbox">
        <span :class="['switch', {'switch__rounded': rounded}]"></span>
    </label>
</template>
