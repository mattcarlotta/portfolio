import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import OutsideLink from "~components/Navigation/OutsideLink";
import type { Document, NodeData } from "~types";

const customMarkdownOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: NodeData) => {
      const title = node.content?.[0]?.value;
      const URL = node.data?.uri;

      return (
        <OutsideLink
          showIcon
          ariaLabel={`Navigate to ${title} page`}
          href={URL}
        >
          {title}
        </OutsideLink>
      );
    },
  },
};

const ContentfulRichText = ({ json }: { json: Document }) => (
  <>{documentToReactComponents(json, customMarkdownOptions)}</>
);

export default ContentfulRichText;
