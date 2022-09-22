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
    :class="['btn', `btn_${color}`,
        {'btn_rounded': rounded},
        {'btn_outlined': outlined},
        {'btn_icon': icon},
        {'btn_large': size === 'large'},
        {'btn_x-large': size === 'x-large'},
        {'btn_small': size === 'small'},
        {'btn_x-small': size === 'x-small'}]"
    :disabled="disabled"
    @click="clickOnButton">
    <span v-if="icon">
      <font-awesome-icon :icon="`fa-regular fa-${icon}`" />
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
  &_primary {
    background: var(--primary);
    border-color: var(--primary);
    &:enabled:hover {
      background: var(--primary-hover);
      border-color: var(--primary-hover);
    }
  }
  &_second {
    background: var(--second);
    border-color: var(--second);
    &:enabled:hover {
      background: var(--second-hover);
      border-color: var(--second-hover);
    }
  }
  &_success {
    background: var(--success);
    border-color: var(--success);
    &:enabled:hover {
      background: var(--success-hover);
      border-color: var(--success-hover);
    }
  }
  &_info {
    background: var(--info);
    border-color: var(--info);
    &:enabled:hover {
      background: var(--info-hover);
      border-color: var(--info-hover);
    }
  }
  &_error {
    background: var(--error);
    border-color: var(--error);
    &:enabled:hover {
      background: var(--error-hover);
      border-color: var(--error-hover);
    }
  }
  &_warning {
    background: var(--warning);
    border-color: var(--warning);
    &:enabled:hover {
      background: var(--warning-hover);
      border-color: var(--warning-hover);
    }
  }
  &_rounded {
    border-radius: 18px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  &_outlined {
    background: transparent;
    color: #111;
    &:enabled:hover {
      color: #fff;
    }
  }
  &_icon {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  &_large {
    font-size: 22px;
    padding: 10px 22px;
    height: fit-content;
  }
  &_x-large {
    font-size: 25px;
    padding: 11px 25px;
    height: fit-content;
  }
  &_small {
    font-size: 14px;
    padding: 9px 14px;
    height: fit-content;
  }
  &_x-small {
    font-size: 11px;
    padding: 8px 11px;
    height: fit-content;
  }
}
</style>