import React, { useState } from 'react';
import style from './index.module.scss';
import { Result, Button } from 'antd';

export interface INotFoundProps {}

export function NotFound(props: INotFoundProps) {
  return (
    <div>
      <h1 className={style.errorg}>Not Found</h1>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
}
