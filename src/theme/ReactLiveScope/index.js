/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { useQuery as useApolloQuery, gql } from '@apollo/client';
import { useMikro } from '../../components/mikro/mikro-types';

const useMikroQuery = (params) => {
  const { client } = useMikro()

  return useApolloQuery({ ...params, client: client })
}


// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  useMikroQuery,
  gql
};

export default ReactLiveScope;
