// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const AddressUncheckedCreateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.string(),  address: Yup.string().required(),  cep: Yup.string().required(),  state: Yup.string().required(),  city: Yup.string().required(),  number: Yup.string().required(),  complement: Yup.mixed().oneOfSchemas([Yup.string()]),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
