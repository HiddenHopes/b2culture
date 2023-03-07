import { useTranslation } from 'react-i18next';
import Card from '../../Components/Card/Card';
export default function Services () {
    const {t} = useTranslation();
    return (
        <div>
            <Card padding={10} description={t('service_description')} title={"Our Services"}/>
        </div>
    );
}