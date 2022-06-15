import { apiClientFactory } from '@vue-storefront/core';
import axios from 'axios';
import api from './api';

function onCreate(settings: any) {
  const client = axios.create();

  return {
    config: settings,
    client
  };
}

const { createApiClient } = apiClientFactory({
  onCreate,
  api
});

export {
  createApiClient
};
