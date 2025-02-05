import signInIllustration from '@/assets/sign-in-illustration.svg';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

export default function SignIn() {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.table(data);
  };

  return (
    <div className="flex justify-center items-center gap-[195px] min-h-[calc(100svh-116px)] container mx-auto max-w-[1272px]">
      <div>
        <img src={signInIllustration} alt="Sign Up" />
      </div>
      <div className="border px-8 w-[460px] h-[660px] rounded-lg flex flex-col justify-center gap-6">
        <div className="space-y-5">
          <h2 className="font-bold text-3xl leading-normal">Sign Up</h2>
          <p className="text-foreground/70 space-x-2">
            <span>New User?</span>
            <Link to="/auth/sign-up" className="font-medium">
              Sign Up
            </Link>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full h-12" type="submit">
              Sign In
            </Button>
          </form>
        </Form>

        <div className="flex justify-center">
          <p className="text-foreground/70 space-x-2">
            <span>New User?</span>
            <Link to="/auth/sign-up" className="font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
