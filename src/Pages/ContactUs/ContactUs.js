import Card from '../../Components/Card/Card';
import { useTranslation } from 'react-i18next';

export default function ContactUs () {
    const {t} = useTranslation();
    return (
        <div> 
            <Card padding={10} description={t('contact_description')} title={"Contact Us"}/>
        </div>
    );
}