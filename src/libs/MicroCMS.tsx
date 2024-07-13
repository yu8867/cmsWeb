import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';
import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from '../ENV';

export type Member = {
    name: string;
    position: string;
    profile: string;
    image: MicroCMSImage;
} & MicroCMSListContent;

const Domain = MICROCMS_SERVICE_DOMAIN;
const Api = MICROCMS_API_KEY;


if (!Domain) {
    throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!Api) {
throw new Error('MICROCMS_API_KEY is required');
}

const client = createClient({
    serviceDomain: Domain,
    apiKey: Api,
});

export const getMembersList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList({
        endpoint: "members",
    });
    return listData;
};