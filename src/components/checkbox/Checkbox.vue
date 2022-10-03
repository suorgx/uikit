<script setup>
    const emit = defineEmits([
        'update:checked'
    ])

    const props = defineProps({
        name: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        checked: {
            type: Boolean,
            default: false
        },
    })

    const handleClick = (event) => {
        emit('update:checked', event.target.checked)
    }
</script>

<template>
    <input
        class="checkbox"
        type="checkbox"
        :name="name"
        :id="id"
        :value="value"
        :checked="checked"
        @input="handleClick($event)">
    <label :for="id">{{label}}</label>
</template>

<style lang="scss" scoped>
.checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;

    & + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
    }

    & + label::before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 85% 85%;
        cursor: pointer;
    }

    &:checked + label::before {
        border-color: var(--primary);
        background-color: var(--primary);
        background-image: url("../../assets/chech.svg");
    }

    &:not(:disabled):not(:checked) + label:hover::before {
        border-color: var(--primary-hover);;
    }

    &:not(:disabled):active + label::before {
        background-color: var(--info-hover);
        border-color: var(--info-hover);
    }

    &:focus:not(:checked)+label::before {
        border-color: var(--info-hover);
    }

    &:disabled + label::before {
        background-color: #e9ecef;
    }
}
</style>
