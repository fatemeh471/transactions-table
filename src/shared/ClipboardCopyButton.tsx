import React, { ReactNode } from 'react';
import { notification } from 'antd';

type ClipboardCopyButtonType = {
  value: string,
  children: ReactNode 
}
const ClipboardCopyButton = ({ value, children }: ClipboardCopyButtonType) => {
  const [api, contextHolder] = notification.useNotification();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      api.success({
        message: 'کپی',
        description: 'متن با موفقیت کپی شد',
      });
    } catch (error) {
      alert(error);
    }
  };


  return (
    <div className="nds-d-flex nds-justify-end">
      {contextHolder}
      <i
        role="button"
        className="nds-icon-content_copy nds-on-surface-alt-color"
        onClick={copyToClipboard}
      >
        {children}
      </i>
    </div>
  );
};

export default ClipboardCopyButton;
