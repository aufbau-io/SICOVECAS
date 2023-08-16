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
  }
  projectCollection {
    items{
      title
      subTitle
      location
      year
      keyImage {
        url(transform: {
          format: AVIF,
          width: 1440
        })
      }
    }
  }
  wallsCollection {
    items {
      title
      body
      image {
        url(transform: {
          format: AVIF,
          width: 1440
        })    
      }
    }
  }
  shopCollection {
    items {
      title
      isSold
      dimensions
      medium
      year
      imageCollection {
        items {
          url(transform: {
            format: AVIF,
            width: 1440
          })
        }         
      }
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

	let long_text = data.essenceCollection.items[0];
	parse_spaces(long_text.himText);

	return {
		essence: data.essenceCollection.items[0],
		projects: data.projectCollection.items,
		walls: data.wallsCollection.items,
		shop: data.shopCollection.items
	};
}
