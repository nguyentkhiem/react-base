import React from 'react';
import { Permissions } from 'shared/definitions/auth';
import { can } from 'shared/definitions/hooks';

interface PermissonProps {
  permission?: Permissions | Permissions[];
  id?: ID;
  children: (state: { access: boolean }) => any;
}

const Permission: React.FC<PermissonProps> = ({ permission, children }: PermissonProps) => {
  const access = can(permission);

  const renderedChildren = children({ access });

  return renderedChildren && React.Children.only(renderedChildren);
};

export default React.memo(Permission);
