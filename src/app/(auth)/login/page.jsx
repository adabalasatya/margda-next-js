// login/page.js
import { Suspense } from 'react';
import LoginForm from '@/components/HomePage/LoginForm/page';

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}