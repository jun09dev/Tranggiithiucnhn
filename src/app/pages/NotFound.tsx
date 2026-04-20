import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';

export function NotFound() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link to="/">
          <Button>{t('nav.home')}</Button>
        </Link>
      </div>
    </div>
  );
}
