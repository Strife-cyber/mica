import { cn } from '@/lib/utils';
import AppLogoIcon from './app-logo-icon';

const AppLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="text-sidebar-primary-foreground flex aspect-square size-10 items-center justify-center rounded-md">
        <AppLogoIcon />
      </div>
      <div className="ml-1 grid flex-1 text-left text-lg">
        <span className="leading-none font-bold">MICA</span>
      </div>
    </div>
  );
};

export default AppLogo;
