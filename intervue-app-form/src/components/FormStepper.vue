<template>
  <div
    class="mt-4"
    :class="{'flex items-center justify-between': currentStep < 4}"
  >
    <button
      :disabled="currentStep === 1"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:pointer-events-none"
      @click="prevStep"
    >
      Zpět
    </button>
    <button
      v-if="currentStep < 3"
      :disabled="!isFormValid"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:pointer-events-none"
      @click="nextStep"
    >
      Další
    </button>
    <button
      v-if="currentStep === 3"
      :disabled="!consent"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:pointer-events-none"
      @click="formStore.sendForm"
    >
      Odeslat
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useFormStore } from "../stores/formStore";
import { storeToRefs } from "pinia";

const formStore = useFormStore();
const { nextStep, prevStep } = formStore;
const { 
  currentStep,
  name,
  nameProps,
  surname,
  phoneNumber,
  email,
  birthNumber,
  birthDate,
  idNumber,
  address,
  investmentAmount,
  bankAccount,
  consent,
} = storeToRefs(formStore);

const isFormValid = computed(() => {
  if (currentStep.value === 1) {
    return ( name.value && surname.value && phoneNumber.value && email.value && birthNumber.value && birthDate.value && idNumber.value && address.value);
  } else if (currentStep.value === 2) {
    return (investmentAmount.value && bankAccount.value);
  } else if (currentStep.value === 3) {
    return consent.value;
  }
  return true;
});
</script>
