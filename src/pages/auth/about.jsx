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
import { Link } from 'react-router';
import { z } from 'zod';

const aboutSchema = z.object({
  fullname: z.string().min(1, 'Full Name is required'),
  addbio: z.string().min(1, 'Add Bio is required'),
  businessname: z.string().min(1, 'Business Name is required'),
  businessaddress: z.string().min(1, 'Business Address is required'),
  file: z.instanceof(File, { message: 'File is required' }),
});

const additionalSchema = z.object({
  experience: z.string().min(1, 'Experience is required'),
  skills: z.string().min(1, 'Skills are required'),
  file: z.instanceof(File, { message: 'File is required' }),
});

export default function About() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [documentPreview, setDocumentPreview] = useState(null);

  const form1 = useForm({
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      fullname: '',
      addbio: '',
      businessname: '',
      businessaddress: '',
      file: null,
    },
  });

  const form2 = useForm({
    resolver: zodResolver(additionalSchema),
    defaultValues: {
      experience: '',
      file: null,
    },
  });

  const onSubmit1 = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  const onSubmit2 = (data) => {
    const finalData = { ...formData, ...data };
    console.table(finalData);
  };

  return (
    <div className="flex justify-center items-center gap-10 min-h-[calc(100svh-116px)] container mx-auto">
      <div>
        <img src={about} alt="Sign Up" className="w-full h-auto" />
      </div>
      <div className="px-8 w-full rounded-lg flex flex-col justify-center gap-6">
        <div>
          <h3>{step === 1 ? '1/2 Create profile' : '2/2 Additional Info'}</h3>
          <h1 className="font-bold text-3xl leading-normal">
            {step === 1 ? 'Tell Us About Yourself' : 'More About You'}
          </h1>
        </div>

        {step === 1 && (
          <Form {...form1}>
            <form
              onSubmit={form1.handleSubmit(onSubmit1)}
              className="space-y-4"
            >
              <FormField
                control={form1.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Profile Photo</FormLabel>
                    <div
                      className="border-2 border-dotted border-gray-500 p-10 h-36 w-36 flex items-center justify-center bg-gray-200 text-center rounded-full cursor-pointer hover:bg-gray-300 mt-5 relative"
                      onClick={() =>
                        document.getElementById('file-upload-step1').click()
                      }
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="h-full w-full object-cover rounded-full"
                        />
                      ) : (
                        <div>
                          <PlusCircle
                            className="mx-auto text-muted-foreground"
                            size={20}
                          />
                          <span className="text-muted-foreground truncate text-xs">
                            Upload Photo
                          </span>
                        </div>
                      )}
                      <input
                        id="file-upload-step1"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          form1.setValue('file', file);

                          if (file) {
                            const imageURL = URL.createObjectURL(file);
                            setImagePreview(imageURL);
                          }
                        }}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
            <form
              onSubmit={form2.handleSubmit(onSubmit2)}
              className="space-y-4"
            >
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
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload License/Certification</FormLabel>
                    <div
                      className="border-2 border-dotted border-gray-500 p-10 max-w-lg bg-gray-200 text-center rounded-md cursor-pointer hover:bg-gray-300 mt-5"
                      onClick={() =>
                        document.getElementById('file-upload-step2').click()
                      }
                    >
                      {documentPreview ? (
                        <div className="flex flex-col items-center justify-center">
                          {documentPreview.type.startsWith('image/') ? (
                            <img
                              src={documentPreview.url}
                              alt="Document Preview"
                              className="max-w-full max-h-60 rounded-md object-contain"
                            />
                          ) : (
                            <div className="text-center">
                              <span className="block font-medium">
                                {documentPreview.name}
                              </span>
                              <a
                                href={documentPreview.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline mt-2 block"
                              >
                                View Document
                              </a>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div>
                          <PlusCircle
                            className="mx-auto text-gray-500 mb-2"
                            size={30}
                          />
                          <span className="text-gray-700">
                            Upload Documents
                          </span>
                        </div>
                      )}

                      <input
                        id="file-upload-step2"
                        type="file"
                        className="hidden"
                        accept="application/pdf,image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          form2.setValue('file', file);

                          if (file) {
                            const fileURL = URL.createObjectURL(file);
                            setDocumentPreview({
                              url: fileURL,
                              name: file.name,
                              type: file.type,
                            });
                          }
                        }}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-[168px] h-12 mr-5"
                variant={'outline'}
                onClick={() => setStep(1)}
              >
                Previous
              </Button>
              <Link to={'/auth/create-profile/review'}>
                <Button className="w-[168px] h-12" type="submit">
                  save and next
                </Button>
              </Link>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
