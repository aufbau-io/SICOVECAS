import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/functions/contentful-fetch';

const query = `
{
  essenceCollection {
    items {
      himText
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

	// replace \n with <br> tags
	// items[0].himText = items[0].himText.replace(/\n/g, '<br/>');
	// test

	return items[0];
}
