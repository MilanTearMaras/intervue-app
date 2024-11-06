<template>
  <form
    class="md:grid grid-cols-2 gap-4"
    novalidate
  >
    <h2 class="text-2xl col-span-2">
      Osobní údaje
    </h2>

    <div class="field">
      <label
        for="name"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Jméno*</label>
      <input
        id="name"
        v-model="name"
        v-bind="nameProps"
        type="text"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
      >
      <span class="text-red-500 text-xs italic">{{ errors.name }}</span>
    </div>
    <div class="mb-4 field">
      <label
        for="surname"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Příjmení*</label>
      <input
        id="surname"
        v-model="surname"
        v-bind="surnameProps"
        type="text"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      >
      <span class="text-red-500 text-xs italic">{{ errors.surname }}</span>
    </div>
    <div class="mb-4 field">
      <label
        for="phoneNumber"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Telefonní číslo*</label>
      <input
        id="phoneNumber"
        v-model="phoneNumber"
        v-bind="phoneNumberProps"
        type="tel"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      >
      <span class="text-red-500 text-xs italic">{{ errors.phoneNumber }}</span>
    </div>
    <div class="mb-4 field">
      <label
        for="email"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Emailová adresa*</label>
      <input
        id="email"
        v-model="email"
        v-bind="emailProps"
        type="email"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      >
      <span class="text-red-500 text-xs italic">{{ errors.email }}</span>
    </div>
    <div class="mb-4 field">
      <label
        for="birthNumber"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Rodné číslo*</label>
      <input
        id="birthNumber"
        v-model="birthNumber"
        v-bind="birthNumberProps"
        type="text"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      >
      <span class="text-red-500 text-xs italic">{{ errors.birthNumber }}</span>
    </div>
    <div class="mb-4 field">
      <label
        for="birthDate"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Datum narození*</label>
      <input
        id="birthDate"
        v-model="birthDate"
        v-bind="birthDateProps"
        type="date"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      >
      <span class="text-red-500 text-xs italic">{{ errors.birthDate }}</span>
    </div>
    <div class="mb-4 field">
      <label
        for="idNumber"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Číslo občanského průkazu*</label>
      <input
        id="idNumber"
        v-model="idNumber"
        v-bind="idNumberProps"
        type="text"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      >
      <span class="text-red-500 text-xs italic">{{ errors.idNumber }}</span>
    </div>
    <div class="mb-4 field">
      <label
        for="address"
        class="block text-gray-700 text-sm font-bold mb-2"
      >Adresa*</label>
      <input
        id="address"
        v-model="address"
        v-bind="addressProps"
        type="text"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      >
      <span class="text-red-500 text-xs italic">{{ errors.address }}</span>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useFormStore } from "../stores/formStore";
import { storeToRefs } from "pinia";

const formStore = useFormStore();
const {
  errors,
  name,
  nameProps,
  surname,
  surnameProps,
  phoneNumber,
  phoneNumberProps,
  email,
  emailProps,
  birthNumber,
  birthNumberProps,
  birthDate,
  birthDateProps,
  idNumber,
  idNumberProps,
  address,
  addressProps,
} = storeToRefs(formStore);
</script>