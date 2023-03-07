import Card from '../../Components/Card/Card';
import { useTranslation } from 'react-i18next';

export default function About () {
    const {t} = useTranslation();
    return (
        <div> 
            <Card padding={10} description={t('about_description')} title={"About Us"}/>
        </div>
    );
}