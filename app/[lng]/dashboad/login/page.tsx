import { AppLink } from "@/ui/common/link";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Login() {
  return (
    <>
      <AppLink linkName="/dashboad"></AppLink>
      <h1>Hello, Dashboard Page!</h1>
    </>
  );
}
