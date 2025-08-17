import { Link, useLocation } from 'react-router';
import { Home, FileText, User } from 'lucide-react';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/useIsMobile';
import { ToggleTheme } from './ToggleTheme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="bg-sidebar shadow-sm border-b border-muted fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center space-x-2 font-bold text-primary sr-only lg:not-sr-only">
                <User className="h-6 w-6 text-primary" />
                <span className='whitespace-nowrap'>Dr. Doris Edmund Macha</span>
              </Link>
              <div className="flex space-x-2 lg:space-x-6">
                <Link
                  to="/"
                  className={cn(buttonVariants({ variant: 'ghost', size: isMobile ? 'sm' : 'default' }), `${location.pathname === '/' ? 'text-primary bg-primary/20' : 'text-foreground'} hover:text-primary hover:bg-primary/20 active:text-primary active:bg-primary/20`)}
                >
                  {!isMobile && <Home className="h-4 w-4" />}
                  <span>Home</span>
                </Link>
                <Link
                  to="/researches"
                  className={cn(buttonVariants({ variant: 'ghost', size: isMobile ? 'sm' : 'default' }), `${location.pathname.startsWith('/researches') ? 'text-primary bg-primary/20' : 'text-foreground'} hover:text-primary hover:bg-primary/20 active:text-primary active:bg-primary/20`)}
                >
                  {!isMobile && <FileText className="h-4 w-4" />}
                  <span>Researches</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ToggleTheme />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow mt-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="w-full text-center py-4 border-t border-muted bg-sidebar text-sm text-foreground">
        {`Copyright 2025${new Date().getFullYear() === 2025 ? '' : ' - ' + new Date().getFullYear()}`}
      </footer>
    </div>
  );
};

export default Layout;