<script setup>
import Button from '@/components/Button.vue'

const eventForButton = () => {
  console.log('event for button')
}
</script>

<template>
  <h2>Button</h2>
  <h3>Colors:</h3>
   <div class="line">
     <Button color="primary" label="Primary" class="mr"/>
     <Button color="second" label="Second" class="mr"/>
     <Button color="success" label="Success" class="mr"/>
     <Button color="info" label="Info" class="mr"/>
     <Button color="warning" label="Warning" class="mr"/>
     <Button color="error" label="Error"/>
   </div>
  <h3>Rounded:</h3>
  <div class="line">
    <Button :rounded="true" color="primary" label="Primary" class="mr"/>
    <Button :rounded="true" color="second" label="Second" class="mr"/>
    <Button :rounded="true" color="success" label="Success" class="mr"/>
    <Button :rounded="true" color="info" label="Info" class="mr"/>
    <Button :rounded="true" color="warning" label="Warning" class="mr"/>
    <Button :rounded="true" color="error" label="Error"/>
  </div><h3>Disabled:</h3>
  <div class="line">
    <Button :disabled="true" color="primary" label="Primary" class="mr"/>
    <Button :disabled="true" color="second" label="Second" class="mr"/>
  </div>
  <h3>Outlined:</h3>
  <div class="line">
    <Button :outlined="true" color="primary" label="Primary" class="mr"/>
    <Button :outlined="true" color="second" label="Second" class="mr"/>
    <Button :outlined="true" color="success" label="Success" class="mr"/>
    <Button :outlined="true" color="info" label="Info" class="mr"/>
    <Button :outlined="true" color="warning" label="Warning" class="mr"/>
    <Button :outlined="true" color="error" label="Error"/>
  </div>
  <h3>Icons:</h3>
  <div class="line">
    <Button :outlined="true"  color="primary" icon="circle-up" class="mr"/>
    <Button color="second" icon="hand" class="mr"/>
    <Button :outlined="true"  color="success" icon="address-book" class="mr"/>
    <Button color="info" icon="credit-card" class="mr"/>
    <Button :outlined="true"  color="warning" icon="lemon" class="mr"/>
    <Button color="error" icon="hourglass" class="mr"/>
  </div>
  <h3>Size:</h3>
  <div class="line">
    <Button size="x-small" color="primary" label="x-small" class="mr"/>
    <Button size="small" color="second" label="small" class="mr"/>
    <Button size="normal" color="success" label="normal" class="mr"/>
    <Button size="large" color="info" label="large" class="mr"/>
    <Button size="x-large" color="warning" label="x-large" class="mr"/>
  </div>
  <h3>Event:</h3>
  <div class="line">
    <Button color="error" label="@click" class="mr" @event="eventForButton"/>
  </div>
</template>

<style lang="scss" scoped>
.line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 18px;
}
</style>