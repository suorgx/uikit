<script setup>
import Checkbox from '@/components/checkbox/Checkbox.vue'

const emit = defineEmits([
    'update:selected'
])

const props = defineProps({
    options: {
        type: Array,
        required: true,
        validator: (value) => {
            const hasName = value.every((option) => Object.keys(option).includes('name'))
            const hasId = value.every((option) => Object.keys(option).includes('id'))
            return hasName && hasId
        }
    },
    selected: {
        type: Array,
        required: true
    }
})

const check = (e) => {
    let updateValue = [...props.selected]
    if (e.checked) {
        updateValue = [...props.selected, e.id]
        emit('update:selected', updateValue)
    } else {
        emit('update:selected', updateValue.filter((f) => { return f !== e.id }))
    }
    // console.log(e.id, e.checked, updateValue)
}
</script>

<template>
    <Checkbox
        v-for="option in options"
        :key="option.id"
        :label="option.name"
        :id="option.id"
        :checked="selected.includes(option.id)"
        :color="option.color"
        :value="option.name"
        :group="true"
        @updateCheckboxGroup="check"
    />
</template>

<style scoped>

</style>
