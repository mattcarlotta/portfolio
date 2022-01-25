/* istanbul ignore file */
export type Exploration = {
  title: string;
  href: string;
  description: string;
  src: string;
  alt: string;
  ariaLabel: string;
};

const Explorations: Array<Exploration> = [
  {
    title: "drag & drop between lists",
    href: "ttmj3",
    description: "An example of dragging and dropping an item between lists.",
    src: "explorations/dragdrop/dragDropBetweenLists",
    alt: "An example of dragging and dropping an item between lists.",
    ariaLabel:
      "Navigate to the Drag and Drop Between Lists example codesandbox page",
  },
  {
    title: "fetching data custom hook",
    href: "8lby0",
    description: "An example of fetching data through a custom hook.",
    src: "explorations/custom-hook/fetchingDataCustomHook",
    alt: "An example of fetching data through a custom hook.",
    ariaLabel:
      "Navigate to the Fetching Data Custom Hook example codesandbox page",
  },
  {
    title: "crud securities list",
    href: "0kcxo",
    description:
      "An example of adding, updating and removing securities from a list.",
    src: "explorations/securities/addRemoveSecuritiesList",
    alt: "An example of adding, updating and removing securities from a list.",
    ariaLabel:
      "Navigate to the C.R.U.D. Securities List example codesandbox page",
  },
  {
    title: "dynamic field creation",
    href: "qm96vv8z9",
    description: "An example of adding and removing form fields.",
    src: "explorations/field-creation/dynamicFieldCreation",
    alt: "An example of adding and removing form fields.",
    ariaLabel:
      "Navigate to the Dynamic Field Creation example codesandbox page",
  },
  {
    title: "draggable bound to window",
    href: "k5n52xq70r",
    description: "An example of making a component bound to the window.",
    src: "explorations/bound/draggableBoundToWindow",
    alt: "An example of making a component bound to the window.",
    ariaLabel:
      "Navigate to the Draggable Bound to Window example codesandbox page",
  },
  {
    title: "formik with ant design",
    href: "4x47oznvvx",
    description: "An example of integrating Formik with Ant Design.",
    src: "explorations/fad/formikAntDesign",
    alt: "An example of integrating Formik with Ant Design.",
    ariaLabel: "Navigate to the Form with Ant Design example codesandbox page",
  },
  {
    title: "react router anchor link",
    href: "fglet",
    description: "An example of creating a react router anchor link.",
    src: "explorations/anchor/reactRouterAnchorLink",
    alt: "An example of creating a react router anchor link.",
    ariaLabel:
      "Navigate to the React Router Anchor Link example codesandbox page",
  },
  {
    title: "dropzone redux form",
    href: "m58q8l054x",
    description: "An example of integrating DropZone with Redux Form.",
    src: "explorations/dzrf/dropzoneReduxForm",
    alt: "An example of integrating DropZone with Redux Form.",
    ariaLabel: "Navigate to the DropZone Redux Form example codesandbox page",
  },
  {
    title: "custom image transition",
    href: "6lmv669kz",
    description: "An example of fading an image into another image.",
    src: "explorations/transition/customImageTransition",
    alt: "An example of fading an image into another image.",
    ariaLabel:
      "Navigate to the Custom Image Transition example codesandbox page",
  },
  {
    title: "custom select",
    href: "w72k49nn27",
    description: "An example of a custom select component.",
    src: "explorations/select/customSelect",
    alt: "An example of a custom select component.",
    ariaLabel: "Navigate to the Custom Select example codesandbox page",
  },
  {
    title: "custom sidebar",
    href: "nli0j",
    description: "An example of a custom sidebar component.",
    src: "explorations/sidebar/customSidebar",
    alt: "An example of a custom sidebar component.",
    ariaLabel: "Navigate to the Custom Sidebar example codesandbox page",
  },
  {
    title: "custom victory chart",
    href: "x5xon",
    description: "An example of a custom victory chart component.",
    src: "explorations/chart/customChart",
    alt: "An example of a custom victory chart component.",
    ariaLabel: "Navigate to the Custom Victory Chart example codesandbox page",
  },
  {
    title: "antd tiny upload",
    href: "8zkz2vn4kj",
    description: "An example of a tiny Antd upload form.",
    src: "explorations/upload/antdUploadForm",
    alt: "An example of a tiny Antd upload form.",
    ariaLabel: "Navigate to the Tiny Antd Upload Form example codesandbox page",
  },
  {
    title: "react ralculator",
    href: "rr8lc",
    description: "An example of a react calculator.",
    src: "explorations/calc/reactCalculator",
    alt: "An example of a react calculator.",
    ariaLabel: "Navigate to the React Calculator example codesandbox page",
  },
  {
    title: "custom input",
    href: "xgbhe",
    description: "An example of a custom input with an icon.",
    src: "explorations/input/customInput",
    alt: "An example of a custom input with an icon.",
    ariaLabel: "Navigate to the Custom Input example codesandbox page",
  },
  {
    title: "blog example",
    href: "o13bo",
    description: "An example of a blog with a read more button integration.",
    src: "explorations/blog/blogExample",
    alt: "An example of a blog with a read more button integration.",
    ariaLabel: "Navigate to the Blog example codesandbox page",
  },
  {
    title: "form validation",
    href: "2pyoxy7nr0",
    description: "An example of a form with field level validations.",
    src: "explorations/validation/formValidation",
    alt: "An example of a form with field level validations.",
    ariaLabel: "Navigate to the Form Validation example codesandbox page",
  },
  {
    title: "switching themes",
    href: "l2wl3866kq",
    description: "An example of switching between themes.",
    src: "explorations/theme/switchingTheme",
    alt: "An example of switching between themes.",
    ariaLabel:
      "Navigate to the Switching Between Themes example codesandbox page",
  },
  {
    title: "custom wave skeleton",
    href: "vz9oe",
    description:
      "An example of a custom wave skeleton without 3rd party libraries.",
    src: "explorations/skeleton/customWaveSkeleton",
    alt: "An example of a custom wave skeleton without 3rd party libraries.",
    ariaLabel: "Navigate to the Custom Wave Skeleton example codesandbox page",
  },
  {
    title: "custom modal",
    href: "qbn0n",
    description: "An example of a custom modal without 3rd party libraries.",
    src: "explorations/modal/customModal",
    alt: "An example of a custom modal without 3rd party libraries.",
    ariaLabel: "Navigate to the Custom Modal example codesandbox page",
  },
  {
    title: "reusable modals",
    href: "38xjv75rlm",
    description:
      "An example of a custom reusable modal without 3rd party libraries.",
    src: "explorations/modals/reusableModals",
    alt: "An example of a custom reusable modal without 3rd party libraries.",
    ariaLabel: "Navigate to the Reusable Modals example codesandbox page",
  },
  {
    title: "custom slider",
    href: "qi7xk",
    description: "An example of a custom slider without 3rd party libraries.",
    src: "explorations/slider/customSlider",
    alt: "An example of a custom slider without 3rd party libraries.",
    ariaLabel: "Navigate to the Custom Slider example codesandbox page",
  },
  {
    title: "custom drag binding",
    href: "hm53i",
    description:
      "An example of a binding a circle to an an area without 3rd party libraries.",
    src: "explorations/drag-bind/customDragBinding",
    alt: "An example of a binding a circle to an an area without 3rd party libraries.",
    ariaLabel: "Navigate to the Custom Drag Binding example codesandbox page",
  },
  {
    title: "custom accordian",
    href: "8zkrw9jw50",
    description:
      "An example of a custom accordian without 3rd party libraries.",
    src: "explorations/accordian/customAccordian",
    alt: "An example of a custom accordian without 3rd party libraries.",
    ariaLabel: "Navigate to the Custom Accordian example codesandbox page",
  },
  {
    title: "custom timeline",
    href: "xd3zz",
    description: "An example of a dynamically creating a timeline of items.",
    src: "explorations/timeline/customTimeline",
    alt: "An example of a dynamically creating a timeline of items.",
    ariaLabel:
      "Navigate to the Custom Timeline Component example codesandbox page",
  },
];

export default Explorations;
