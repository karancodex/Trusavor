import { useStore } from '../context/store';

export const useCurrency = () => {
    const { currency, currencyRates, language } = useStore();

    const formatPrice = (priceInUSD: number) => {
        const rate = currencyRates[currency] || 1;
        const converted = priceInUSD * rate;

        let locale = 'en-US';
        if (language === 'AR') locale = 'ar-AE';
        if (language === 'HI') locale = 'hi-IN';
        if (language === 'EN' && currency === 'INR') locale = 'en-IN'; // Indian English for INR

        try {
            return new Intl.NumberFormat(locale, {
                style: 'currency',
                currency: currency,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(converted);
        } catch (error) {
            // Fallback
            return `${currency} ${converted.toFixed(2)}`;
        }
    };

    return { formatPrice, currency, rate: currencyRates[currency] || 1 };
};
