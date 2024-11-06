<template>
  <div class="bg-white md:shadow-md md:rounded md:px-8 md:pt-6 md:pb-8">
    <div
      v-if="currentStep === 1"
      class="animate-slideLeftAndFade"
    >
      <Step1PersonalInfo />
    </div>
    <div
      v-else-if="currentStep === 2"
      class="animate-slideLeftAndFade"
    >
      <Step2InvestmentInfo />
    </div>
    <div
      v-else-if="currentStep === 3"
      class="animate-slideLeftAndFade"
    >
      <Step3Confirmation />
    </div>
    <div
      v-else-if="currentStep === 4"
      class="animate-slideLeftAndFade"
    >
      <Step4Summary />
    </div>
    <FormStepper />
  </div>
</template>

<script lang="ts" setup>
import Step1PersonalInfo from "../components/Step1PersonalInfo.vue";
import Step2InvestmentInfo from "../components/Step2InvestmentInfo.vue";
import Step3Confirmation from "../components/Step3Confirmation.vue";
import FormStepper from "../components/FormStepper.vue";
import { useFormStore } from "../stores/formStore";
import { storeToRefs } from "pinia";
import Step4Summary from "../components/Step4Summary.vue";

const formStore = useFormStore();
const { currentStep } = storeToRefs(formStore);
</script>
