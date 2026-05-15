export const trackPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17991619793/594ECOLVgascENGpiYND',
    });
  }
};
