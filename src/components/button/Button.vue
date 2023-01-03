<script setup>
const props = defineProps({
    label: {
        type: String,
        default: 'Button'
    },
    color: {
        type: String,
        default: 'primary'
    },
    rounded: {
        type: Boolean,
        required: false
    },
    disabled: {
        type: Boolean,
        required: false
    },
    outlined: {
        type: Boolean,
        required: false
    },
    icon: {
        type: String,
        required: false
    },
    size: {
        type: String,
        default: 'normal'
    }
})

const emit = defineEmits(['event'])

const clickOnButton = () => {
    emit('event')
}
</script>

<template>
    <button
        :class="['btn', `btn__${color}`,
        {'btn__rounded': rounded},
        {'btn__outlined': outlined},
        {'btn__icon': icon},
        {'btn__large': size === 'large'},
        {'btn__x-large': size === 'x-large'},
        {'btn__small': size === 'small'},
        {'btn__x-small': size === 'x-small'}]"
        :disabled="disabled"
        @click="clickOnButton">
        <span v-if="icon">
          <font-awesome-icon :icon="`fa-regular fa-${icon}`"/>
        </span>
        <span v-else>{{ label }}</span>
    </button>
</template>

<style lang="scss" scoped>
.btn {
    padding: 0 20px;
    height: 40px;
    color: #fff;
    border-radius: 6px;
    border: 0.8px solid #fff;
    cursor: pointer;
    font-size: 15px;
    transition: 0.2s;

    &__primary {
        background: var(--primary);
        border-color: var(--primary);

        &:enabled:hover {
            background: var(--primary-hover);
            border-color: var(--primary-hover);
        }
    }

    &__second {
        background: var(--second);
        border-color: var(--second);

        &:enabled:hover {
            background: var(--second-hover);
            border-color: var(--second-hover);
        }
    }

    &__success {
        background: var(--success);
        border-color: var(--success);

        &:enabled:hover {
            background: var(--success-hover);
            border-color: var(--success-hover);
        }
    }

    &__info {
        background: var(--info);
        border-color: var(--info);

        &:enabled:hover {
            background: var(--info-hover);
            border-color: var(--info-hover);
        }
    }

    &__error {
        background: var(--error);
        border-color: var(--error);

        &:enabled:hover {
            background: var(--error-hover);
            border-color: var(--error-hover);
        }
    }

    &__warning {
        background: var(--warning);
        border-color: var(--warning);

        &:enabled:hover {
            background: var(--warning-hover);
            border-color: var(--warning-hover);
        }
    }

    &__rounded {
        border-radius: 18px;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }

    &__outlined {
        background: transparent;
        color: #111;

        &:enabled:hover {
            color: #fff;
        }
    }

    &__icon {
        border-radius: 50%;
        width: 60px;
        height: 60px;
    }

    &__large {
        font-size: 22px;
        padding: 10px 22px;
        height: fit-content;
    }

    &__x-large {
        font-size: 25px;
        padding: 11px 25px;
        height: fit-content;
    }

    &__small {
        font-size: 14px;
        padding: 9px 14px;
        height: fit-content;
    }

    &__x-small {
        font-size: 11px;
        padding: 8px 11px;
        height: fit-content;
    }
}
</style>
