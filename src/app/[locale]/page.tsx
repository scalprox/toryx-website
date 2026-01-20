import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations('HomePage')
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-5xl font-extrabold text-primary">{t('toryx')}</h1>
    </div>
  );
}
