'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useTransition } from 'react';
import en from '../../../../public/en.svg';
import es from '../../../../public/es.svg';
import pt from '../../../../public/pt.svg';
import { usePathname, useRouter } from '../../../i18n/routing';

export default function LangToggler() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const locale = useLocale();

    function onSelectChange(newLocale: string) {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    }

    return (
        <Select disabled={isPending} onValueChange={onSelectChange} defaultValue={locale}>
            <SelectTrigger className="w-[120px] dark:bg-stone-900 bg-[#ffffff]">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="dark:bg-stone-900 bg-[#ffffff]">
                <SelectItem value="en">
                    <div className="flex items-center gap-2">
                        <Image src={en} alt="English" width={20} height={20} />
                        EN
                    </div>
                </SelectItem>
                <SelectItem value="es">
                    <div className="flex items-center gap-2">
                        <Image src={es} alt="Español" width={20} height={20} />
                        ES
                    </div>
                </SelectItem>
                <SelectItem value="pt">
                    <div className="flex items-center gap-2">
                        <Image src={pt} alt="Português" width={20} height={20} />
                        BR
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    );
}
