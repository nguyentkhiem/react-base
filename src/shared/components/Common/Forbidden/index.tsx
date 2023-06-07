import React from 'react';
import { Result, Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const Forbidden: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Result
      status="403"
      title="403"
      subTitle={t('sorry_not_allow_access_for_this_page')}
      extra={
        <>
          <Typography.Link href="/">
            <Button type="primary">{t('return')}</Button>
          </Typography.Link>
          <Button type="primary">{t('sign_in_with_another_account')}</Button>
        </>
      }
    />
  );
};

export default Forbidden;
