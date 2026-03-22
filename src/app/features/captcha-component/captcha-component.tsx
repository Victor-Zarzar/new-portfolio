import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import env from "@/env.mjs";

export default function Captcha({
  handleVerify,
}: {
  handleVerify: (token: string) => void | Promise<void>;
}) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_PUBLIC_KEY}
    >
      <GoogleReCaptcha onVerify={handleVerify} />
    </GoogleReCaptchaProvider>
  );
}
