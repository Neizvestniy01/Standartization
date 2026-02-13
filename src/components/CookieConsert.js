import CookieConsent from "react-cookie-consent";

/**
 * Компонент для отримання згоди на використання cookies
 *
 * @component
 * @returns {JSX.Element} Cookie consent
 *
 * @example
 * <MyCookieConsent />
 */
function MyCookieConsent() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Прийняти"
            declineButtonText="Відхилити"
            enableDeclineButton
            cookieName="gdprCookie">
            Ми використовуємо cookies для покращення досвіду.
        </CookieConsent>
    );
}
export default MyCookieConsent;