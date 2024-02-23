'use client'

import { useEffect, useState } from 'react'

const LanguageSwitch = () => {
  // Set the initial button label based on the current subdomain, useState is used to update the button label
  const [buttonLabel, setButtonLabel] = useState('Switch Language')

  // useEffect is used to update the button label when the component mounts
  useEffect(() => {
    const currentSubdomain = window.location.host.split('.')[0]
    setButtonLabel(currentSubdomain === 'www' ? '切换至中文' : 'Switch to English')
  }, [])

  const switchLanguage = () => {
    const { protocol, host, pathname, search, hash } = window.location
    const currentSubdomain = host.split('.')[0]
    const newSubdomain = currentSubdomain === 'www' ? 'cn' : 'www'
    const newUrl = `${protocol}//${newSubdomain}.${host
      .split('.')
      .slice(1)
      .join('.')}${pathname}${search}${hash}`

    console.log(newUrl)
    window.location.href = newUrl
  }

  return (
    <button
      aria-label="Switch Language"
      onClick={switchLanguage}
      className="font-small text-gray-500 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
    >
      {buttonLabel}
    </button>
  )
}

export default LanguageSwitch
