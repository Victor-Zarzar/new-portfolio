import type { GetProjectsParams, Project } from '@/app/shared/types/main';
import AndroidIcon from '@/app/shared/ui/icons/projects/android';
import AndroidStudioIcon from '@/app/shared/ui/icons/projects/androidstudio';
import DartIcon from '@/app/shared/ui/icons/projects/dart';
import DockerIcon from '@/app/shared/ui/icons/projects/docker';
import FlutterIcon from '@/app/shared/ui/icons/projects/flutter';
import HtmlIcon from '@/app/shared/ui/icons/projects/html';
import IosIcon from '@/app/shared/ui/icons/projects/ios';
import NextjsIcon from '@/app/shared/ui/icons/projects/nextjs';
import ReactIcon from '@/app/shared/ui/icons/projects/react';
import TailwindIcon from '@/app/shared/ui/icons/projects/tailwindcss';
import TypescriptIcon from '@/app/shared/ui/icons/projects/typescript';
import XcodeIcon from '@/app/shared/ui/icons/projects/xcode';
import type { ReactNode } from 'react';
import { DockerComposeIcon } from '../ui/icons/projects/docker-compose';
import { FastAPIIcon } from '../ui/icons/projects/fastapi';
import { PandasIcon } from '../ui/icons/projects/pandas';
import { PythonIcon } from '../ui/icons/projects/python';
import { ReportLabIcon } from '../ui/icons/projects/reportlab';

export const getProjectsData = ({ t }: GetProjectsParams): Project[] => [
    {
        title: t('projecttitle8'),
        description: (
            <Description text={t('projectdescription8')}>
                <FlutterIcon />
                <DartIcon />
                <AndroidIcon />
                <IosIcon />
                <XcodeIcon />
                <AndroidStudioIcon />
            </Description>
        ),
        photo: '/ctlxpj.png',
        sourceCodeLink: 'https://github.com/Victor-Zarzar/cltvspj',
        sourceLinkPrivacy: 'privacypolicy-apps',
        androidLink: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID',
        iosLink: 'https://apps.apple.com/us/app/YOUR_APP_ID',
        webLink: '',
    },
    {
        title: t('projecttitle7'),
        description: (
            <Description text={t('projectdescription7')}>
                <FlutterIcon />
                <DartIcon />
                <AndroidIcon />
                <IosIcon />
                <XcodeIcon />
                <AndroidStudioIcon />
            </Description>
        ),
        photo: '/pdf-reader.png',
        sourceCodeLink: 'https://github.com/Victor-Zarzar/pdf-reader',
        sourceLinkPrivacy: 'privacypolicy-apps',
        androidLink: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID',
        iosLink: 'https://apps.apple.com/us/app/YOUR_APP_ID',
        webLink: '',
    },
    {
        title: t('projecttitle1'),
        description: (
            <Description text={t('projectdescription1')}>
                <FlutterIcon />
                <DartIcon />
                <AndroidIcon />
                <IosIcon />
                <XcodeIcon />
                <AndroidStudioIcon />
            </Description>
        ),
        photo: '/gasoline.png',
        sourceCodeLink: 'https://github.com/Victor-Zarzar/alcool_ou_gasolina.git',
        sourceLinkPrivacy: 'privacypolicy-apps',
        androidLink: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID',
        iosLink: 'https://apps.apple.com/us/app/YOUR_APP_ID',
        webLink: '',
    },
    {
        title: t('projecttitle2'),
        description: (
            <Description text={t('projectdescription2')}>
                <HtmlIcon />
                <ReactIcon />
                <TypescriptIcon />
                <TailwindIcon />
                <NextjsIcon />
                <DockerIcon />
            </Description>
        ),
        photo: '/lawfirm.png',
        sourceCodeLink: 'https://github.com/Victor-Zarzar/law-firm',
        sourceLinkPrivacy: 'privacypolicy',
        androidLink: '',
        iosLink: '',
        webLink: 'https://advocaciabaptista.vercel.app',
    },
    {
        title: t('projecttitle3'),
        description: (
            <Description text={t('projectdescription3')}>
                <FastAPIIcon />
                <PythonIcon />
                <ReportLabIcon />
                <PandasIcon />
                <DockerIcon />
                <DockerComposeIcon />
            </Description>
        ),
        photo: '/task-track.png',
        sourceCodeLink: 'https://github.com/Victor-Zarzar/task-tracker-api',
        sourceLinkPrivacy: 'privacypolicy',
        androidLink: '',
        iosLink: '',
        webLink: '',
    },
    {
        title: t('projecttitle4'),
        description: (
            <Description text={t('projectdescription4')}>
                <FlutterIcon />
                <DartIcon />
                <AndroidIcon />
                <IosIcon />
                <XcodeIcon />
                <AndroidStudioIcon />
            </Description>
        ),
        photo: '/agepet.png',
        sourceCodeLink: 'https://github.com/Victor-Zarzar/age-pet',
        sourceLinkPrivacy: 'privacypolicy-apps',
        androidLink: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID',
        iosLink: 'https://apps.apple.com/us/app/YOUR_APP_ID',
        webLink: '',
    },
    {
        title: t('projecttitle5'),
        description: (
            <Description text={t('projectdescription5')}>
                <HtmlIcon />
                <ReactIcon />
                <TypescriptIcon />
                <TailwindIcon />
                <NextjsIcon />
                <DockerIcon />
            </Description>
        ),
        photo: '/portfolio.png',
        sourceCodeLink: 'https://github.com/Victor-Zarzar/new-portfolio',
        sourceLinkPrivacy: 'privacypolicy',
        androidLink: '',
        iosLink: '',
        webLink: 'http://victorzarzar.com.br',
    },
    {
        title: t('projecttitle6'),
        description: (
            <Description text={t('projectdescription6')}>
                <FastAPIIcon />
                <PythonIcon />
                <ReportLabIcon />
                <PandasIcon />
                <DockerIcon />
                <DockerComposeIcon />
            </Description>
        ),
        photo: '/expense-report.png',
        sourceCodeLink: 'https://github.com/Victor-Zarzar/expense-report',
        sourceLinkPrivacy: 'privacypolicy',
        androidLink: '',
        iosLink: '',
        webLink: '',
    },
];

function Description({ text, children }: { text: string; children: ReactNode }) {
    return (
        <div>
            <p className="mb-3">{text}</p>
            <div className="flex space-x-2 md:space-x-2 transition-transform cursor-pointer">{children}</div>
        </div>
    );
}
