import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware({
  publicRoutes: [
    '/',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
    '/1.png', '/2.png', '/3.png', '4.png','5.png', '6.png', '7.png', '8.png', '9.png', '10.png',
    '/discord.png', '/notion.png', '/slack.png', '/googleDrive.png',
    '/flowgridLogo.png', '/p1.png', '/p2.png', '/p3.png', '/p4.png', '/p5.png', '/p6.png',
    '/promemberscall.png', '/temp-banner.png', '/next.svg', '/vercel.svg', '/favicon.ico'
  ],
  ignoredRoutes: [
    '/api/auth/callback/discord',
    '/api/auth/callback/notion',
    '/api/auth/callback/slack',
    '/api/flow',
    '/api/cron/wait',
    // '/src/app/favicon.ico',
    // '/public/4.png',
    // '/public/5.png',
    // '/public/6.png',
    // '/public/7.png',
    // '/public/8.png',
    // '/public/9.png',
    // '/public/10.png',
    // '/src/app/main/(pages)/dashboard',
  ],
})

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// https://www.googleapis.com/auth/userinfo.email
// https://www.googleapis.com/auth/userinfo.profile
// https://www.googleapis.com/auth/drive.activity.readonly
// https://www.googleapis.com/auth/drive.metadata
// https://www.googleapis.com/auth/drive.readonly