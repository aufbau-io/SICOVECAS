import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/functions/contentful-fetch';

const query = `
{
  essenceCollection {
    items {
      homeSubTitle
      homePhoto {
        url(transform: {
          format: AVIF,
          width: 1440
        })
      }
      himText
    }
  },
  projectCollection{
    items{
      title,
    }
  }
}
`;

let parse_spaces = (str) => {
	return str.replace(/\n/g, '<br/>');
};

export async function load() {
	const response = await contentfulFetch(query);

	if (!response.ok) {
		throw error(404, { message: response.statusText });
	}

	const { data } = await response.json();
	// const { essence } = data.essenceCollection;
	// const { projects } = data.projectsCollection;

	data.essenceCollection.items[0].himText = parse_spaces(data.essenceCollection.items[0].himText);

	const out = {
		essence: data.essenceCollection.items[0],
		projects: data.projectCollection.items
	};

	return out;
}
