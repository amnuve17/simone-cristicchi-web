'use client'

import React from 'react';
import Image from 'next/image'
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react'

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), []);

    if (!mounted) return(
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={30}
            height={30}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
            className="cursor-pointer"
        />
    );

    if (resolvedTheme === 'dark') {
        return <Image
            src="/assets/icona-luna.png"
            onClick={() => setTheme('light')} 
            width={25}
            height={25}
            sizes="36x36"
            alt="moon toggle"
            priority={false}
            title="moon icon"
            className="cursor-pointer"
        />
    }

    if (resolvedTheme === 'light') {
        return <Image
            src="/assets/icona-sole.png"
            onClick={() => setTheme('dark')} 
            width={30}
            height={30}
            sizes="36x36"
            alt="sun toggle"
            priority={false}
            title="sun icon"
            className="cursor-pointer"
        />
    }
}
