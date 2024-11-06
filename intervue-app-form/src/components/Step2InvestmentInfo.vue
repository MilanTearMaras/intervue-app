<template>
  <form
    class="md:grid grid-cols-2 gap-4"
    novalidate
  >
    <h2 class="text-2xl col-span-2 md:mb-0 mb-4">
      Informace o investici
    </h2>
    <div class="mb-4 col-span-2 field">
      <label
        for="investmentAmount"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Pravidelná výše investice (Kč)</label>
      <input
        id="investmentAmount"
        v-model="investmentAmount"
        v-bind="investmentAmountProps"
        type="range"
        min="100"
        max="10000"
        step="100"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
      <span>{{ investmentAmount }} Kč</span>
      <span class="text-red-500 text-xs italic">{{ errors.investmentAmount }}</span>
    </div>
    <div class="mb-4 col-span-2 field">
      <label
        for="bankAccount"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Číslo bankovního účtu</label>
      <input
        id="bankAccount"
        v-model="bankAccount"
        v-bind="bankAccountProps"
        type="text"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      >
      <span class="text-red-500 text-xs italic">{{ errors.bankAccount }}</span>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useFormStore } from "../stores/formStore";
import { storeToRefs } from "pinia";

const formStore = useFormStore();
const { 
  errors,
  investmentAmount,
  investmentAmountProps,
  bankAccount,
  bankAccountProps,
} = storeToRefs(formStore);
</script>
