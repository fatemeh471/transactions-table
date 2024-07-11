import React from 'react';
import { CopyTwoTone, SearchOutlined } from '@ant-design/icons';
import getColumnSearchProps from '../transaction-table/tableFilter';
import ClipboardCopyButton from '../shared/ClipboardCopyButton';
import { Badge, Button } from 'antd';
import { convertPersianDate, formatCardNumber, numberWithCommas, toFarsiNumber } from '../helper/utils';
import TegaratLogo from '../assets/tejarat-logo.png'

export const transactionColumns =  () => ([
  {
    title: () => <p className='px-2'>شماره تراکنش</p>,
    dataIndex: 'trackId',
    key: 'trackId',
    ...(getColumnSearchProps('trackId') as { [key: string]: string }),
    render: (text: string) => (
      <ClipboardCopyButton value={text}>
      <div className='flex'>
        <p className='px-1'>{text}</p><CopyTwoTone />
      </div> 
     </ClipboardCopyButton>
    ),
    onHeaderCell: () => ({ className: 'flex flex-row-reverse justify-end [&>div]:flex-row-reverse ' }),
    filterIcon: () => (
      <Button type="primary" shape="default" icon={<SearchOutlined />} />
    ),
  },
  {
    title: 'وضعیت تراکنش',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => (
      <div className='flex items-center gap-1'>
        <Badge status={text ? 'success' : 'error'} />
        <p>{text ? 'پرداخت موفق' : 'پرداخت ناموفق'}</p>
      </div>

      )
  },
  {
    title: 'تاریخ پرداخت',
    dataIndex: 'paidAt',
    key: 'paidAt',
    render: (text: string) => <p> {toFarsiNumber(convertPersianDate(text))}</p>

  },
  {
    title: 'مبلغ',
    dataIndex: 'amount',
    key: 'amount',
    render: (text: string) => <p> {toFarsiNumber(numberWithCommas(text))} ریال</p>

  },
  {
    title: () => <p className='px-2'>شماره کارت</p>,
    dataIndex: 'cardNumber',
    key: 'cardNumber',
    ...(getColumnSearchProps('cardNumber') as { [key: string]: string }),
    onHeaderCell: () => ({ className: 'flex flex-row-reverse justify-end [&>div]:flex-row-reverse ' }),
    filterIcon: () => (
      <Button type="primary" shape="default" icon={<SearchOutlined />} />
    ),
    render: (text: string) => 
      <div className='flex items-center gap-1'>
      <p className='text-right ltr'> {formatCardNumber(text)}</p>
      <img src={TegaratLogo} alt="Tejarat Logo" className='w-6 h-auto opacity-30' />
    </div>
  },
])
