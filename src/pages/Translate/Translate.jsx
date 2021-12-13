import { useTranslation } from "react-i18next";
import "./../../translations/i18n";

const Translate = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <h2>{t('title')}</h2>
      <div>{t('description.part2')}</div>
      <button type="button" onClick={() => changeLanguage('th')}>
        th
      </button>
      <button type="button" onClick={() => changeLanguage('en')}>
        en
      </button>
    </div>
  )
}
export default Translate
