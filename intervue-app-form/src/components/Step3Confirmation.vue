<template>
  <form
    class="md:grid grid-cols-2 gap-4"
    novalidate
  >
    <h2 class="text-2xl col-span-2 md:mb-0 mb-4">
      Souhrn údajů
    </h2>

    <div class="md:grid grid-cols-2 mb-4 col-span-2">
      <p class="font-bold md:text-left">
        Jméno:
      </p><p class="md:text-right md:mb-0 mb-4">
        {{ name }}
      </p>
      <p class="font-bold md:text-left">
        Příjmení:
      </p><p class="md:text-right md:mb-0 mb-4">
        {{ surname }}
      </p>
      <p class="font-bold md:text-left">
        Telefonní číslo:
      </p><p class="md:text-right md:mb-0 mb-4">
        {{ phoneNumber }}
      </p>
      <p class="font-bold md:text-left">
        Emailová adresa:
      </p><p class="md:text-right md:mb-0 mb-4">
        {{ email }}
      </p>
      <p class="font-bold md:text-left">
        Rodné číslo:
      </p><p class="md:text-right md:mb-0 mb-4">
        {{ birthNumber }}
      </p>
      <p class="font-bold md:text-left">
        Datum narození:
      </p><p class="md:text-right md:mb-0 mb-4">
        {{ formatedDate }}
      </p>
    </div>
    <div class="mb-4 col-span-2 field">
      <label>
        <input
          v-model="consent"
          v-bind="consentProps"
          type="checkbox"
        > Souhlasím se zpracováním osobních údajů
      </label>
      <span class="text-red-500 text-xs italic">{{ errors.consent }}</span>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useFormStore } from "../stores/formStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const formStore = useFormStore();
const {
  errors,
  name,
  surname,
  phoneNumber,
  email,
  birthNumber,
  birthDate,
  consent,
  consentProps,
} = storeToRefs(formStore);

const formatedDate = computed( () =>{
  return new Date(birthDate.value).toLocaleDateString();
});
</script>
