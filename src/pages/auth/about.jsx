import about from '@/assets/about1.png';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Schema for first form
const aboutSchema = z.object({
  fullname: z.string().min(1, 'Full Name is required'),
  addbio: z.string().min(1, 'Add Bio is required'),
  businessname: z.string().min(1, 'Business Name is required'),
  businessaddress: z.string().min(1, 'Business Address is required'),
});

// Schema for second form with file input validation
const additionalSchema = z.object({
  experience: z.string().min(1, 'Experience is required'),
  skills: z.string().min(1, 'Skills are required'),
  file: z.any().refine((file) => file && file.length > 0, {
    message: 'File is required',
  }),
});

export default function About() {
  const [step, setStep] = useState(1);

  const form1 = useForm({
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      fullname: '',
      addbio: '',
      businessname: '',
      businessaddress: '',
    },
  });

  const form2 = useForm({
    resolver: zodResolver(additionalSchema),
    defaultValues: {
      experience: '',
      skills: '',
      file: null, // Ensure the file is stored in the form
    },
  });

  const onSubmit1 = (data) => {
    console.table(data);
    setStep(2);
  };

  const onSubmit2 = (data) => {
    console.table(data);
    alert('Form submitted successfully');
  };

  return (
    <div className="flex justify-center items-center gap-10 min-h-[calc(100svh-116px)] container mx-auto ">
      <div>
        <img src={about} alt="Sign Up" className="w-full h-auto " />
      </div>
      <div className="px-8 w-full rounded-lg flex flex-col justify-center gap-6">
        <div>
          <h3>{step === 1 ? '1/2 Create profile' : '2/2 Additional Info'}</h3>
          <h1 className="font-bold text-3xl leading-normal">
            {step === 1 ? 'Tell Us About Yourself' : 'More About You'}
          </h1>
        </div>
        {/* <div className="mt-6">
          <FormLabel>Upload License/Certification</FormLabel>
          <div
            className="border-2 border-dotted border-gray-500 p-10 max-w-lg bg-gray-200 text-center rounded-md cursor-pointer hover:bg-gray-300 mt-5"
            onClick={() => document.getElementById('File-upload').click()}
          >
            <PlusCircle className="mx-auto text-gray-500 mb-2" size={30} />
            <span className="text-gray-700">Upload Documents</span>
            <input
              id="File-upload"
              type="file"
              className="hidden"
              onChange={(e) => form1.setValue('file', e.target.files[0])}
            />
          </div>
          <FormMessage />
        </div> */}
        {step === 1 && (
          <Form {...form1}>
            <form
              onSubmit={form1.handleSubmit(onSubmit1)}
              className="space-y-4"
            >
              {/* Form Fields for Step 1 */}
              <FormField
                control={form1.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form1.control}
                name="addbio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add Bio</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Write something about yourself"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form1.control}
                name="businessname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Business Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form1.control}
                name="businessaddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Business Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-[168px] h-12" type="submit">
                Save and Next
              </Button>
            </form>
          </Form>
        )}

        {step === 2 && (
          <Form {...form2}>
            <h1 className="font-bold text-3xl leading-normal">
              Share your details
            </h1>
            <form
              onSubmit={form2.handleSubmit(onSubmit2)}
              className="space-y-4"
            >
              {/* Form Fields for Step 2 */}
              <FormField
                control={form2.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your experience" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form2.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your skills" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-6">
                <FormLabel>Upload License/Certification</FormLabel>
                <div
                  className="border-2 border-dotted border-gray-500 p-10 max-w-lg bg-gray-200 text-center rounded-md cursor-pointer hover:bg-gray-300 mt-5"
                  onClick={() => document.getElementById('file-upload').click()}
                >
                  <PlusCircle
                    className="mx-auto text-gray-500 mb-2"
                    size={30}
                  />
                  <span className="text-gray-700">Upload Documents</span>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={(e) => form2.setValue('file', e.target.files[0])}
                  />
                </div>
                <FormMessage />
              </div>

              <Button className="w-[168px] h-12" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
