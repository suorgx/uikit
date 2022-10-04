<script setup>
    const emits = defineEmits([
        'update:checked',
        'updateCheckboxGroup'
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
        disabled: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'primary'
        },
        group: {
            type: Boolean,
            default: false
        },
    })

    const handleClick = (event) => {
        if (props.group) {
            emits('updateCheckboxGroup', event.target)
        } else {
            emits('update:checked', event.target.checked)
        }
    }
</script>

<template>
    <div>
        <input
            :class="['checkbox', `checkbox__${color}`]"
            type="checkbox"
            :name="name"
            :id="id"
            :value="value"
            :checked="checked"
            :disabled="disabled"
            @input="handleClick($event)">
        <label :for="id">{{label}}</label>
    </div>
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
        border: 1px solid #dcdcdc;
        border-radius: 7px;
        margin-right: 6px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 85% 85%;
        cursor: pointer;
    }

    &:checked + label::before {
        background-image: url("../../assets/chech.svg");
    }

    &__primary:checked + label::before {
        background-color: var(--primary);
        border-color: var(--primary);
    }

    &__primary:not(:disabled):not(:checked) + label:hover::before {
        border-color: var(--primary-hover);
        background-color: var(--primary-hover);
    }

    &__second:checked + label::before {
        background-color: var(--second);
        border-color: var(--second);
    }

    &__second:not(:disabled):not(:checked) + label:hover::before {
        background-color: var(--second-hover);
        border-color: var(--second-hover);
    }

    &__success:checked + label::before {
        background-color: var(--success);
        border-color: var(--success);
    }

    &__second:not(:disabled):not(:checked) + label:hover::before {
        background-color: var(--success-hover);
        border-color: var(--success-hover);
    }

    &__info:checked + label::before {
        background-color: var(--info);
        border-color: var(--info);
    }

    &__info:not(:disabled):not(:checked) + label:hover::before {
        background-color: var(--info-hover);
        border-color: var(--info-hover);
    }

    &__error:checked + label::before {
        background-color: var(--error);
        border-color: var(--error);
    }

    &__error:not(:disabled):not(:checked) + label:hover::before {
        background-color: var(--error-hover);
        border-color: var(--error-hover);
    }

    &__warning:checked + label::before {
        background-color: var(--warning);
        border-color: var(--warning);
    }

    &__warning:not(:disabled):not(:checked) + label:hover::before {
        background-color: var(--warning-hover);
        border-color: var(--warning-hover);
    }

    &:disabled + label::before {
        background-color: #e7e7e7;
        border-color: #e7e7e7;
        cursor: no-drop;
    }
}
</style>
