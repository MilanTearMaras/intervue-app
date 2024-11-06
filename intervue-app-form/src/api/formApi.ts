import { useFormStore } from "../stores/formStore";
import { storeToRefs } from "pinia";

export async function submitForm(data: any) {
    const formStore = useFormStore();
    const { recentUserId } = storeToRefs(formStore);

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({data, userId: 1}),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json());

        recentUserId.value = response.userId;

        return response;
    } catch (error) {
        console.error("Error submitting form", error);
        throw error;
    }
}

export async function getUserData(userId: string) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);

        return response.json();
    } catch (error) {
        console.error("Error getting user data", error);
        throw error;
    }
}
