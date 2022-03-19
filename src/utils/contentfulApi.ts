import { BACKGROUND, PROJECTS } from "~utils/contentfulGql";

function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `${process.env.CONTENTFUL_BASE_URL}${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then(response => response.json());
}

export function getBackground() {
  return fetchGraphQL(
    `query {
      background(id: "${process.env.CONTENTFUL_BACKGROUND_ID}") {
        ${BACKGROUND}
      }
    }
    `,
  );
}

export function getAllProjects() {
  return fetchGraphQL(
    `query {
      projectsCollection {
        items {
          ${PROJECTS}
        }
      }
    }
    `,
  );
}
