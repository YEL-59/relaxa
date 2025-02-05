import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-muted p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-4xl font-bold">Relax</h1>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex space-x-4">
          <Link to={'sign-in'}>
            {' '}
            <Button variant={'outline'} size={'lg'}>
              Sign In
            </Button>
          </Link>
          <Link to={'sign-up'}>
            {' '}
            <Button size={'lg'}>Join</Button>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2 items-center">
          <Button variant={'outline'} size={'lg'}>
            Sign In
          </Button>
          <Button size={'lg'}>Join</Button>
        </div>
      )}
    </nav>
  );
}
