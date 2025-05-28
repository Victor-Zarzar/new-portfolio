'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/shared/ui/select';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useTransition } from 'react';

export default function LangToggler() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const locale = useLocale();

    const t = useTranslations('Navbar');

    const en = '/en.svg';
    const es = '/es.svg';
    const pt = '/pt.svg';

    function onSelectChange(newLocale: string) {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    }

    return (
        <Select disabled={isPending} onValueChange={onSelectChange} defaultValue={locale}>
            <SelectTrigger className="w-auto dark:bg-stone-950 bg-[#ffffff]">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="dark:bg-stone-950 bg-[#ffffff]">
                <SelectItem value="en">
                    <div className="flex items-center gap-2">
                        <Image src={en} alt="English" width={20} height={20} />
                        {t('english')}
                    </div>
                </SelectItem>
                <SelectItem value="es">
                    <div className="flex items-center gap-2">
                        <Image src={es} alt="Español" width={20} height={20} />
                        {t('spanish')}
                    </div>
                </SelectItem>
                <SelectItem value="pt">
                    <div className="flex items-center gap-2">
                        <Image src={pt} alt="Português" width={20} height={20} />
                        {t('portuguese')}
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    );
}
