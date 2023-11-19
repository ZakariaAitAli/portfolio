'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@nextui-org/button'
import { Switch } from '@nextui-org/react'

import { Sun, Moon } from '@geist-ui/react-icons'

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    return (
        <Switch
            defaultSelected
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <Moon color="black" />
                ) : (
                    <Sun color="black" />
                )
            }
            aria-label="Theme Switch"
        >
            Dark mode
        </Switch>
    )
}