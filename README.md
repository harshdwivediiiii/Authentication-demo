  <h1>🔐 Next.js Clerk Auth Demo</h1>
  <p>
    A custom authentication system built with <strong>Next.js</strong> and <strong>Clerk</strong>,
    featuring a completely custom login/signup UI, protected dashboard, and a responsive interactive background.
  </p>

  <section>
    <h2>🗂️ System Diagram</h2>
    <p>Below is the system diagram illustrating the Clerk-based authentication flow:</p>
  
  ![Authentication Flow Diagram](/auth-flow-clerk.png)
  </section>

  <section>
    <h2>🚀 Getting Started</h2>
    <p>Install dependencies and run the development server:</p>
    <pre><code>npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev</code></pre>
    <p>Then open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser to see the app.</p>
  </section>

  <section>
    <h2>📁 File Structure</h2>
    <ul>
      <li><code>app/</code>: Next.js App Router pages</li>
      <li><code>components/</code>: Reusable UI components (Navbar, ModeToggle)</li>
      <li><code>lib/</code>: Auth utilities, Clerk setup</li>
      <li><code>public/</code>: Static assets</li>
      <li><code>styles/</code>: Global styles</li>
    </ul>
  </section>

  <section>
    <h2>🌈 Features</h2>
    <ul>
      <li>🔐 Custom login & signup pages</li>
      <li>🔒 Protected dashboard (only after auth)</li>
      <li>🎨 Interactive background inspired by kraftedx.com</li>
      <li>🌓 Light/dark mode toggle</li>
      <li>⚙️ Clerk integration with full control</li>
    </ul>
  </section>

  <section>
    <h2>🌍 Environment Variables</h2>
    <p>Create a <code>.env.local</code> file and add:</p>
    <pre><code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up</code></pre>
    <p>Find keys on the <a href="https://dashboard.clerk.com" target="_blank">Clerk dashboard</a>.</p>
  </section>

  <section>
    <h2>📚 Learn More</h2>
    <ul>
      <li><a href="https://nextjs.org/docs" target="_blank">Next.js Documentation</a></li>
      <li><a href="https://clerk.com/docs" target="_blank">Clerk Docs</a></li>
      <li><a href="https://nextjs.org/docs/app/building-your-application/deploying" target="_blank">Deployment Guide</a></li>
    </ul>
  </section>

  <section>
    <h2>▲ Deploy on Vercel</h2>
    <p>Deploy with ease on <a href="https://vercel.com" target="_blank">Vercel</a>:</p>
    <a href="https://vercel.com/import">
      <img src="https://vercel.com/button" alt="Deploy with Vercel" />
    </a>
  </section>
