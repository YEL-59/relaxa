import { Badge } from '@/components/ui/badge';
import { ArrowUp, Receipt } from 'lucide-react';

const EarningSummary = () => {
  return (
    <>
      <div className="bg-background  rounded-xl p-5">
        <div className="flex items-end">
          <div className="size-[64px] rounded-full bg-accent flex justify-center items-center cursor-pointer hover:bg-accent shrink-0">
            {' '}
            <Receipt className="text-primary" />
          </div>

          <div className="flex-1 min-w-0 ms-4">
            <p className="text-[#666] font-poppins text-[15px] not-italic font-normal leading-normal">
              Todays Earnings
            </p>
            <p className="text-black font-poppins text-[24px] not-italic font-medium leading-normal">
              $384.42
            </p>
          </div>
          <div className="inline-flex  items-center  font-semibold ">
            <Badge variant={'success-fill'}>
              <ArrowUp size={15} className="mr-1" />
              12%
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarningSummary;
