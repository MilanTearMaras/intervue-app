import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
import { useForm } from 'vee-validate';
import * as Yup from 'yup';
import {submitForm} from "../api/formApi";

const schema = Yup.object({
    name: Yup.string().required('Toto pole je povinné'),
    surname: Yup.string().required('Toto pole je povinné'),
    phoneNumber: Yup.string().required('Toto pole je povinné'),
    email: Yup.string().required('Toto pole je povinné').email('Toto pole musí být email'),
    birthNumber: Yup.string().required('Toto pole je povinné'),
    birthDate: Yup.string().required('Toto pole je povinné'),
    idNumber: Yup.string().required('Toto pole je povinné'),
    address: Yup.string().required('Toto pole je povinné'),
    bankAccount: Yup.string().required('Toto pole je povinné'),
    investmentAmount: Yup.string().required('Toto pole je povinné'),
    consent: Yup.string().required('Toto pole je povinné'),
});

export const useFormStore = defineStore('form', () => {
    const currentStep = ref(1);

    const recentUserId: Ref<string> = ref(null);

    const { errors, defineField, handleSubmit } = useForm({
        validationSchema: schema,
    });

    const [name, nameProps] = defineField('name');
    const [surname, surnameProps] = defineField('surname');
    const [phoneNumber, phoneNumberProps] = defineField('phoneNumber');
    const [email, emailProps] = defineField('email');
    const [birthNumber, birthNumberProps] = defineField('birthNumber');
    const [birthDate, birthDateProps] = defineField('birthDate');
    const [idNumber, idNumberProps] = defineField('idNumber');
    const [address, addressProps] = defineField('address');
    const [bankAccount, bankAccountProps] = defineField('bankAccount');
    const [investmentAmount, investmentAmountProps] = defineField('investmentAmount');
    const [consent, consentProps] = defineField('consent');
    
    const nextStep = () => {
        if (currentStep.value < 4) currentStep.value++;
    };

    const prevStep = () => {
        if (currentStep.value > 1) currentStep.value--;
    };

    const sendForm = handleSubmit(async (values) => {
        try {
            const response = await submitForm(values);
            console.log("Formulář byl úspěšně odeslán:", response);
        } catch (error) {
            console.error("Chyba při odesílání formuláře:", error);
        }
        nextStep();
    });

    return { 
        currentStep,
        recentUserId,
        errors,
        name, nameProps,
        surname, surnameProps,
        phoneNumber, phoneNumberProps,
        email, emailProps,
        birthNumber, birthNumberProps,
        birthDate, birthDateProps,
        idNumber, idNumberProps,
        address, addressProps,
        bankAccount, bankAccountProps,
        investmentAmount, investmentAmountProps,
        consent, consentProps,
        nextStep,
        prevStep,
        sendForm,
    };
});
