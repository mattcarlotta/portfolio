const { INSTAGING } = process.env;

module.exports = api => {
  const INPRODUCTION = api.env("production");
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: [
      "next/babel",
      [
        "@emotion/babel-preset-css-prop",
        {
          labelFormat: "[filename]",
        },
      ],
    ],
    plugins: [
      INPRODUCTION &&
        !INSTAGING && [
          "react-remove-properties",
          { properties: ["data-testid"] },
        ],
    ].filter(Boolean),
  };
};
