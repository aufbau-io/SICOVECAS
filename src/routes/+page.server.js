import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/functions/contentful-fetch';

const query = `
{
  essenceCollection {
    items {
      homeSubTitle
      homePhoto {
        url(transform: {
          format: AVIF
        })
      }
    }
  }
}
`;

export async function load() {
	const response = await contentfulFetch(query);

	if (!response.ok) {
		throw error(404, {
			message: response.statusText
		});
	}

	const { data } = await response.json();
	const { items } = data.essenceCollection;

	return items[0];
}