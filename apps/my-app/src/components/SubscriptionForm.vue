<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        placeholder: {
            type: String,
            default: 'test'
        }
    })

    const email = ref('');
    const showError = ref(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        showError.value = !re.test(email);
    }

    const handleSubscribe = () => {
        if (email.value) {
            console.log(`Subscribed with email: ${email.value}`);
            email.value = '';
        } else {
            console.log('Please enter a valid email address.');
        }
    };
</script>
<template>
    <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        class="subscription-input"
        @blur="validateEmail"
    />
    <div v-if="showError" class="error-message">Please enter a valid email address.</div>
    <button class="subscribe-button" @click="handleSubscribe">Subscribe</button>
    
</template>