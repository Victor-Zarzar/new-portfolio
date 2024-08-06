'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GlobeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

export function SwitchLocale() {
    const localeActive = useLocale();
    const t = useTranslations('Navbar');

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="mx-auto flex">
                <Button type="button" variant="ghost" size="icon">
                    <GlobeIcon className="size-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto dark:bg-stone-900">
                <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={localeActive} onValueChange={() => {}}>
                    <DropdownMenuRadioItem value="en">
                        <Link href="/en" locale="en" legacyBehavior>
                            <a className="flex items-center">
                                <Image src="/us.png" alt="us" width={20} height={20} priority className="h-3 w-3 md:w-5 md:h-5 mr-1" />
                                {t('english')}
                            </a>
                        </Link>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="pt-br">
                        <Link href="/pt-br" locale="pt-br" legacyBehavior>
                            <a className="flex items-center">
                                <Image src="/br.png" alt="br" width={20} height={20} priority className="h-3 w-3 md:w-5 md:h-5 mr-1" />
                                {t('portuguese')}
                            </a>
                        </Link>
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}