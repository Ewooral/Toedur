// usePersonalForm.ts
import { useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { personalInfoSchema, signInSchema, signUpSchema } from '@/lib/schema';


// TypeScript type for the form data
export type PersonalInfoFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>

// Custom hook to encapsulate useForm logic
export function useCustomForm() {
  const formMethods = useForm<PersonalInfoFormData>({
    resolver: zodResolver(signUpSchema),
  });

  return {...formMethods}; // This includes register, handleSubmit, formState, etc.
}

export function useSignUpForm(){
  const formMethods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  return {...formMethods}; // This includes register, handleSubmit, formState, etc.
}