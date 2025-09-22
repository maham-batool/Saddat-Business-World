declare module 'react-google-recaptcha' {
  import * as React from 'react';

  export interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (value: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    theme?: 'light' | 'dark';
    type?: 'image' | 'audio';
    tabindex?: number;
    size?: 'compact' | 'normal' | 'invisible';
    badge?: 'bottomright' | 'bottomleft' | 'inline';
    hl?: string;
    className?: string;
  }

  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {}
}
