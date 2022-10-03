<script setup>
import Button from '@/components/button/Button.vue'

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
        <Button rounded color="primary" label="Primary" class="mr"/>
        <Button rounded color="second" label="Second" class="mr"/>
        <Button rounded color="success" label="Success" class="mr"/>
        <Button rounded color="info" label="Info" class="mr"/>
        <Button rounded color="warning" label="Warning" class="mr"/>
        <Button rounded color="error" label="Error"/>
    </div>
    <h3>Disabled:</h3>
    <div class="line">
        <Button disabled color="primary" label="Primary" class="mr"/>
        <Button disabled color="second" label="Second" class="mr"/>
    </div>
    <h3>Outlined:</h3>
    <div class="line">
        <Button outlined color="primary" label="Primary" class="mr"/>
        <Button outlined color="second" label="Second" class="mr"/>
        <Button outlined color="success" label="Success" class="mr"/>
        <Button outlined color="info" label="Info" class="mr"/>
        <Button outlined color="warning" label="Warning" class="mr"/>
        <Button outlined color="error" label="Error"/>
    </div>
    <h3>Icons:</h3>
    <div class="line">
        <Button outlined color="primary" icon="circle-up" class="mr"/>
        <Button color="second" icon="hand" class="mr"/>
        <Button outlined color="success" icon="address-book" class="mr"/>
        <Button color="info" icon="credit-card" class="mr"/>
        <Button outlined color="warning" icon="lemon" class="mr"/>
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
