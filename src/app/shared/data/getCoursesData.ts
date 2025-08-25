import { type CoursesType, GetCourseDataParams } from '@/app/shared/types/main';

export function getCoursesData({ t }: GetCourseDataParams): CoursesType[] {
    return [
        {
            id: 1,
            title: t('course1'),
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6f719ab9-4c08-4a91-8b85-f4a2a698d472.pdf',
        },
        {
            id: 2,
            title: t('course2'),
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-f24a0556-951a-47d6-b5ad-da2a2aec098c.pdf',
        },
        {
            id: 3,
            title: t('course3'),
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-b69979d5-eb7a-489c-ac9b-5edf5460fdb2.pdf?trk=public_profile_see-credential',
        },
        {
            id: 4,
            title: t('course4'),
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-35f871a3-03a6-4ff1-8461-40a467676d3a.pdf?trk=public_profile_see-credential',
        },
        {
            id: 5,
            title: t('course5'),
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-36a57d72-6415-4299-b114-3de7bde61067.pdf?trk=public_profile_see-credential',
        },
        {
            id: 6,
            title: t('course6'),
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-f23a5752-30a5-4f45-9e5d-284238eab07d.pdf?trk=public_profile_see-credential',
        },
        {
            id: 7,
            title: t('course7'),
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-9bea2790-1bf7-4ccd-90e9-8dd60f2a2f45.pdf?trk=public_profile_see-credential',
        },
    ];
}
