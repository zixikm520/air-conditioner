import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import * as pkg from '~/../package.json'

const socialList = [
  {
    type: 'github',
    color: 'inherit',
    icon: 'i-mdi-github',
    label: 'GitHub: YunXuan',
    href: 'https://qqdgw1.gdxfsh.org/',
  },
  {
    type: 'telegram',
    color: '#1da1f2',
    icon: 'i-mdi-telegram',
    label: 'Telegram Channel',
    href: 'https://qqdgw1.gdxfsh.org/',
  },
  {
    type: 'weibo',
    color: '#DB2828',
    icon: 'i-mdi-sina-weibo',
    label: '微博：Carlos·Lu',
    href: 'https://weibo.com/u/3287963161',
  },
  {
    type: 'twitter',
    color: '#1da1f2',
    icon: 'i-mdi-twitter',
    label: 'Twitter: YunXuan',
    href: 'https://qqdgw1.gdxfsh.org/',
  },
  {
    type: 'wechat',
    color: '#1AAD19',
    icon: 'i-mdi-wechat',
    label: '微信公众号：云轩',
    href: '/',
  },
  {
    type: 'blog',
    color: '#6435C9',
    icon: 'i-mdi-earth',
    label: '博客',
    href: 'https://qqdgw1.gdxfsh.org/',
  },
]

const Copyright: React.FC = () => {
  return (
    <div className="opacity-80 text-xs text-center mt-8">
      <div className="ac-text flex justify-center items-center m-2">
        {'© '}
        <a href={pkg.repository.url} target="_blank" rel="noreferrer">
          Yun Air Conditioner
        </a>
        <a
          className="inline-flex"
          href="https://sponsors.yunyoujun.cn"
          target="_blank" rel="noreferrer"
          style={{ color: '#0078e7' }}
        >
          <div className="i-mdi-cloud text-sm mx-1" />
        </a>
        <a href={pkg.author.url} target="_blank" rel="noreferrer">
          云轩 @{pkg.author.name}
        </a>
      </div>
      <p>
        {`2019 - ${new Date().getFullYear()}`}
      </p>
      <div className="text-center">
        {socialList.map(item => (
          <Tooltip title={item.label} arrow key={item.type}>
            <IconButton
              sx={{ color: item.color }}
              href={item.href}
              target="_blank"
            >
              <div className={`${item.icon} text-lg`} />
            </IconButton>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default Copyright
