<template>
    <v-container :fluid="true">
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="text-purple-500 !font-extrabold">Create Customer</v-card-title>
                    <form @submit.prevent="submit" class="px-4 pb-5">
                        <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
                            label="Name"></v-text-field>

                        <v-text-field v-model="phone.value.value" :counter="7" :error-messages="phone.errorMessage.value"
                            label="Phone Number"></v-text-field>

                        <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                            label="E-mail"></v-text-field>



                        <v-btn class="mt-5" type="submit">
                            submit
                        </v-btn>
                    </form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useRouter } from 'vue-router';

const router = useRouter();
const { handleSubmit } = useForm({
    validationSchema: {
        name(value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        phone(value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
        },
        email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },
    },
})
const email = useField('email')
const name = useField('name')
const phone = useField('phone')
const howfindus = useField('select')

const howFindUsReasons = ref([
    'Ads',
    'Presentation Card',
    'Recomendation',
    'Social Media',
])

const { mutate: createCustomer, onDone } = useMutation(gql`
        mutation createCustomer( $name: String!, $email: String!, $phone: String!) {
            createCustomer(
                name: $name,
                email: $email,
                phone: $phone,
            )
                {
                    id,
                    name,
                    email,
                    phone
                }
        }
    `, () => ({
    update: (cache, { data: { createCustomer } }) => {
        console.log(createCustomer)
    },
}));


onDone(() => {
    router.push({
        name: 'customers.index',
    })
})

const submit = handleSubmit(values => {
    const { name, phone, email } = values
    createCustomer({
        name,
        phone,
        email,
    })
});



</script>

<style scoped></style>