import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CircleAlert } from 'lucide-react';
import { Link } from 'react-router';
import review from '../../assets/review.png';

export default function Review() {
  return (
    <div className="min-h-[calc(100svh-116px)] flex justify-center items-center px-5 py-10">
      <div className="max-w-[1920px] w-full flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
        <div className="w-full max-w-sm md:max-w-md">
          <img src={review} alt="Review" className="w-full h-auto" />
        </div>

        <div className="flex flex-col gap-6 max-w-3xl text-center md:text-left">
          <h1 className="text-[28px] md:text-[36px] font-medium leading-[40px] md:leading-[54px] text-[#222] font-helvetica">
            Profile Submitted for Review!
          </h1>
          <p className="text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-[#6B6B6B] font-helvetica">
            Thank you for providing your information! Our team is reviewing your
            details to ensure everything is in order. You will receive an email
            notification once your profile has been approved.
          </p>

          <Alert
            variant="destructive"
            className="bg-[#BD82B9] text-white border-0 flex items-center text-left"
          >
            <CircleAlert className=" stroke-foreground w-6 h-6 flex-shrink-0" />
            <AlertDescription className="text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-white font-helvetica ml-2">
              This process typically takes 1-2 business days. We appreciate your
              patience and look forward to having you on board!
            </AlertDescription>
          </Alert>

          <div className="flex justify-center md:justify-start">
            <Link to="/">
              <Button size="lg" className="w-[10rem]">
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
