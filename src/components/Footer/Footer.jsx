import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Container } from 'components/Container';
import { FooterNavigation } from 'components/FooterNavigation';

import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <Container>
          <p className={style.footerText}>Choose a convenient social messenger</p>
          <ul className={style.listSocialNets}>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=996705188955&text&app_absent=0"
                className={style.linkWhatsApp}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon sx={styles.forIconWhatsApp} />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/auto_parts_kgbot"
                className={style.linkTelegram}
                target="_blank"
                rel="noreferrer"
              >
                <TelegramIcon sx={styles.forIconTelegram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/romsem.kg/"
                className={style.linkInstagram}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon sx={styles.forIconInstagram} />
              </a>
            </li>
          </ul>
          <ul className={style.contactsList}>
            <li className={style.contactsItem}>
              <a href="tel:+996705188955" className={style.contactData}>
                Phone: <span className={style.contactPhone}>+996 705 188 955</span>
              </a>
            </li>
            <li className={style.contactsItem}>
              <a href="tel:+996555188955" className={style.contactData}>
                Phone: <span className={style.contactPhone}>+996 555 188 955</span>
              </a>
            </li>
            <li className={style.contactsItem}>
              <a
                href="https://goo.gl/maps/vzh23PShy9N2ZPvy8"
                target="_blank"
                className={style.contactData}
                rel="noreferrer"
              >
                Address: Bishkek, str.Bakaeva, 126
              </a>
            </li>
          </ul>
          <FooterNavigation />
        </Container>
      </footer>
    </>
  );
};

const styles = {
  forIconWhatsApp: { fontSize: 40 },
  forIconTelegram: { fontSize: 42 },
  forIconInstagram: { fontSize: 38 },
};
