<script setup>
import Checkbox from '@/components/checkbox/Checkbox.vue'
import {ref} from "vue";

const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
</script>

<template>
    <h2>Checkbox</h2>
    <h3>Checkbox Active</h3>
    <div class="line">
        <Checkbox id="active" label="label" v-model:checked="checkboxActive"/>
    </div>
</template>
