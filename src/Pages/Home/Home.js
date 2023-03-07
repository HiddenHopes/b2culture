import Card from '../../Components/Card/Card';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import cardImage from '../../images/cardImage1.jpg';
import { useTranslation } from 'react-i18next';

export default function Home () {
  const {t} = useTranslation();

    return (
        <div className='row' style={{paddingLeft:'10%', paddingRight:'10%', maxWidth:'1320px', width:'100%'}}>
            <div className='col-lg-8'>
              <ImageCarousel/>
            </div>
            <div className='col-lg-4'>
              <Card image={cardImage} title={t('home_title')}/>
            </div>
        </div>
    );
}