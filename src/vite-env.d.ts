/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_EMAILJS_SERVICE_ID: string;
  VITE_APP_EMAILJS_TEMPLATE_ID: string;
  VITE_APP_EMAILJS_SEND_MAIL_TO_NAME: string;
  VITE_APP_EMAILJS_SEND_MAIL_TO: string;
  VITE_APP_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
