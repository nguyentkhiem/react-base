import React, { useState } from 'react';
import Permission from 'shared/components/Auth/Permission';
import { Permissions } from 'shared/definitions/auth';

export interface ICreatePostsProps {}

const CreatePosts: React.FunctionComponent = (props: ICreatePostsProps) => {
  return (
    <>
      <Permission permission={Permissions.ViewListGuest}>
        {({ access }) => (access ? <h2>Permission</h2> : <></>)}
      </Permission>
      <h2>CreatePosts</h2>
    </>
  );
};

export default CreatePosts;
