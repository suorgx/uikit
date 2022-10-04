<script setup>
import Checkbox from '@/components/checkbox/Checkbox.vue'
import CheckboxGroup from '@/components/checkbox/CheckboxGroup.vue'
import {ref} from "vue";

const checkboxActive = ref(true)
const arrayNinjaTurtles = ref([
    {name: 'Leo', id: 'Leo', color: 'info'},
    {name: 'Mike', id: 'Mike', color: 'warning'},
    {name: 'Raf', id: 'Raf', color: 'error'},
    {name: 'Don', id: 'Don'},
])

const selectedNinjaTurtles = ref(['Leo', 'Mike'])
</script>

<template>
    <h2>Checkbox</h2>
    <h3>Checkbox Active:</h3>
    <div class="line">
        <Checkbox id="active" label="Active" v-model:checked="checkboxActive"/>
    </div>
    <h3>Checkbox Disabled:</h3>
    <div class="line">
        <Checkbox id="disabled" label="Disabled" :disabled="true"/>
    </div>
    <h3>Checkbox Color:</h3>
    <div class="line line__block">
        <Checkbox class="mr" id="primary" label="Primary" :checked="true"/>
        <Checkbox class="mr" id="info" label="Info" color="info" :checked="true"/>
        <Checkbox class="mr" id="second" label="Second" color="second" :checked="true"/>
        <Checkbox class="mr" id="success" label="Success" color="success" :checked="true"/>
        <Checkbox class="mr" id="error" label="Error" color="error" :checked="true"/>
        <Checkbox class="mr" id="warning" label="Warning" color="warning" :checked="true"/>
    </div>
    <h3>Checkbox Group:</h3>
    <div class="line line__block">
        <p>Selected Ninja Turtles: {{selectedNinjaTurtles.join(', ')}}</p>
        <CheckboxGroup v-model:selected="selectedNinjaTurtles" :options="arrayNinjaTurtles"/>
    </div>
</template>
