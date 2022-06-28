import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "My New Remix App",
  description: "Kadoshi JudoKwai",
  viewport: "width=device-width,initial-scale=1",
});

// export const links: LinksFunction = () => {
  // return [{ rel: 'stylesheet', href: styles }];
// }
// 
export default function App() {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: any) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh NO!</title>
          <Meta />
          <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <div className="mb-3">
          <div className="text-3xl mb-2">Details</div>
          <div className="p-4 rounded shadow-lg border bg-rose-200 border-rosw-600">
            <div className="text-gray-700 font-bold text-xl mb-2">
             Uh oh... Sorry!!! Global Message... Something went wrong!
            </div>
              <p>{error?.message}</p>
            </div>
        </div>
        {/* {error.message} */}
        <Scripts />
      </body>
    </html>
  );
}