import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Về tôi', href: '#about' },
    { label: 'Kỹ năng', href: '#skills' },
    { label: 'Kinh nghiệm', href: '#experience' },
    { label: 'Dự án', href: '#projects' },
    { label: 'Liên hệ', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl">Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
