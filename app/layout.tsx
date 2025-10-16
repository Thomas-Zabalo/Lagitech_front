import { ThemeConfig } from '@/components/ThemeConfig';
import { ThemeProvider } from '@/context/ThemeContext';
import { HeroContainerStyleType, PrimaryColorType, SurfaceColorType } from '@/lib/types';
import { applyTheme } from '@/lib/utils';
import type { Metadata } from 'next';
import './fonts/fonts.css';
import './globals.css';

export const metadata: Metadata = {
    title: 'Genesis | Multipurpose Landing Template',
    description: 'Genesis, crafted by Prime, is the ultimate multipurpose landing template built with React and Next.js.',
    openGraph: {
        title: 'Genesis | Multipurpose Landing Template',
        description: 'Genesis, crafted by Prime, is the ultimate multipurpose landing template built with React and Next.js.',
        images: 'https://primefaces.org/cdn/primereact/images/templates/genesis/genesis-meta.jpg'
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const themeProps:{
        primary:PrimaryColorType;
        surface:SurfaceColorType;
        heroContainerType:HeroContainerStyleType;
    } = {
        primary: 'blue',
        surface: 'slate',
        heroContainerType: 'wide'
    };

    const primaryVariables = applyTheme({ type: 'primary', color: themeProps.primary });
    const surfaceVariables = applyTheme({ type: 'surface', color: themeProps.surface });

    return (
        <html lang="en" style={{ ...primaryVariables, ...surfaceVariables }} suppressHydrationWarning>
            <body className={`antialiased pb-6 relative`} suppressHydrationWarning>
                <ThemeProvider {...themeProps}>
                    <ThemeConfig />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
