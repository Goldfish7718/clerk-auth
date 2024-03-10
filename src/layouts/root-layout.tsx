import { Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button';
import { shadesOfPurple } from '@clerk/themes';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
 
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
export default function RootLayout() {
  const navigate = useNavigate();
  
  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY} appearance={{ 
      baseTheme: shadesOfPurple,
    }}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <header className="header">
          <div className='p-4 w-full flex flex-row justify-between items-center'>
            <h1 className='text-3xl font-bold'>Clerk.auth()</h1>

            <div className='gap-3 flex'>
              <ModeToggle />
              <SignedOut>
                <Button onClick={() => navigate('/sign-in')}>Sign In</Button>
                <Button onClick={() => navigate('/sign-up')}>Sign Up</Button>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl='/sign-in' />
              </SignedIn>
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </ClerkProvider>
  )
}